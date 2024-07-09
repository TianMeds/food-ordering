'use client'
import React, { useContext, useEffect, useState } from 'react'
import LandingHeader from '../_components/LandingHeader'
import { Input } from "../../components/ui/input"
import { Button } from '../../components/ui/button'
import { useSearchParams } from 'next/navigation'
import { useUser } from '@clerk/nextjs'
import { Loader } from 'lucide-react'
import { toast } from 'sonner'
import GlobalAPI from '../utils/GlobalAPI'
import { CartUpdateContext } from '../_context/CartUpdateContext'
import { PayPalButtons } from "@paypal/react-paypal-js";
import { useRouter } from 'next/navigation'
import { send } from 'process'


const Checkout = () => {
    const {user}= useUser();
    const [cart, setCart] = useState([]);
    const {updateCart, setUpdateCart} = useContext(CartUpdateContext);
    const [convenienceFee, setConvenienceFee] = useState(15);
    const [subTotal, setSubTotal] = useState(0)
    const [total, setTotal] = useState(0);
    const [userName, setUsername] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState()
    const [loading, setLoading] = useState(false)
    const router = useRouter();


    const params= useSearchParams();
    useEffect(() => {
        user&&GetUserCart()
    }, [user || updateCart])

    const GetUserCart= () => {
        GlobalAPI.getUserCart(user?.primaryEmailAddress.emailAddress).then(resp => {
            console.log(resp)
            setCart(resp?.userCarts);
            calculateTotalAmount(resp?.userCarts)
        })
    }

    const calculateTotalAmount = (cart_) => {
        let total = 0
        cart_.forEach((product) => {
            total=total+product.price;
        })
        setSubTotal(total.toFixed(2))
        setTotal(total+convenienceFee)
    }

    const addToOrder = () => {
        setLoading(true)
        const data ={
            email: user.primaryEmailAddress.emailAddress,
            orderAmount: total,
            userName: user.fullName,
            phone: phone,
        }
        GlobalAPI.CreateNewOrder(data).then(resp => {
            const resultId = resp?.createOrder.id;
                 if(resultId) {
                     cart.forEach((product) => {
                         GlobalAPI.UpdateOrderDetail(product.productName, product.price, resultId, user?.primaryEmailAddress.emailAddress).then(result => {
                             console.log(result);
                              setLoading(false)
                                toast('Order Created Succesfully')
                                 setUpdateCart(!updateCart);
                                 router.replace('/confirmation')
                         }, (error) => {
                     setLoading(false)    
                 })
                     })
                 }
         }, (error) => {
             setLoading(false)
         })
    }

    const sendEmail = async () => {
        try {
          setLoading(true);
    
          const response = await fetch('/api/send-email', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: user?.primaryEmailAddress.emailAddress }),
          });
    
          if (response.ok) {
            console.log('Email sent successfully');
            toast('Order sent succesfully')
            // Handle success
          } else {
            console.error('Error sending email');
            toast('Error sending the order')
            // Handle error
          }
        } catch (error) {
          console.error('Error:', error);
          toast("Error sending the order")
          // Handle error
        } finally {
          setLoading(false);
        }
      };
      
      
      


  return (
    <div className='m-20 mt-32'>
        <LandingHeader/>
        <h2 className='font-bold text-2xl my-5'>Checkout</h2>
        <div className='p-5 px-5 md:px-10 grid grid-cols-1 md:grid-cols-3 py-8'>
            <div className='md:col-span-2 mx-20'>
                <h2 className='font-bold text-3xl'>Billing Details</h2>
                <div className='grid grid-cols-2 gap-10 mt-3'>
                    <Input placeholder="Name" onChange={(e) => setUsername(e.target.value)} />
                    <Input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className='mt-3'>
                    <Input placeholder="Phone" onChange={(e) => setPhone(e.target.value)} />
                </div>
            </div>
            <div className='mx-10 border'>
                <h2 className='p-3 bg-gray-200 font-bold text-center'>Total Cart ({cart?.length}) </h2>
                <div className='p-4 flex flex-col gap-4'>
                    <h2 className='font-bold flex justify-between'>Subtotal: <span> ₱{subTotal} </span></h2>
                    <hr></hr>
                    <h2 className='flex justify-between'>Convenience Fee: <span>  ₱{convenienceFee} </span></h2>
                    <hr></hr>
                    <h2 className='font-bold  flex justify-between'>Total: <span> ₱{total.toFixed(2)}  </span> </h2>
                    {/* <Button onClick={() => onApprove({paymentId:123})}>Place Order</Button> */}
                    <Button className="bg-red-500 hover:bg-red-700" onClick={sendEmail} disabled={(!userName || !email || !phone) || loading}>
                       {loading ? <Loader className="animate-spin"/> : "Place Order"} 
                    </Button>
                    {total>5&& <PayPalButtons 
                     disabled={(!userName || !email || !phone) || loading}
                     style={{ layout: "horizontal" }} 
                     onApprove={addToOrder}
                     createOrder={(data, action) => {
                        return action.order.create({
                            purchase_units:[
                                {
                                    amount: {
                                        value: total.toFixed(2),
                                        currency_code: "USD"    
                                    }
                                }
                            ]
                        })
                     }}
                     />
                    }
                </div>
            </div>
        </div>

    </div>
  )
}

export default Checkout
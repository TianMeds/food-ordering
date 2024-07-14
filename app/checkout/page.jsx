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
    const [userName, setUserName] = useState(user?.fullName || '');
    const [email, setEmail] = useState(user?.primaryEmailAddress?.emailAddress || '');
    const [phone, setPhone] = useState('');
    const [loading, setLoading] = useState(false)
    const router = useRouter();
    const [phoneError, setPhoneError] = useState('');

    // Regex for Philippine phone numbers (11 digits)
    const phoneRegex = /^(\+63|0)?\d{11}$/;
  
    const handlePhoneChange = (value) => {
      setPhone(value);
      if (!phoneRegex.test(value)) {
        setPhoneError('Phone number should be 11 digits and contain only numbers.');
      } else {
        setPhoneError('');
      }
    };

    

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

            await addToOrder(); // Call addToOrder to add order details first

            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: user?.primaryEmailAddress.emailAddress,
                    userName: user?.fullName,
                    phone: phone, // Assuming phone is defined in your component's state
                    productName: cart.map((product) => product.productName).join(', '),
                    total: total.toFixed(2),
                    subTotal: subTotal,
                }),
            });

            if (response.ok) {
                console.log('Email sent successfully');
                toast('Order sent successfully');
            } else {
                console.error('Failed to send email');
                toast.error('Failed to send order');
            }
        } catch (error) {
            console.error('Error sending email:', error);
            toast.error('Error sending order');
        } finally {
            setLoading(false);
        }
    };

      
      
      


  return (
    <div className='m-4 md:m-20 mt-16 md:mt-32'>
        <LandingHeader />
        <h2 className='font-bold text-2xl my-5 text-center md:text-left'>Checkout</h2>
        <div className='p-5 md:px-10 grid grid-cols-1 md:grid-cols-3 py-8 gap-4 md:gap-10'>
            <div className='md:col-span-2 mx-5 md:mx-20'>
                <h2 className='font-bold text-3xl text-center md:text-left'>Billing Details</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10 mt-3'>
                    <Input placeholder="Name" value={userName} disabled onChange={(e) => setUserName(e.target.value)} />
                    <Input placeholder="Email" value={email} disabled onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className='mt-3'>
            <Input placeholder="Phone" value={phone} onChange={(e) => handlePhoneChange(e.target.value)} />
            {phoneError && <p className="text-sm text-red-500">{phoneError}</p>}
          </div>
            </div>
            <div className='mx-5 md:mx-10 border'>
                <h2 className='p-3 bg-gray-200 font-bold text-center'>Total Cart ({cart?.length})</h2>
                <div className='p-4 flex flex-col gap-4'>
                    <h2 className='font-bold flex justify-between'>Subtotal: <span>₱{subTotal}</span></h2>
                    <hr />
                    <h2 className='flex justify-between'>Convenience Fee: <span>₱{convenienceFee}</span></h2>
                    <hr />
                    <h2 className='font-bold flex justify-between'>Total: <span>₱{total.toFixed(2)}</span></h2>
                    <Button className="bg-red-500 hover:bg-red-700" onClick={sendEmail} disabled={(!userName || !email || !phone || phoneError) || loading}>
                        {loading ? <Loader className="animate-spin" /> : "Place Order"}
                    </Button>
                    {total > 5 && 
                    <PayPalButtons
                        disabled={(!userName || !email || !phone) || loading}
                        style={{ layout: "horizontal" }}
                        onApprove={addToOrder}
                        createOrder={(data, action) => {
                            return action.order.create({
                                purchase_units: [
                                    {
                                        amount: {
                                            value: total.toFixed(2),
                                            currency_code: "USD"
                                        }
                                    }
                                ]
                            });
                        }}
                    />}
                </div>
            </div>
        </div>
    </div>

  )
}

export default Checkout
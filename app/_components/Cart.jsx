import Image from 'next/image'
import React, {useContext} from 'react'
import { Button } from '../../components/ui/button'
import GlobalAPI from '../utils/GlobalAPI'
import { toast } from 'sonner'
import Link from 'next/link'
import { CartUpdateContext } from '../_context/CartUpdateContext'

const Cart = ({cart}) => {

    const {updateCart, setUpdateCart}=useContext(CartUpdateContext);
    const calculateCartAmount=()=> {
        let total = 0;
        cart.forEach((product) => {
            total=total+product.price;
        });
        return total.toFixed(2);
    }

    const RemoveItemCart = (id) => {
        GlobalAPI.DeleteItemFromCart(id).then(resp=>{
            console.log(resp)
            toast('Item Removed!')
            setUpdateCart(!updateCart)
        })

    }
  return (
<div>
    <h2 className='text-lg font-bold'>My Cart</h2>
    <div className='mt-5 flex flex-col gap-3'>
        {cart && cart.map((product, index) => (
            <div key={index} className='flex justify-between items-center gap-8'>
                <div className='flex items-center gap-2'>
                    <img src={product.productImage} alt={product.productName} width={40} height={40} className='h-[40px] w-[40px] rounded-lg object-cover' />
                    <h2 className='text-sm'>{product?.productName}</h2>
                </div>
                <h2 className='font-bold flex gap-2'>₱{product.price}.00</h2>
                <button className='text-red-500' onClick={() => RemoveItemCart(product.id)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-4 w-4 text-red-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        ))}
        <Link href={'/checkout'}>
        <Button className="bg-red-500 w-full">Checkout ₱{calculateCartAmount()}.00 </Button>
        </Link>
    </div>
</div>

  )
}

export default Cart
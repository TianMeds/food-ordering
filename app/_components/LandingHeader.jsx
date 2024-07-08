'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useContext, useEffect, useState } from 'react';
import { useUser, UserButton } from '@clerk/nextjs';
import { Popover, PopoverContent, PopoverTrigger } from '../../components/ui/popover';
import { CartUpdateContext } from '../_context/CartUpdateContext';
import GlobalAPI from '../utils/GlobalAPI';
import Cart from '../_components/Cart'

const LandingHeader = () => {
    const { user, isSignedIn } = useUser();
    const [cart, setCart] = useState([]);
    const {updateCart, setUpdateCart}=useContext(CartUpdateContext);

    useEffect(() => {
        console.log("Execute me");
        user&&GetUserCart()
    }, [updateCart && user])

    const GetUserCart = () => {
        GlobalAPI.getUserCart(user?.primaryEmailAddress.emailAddress).then(resp => {
            console.log(resp)
            setCart(resp.userCarts);
        })
    }

    const navigation = [
        { title: 'Home', link: '/home' },
        { title: 'About', link: '/about' },
        { title: 'Menu', link: '/menu' },
        { title: 'Book A Party', link: '/book' },
    ];

    const authLinks = [
        { title: 'Order Now', link: '/order' },
        { title: isSignedIn ? '' : 'Login', link: isSignedIn ? '' : '/sign-in' },
    ];

    const pathName = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <div>
            <div className='fixed top-0 left-0 w-full bg-white z-50 shadow-md'>
                <div className='max-w-screen-xl mx-auto h-20 flex items-center justify-between px-4'>
                    <div>
                        <img src='https://raw.githubusercontent.com/TianMeds/image--stocks-for-coding/274a634a12930720116a85d65cf5930559da76bf/G%26R%20Eatery%20Logo.svg' alt='Your Logo' className='h-20 w-20' />
                    </div>
                    {/* Hamburger menu button for mobile and tablet views */}
                    <div className='md:hidden'>
                        <button onClick={toggleMenu} className='focus:outline-none'>
                            {!isOpen ? (
                                <div className='focus:outline-none mx-4'>
                                    {/* Hamburger icon when menu is closed */}
                                    <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16m-7 6h7' />
                                    </svg>
                                </div>
                            ) : (
                                <div className='focus:outline-none mx-4'>
                                    {/* Icon or content when menu is open */}
                                </div>
                            )}
                        </button>
                    </div>
                    {/* Regular navigation for laptop view */}
                    <div className='hidden md:flex items-center gap-7 justify-center'>
                        {navigation.map((item) => (
                            <Link key={item.title} href={item.link} className={`relative group overflow-hidden ${pathName === item.link && 'text-blue-700 underline'}`}>
                                {item.title}
                                <span
                                    className={`w-full h-[1px] inline-flex absolute bottom-0 left-0 bg-black dark:bg-white -translate-x-[105%] duration-300 ${pathName === item.link ? 'bg-black dark:bg-black' : 'bg-black dark:bg-white'}`}
                                />
                            </Link>
                        ))}
                    </div>
                    <div className='md:flex items-center gap-7 justify-end hidden'>
                        {authLinks.slice(0, 1).map((item) => (
                            <Link
                                key={item.title}
                                href={item.link}
                                className={`relative group overflow-hidden ${pathName === item.link && 'text-blue-700'} ${item.title === 'Order Now' && 'rounded-lg border border-black bg-black text-white px-4 py-2'}`}
                            >
                                {item.title}
                                {pathName === item.link && (
                                    <span
                                        className={`w-full h-[1px] inline-flex absolute bottom-0 left-0 bg-black dark:bg-white -translate-x-[105%] ${pathName === item.link ? 'bg-blue-600 dark:bg-blue-600 translate-x-0' : 'bg-black dark:bg-white'}`}
                                    />
                                )}
                            </Link>
                        ))}
                        {isSignedIn && (
                            <div className='flex gap-3 items-center'>
                                <Popover>
                                    <PopoverTrigger asChild>
                                    <div className='flex gap-2 items-cemter cursor-pointer'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-7 w-7">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                        </svg>
                                        <label className='p-1 px-2 rounded-full bg-slate-200'>
                                            {cart?.length}
                                        </label>
                                    </div>
                                    </PopoverTrigger>
                                    <PopoverContent>
                                        <Cart cart={cart}/>
                                    </PopoverContent>
                                </Popover>
                                <UserButton />
                            </div>
                        )}
                        {!isSignedIn && (
                            <Link
                                href='/sign-in'
                                className={`relative group overflow-hidden ${pathName === '/sign-in' && 'text-blue-700'}`}
                            >
                                Login
                            </Link>
                        )}
                    </div>
                </div>
            </div>
            {/* Render the mobile menu if isOpen is true */}
            {isOpen && (
                <div className='md:hidden fixed inset-0 bg-gray-900 bg-opacity-90 z-50'>
                    <div className='flex flex-col justify-center items-center h-full w-full'>
                        <div className='absolute top-4 right-4'>
                            <button onClick={closeMenu} className='text-white'>
                                <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
                                </svg>
                            </button>
                        </div>
                        {navigation.concat(authLinks).map((item, index) => (
                            item.title ? (
                                <Link key={item.title} href={item.link} className={`relative group overflow-hidden ${pathName === item.link && 'text-blue-700'} text-4xl mb-2 text-white`}>
                                    {item.title}
                                    <span
                                        className={`w-full h-[1px] inline-flex absolute bottom-0 left-0 bg-black dark:bg-white -translate-x-[105%] group-hover:translate-x-0 duration-300 ${pathName === item.link ? 'bg-blue-600 dark:bg-blue-600 translate-x-0' : 'bg-black dark:bg-white'}`}
                                    />
                                </Link>
                            ) : (
                                isSignedIn && index === authLinks.length - 1 && (
                                    <div key="user-button" className='flex items-center gap-7 justify-center'>
                                        <UserButton />
                                        <Link href='/cart' className='relative'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6 text-white">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                            </svg>
                                        </Link>
                                    </div>
                                )
                            )
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default LandingHeader;

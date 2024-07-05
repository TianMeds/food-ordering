'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { useUser } from '@clerk/nextjs';

const LandingHeader = () => {
    const { user, isSignedIn } = useUser();

    const navigation = [
        { title: 'Home', link: '/home' },
        { title: 'About', link: '/about' },
        { title: 'Menu', link: '/menu' },
        { title: 'Book A Party', link: '/book' },
        { title: 'Order Now', link: '/order' },
        { title: isSignedIn ? 'My Account' : 'Login', link: isSignedIn ? '/dashboard' : '/sign-in' },
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
                        {navigation.filter(item => item.title !== 'Order Now' && item.title !== 'Login').map((item) => (
                            <Link key={item.title} href={item.link} className={`relative group overflow-hidden ${pathName === item.link && 'text-blue-700 underline'}`}>
                                {item.title}
                                <span
                                    className={`w-full h-[1px] inline-flex absolute bottom-0 left-0 bg-black dark:bg-white -translate-x-[105%] duration-300 ${pathName === item.link ? 'bg-black dark:bg-black' : 'bg-black dark:bg-white'}`}
                                />
                            </Link>
                        ))}
                    </div>
                    <div className='md:flex items-center gap-7 justify-end hidden'>
                        {navigation.slice(-2).map((item) => (
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
                        {navigation.map((item) => (
                            <Link key={item.title} href={item.link} className={`relative group overflow-hidden ${pathName === item.link && 'text-blue-700'} text-4xl mb-2 text-white`}>
                                {item.title}
                                <span
                                    className={`w-full h-[1px] inline-flex absolute bottom-0 left-0 bg-black dark:bg-white -translate-x-[105%] group-hover:translate-x-0 duration-300 ${pathName === item.link ? 'bg-blue-600 dark:bg-blue-600 translate-x-0' : 'bg-black dark:bg-white'}`}
                                />
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default LandingHeader;

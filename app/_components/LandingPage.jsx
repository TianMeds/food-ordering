'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import FeaturePage from '../_components/FeaturePage';
import Footer from '../_components/Footer'

const LandingPage = ({ images = [] }) => {
    const [slider, setSlider] = useState(0);
    const delay = 2500;
    const timeoutRef = useRef(null);

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () =>
                setSlider((prevIndex) =>
                    prevIndex === images.length - 1 ? 0 : prevIndex + 1
                ),
            delay
        );

        return () => {
            resetTimeout();
        };
    }, [slider, images.length]);

    return (

        <>

            {/*Hero Section */}
            <div className="relative w-full overflow-hidden">
                {/* Conditionally render for mobile view */}
                <div className="sm:hidden text-center pt-8 px-4 pb">
                    <h1 className="text-3xl font-bold mb-4">G & R Eatery</h1>
                    <p className="text-gray-700 text-lg">
                        Enjoy our delicious dishes and experience the taste of home!
                    </p>
                </div>

                {/* Conditionally render for desktop view */}
                <div className="hidden sm:block">
                    <div
                        className="flex transition-transform ease-linear duration-1000"
                        style={{ transform: `translate3d(${-slider * 100}%, 0, 0)` }}
                    >
                        {images.map((image, index) => (
                            <div key={index} className="w-full flex-shrink-0 relative" style={{ height: '600px' }}>
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    layout="fill"
                                    objectFit="cover"
                                    className="w-full h-full"
                                />
                            </div>
                        ))}
                    </div>

                    <br/> <br/>

                    <div className="absolute bottom-0 w-full flex justify-center mb-4">
                        {images.map((_, idx) => (
                            <div
                                key={idx}
                                className={`cursor-pointer mx-1 rounded-full w-3 h-3 ${slider === idx ? (idx === 0 ? 'bg-white' : 'bg-gray-800') : 'bg-gray-400'}`}
                                onClick={() => {
                                    setSlider(idx);
                                }}
                            ></div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Feature Section */}
            <FeaturePage/>

            {/* Footer Section */}
            <Footer/>

        </>
    );
};

export default LandingPage;

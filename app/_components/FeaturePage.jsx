'use client'

import React from 'react'

const FeaturePage = () => {

    const featureSection  = [
        {
            productImage: 'https://raw.githubusercontent.com/TianMeds/image--stocks-for-coding/main/image_2024-06-22_235538456.png',
            productName: 'G & R Sisig',
            productPrice: '₱90.00',
        },
        {
            productImage: 'https://raw.githubusercontent.com/TianMeds/image--stocks-for-coding/main/image_2024-06-22_235514099.png',
            productName: 'G & R Chicken',
            productPrice: '₱90.00',
        },
        {
            productImage: 'https://raw.githubusercontent.com/TianMeds/image--stocks-for-coding/main/image_2024-06-23_001547030.png',
            productName: 'Buffalo Wings',
            productPrice: '₱65.00',
        },
        {
            productImage: 'https://raw.githubusercontent.com/TianMeds/image--stocks-for-coding/main/image_2024-06-23_001739841.png',
            productName: 'Buttered Shrimp',
            productPrice: '₱90.00',
        },

    ]

  return (
    <>
         <div className="container mx-auto px-4 py-8">

<div className="container mx-auto px-4 py-8">
    
<div className="flex flex-col sm:flex-row justify-between gap-8 mb-8">
    <div className="sm:w-auto w-full">
        <p className="text-3xl font-semibold mb-2 sm:mb-0">Best Seller</p>
        <p className="text-sm text-gray-500 sm:hidden">We have prepared the best food for you</p>
    </div>
    <a href="/menu" className="text-white bg-blue-700 hover:bg-blue-600 dark:bg-blue-400 dark:hover:bg-blue-300 py-2 px-4 rounded-lg ml-auto ">
        View all
    </a>
</div>


    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
        {featureSection.map((product, index) => (
        <div key={index} className="bg-white border border-gray-800 rounded-lg shadow flex flex-col">
            <div className="flex-grow">
            <a href="#">
                <img className="w-full max-h-40 object-cover rounded-t-lg" src={product.productImage} alt={product.productName} />
            </a>
            </div>
            <div className="p-4 flex flex-col justify-between">
            <div>
                <h3 className="text-lg font-semibold mb-2">{product.productName}</h3>
            </div>
            <div className="flex justify-between items-center">
                <div className="text-xl font-bold text-right">{product.productPrice}</div>
            </div>
            </div>
        </div>
        ))}
    </div>
</div>
</div>
    </>
  )
}

export default FeaturePage
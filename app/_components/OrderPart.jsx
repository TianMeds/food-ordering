'use client'

import React, { useState, useContext } from 'react';
import { useUser } from '@clerk/nextjs';
import GlobalAPI  from '../utils/GlobalAPI'
import { toast } from 'sonner';
import { CartUpdateContext } from '../_context/CartUpdateContext';

const OrderNow = () => {
  const {user} = useUser();
  const [searchInput, setSearchInput] = useState('');
  const [showDropdown, setShowDropdown] = useState(false); 
  const [showCart, setShowCart] = useState(false);
  const [filters, setFilters] = useState({
    sizzling: true,
    nonSizzling: true,
  });
  const [cartItems, setCartItems] = useState([]);
  const {updateCart, setUpdateCart} = useContext(CartUpdateContext);

  const products = [
    {
      productImage: "https://raw.githubusercontent.com/TianMeds/image--stocks-for-coding/main/image_2024-06-22_235538456.png",
      productName: "G & R Sisig ",
      productDescription: "Sizzling Sisig with Java Rice and also egg included",
      productPrice: "90.00",
      bestSeller: true,
    },
    {
      productImage: "https://raw.githubusercontent.com/TianMeds/image--stocks-for-coding/main/image_2024-06-22_235514099.png",
      productName: "G & R Chicken",
      productDescription: "Sizzling Chicken with Java Rice and also egg included",
      productPrice: "90.00",
      bestSeller: true,
    },
    {
      productImage: "https://raw.githubusercontent.com/TianMeds/image--stocks-for-coding/main/image_2024-06-22_235632341.png",
      productName: "G & R Porkchop",
      productDescription: "Sizzling Porkchop with Java Rice and also egg included",
      productPrice: "85.00",
      bestSeller: true,
    },
    {
      productImage: "https://raw.githubusercontent.com/TianMeds/image--stocks-for-coding/main/image_2024-06-22_235514099.png",
      productName: "G & R Chicken & Hungarian",
      productDescription: "Sizzling Chicken with Hungarian Sausage, Java Rice and Egg",
      productPrice: "150.00",
      new: true,
    },
    {
      productImage: "https://raw.githubusercontent.com/TianMeds/image--stocks-for-coding/main/image_2024-06-23_000857650.png",
      productName: "G & R Chops & Hungarian",
      productDescription: "Sizzling Porkchop with Hungarian Sausage, Java Rice and Egg",
      productPrice: "150.00",
      new: true,
    },
    {
      productImage: "https://raw.githubusercontent.com/TianMeds/image--stocks-for-coding/main/image_2024-06-22_235632341.png",
      productName: "G & R PorkChop & Chicken",
      productDescription: "Sizzling Porkchop with Chicken, Java Rice and also egg included",
      productPrice: "165.00",
      new: true,
    },
    {
      productImage: "https://raw.githubusercontent.com/TianMeds/image--stocks-for-coding/main/image_2024-06-23_000857650.png",
      productName: "G & R Hungarian",
      productDescription: "Sizzling Hungarian with Java Rice and also egg included",
      productPrice: "90.00",
      original: true,
    },
    {
      productImage: "https://raw.githubusercontent.com/TianMeds/image--stocks-for-coding/main/image_2024-06-23_000017393.png",
      productName: "G & R Burger Steak",
      productDescription: "Sizzling Burger Steak with Java Rice and also egg included",
      productPrice: "85.00",
      original: true,
    },
    {
      productImage: "https://raw.githubusercontent.com/TianMeds/image--stocks-for-coding/main/image_2024-06-23_000208537.png",
      productName: "G & R Hotdog",
      productDescription: "Sizzling Porkchop with Java Rice and Egg",
      productPrice: "80.00",
      original: true,
    },
    {
      productImage: "https://raw.githubusercontent.com/TianMeds/image--stocks-for-coding/main/image_2024-06-23_000259005.png",
      productName: "G & R Longganisa",
      productDescription: "Sizzling Longanissa with Java Rice ",
      productPrice: "80.00",
      original: true,
    },
    {
      productImage: "https://raw.githubusercontent.com/TianMeds/image--stocks-for-coding/main/image_2024-06-23_000358772.png",
      productName: "G & R Tocino",
      productDescription: "Sizzling Tocino with Java Rice",
      productPrice: "80.00",
      original: true,
    },
    {
      productImage: "https://raw.githubusercontent.com/TianMeds/image--stocks-for-coding/main/image_2024-06-23_000530055.png",
      productName: "G & R Bangus",
      productDescription: "Sizzling Bangus with Java Rice",
      productPrice: "80.00",
      original: true,
    },
  ];
  
  const sortedProducts = products.sort((a, b) => {
    if (a.bestSeller && !b.bestSeller) {
      return -1;
    }
    if (!a.bestSeller && b.bestSeller) {
      return 1;
    }
    if (a.new && !b.new) {
      return -1;
    }
    if (!a.new && b.new) {
      return 1;
    }
    return 0;
  });

  const nonSizzlingProducts = [
    {
      productImage: "https://raw.githubusercontent.com/TianMeds/image--stocks-for-coding/main/image_2024-06-23_001500003.png",
      productName: "Pork Caldereta",
      productDescription: "This consists only of Pork Caldereta. No rice is included.",
      productPrice: "70.00",
      bestSeller: true,
    },
    {
      productImage: "https://raw.githubusercontent.com/TianMeds/image--stocks-for-coding/main/image_2024-06-23_001547030.png",
      productName: "Buffalo Wings",
      productDescription: "This consists only of Buffalo Wings. No rice is included.",
      productPrice: "65.00",
      bestSeller: true,
    },
    {
      productImage: "https://raw.githubusercontent.com/TianMeds/image--stocks-for-coding/main/image_2024-06-23_001640490.png",
      productName: "Chicken Afritada",
      productDescription: "This consists only of Chicken Afritada. No rice is included.",
      productPrice: "70.00",
      bestSeller: true,
    },
    {
      productImage: "https://raw.githubusercontent.com/TianMeds/image--stocks-for-coding/main/image_2024-06-23_001739841.png",
      productName: "Buttered Shrimp",
      productDescription: "This consists only of Buttered Shrimp. No rice is included.",
      productPrice: "90.00",
      bestSeller: true,
    },
    {
      productImage: "https://raw.githubusercontent.com/TianMeds/image--stocks-for-coding/main/image_2024-06-23_001818113.png",
      productName: "Mix Veg.",
      productDescription: "This consists only of Mix Veg. No rice is included.",
      productPrice: "65.00",
      bestSeller: true,
    },
    {
      productImage: "https://raw.githubusercontent.com/TianMeds/image--stocks-for-coding/main/image_2024-06-23_001845155.png",
      productName: "Pork Menudo",
      productDescription: "This consists only of Pork Menudo. No rice is included.",
      productPrice: "65.00",
      original: true,
    },
    {
      productImage: "https://raw.githubusercontent.com/TianMeds/image--stocks-for-coding/main/image_2024-06-23_001912010.png",
      productName: "Giniling w/Hard-Boiled Egg",
      productDescription: "This consists only of Giniling with Hard-Boiled Egg. No rice is included.",
      productPrice: "70.00",
      original: true,
    },
    {
      productImage: "https://raw.githubusercontent.com/TianMeds/image--stocks-for-coding/main/image_2024-06-23_002037222.png",
      productName: "Pork Sinigang",
      productDescription: "This consists only of Pork Sinigang. No rice is included.",
      productPrice: "70.00",
      original: true,
    },
    {
      productImage: "https://raw.githubusercontent.com/TianMeds/image--stocks-for-coding/main/image_2024-06-23_002111494.png",
      productName: "Batchoy",
      productDescription: "This consists only of Batchoy. No rice is included.",
      productPrice: "65.00",
      original: true,
    },
    {
      productImage: "https://raw.githubusercontent.com/TianMeds/image--stocks-for-coding/main/image_2024-06-23_002246571.png",
      productName: "Pork Hamonado",
      productDescription: "This consists only of Pork Hamonado. No rice is included.",
      productPrice: "75.00",
      original: true,
    },
    {
      productImage: "https://raw.githubusercontent.com/TianMeds/image--stocks-for-coding/main/image_2024-06-23_002312915.png",
      productName: "Chicken Adobo",
      productDescription: "This consists only of Chicken Adobo. No rice is included.",
      productPrice: "65.00",
      original: true,
    },
    {
      productImage: "https://raw.githubusercontent.com/TianMeds/image--stocks-for-coding/main/image_2024-06-23_002355076.png",
      productName: "Beef Caldereta",
      productDescription: "This consists only of Beef Caldereta. No rice is included.",
      productPrice: "80.00",
      original: true,
    },
    {
      productImage: "https://raw.githubusercontent.com/TianMeds/image--stocks-for-coding/main/image_2024-06-23_002441108.png",
      productName: "Ampalaya con Carne",
      productDescription: "This consists only of Ampalaya con Carne. No rice is included.",
      productPrice: "75.00",
      original: true,
    },
    {
      productImage: "https://raw.githubusercontent.com/TianMeds/image--stocks-for-coding/main/image_2024-06-23_002511896.png",
      productName: "Beef with Broccoli",
      productDescription: "This consists only of Beef with Broccoli. No rice is included.",
      productPrice: "100.00",
      original: true,
    },
    {
      productImage: "https://raw.githubusercontent.com/TianMeds/image--stocks-for-coding/main/image_2024-06-23_002609010.png",
      productName: "Beef with Oyster Sauce",
      productDescription: "This consists only of Beef with Oyster Sauce. No rice is included.",
      productPrice: "75.00",
      original: true,
    },
    {
      productImage: "https://raw.githubusercontent.com/TianMeds/image--stocks-for-coding/main/image_2024-06-23_002644998.png",
      productName: "Beef with Mushrooms",
      productDescription: "This consists only of Beef with Mushrooms. No rice is included.",
      productPrice: "80.00",
      original: true,
    },
    {
      productImage: "https://raw.githubusercontent.com/TianMeds/image--stocks-for-coding/main/image_2024-06-23_002713313.png",
      productName: "Beef Nilaga",
      productDescription: "This consists only of Beef Nilaga. No rice is included.",
      productPrice: "90.00",
      original: true,
    },
    {
      productImage: "https://raw.githubusercontent.com/TianMeds/image--stocks-for-coding/main/image_2024-06-23_002728701.png",
      productName: "Sinigang na Hipon",
      productDescription: "This consists only of Sinigang na Hipon. No rice is included.",
      productPrice: "100.00",
      original: true,
    },
    {
      productImage: "https://raw.githubusercontent.com/TianMeds/image--stocks-for-coding/main/image_2024-06-23_002820463.png",
      productName: "Tempura",
      productDescription: "This consists only of Tempura. No rice is included.",
      productPrice: "90.00",
      original: true,
    },
    {
      productImage: "https://raw.githubusercontent.com/TianMeds/image--stocks-for-coding/main/image_2024-06-23_003101081.png",
      productName: "Mix Seafood",
      productDescription: "This consists only of Mix Seafood. No rice is included.",
      productPrice: "120.00",
      original: true,
    },
    {
      productImage: "https://raw.githubusercontent.com/TianMeds/image--stocks-for-coding/main/image_2024-06-23_003041765.png",
      productName: "Chopsuey",
      productDescription: "This consists only of Chopsuey. No rice is included.",
      productPrice: "70.00",
      original: true,
    },
    {
      productImage: "https://raw.githubusercontent.com/TianMeds/image--stocks-for-coding/main/image_2024-06-23_003023460.png",
      productName: "Ampalaya",
      productDescription: "This consists only of Ampalaya. No rice is included.",
      productPrice: "35.00",
      original: true,
    },
  ];
  
  const nonSizzlingProductsFirstBestSellers = nonSizzlingProducts.sort((a, b) => {
    if (a.bestSeller && !b.bestSeller) {
      return -1;
    }
    if (!a.bestSeller && b.bestSeller) {
      return 1;
    }
    return 0;
  });

  const filteredSizzlingProducts = sortedProducts.filter(product =>
    product.productName.toLowerCase().includes(searchInput.toLowerCase())
  );

  const filteredNonSizzlingProducts = nonSizzlingProductsFirstBestSellers.filter(product =>
    product.productName.toLowerCase().includes(searchInput.toLowerCase())
  );

  const toggleFilter = (filterName) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: !prevFilters[filterName],
    }));
  };


  const addToCartHandler=(product) => {
    toast('Adding to cart');

    const data ={
      email: user?.primaryEmailAddress?.emailAddress,
      name: product?.productName,
      description: product?.productDescription,
      productImage: product?.productImage,
      price: product.productPrice
    }
    GlobalAPI.addToCart(data).then(resp => {
      console.log(resp);
      setUpdateCart(!updateCart)
      toast('Added to cart')
    },(error) => {
      toast('Error while adding into the cart')
    })
  }
  


  return (
    <div className="container mx-auto px-4 py-8 mt-20">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-semibold">Our Menu</h1>
        <div className="relative">
          <button 
            onClick={() => setShowCart(!showCart)} 
            className="relative p-2 bg-gray-200 rounded-lg hover:bg-gray-300 focus:outline-none"
          >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
              </svg>

            {cartItems.length > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full h-4 w-4 text-xs flex items-center justify-center">
                {cartItems.length}
              </span>
            )}
          </button>
          {showCart && (
        <div className="absolute right-0 mt-2 w-64 bg-white border border-gray-300 rounded-lg shadow-lg p-4 z-10">
          <h2 className="text-lg font-semibold mb-2">My Cart</h2>
          {cartItems.length === 0 ? (
            <p className="text-sm text-gray-600">Your cart is empty.</p>
          ) : (
            <div>
              <ul className="space-y-2">
                {cartItems.map(item => (
                  <li key={item.id} className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-gray-600">{item.price}</p>
                    </div>
                    <div className="flex items-center">
                      <button 
                        onClick={() => handleQuantityChange(item.id, item.quantity - 1)} 
                        className="px-2 bg-gray-200 rounded-l hover:bg-gray-300 focus:outline-none"
                      >-</button>
                      <input 
                        type="text" 
                        value={item.quantity} 
                        readOnly 
                        className="w-8 text-center border-t border-b border-gray-200 focus:outline-none"
                      />
                      <button 
                        onClick={() => handleQuantityChange(item.id, item.quantity + 1)} 
                        className="px-2 bg-gray-200 rounded-r hover:bg-gray-300 focus:outline-none"
                      >+</button>
                    </div>
                  </li>
                ))}
              </ul>
              {/* Checkout button */}
              <button 
                onClick={handleCheckout} 
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none"
              >
                Checkout
              </button>
            </div>
          )}
        </div>
      )}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-8 relative">
        <input
          type="text"
          placeholder="Search"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:border-blue-500 flex-grow"
        />
        <button
          className="p-2 bg-gray-200 rounded-lg hover:bg-gray-300 focus:outline-none"
          onClick={() => setShowDropdown(!showDropdown)}
        >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
      </svg>

        </button>
      {showDropdown && (
        <div className="absolute top-full mt-2 right-0 bg-white border border-gray-300 rounded-lg shadow-lg p-4 z-10">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="sizzling"
              checked={filters.sizzling}
              onChange={() => toggleFilter('sizzling')}
              className="mr-2"
            />
            <label htmlFor="sizzling" className="text-gray-700">Sizzling Menu</label>
          </div>
          <div className="flex items-center mt-2">
            <input
              type="checkbox"
              id="nonSizzling"
              checked={filters.nonSizzling}
              onChange={() => toggleFilter('nonSizzling')}
              className="mr-2"
            />
            <label htmlFor="nonSizzling" className="text-gray-700">Non-Sizzling Menu</label>
          </div>
        </div>
      )}
      </div>

      <div>
        {filters.sizzling && (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Sizzling</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {filteredSizzlingProducts.map((product, index) => (
                <div key={index} className="border rounded-lg p-4 flex flex-col justify-between">
                  <div>
                    <img src={product.productImage} alt={product.productName} className="w-full h-48 object-cover rounded-md mb-4"/>
                    <h3 className="text-lg font-semibold mb-2">{product.productName}</h3>
                    <p className="text-gray-600 mb-2">{product.productDescription}</p>
                    <p className="text-gray-900 font-semibold">₱ {product.productPrice}</p>
                  </div>
                  <button 
                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none cursor-pointer"
                    onClick={() => addToCartHandler(product)}
                  >
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {filters.nonSizzling && (
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">Non-Sizzling</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {filteredNonSizzlingProducts.map((product, index) => (
                <div key={index} className="border rounded-lg p-4 flex flex-col justify-between">
                  <div>
                    <img src={product.productImage} alt={product.productName} className="w-full h-48 object-cover rounded-md mb-4"/>
                    <h3 className="text-lg font-semibold mb-2">{product.productName}</h3>
                    <p className="text-gray-600 mb-2">{product.productDescription}</p>
                    <p className="text-gray-900 font-semibold">{product.productPrice}</p>
                  </div>
                  <button 
                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
                    onClick={() => addToCartHandler(product)}
                  >
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default OrderNow
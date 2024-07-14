'use client'
import React, { useState, useEffect } from 'react';
import { useUser } from '@clerk/nextjs';
import GlobalAPI from '../utils/GlobalAPI';

const Article = () => {
  const { user } = useUser(); // Ensure you're getting the correct user object
  const [totalOrders, setTotalOrders] = useState([]);
  const [totalEarnings, setTotalEarnings] = useState([]);
  const [userCount, setUserCount] = useState(0);

  useEffect(() => {
    if (user) {
        GetOrderCount();
    }
}, [user]);

const GetOrderCount = () => {
    GlobalAPI.getUserOrder(user?.primaryEmailAddress.emailAddress).then(resp => {
        console.log(resp)
        setTotalOrders(resp.orders);

        // Calculate total earnings from orders
        const earnings = resp.orders.reduce((acc, order) => acc + order.orderAmount, 0);
        setTotalEarnings(earnings);
    }).catch(error => {
        console.error('Error fetching orders:', error);
    });
};
  return (
<div className="flex flex-nowrap gap-4">
      <article 
        className="flex items-center gap-4 rounded-lg w-1/3 p-6 bg-gray-100 mt-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"
      >
        <span className="rounded-full bg-blue-100 p-3 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
        </svg>

        </span>

        <div>
          <p className="text-2xl font-medium">₱ 1,500</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">Daily Investment</p>
        </div>
      </article>

      <article 
        className="flex items-center gap-4 rounded-lg w-1/3 p-6 bg-gray-100 mt-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"
      >
        <span className="rounded-full bg-blue-100 p-3 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
        </svg>

        </span>

        <div>
          <p className="text-2xl font-medium">{totalOrders.length}</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">Total Orders</p>
        </div>
      </article>

      <article 
        className="flex items-center gap-4 rounded-lg w-1/3 p-6 bg-gray-100 mt-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"
      >
        <span className="rounded-full bg-blue-100 p-3 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
        </svg>

        </span>

        <div>
        <p className="text-2xl font-medium">₱ {totalEarnings}</p>
        <p className="text-sm text-gray-500 dark:text-gray-400">Earnings</p>
        </div>
      </article>
    </div>
  )
}

export default Article
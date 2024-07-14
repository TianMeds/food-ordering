'use client'
import React, { useState, useEffect } from 'react';
import GlobalAPI from '../utils/GlobalAPI';
import { useUser } from '@clerk/nextjs';

const OrderCard = () => {
    const { user } = useUser();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        if (user) {
            GetUserOrder();
        }
    }, [user]);

    const GetUserOrder = () => {
        GlobalAPI.getUserOrder(user?.primaryEmailAddress.emailAddress).then(resp => {
            console.log(resp)
            setOrders(resp.orders); // Assuming resp.orders is an array of orders
        }).catch(error => {
            console.error('Error fetching orders:', error);
        });
    };

    return (
        <div className="flex flex-col h-full flex-nowrap">
            <div>
                <h1 className="font-bold text-2xl mb-4">Orders</h1>
            </div>
            <div className="overflow-y-auto max-h-[400px] no-scrollbar">
            {orders
                    .slice() // Create a copy of the array to avoid mutating the original
                    .sort((a, b) => new Date(a.publishedAt) - new Date(b.publishedAt)) // Sort orders by publishedAt ascending
                    .reverse() // Reverse the array to display oldest first
                    .map((order) => (
                        <div key={order.id} className="border mb-4 p-4 rounded-lg shadow-lg">
                            <p className="text-lg font-bold">Order ID: {order.id}</p>
                            <p className="text-base">{order.orderDetail.map(item => item.name).join(', ')}</p>
                            <p className="text-sm text-gray-500">
                                {new Date(order.publishedAt).toLocaleDateString()} 
                            </p>
                            <p className="text-sm text-gray-500">
                                {order.username} - {order.phone}
                            </p>
                            <p className="text-lg font-medium mt-2"> ₱{order.orderAmount}</p>
                        </div>
            ))}
            </div>
        </div>
    );
}

export default OrderCard;

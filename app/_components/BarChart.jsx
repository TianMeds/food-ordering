'use client'
import React, { useEffect, useState } from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts/ChartsAxis';
import { useUser } from '@clerk/nextjs';
import GlobalAPI from '../utils/GlobalAPI';

const Chart = () => {
  const { user } = useUser(); // Ensure you're getting the correct user object
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
        GetOrderCount();
    }
  }, [user]);

  const GetOrderCount = () => {
    GlobalAPI.getUserOrder(user?.primaryEmailAddress.emailAddress).then(resp => {
        console.log(resp);
        setOrders(resp.orders); // Assuming resp.orders is an array of orders
    }).catch(error => {
        console.error('Error fetching orders:', error);
    });
  };

  // Function to count sizzling products for a specific month
  const countSizzlingProducts = (orders, month) => {
    return orders.filter(order => new Date(order.publishedAt).getUTCMonth() === month && isSizzlingProduct(order)).length;
  };

  // Function to count non sizzling products for a specific month
  const countNonSizzlingProducts = (orders, month) => {
    return orders.filter(order => new Date(order.publishedAt).getUTCMonth() === month && !isSizzlingProduct(order)).length;
  };

  // Function to determine if an order is a sizzling product
  const isSizzlingProduct = (order) => {
    return order.orderDetail.some(detail => detail.name.includes('G & R'));
  };

  // Prepare dataset for chart
  const dataset = [
    { month: 'Jan', SizzlingProducts: countSizzlingProducts(orders, 0), NonSizzlingProducts: countNonSizzlingProducts(orders, 0) },
    { month: 'Feb', SizzlingProducts: countSizzlingProducts(orders, 1), NonSizzlingProducts: countNonSizzlingProducts(orders, 1) },
    { month: 'Mar', SizzlingProducts: countSizzlingProducts(orders, 2), NonSizzlingProducts: countNonSizzlingProducts(orders, 2) },
    { month: 'Apr', SizzlingProducts: countSizzlingProducts(orders, 3), NonSizzlingProducts: countNonSizzlingProducts(orders, 3) },
    { month: 'May', SizzlingProducts: countSizzlingProducts(orders, 4), NonSizzlingProducts: countNonSizzlingProducts(orders, 4) },
    { month: 'Jun', SizzlingProducts: countSizzlingProducts(orders, 5), NonSizzlingProducts: countNonSizzlingProducts(orders, 5) },
    { month: 'Jul', SizzlingProducts: countSizzlingProducts(orders, 6), NonSizzlingProducts: countNonSizzlingProducts(orders, 6) },
    { month: 'Aug', SizzlingProducts: countSizzlingProducts(orders, 7), NonSizzlingProducts: countNonSizzlingProducts(orders, 7) },
    { month: 'Sep', SizzlingProducts: countSizzlingProducts(orders, 8), NonSizzlingProducts: countNonSizzlingProducts(orders, 8) },
    { month: 'Oct', SizzlingProducts: countSizzlingProducts(orders, 9), NonSizzlingProducts: countNonSizzlingProducts(orders, 9) },
    { month: 'Nov', SizzlingProducts: countSizzlingProducts(orders, 10), NonSizzlingProducts: countNonSizzlingProducts(orders, 10) },
    { month: 'Dec', SizzlingProducts: countSizzlingProducts(orders, 11), NonSizzlingProducts: countNonSizzlingProducts(orders, 11) },
  ];

  // Chart settings
  const chartSetting = {
    width: 800,
    height: 320,
    sx: {
      [`.${axisClasses.left} .${axisClasses.label}`]: {
        transform: 'translate(-20px, 0)',
      },
    },
  };

  // Value formatter function
  const valueFormatter = (value) => `${value} pcs`;

  return (
    <div className='bg-gray-100 p-4 rounded-lg shadow-md mt-10 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] w-fit'>
      <BarChart
        dataset={dataset}
        xAxis={[{ scaleType: 'band', dataKey: 'month' }]}
        series={[
          { dataKey: 'SizzlingProducts', label: 'Sizzling Products', valueFormatter },
          { dataKey: 'NonSizzlingProducts', label: 'Non Sizzling Products', valueFormatter },
        ]}
        {...chartSetting}
      />
    </div>
  );
};

export default Chart;

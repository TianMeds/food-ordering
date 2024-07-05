'use client';

// import * as Clerk from '@clerk/elements/common';
// import * as SignIn from '@clerk/elements/sign-in';

import { SignIn } from '@clerk/nextjs';

export default function Page() {
//   return (
// <>
//   <div className="bg-cover bg-center h-screen flex justify-center items-center" style={{ backgroundImage: "url('https://raw.githubusercontent.com/TianMeds/image--stocks-for-coding/fe1eba25fc9bbacf2a5df93931e08d2f331b68ca/GR%20Eatery.svg')" }}>
//     <div className="bg-white shadow-lg rounded-lg flex flex-col md:flex-row w-full max-w-4xl p-8">
//       {/* Left Side */}
//       <div className="w-full md:w-1/2 flex flex-col items-center md:items-center">
//         <div className="flex flex-col items-center md:items-start mb-4 mt-8">
//           <img src="https://raw.githubusercontent.com/TianMeds/image--stocks-for-coding/274a634a12930720116a85d65cf5930559da76bf/G%26R%20Eatery%20Logo.svg" alt="Logo" className="h-40 mb-4 md:mb-8" /> 
//         </div>
//         <h2 className="text-2xl font-bold text-gray-800 text-center md:text-left mb-4">Login to your account</h2>
//         <p className="text-gray-600 text-center md:text-left">
//           Please login to access your cart and book an order
//         </p>
//       </div>

//       {/* Right Side */}
//       <div className="w-full md:w-1/2 flex justify-center items-center h-96">
//         <SignIn.Root>
//           <SignIn.Step
//             name="start"
//             className="w-full space-y-6  bg-white px-4 py-10 sm:w-96 sm:px-8"
//           >
//             <Clerk.GlobalError className="block text-sm text-red-400" />
//             <div className="space-y-4">
//               <Clerk.Field name="identifier" className="space-y-2">
//                 <Clerk.Label className="text-sm font-medium text-zinc-950">Username</Clerk.Label>
//                 <Clerk.Input
//                   type="text"
//                   required
//                   className="w-full rounded-md bg-white px-3.5 py-2 text-sm outline-none ring-1 ring-inset ring-zinc-300 hover:ring-zinc-400 focus:ring-[1.5px] focus:ring-zinc-950 data-[invalid]:ring-red-400"
//                 />
//                 <Clerk.FieldError className="block text-sm text-red-400" />
//               </Clerk.Field>
//               <Clerk.Field name="password" className="space-y-2">
//                 <Clerk.Label className="text-sm  font-medium text-zinc-950">Password</Clerk.Label>
//                 <Clerk.Input
//                   type="password"
//                   required
//                   className="w-full rounded-md bg-white px-3.5 py-2 text-sm outline-none ring-1 ring-inset ring-zinc-300 hover:ring-zinc-400 focus:ring-[1.5px] focus:ring-zinc-950 data-[invalid]:ring-red-400"
//                 />
//                 <Clerk.FieldError className="block text-sm text-red-400" />
//               </Clerk.Field>
//             </div>
//             <SignIn.Action
//               submit
//               className="w-full rounded-md bg-zinc-950 px-3.5 py-1.5 text-center text-sm font-medium text-white shadow outline-none ring-1 ring-inset ring-zinc-950 hover:bg-zinc-800 focus-visible:outline-[1.5px] focus-visible:outline-offset-2 focus-visible:outline-zinc-950 active:text-white/70"
//             >
//               Sign In
//             </SignIn.Action>
//             <h4 className='text-center'>or</h4>
//             <Clerk.Connection
//                 name="google"
//                 className="flex w-full items-center justify-center gap-x-3 rounded-md bg-gradient-to-b from-white to-neutral-50 px-2 py-1.5 text-sm font-medium text-neutral-950 shadow outline-none ring-1 ring-black/5 hover:to-neutral-100 focus-visible:outline-offset-2 focus-visible:outline-neutral-600 active:text-neutral-950/60"
//               >
//                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" aria-hidden className="size-4">
//                   <g clipPath="url(#a)">
//                     <path
//                       fill="currentColor"
//                       d="M8.32 7.28v2.187h5.227c-.16 1.226-.57 2.124-1.192 2.755-.764.765-1.955 1.6-4.035 1.6-3.218 0-5.733-2.595-5.733-5.813 0-3.218 2.515-5.814 5.733-5.814 1.733 0 3.005.685 3.938 1.565l1.538-1.538C12.498.96 10.756 0 8.32 0 3.91 0 .205 3.591.205 8s3.706 8 8.115 8c2.382 0 4.178-.782 5.582-2.24 1.44-1.44 1.893-3.475 1.893-5.111 0-.507-.035-.978-.115-1.369H8.32Z"
//                     />
//                   </g>
//                   <defs>
//                     <clipPath id="a">
//                       <path fill="#fff" d="M0 0h16v16H0z" />
//                     </clipPath>
//                   </defs>
//                 </svg>
//                 Login with Google
//               </Clerk.Connection>
//             <p className="text-center text-sm text-zinc-500">
//               No account?{' '}
//               <a
//                 href="/sign-up"
//                 className="font-medium text-zinc-950 decoration-zinc-950/20 underline-offset-4 outline-none hover:text-zinc-700 hover:underline focus-visible:underline"
//               >
//                 Create an account
//               </a>
//             </p>
//           </SignIn.Step>
//         </SignIn.Root>
//       </div>
//     </div>
//   </div>
// </>

//   )

return <SignIn/>
}
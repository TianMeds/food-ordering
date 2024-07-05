'use client';

import * as Clerk from '@clerk/elements/common';
import * as SignUp from '@clerk/elements/sign-up';

// import { SignUp } from '@clerk/nextjs';

export default function Page() {
  return (

<>
  <div className="bg-cover bg-center h-screen flex justify-center items-center" style={{ backgroundImage: "url('https://raw.githubusercontent.com/TianMeds/image--stocks-for-coding/fe1eba25fc9bbacf2a5df93931e08d2f331b68ca/GR%20Eatery.svg')" }}>
    <div className="bg-white shadow-lg rounded-lg flex flex-col md:flex-row w-full max-w-4xl p-8">
      {/* Left Side */}
      <div className="w-full md:w-1/2 flex flex-col items-center">
        <div className="flex flex-col">
          <img src="https://raw.githubusercontent.com/TianMeds/image--stocks-for-coding/274a634a12930720116a85d65cf5930559da76bf/G%26R%20Eatery%20Logo.svg" alt="Logo" className="h-40 mb-4" /> 
        </div>
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">Be a G & R Eatery Member</h2>
        <p className="text-gray-600 text-center w-3/4">
          Please register for you to book an order and eliminate the hassle of waiting in line
        </p>
      </div>

      {/* Right Side */}
      <div className="grid w-full md:w-1/2 flex justify-center items-center px-4 sm:px-8">
        <SignUp.Root>
          <SignUp.Step
            name="start"
            className="w-full space-y-6 rounded-2xl bg-white px-4 py-10 sm:w-96"
          >
            <Clerk.GlobalError className="block text-sm text-red-400" />
            <div className="space-y-4">
              <Clerk.Field name="emailAddress" className="space-y-2">
                <Clerk.Label className="text-sm font-medium text-zinc-950">Email</Clerk.Label>
                <Clerk.Input
                  type="email"
                  required
                  className="w-full rounded-md bg-white px-3.5 py-2 text-sm outline-none ring-1 ring-inset ring-zinc-300 hover:ring-zinc-400 focus:ring-[1.5px] focus:ring-zinc-950 data-[invalid]:ring-red-400"
                />
                <Clerk.FieldError className="block text-sm text-red-400" />
              </Clerk.Field>
              <Clerk.Field name="password" className="space-y-2">
                <Clerk.Label className="text-sm font-medium text-zinc-950">Password</Clerk.Label>
                <Clerk.Input
                  type="password"
                  required
                  minLength={8}
                  className="w-full rounded-md bg-white px-3.5 py-2 text-sm outline-none ring-1 ring-inset ring-zinc-300 hover:ring-zinc-400 focus:ring-[1.5px] focus:ring-zinc-950 data-[invalid]:ring-red-400"
                />
                <Clerk.FieldError className="block text-sm text-red-400">
                  Password must be at least 8 characters long
                </Clerk.FieldError>
              </Clerk.Field>
            </div>
            <SignUp.Action
              submit
              className="w-full rounded-md bg-zinc-950 px-3.5 py-1.5 text-center text-sm font-medium text-white shadow outline-none ring-1 ring-inset ring-zinc-950 hover:bg-zinc-800 focus-visible:outline-[1.5px] focus-visible:outline-offset-2 focus-visible:outline-zinc-950 active:text-white/70"
            >
              Sign Up
            </SignUp.Action>

            <p className="text-center text-sm text-zinc-500">
              Already have an account?{' '}
              <a
                href={process.env.NEXT_PUBLIC_REDIRECT}
                className="font-medium text-zinc-950 decoration-zinc-950/20 underline-offset-4 outline-none hover:text-zinc-700 hover:underline focus-visible:underline"
              >
                Sign in
              </a>
            </p>
          </SignUp.Step>
          <SignUp.Step
            name="verifications"
            className="w-full space-y-6 rounded-2xl bg-white px-4 py-10 shadow-md ring-1 ring-black/5 sm:w-96 sm:px-8"
          >
            <header className="text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 40 40"
                className="mx-auto size-10 text-zinc-950"
                aria-hidden
              >
                <mask id="a" width="40" height="40" x="0" y="0" maskUnits="userSpaceOnUse">
                  <circle cx="20" cy="20" r="20" fill="#D9D9D9" />
                </mask>
                <g fill="currentColor" mask="url(#a)">
                  <path d="M43.5 3a.5.5 0 0 0 0-1v1Zm0-1h-46v1h46V2ZM43.5 8a.5.5 0 0 0 0-1v1Zm0-1h-46v1h46V7ZM43.5 13a.5.5 0 0 0 0-1v1Zm0-1h-46v1h46v-1ZM43.5 18a.5.5 0 0 0 0-1v1Zm0-1h-46v1h46v-1ZM43.5 23a.5.5 0 0 0 0-1v1Zm0-1h-46v1h46v-1ZM43.5 28a.5.5 0 0 0 0-1v1Zm0-1h-46v1h46v-1ZM43.5 33a.5.5 0 0 0 0-1v1Zm0-1h-46v1h46v-1ZM43.5 38a.5.5 0 0 0 0-1v1Zm0-1h-46v1h46v-1Z" />
                  <path d="M27 3.5a1 1 0 1 0 0-2v2Zm0-2h-46v2h46v-2ZM25 8.5a1 1 0 1 0 0-2v2Zm0-2h-46v2h46v-2ZM23 13.5a1 1 0 1 0 0-2v2Zm0-2h-46v2h46v-2ZM21.5 18.5a1 1 0 1 0 0-2v2Zm0-2h-46v2h46v-2ZM20.5 23.5a1 1 0 1 0 0-2v2Zm0-2h-46v2h46v-2ZM22.5 28.5a1 1 0 1 0 0-2v2Zm0-2h-46v2h46v-2ZM25 33.5a1 1 0 1 0 0-2v2Zm0-2h-46v2h46v-2ZM27 38.5a1 1 0 1 0 0-2v2Zm0-2h-46v2h46v-2Z" />
                </g>
              </svg>
              <h1 className="mt-4 text-xl font-medium tracking-tight text-zinc-950">One more step</h1>
            </header>
            <SignUp.VerificationLink />
          </SignUp.Step>
        </SignUp.Root>
      </div>
    </div>
  </div>
</>

  )
}
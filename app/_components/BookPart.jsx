'use client'
import Image from 'next/image';
import BookParty from '../../public/BookParty.svg';

const BookPart = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-wrap">
        {/* Left Column */}
        <div className="w-full md:w-1/2 pr-4">
          {/* Use Next.js Image component */}
          <div className="relative w-full" style={{ paddingTop: '100%' }}>
            <Image src={BookParty} alt="Party Image" layout="fill" objectFit="cover" />
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full md:w-1/2 pl-4">
          <h1 className="text-2xl font-bold mb-4">Book a party package</h1>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input type="text" id="name" name="name" className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
            </div>
            <div className="mb-4">
              <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">Mobile Number</label>
              <input type="text" id="mobile" name="mobile" className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" id="email" name="email" className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea id="message" name="message" rows="4" className="mt-1 p-2 border border-gray-300 rounded-md w-full"></textarea>
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Submit</button>
          </form>

          {/* Divider */}
          <hr className="my-8" />

          {/* Contact Information */}
          <div>
            <p className="text-sm sm:text-lg">Call us: +63945 23 95356</p>
            <p className="text-sm sm:text-lg">Email us at: tianmeds.business@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookPart;


"use client";

import Link from 'next/link';

// Inline SVG for WhatsApp icon
const WhatsAppIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
    className="h-6 w-6" // Adjust size as needed
    fill="currentColor"
  >
    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 .3c33.8 0 65.7 13.3 89.1 37.3 23.2 23.8 35.4 55.4 35.4 89.1s-12.3 65.3-35.4 89.1c-23.4 23.8-55.3 37.3-89.1 37.3-33.4 0-65-13.2-88.4-36.7l-6.3-5.9-66.2 17.4 17.9-64.5-5.6-6.3c-23.3-24.1-36.2-55.8-36.2-89.7C66.9 150.8 115 101 167.2 101c29.3 0 56.9 11.5 77.7 32.2l5.9 5.9c.1-.1 0 0 0 0zm-24.2 154.4c-4.4-.9-23.5-11.6-27.2-12.9s-6.4-2-9.1 2c-2.7 3.9-10.3 12.9-12.6 15.6s-4.6 3-8.8 1.1c-4.2-1.9-17.7-6.5-33.7-20.8s-26.2-32.4-29.1-38.3s-.3-9.1 1.7-11.9c1.8-2.4 3.9-6.4 5.9-8.8s3.9-4.4 6.2-7.3c2.2-2.9 1.1-5.6-.5-7.3s-9.1-21.9-12.4-29.9c-3.3-8.1-6.7-6.9-9.1-7.1s-5.6-.3-8.3-.3c-2.7 0-7.3 1.1-11.1 5.3s-14.6 14.2-14.6 34.7c0 20.5 14.9 40.2 17 43s29.4 45.1 71.2 62.6c9.9 4.1 17.5 6.6 23.4 8.4 10.1 3.1 19.2 2.6 26.4 1.6 7.9-1.1 23.5-9.6 26.8-18.9s3.3-17.2 2.3-18.9c-.9-1.8-3.3-2.9-7.1-4.8z" />
  </svg>
);

export default function WhatsAppFloat() {
  const phoneNumber = "254701694469"; // Kenyan country code (254) + number without leading 0
  const whatsappLink = `https://wa.me/${phoneNumber}`;

  return (
    <Link
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-transform duration-300 ease-in-out hover:scale-110 flex items-center justify-center space-x-2"
      aria-label="Chat on WhatsApp"
    >
      <WhatsAppIcon />
      <span className="text-sm font-medium hidden sm:inline">WhatsApp us today</span>
    </Link>
  );
}

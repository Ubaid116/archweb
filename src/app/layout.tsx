import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

// Local fonts
const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});

const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

// RootLayout Component
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>

        <header className="flex flex-col lg:flex-row lg:justify-between items-center p-6 bg-gray-100 shadow-lg"> 
          {/* Brand Logo */}
          <Image
            src="/images/brand logo.png"
            alt="Brand Logo"
            width={70}
            height={43}
            priority
          />
          
          {/* Navigation for Mobile */}
          <nav className="flex flex-col items-center space-y-3 mt-4 lg:hidden">
            <Link href="/" className="text-gray-800 text-md uppercase border-black border-t-2 border-b-2 px-4 py-2 transition">Home</Link>
            <Link href="/portfolio" className="text-gray-800 text-md uppercase hover:border-black hover:border-b-2 hover:border-t-2 px-4 py-2 transition">Portfolio</Link>
            <Link href="/works" className="text-gray-800 text-md uppercase hover:border-black hover:border-b-2 hover:border-t-2 px-4 py-2 transition">Works</Link>
            <Link href="/credentials" className="text-gray-800 text-md uppercase hover:border-black hover:border-b-2 hover:border-t-2 px-4 py-2 transition">Credentials</Link>
            <Link href="/getint" className="text-gray-800 text-md hover:border-black hover:border-b-2 hover:border-t-2 uppercase px-4 py-2 transition">Get in Touch</Link>
          </nav>
          
          {/* Navigation for Desktop */}
          <nav className="hidden lg:flex space-x-4">
            <Link href="/" className="text-gray-800 px-4 text-sm border-b-2 border-t-2 uppercase border-gray-900">Home</Link>
            <Link href="/portfolio" className="text-gray-800 px-2 text-sm uppercase hover:border-b-2 hover:border-t-2 hover:border-gray-900">Portfolio</Link>
            <Link href="/works" className="text-gray-800 px-2 text-sm uppercase hover:border-b-2 hover:border-gray-900 hover:border-t-2">Works</Link>
            <Link href="/credentials" className="text-gray-800 uppercase px-2 text-sm hover:border-b-2 hover:border-gray-900 hover:border-t-2">Credentials</Link>
            <Link href="/getint" className="text-gray-800 px-2 uppercase text-sm hover:border-b-2 hover:border-gray-900 hover:border-t-2">Get in Touch</Link>
          </nav>
        </header>

        {/* Main Content Area */}
        <main>{children}</main>

        {/* Footer Section */}
        <footer className="bg-gray-900 text-white p-6 mt-12">
          <div className="flex justify-between">
            <div>
              <h3 className="text-lg font-bold">Resources</h3>
              <ul>
                <li><Link href="/" className="hover:underline">Home</Link></li>
                <li><Link href="/portfolio" className="hover:underline">Portfolio</Link></li>
                <li><Link href="/works" className="hover:underline">Works</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold">Contact Info</h3>
              <p>1244 Example Avenue<br />Austin, TX 78704</p>
              <p>Phone: 512-555-1234</p>
              <p>Email: info@example.com</p>
            </div>
          </div>
          <div className="mt-4 text-center">
            &copy; 2024 Your Company Name. All Rights Reserved.
          </div>
        </footer>

      </body>
    </html>
  );
}

import Image from "next/image";
import Link from "next/link";
import { WalletButton } from "./WalletButton";

const Header = () => {
  return (
    <nav className="bg-white border-gray-200">
      <div className="flex flex-wrap items-center justify-between mx-auto p-4 max-w-screen-xl">
        <Link href="https://flowbite.com/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Bcate Logo"
            width={36}
            height={36}
            priority
          />

        </Link>
        <div className="flex md:order-2">
          {/* <button type="button" className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200">Sell blueprint</button> */}
          <WalletButton />
          <button data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-cta" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
        <ul className="w-full md:max-w-xl md:justify-between hidden md:flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:items-center md:space-x-8 md:mt-0 md:border-0 md:bg-white">
          <li>
            <Link href="/" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0" aria-current="page">Home</Link>
          </li>
          {/* <li>
            <Link href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">About</Link>
          </li> */}
          <li>
            <Link href="/catalog" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">Catalog</Link>
          </li>
          {/* <li>
            <Link href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0  ">Building</Link>
          </li> */}
          <li>
            <Link href="/about" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 0 ">About</Link>
          </li>
          <li>
            <Link href="/sell" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 0 ">
              <span>
                Start Selling
                <i className='bx bx-link-alt'></i>
              </span>
            </Link>
          </li>
          <li>
            <div className="inline-block md:hidden" >
              <WalletButton />
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
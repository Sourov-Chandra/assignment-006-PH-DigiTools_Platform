import { useState } from "react";
import { IoClose, IoMenu, IoCartOutline } from "react-icons/io5";

const Navbar = ({ cartCount = 0 }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = ["Products", "Features", "Pricing", "Testimonials", "FAQ"];

  return (
    <nav className="w-full bg-white border-b border-gray-100 px-6 py-3">
      <div className="container mx-auto flex items-center justify-between gap-6">
        
        <div className="text-3xl font-extrabold tracking-tight text-gray-900 font-sans shrink-0">
          <span className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
            DigiTools
          </span>
        </div>

        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href="#"
                className="text-sm text-gray-500 hover:text-gray-900 px-3 py-2 
                rounded-md transition-colors duration-150 hover:bg-gray-50"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <button className="relative p-2 text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors duration-150">
            <IoCartOutline size={20} />
            {cartCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 min-w-[17px] h-[17px] bg-blue-600 text-white text-[10px] font-semibold rounded-full flex items-center justify-center px-[3px] leading-none">
                {cartCount > 99 ? "99+" : cartCount}
              </span>
            )}
          </button>

          <a
            href="#"
            className="text-sm text-gray-500 hover:text-gray-900 transition-colors duration-150 px-1"
          >
            Log in
          </a>

          <button
            className="text-sm font-semibold text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA] hover:opacity-90 active:scale-95 transition-all 
          duration-150 px-4 py-2 rounded-full"
          >
            Get Started
          </button>
        </div>

        <button
          className="md:hidden p-2 text-gray-500 hover:bg-gray-100 rounded-md"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <IoClose size={22} /> : <IoMenu size={22} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden mt-2 pb-3 border-t border-gray-100">
          <ul className="flex flex-col mt-2">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="block text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 px-4 py-2.5 transition-colors"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-3 px-4 mt-3 pt-3 border-t border-gray-100">
            
            <button className="relative p-2 text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors">
              <IoCartOutline size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 min-w-[17px] h-[17px] bg-blue-600 text-white text-[10px] font-semibold rounded-full flex items-center justify-center px-[3px] ">
                  {cartCount > 99 ? "99+" : cartCount}
                </span>
              )}
            </button>

            <a href="#" className="text-sm text-gray-500 hover:text-gray-900">
              Log in
            </a>
            <button className="text-sm font-semibold text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA] hover:opacity-90 active:scale-95 transition-all duration-150 px-4 py-2 rounded-full">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

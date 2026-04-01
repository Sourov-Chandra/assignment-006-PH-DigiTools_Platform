import React from "react";
import { FaYoutube, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const productF = ["Features", "Pricing", "Templates", "Integrations"];
const companyF = ["About", "Blog", "Careers", "Press"]
const resourcesF = ["Documentation", "Help Center", "Community", "Contact"]

const Footer = () => {
  return (
    <footer className="w-full bg-[#0d1117] text-gray-400">
      
      <div className="container mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          
          <div className="md:col-span-1 flex flex-col gap-4">
            <h2 className="text-3xl font-extrabold text-white">DigiTools</h2>
            <p className="text-sm text-gray-400 leading-relaxed max-w-[300px]">
              Premium digital tools for creators, professionals, and businesses.
              Work smarter with our suite of powerful tools.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold text-white">Product</h3>
            <ul className="flex flex-col gap-3">
              {productF.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-150"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold text-white">Company</h3>
            <ul className="flex flex-col gap-3">
              {companyF.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-150"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold text-white">Resources</h3>
            <ul className="flex flex-col gap-3">
              {resourcesF.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-150"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold text-white">Social Links</h3>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-[#1a2332] hover:bg-[#4F39F6] flex items-center justify-center transition-colors duration-150"
              >
                <FaYoutube size={15} className="text-white" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-[#1a2332] hover:bg-[#4F39F6] flex items-center justify-center transition-colors duration-150"
              >
                <FaFacebookF size={15} className="text-white" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-[#1a2332] hover:bg-[#4F39F6] flex items-center justify-center transition-colors duration-150"
              >
                <FaXTwitter size={15} className="text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto border-t border-gray-800">
        <div className="container mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500">
            © 2026 Digitools. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {["Privacy Policy", "Terms of Service", "Cookies"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-xs text-gray-500 hover:text-white transition-colors duration-150"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

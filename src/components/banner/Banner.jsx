import React from "react";
import { FaPlay } from "react-icons/fa";
import bannerImg from '../../assets/banner.png';
import bannerIcon from '../../assets/bannerBtn1.png';

const Banner = () => {
  return (
    <section className=" w-full bg-white">
      <div className="container mx-auto px-6 py-16 flex flex-col-reverse md:flex-row items-center gap-12">
        <div className="flex-1 flex flex-col gap-6 text-center md:text-left">
          <span className="bg-[#E1E7FF] text-[#4F39F6] w-[260px] rounded-full px-3 py-2 flex justify-center items-center gap-2 mx-auto md:mx-0 ">
            <img className="w-[16px] h-[16px]" src={bannerIcon} alt="" />{" "}
            <p className="text-sm">New: AI-Powered Tools Available</p>
          </span>
          <h2 className="text-5xl md:text-7xl text-black font-extrabold">
            Supercharge Your
            <br />
            Digital Workflow
          </h2>
          <p className="text-gray-500">
            Access premium AI tools, design assets, templates, and productivity{" "}
            <br />
            software—all in one place. Start creating faster today. Explore{" "}
            <br />
            Products
          </p>
          <div className="flex flex-col sm:flex-row gap-3 items-center md:items-start">
            <button className="w-full sm:w-auto bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white px-6 py-2.5 rounded-full text-sm font-medium btn">
              Explore Products
            </button>
            <button className="w-full sm:w-auto flex gap-2 justify-center items-center px-6 py-2.5 rounded-full text-sm font-medium btn">
              <FaPlay size={10} />
              <span>Watch Demo</span>
            </button>
          </div>
        </div>

        <div className="flex-1 w-full">
          <img
            src={bannerImg}
            alt="banner image"
            className="w-auto h-[600px] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;

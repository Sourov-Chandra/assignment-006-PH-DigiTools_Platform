import React from "react";

import { FiUser, FiPackage } from "react-icons/fi";
import { HiOutlineRocketLaunch } from "react-icons/hi2";


const steps = [
  {
    number: "01",
    icon: <FiUser size={28} className="text-purple-600" />,
    title: "Create Account",
    description:
      "Sign up for free in seconds. No credit card required to get started.",
  },
  {
    number: "02",
    icon: <FiPackage size={28} className="text-purple-600" />,
    title: "Choose Products",
    description: "Browse our catalog and select the tools that fit your needs.",
  },
  {
    number: "03",
    icon: <HiOutlineRocketLaunch size={28} className="text-purple-600" />,
    title: "Start Creating",
    description: "Download and start using your premium tools immediately.",
  },
];

const Steps = () => {
  return (
    <section className="w-full bg-gray-50 py-20">
      <div className="container mx-auto px-6">
        
        <div className="flex flex-col items-center text-center gap-3 mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900">
            Get Started In 3 Steps
          </h2>
          <p className="text-sm text-gray-400">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative bg-white border border-gray-100 rounded-2xl p-8 flex flex-col items-center text-center gap-5"
            >
              
              <span className="absolute top-4 right-4 w-8 h-8 rounded-full bg-purple-600 text-white text-xs font-bold flex items-center justify-center">
                {step.number}
              </span>

              <div className="w-16 h-16 rounded-full bg-purple-50 flex items-center justify-center">
                {step.icon}
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-bold text-gray-900">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed max-w-[200px] mb-3">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;

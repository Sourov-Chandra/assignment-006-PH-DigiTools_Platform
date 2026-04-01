import React from "react";

const CTA = () => {
  return (
    <section className="w-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-20">
      <div className="container mx-auto px-6 flex flex-col items-center text-center gap-6">
        
        <h2 className="text-4xl md:text-5xl font-extrabold text-white max-w-2xl leading-tight">
          Ready To Transform Your Workflow?
        </h2>

        <p className="text-sm text-purple-200 max-w-md leading-relaxed">
          Join thousands of professionals who are already using Digitools to
          work smarter. Start your free trial today.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-3 mt-2">
          <button className="w-full sm:w-auto text-sm font-semibold text-purple-700 bg-white hover:bg-transparent hover:text-white border border-white active:scale-95 transition-all duration-150 px-6 py-3 rounded-full">
            Explore Products
          </button>
          <button className="w-full sm:w-auto text-sm font-semibold text-white bg-transparent border border-white hover:bg-white hover:text-purple-700 active:scale-95 transition-all duration-150 px-6 py-3 rounded-full">
            View Pricing
          </button>
        </div>
        
        <p className="text-xs text-purple-300 mt-1">
          14-day free trial • No credit card required • Cancel anytime
        </p>
      </div>
    </section>
  );
};

export default CTA;

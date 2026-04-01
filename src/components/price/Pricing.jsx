import React, { use } from "react";
import PricingCard from "./PricingCard";

const Pricing = ({ pricingPromise }) => {
  const plans = use(pricingPromise);

  return (
    <section className="w-full bg-white py-20">
      <div className="container mx-auto px-6">
        
        <div className="flex flex-col items-center text-center gap-3 mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900">
            Simple, Transparent Pricing
          </h2>
          <p className="text-sm text-gray-400">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;

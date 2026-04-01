import React from 'react'
import { FiCheck } from "react-icons/fi";

const PricingCard = ({ plan }) => {
  const {
    name,
    description,
    price,
    period,
    badge,
    highlighted,
    features,
    buttonText,
  } = plan;

  return (
    <div
      className={`relative flex flex-col gap-6 rounded-2xl p-8 border ${
        highlighted
          ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] border-transparent text-white"
          : "bg-[#eee] border-transparent text-white"
      } h-full`}
    >
      {badge && (
        <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-amber-100 text-amber-600 text-xs font-semibold px-4 py-1 rounded-full whitespace-nowrap">
          {badge}
        </span>
      )}

      <div className="flex flex-col gap-1 justify-center items-center">
        <h3
          className={`text-3xl font-bold ${highlighted ? "text-white" : "text-gray-900"}`}
        >
          {name}
        </h3>
        <p
          className={`text-sm ${highlighted ? "text-purple-200" : "text-gray-400"}`}
        >
          {description}
        </p>
      </div>

      <div className="flex items-end gap-1">
        <span
          className={`text-5xl font-extrabold ${highlighted ? "text-white" : "text-gray-900"}`}
        >
          ${price}
        </span>
        <span
          className={`text-sm mb-2 ${highlighted ? "text-purple-200" : "text-gray-400"}`}
        >
          /{period}
        </span>
      </div>

      <ul className="flex flex-col gap-3 flex-1">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center gap-2.5 text-sm">
            <FiCheck
              size={15}
              strokeWidth={2.5}
              className={
                highlighted ? "text-white shrink-0" : "text-purple-500 shrink-0"
              }
            />
            <span className={highlighted ? "text-purple-100" : "text-gray-600"}>
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <button
        className={`w-full py-3 rounded-full text-sm font-semibold transition-all duration-150 active:scale-95 ${
          highlighted
            ? "bg-white text-purple-600 hover:bg-purple-50"
            : "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white hover:opacity-90"
        }`}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default PricingCard
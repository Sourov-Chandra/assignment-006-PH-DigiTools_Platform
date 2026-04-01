import { FiCheck } from "react-icons/fi";
import { toast } from "react-toastify";

const tagStyles = {
  new: "bg-green-50 text-green-500",
  popular: "bg-purple-50 text-purple-500",
  "best seller": "bg-amber-50 text-amber-500",
};

const Card = ({
  product,
  onAddToCart,
  onRemoveFromCart,
  inCart,
  isCartView,
}) => {
  const {
    name,
    description,
    price,
    period,
    tag,
    tagType,
    features,
    buyNowButton,
    icon,
  } = product;

  return (
    <div className="relative flex flex-col gap-5 bg-white border border-gray-100 rounded-3xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
     
      {tag && (
        <span
          className={`absolute top-5 right-5 text-xs font-medium px-3 py-1 rounded-full capitalize ${tagStyles[tagType] || "bg-gray-100 text-gray-400"}`}
        >
          {tag}
        </span>
      )}

      <div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center">
        <img src={icon} alt={name} className="w-7 h-7 object-contain" />
      </div>

      <div className="flex flex-col gap-1.5">
        <h3 className="text-xl font-bold text-gray-900">{name}</h3>
        <p className="text-sm text-gray-400 leading-relaxed">{description}</p>
      </div>

      <div className="flex items-end gap-1">
        {price === 0 ? (
          <span className="text-3xl font-extrabold text-gray-900">Free</span>
        ) : (
          <>
            <span className="text-3xl font-extrabold text-gray-900">
              ${price}
            </span>
            <span className="text-sm text-gray-400 mb-1">
              /
              {period === "one-time"
                ? "One-Time"
                : period === "monthly"
                  ? "Mo"
                  : "Yr"}
            </span>
          </>
        )}
      </div>

      <ul className="flex flex-col gap-2.5">
        {features.map((feature, i) => (
          <li
            key={i}
            className="flex items-center gap-2.5 text-sm text-gray-600"
          >
            <FiCheck
              className="text-green-500 shrink-0"
              size={16}
              strokeWidth={2.5}
            />
            {feature}
          </li>
        ))}
      </ul>

      {isCartView ? (
        <button
            onClick={() => {
            onRemoveFromCart(product.id);
    }}
          className="mt-auto w-full text-sm font-semibold text-red-500 border border-red-200 hover:bg-red-50 active:scale-95
          transition-all duration-150 px-4 py-3 rounded-full"
        >
          Remove from Cart
        </button>
      ) : inCart ? (
        <button
          disabled
          className="mt-auto w-full text-sm font-semibold text-white bg-green-500 px-4 py-3 rounded-full cursor-not-allowed opacity-80"
        >
          ✓ Added to Cart
        </button>
      ) : (
        <button
          onClick={() => {
            onAddToCart(product);
            toast.success(`${name} added to cart!`, {
      position: "top-right",
      autoClose: 2000,
    });
          }
          }
          className="mt-auto w-full text-sm font-semibold text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA] hover:opacity-90 active:scale-95 transition-all duration-150 px-4 py-3 rounded-full"
        >
          {buyNowButton}
        </button>
      )}
    </div>
  );
};

export default Card;

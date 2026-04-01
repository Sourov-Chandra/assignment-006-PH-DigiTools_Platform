import React, { use, useState } from "react";
import Card from "../card/Card";
import { IoCartOutline } from "react-icons/io5";
import { toast } from "react-toastify";

const Products = ({ productsPromise, cart, setCart }) => {
  const products = use(productsPromise);
  const [activeTab, setActiveTab] = useState("products");

  const addToCart = (product) => {
    const already = cart.find((item) => item.id === product.id);
    if (!already) setCart([...cart, product]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <section className="w-full bg-white pt-22">
        <div className="container mx-auto px-6">
          <div className="flex flex-col justify-center items-center text-center space-y-4 mb-10">
            <h2 className="font-extrabold text-black text-4xl">Premium Digital Tools</h2>
            <p className="text-gray-400 text-sm max-w-md">
              Choose from our curated collection of premium digital products
              designed to boost your productivity and creativity.
            </p>

            <div className="flex gap-3">
              <button
                onClick={() => setActiveTab("products")}
                className={`text-sm font-medium px-5 py-2 rounded-full transition-all duration-150 ${
                  activeTab === "products"
                    ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white"
                    : "text-gray-500 hover:text-gray-800"
                }`}
              >
                Products
              </button>
              <button
                onClick={() => setActiveTab("cart")}
                className={`text-sm font-medium px-5 py-2 rounded-full transition-all duration-150 ${
                  activeTab === "cart"
                    ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white"
                    : "text-gray-500 hover:text-gray-800"
                }`}
              >
                Cart ({cart.length})
              </button>
            </div>
          </div>

          {activeTab === "products" && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {products.map((product) => (
                <Card
                  key={product.id}
                  product={product}
                  onAddToCart={addToCart}
                  inCart={!!cart.find((item) => item.id === product.id)}
                />
              ))}
            </div>
          )}

          {activeTab === "cart" && (
            <div className="max-w-2xl mx-auto">
              {cart.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-20 gap-3 text-gray-400">
                  <IoCartOutline size={60} />
                  <p className="text-sm">Your cart is empty</p>
                  <button
                    onClick={() => setActiveTab("products")}
                    className="text-sm font-medium text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA] px-5 py-2 rounded-full 
                    hover:opacity-90 transition-all"
                  >
                    Browse Products
                  </button>
                </div>
              ) : (
                <div className="flex flex-col gap-4">
                  <h3 className="text-lg font-bold text-gray-900">Your Cart</h3>

                  <div className="flex flex-col divide-y divide-gray-100">
                    {cart.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center gap-4 py-4"
                      >
                        <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center shrink-0">
                          <img
                            src={item.icon}
                            alt={item.name}
                            className="w-6 h-6 object-contain"
                          />
                        </div>

                        <div className="flex flex-col flex-1">
                          <span className="text-sm font-semibold text-gray-900">
                            {item.name}
                          </span>
                          <span className="text-xs text-gray-400">
                            {item.price === 0 ? "Free" : `$${item.price}`}
                          </span>
                        </div>

                        <button
                          onClick={() => {
                            removeFromCart(item.id);
                            toast.error(`${item.name} removed from cart!`, {
                              position: "top-right",
                              autoClose: 2000,
                            });
                          }}
                          className="text-xs font-medium text-red-400 hover:text-red-600 transition-colors"
                        >
                          Remove
                        </button>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                    <span className="text-sm text-gray-400">Total</span>
                    <span className="text-lg font-extrabold text-gray-900">
                      ${total}
                    </span>
                  </div>

                  <button
                    onClick={() => {
                    setCart([]);
                    setActiveTab("products");
                    toast.success("Order placed successfully!");
                      }}
                    className="w-full text-sm font-semibold text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA] hover:opacity-90 active:scale-95 transition-all duration-150 py-3.5 rounded-full mt-2"
                  >
                    Proceed To Checkout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Products;

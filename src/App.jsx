import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./components/banner/Banner";
import Navbar from "./components/navbar/Navbar";
import Products from "./components/products/Products";
import StatsBar from "./components/statistics/StatsBar";
import Steps from "./components/steps/Step";
import Pricing from "./components/price/Pricing";
import CTA from "./components/cta/CTA";
import Footer from "./components/footer/Footer";

const fetchProducts = async () => {
  const res = await fetch("./productData.json");
  return res.json();
};

const fetchPricing = async () => {
  const res = await fetch("./pricing.json");
  return res.json();
};

const productsPromise = fetchProducts();
const pricingPromise = fetchPricing();

function App() {
  const [cart, setCart] = useState([]);

  return (
    <>
      <header>
        <Navbar cartCount={cart.length} />
      </header>
      <main>
        <Banner />
        <StatsBar />
        <Suspense
          fallback={
            <div className="flex items-center justify-center w-full h-full">
              <span className="loading loading-ring loading-xl"></span>
            </div>
          }
        >
          <Products
            productsPromise={productsPromise}
            cart={cart}
            setCart={setCart}
          />
        </Suspense>
        <Steps />
        <Suspense
          fallback={
            <div className="flex items-center justify-center w-full h-full">
              <span className="loading loading-ring loading-xl"></span>
            </div>
          }
        >
          <Pricing pricingPromise={pricingPromise} />
        </Suspense>
        <CTA />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;

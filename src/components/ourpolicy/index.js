import React from "react";
import { assets } from "../../assets/assets";

function OurPolicy() {
  return (
    <div className="flex flex-col md:flex-row gap-12 py-20 text-center justify-around text-gray-700 max-sm:py-10">
      <div>
        <img
          src={assets.exchange_icon}
          alt="exchangeIcon"
          className="w-12 m-auto mb-5"
        />
        <p className="font-semibold text-2xl"> Easy Exchanges Policy</p>
        <p className="text-gray-600">
          We offer for hassle free exchanges policy
        </p>
      </div>
      <div>
        <img
          src={assets.quality_icon}
          alt="exchangeIcon"
          className="w-12 m-auto mb-5"
        />
        <p className="font-semibold text-2xl">7 days Return Policy </p>
        <p className="text-gray-600">
          We offer 7 days return policy for all our products
        </p>
      </div>
      <div>
        <img
          src={assets.support_img}
          alt="exchangeIcon"
          className="w-12 m-auto mb-5"
        />
        <p className="font-semibold text-2xl"> Best customer support</p>
        <p className="text-gray-600">
          We offer 24/7 customer support for all our customers
        </p>
      </div>
    </div>
  );
}

export default OurPolicy;

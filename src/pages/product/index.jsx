import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { assets, products } from "../../assets/assets";
import RelatedProduct from "../../components/relatedProduct";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../cart/cartSlice";
import { message } from "antd";

function Product() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");
  const cartItems = useSelector((state) => state.cart.cart);
  const [messageApi, contextHolder] = message.useMessage();
  useEffect(() => {
    const fetchdata = async () => {
      products.map((item) => {
        if (item.id === id) {
          setProductData(item);
          setImage(item.image[0]);
        }
      });
    };
    fetchdata();
    console.log(cartItems);
  }, [id, cartItems]);

  const handleAddCart = (e) => {
    e.preventDefault();
    if (!productData) {
      messageApi.error("Product data is not available.");
      return;
    }
    if (!size) {
      messageApi.warning("Please select a size.");
      return;
    }
    const existingItem = cartItems.find(
      (item) => item.id === productData.id && item.size === size
    );
    if (existingItem) {
      messageApi.warning("Item already exists in the cart with this size.");
      return;
    }
    const newItem = {
      id: productData.id,
      name: productData.name,
      quantity: 1,
      price: productData.price,
      size: size,
      image,
    };

    dispatch(addItem(newItem));
    messageApi.success({
      content: "successfully added to cart",
      duration: 2,
    });
  };

  return productData ? (
    <>
      {contextHolder} {/* Ensure this is rendered */}
      <div className="border-t-2 py-10 transition-opacity ease-in duration-500 opacity-100">
        <div className="flex flex-col">
          <div className="flex gap-10 max-sm:gap-5 max-sm:flex-col-reverse">
            <div className="flex w-32 sm:flex-col max-sm:overflow-x-auto justify-between sm:justify-normal gap-5 max-sm:w-[70%] max-sm:m-auto max-sm:gap-4 overflow-hidden">
              {productData.image.map((item, index) => (
                <img
                  src={item}
                  alt="images"
                  key={index}
                  className="w-full h-auto flex-shrink hover:scale-105 duration-300 transition-transform"
                  onClick={() => setImage(item)}
                />
              ))}
            </div>
            <div className="w-full h-auto flex gap-5 max-sm:flex-col max-sm:gap-2 max-sm:w-full">
              <div>
                <img src={image} alt="images" className="w-full h-full" />
              </div>
              <div className="flex-1 flex flex-col gap-2">
                <h1 className="font-medium text-2xl max-sm:text-xl">
                  {productData.name}
                </h1>
                <div className="flex items-center gap-2">
                  <img src={assets.star_icon} alt="" className="w-3.5" />
                  <img src={assets.star_icon} alt="" className="w-3.5" />
                  <img src={assets.star_icon} alt="" className="w-3.5" />
                  <img src={assets.star_icon} alt="" className="w-3.5" />
                  <img src={assets.star_dull_icon} alt="" className="w-3.5" />
                  <p className="pl-2">(122)</p>
                </div>
                <p className="text-3xl font-medium max-sm:text-2xl">
                  ${productData.price}
                </p>
                <p className="text-gray-500 tracking-tight text-xl max-sm:text-lg">
                  {productData.description}
                </p>
                <div className="flex gap-2 flex-col">
                  <p>Select size</p>
                  <div className="flex gap-2">
                    {productData.sizes.map((item, index) => (
                      <button
                        onClick={() => setSize(item)}
                        key={index}
                        className={`border-2 border-gray-300 px-3 py-1 rounded-md bg-gray-200 transition-colors ${
                          item === size ? "border-orange-300" : ""
                        }`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                  {
                    <button
                      className="bg-black text-white py-2 active:bg-gray-700 w-32 mt-3 rounded-md"
                      onClick={handleAddCart}
                    >
                      Add to Cart
                    </button>
                  }
                  <hr className="mt-4 sm-w-4/5" />
                  <div className="text-sm text-gray-500 mt-5 flex flex-col gap-2">
                    <p>100% original product</p>
                    <p>Cash on delivery available</p>
                    <p>Easy return policy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-5">
          <div className="flex">
            <p className="border px-5 py-3 text-sm">Description</p>
            <p className="border px-5 py-3 text-sm">Review (122)</p>
          </div>
          <div className="flex flex-col gap-5 border px-6 py-5 text-base max-sm:px-3 max-sm:py-3 max-sm:text-sm">
            <p>
              An e-commerce platform for online dress shopping provides a
              seamless experience for customers to explore, select, and purchase
              clothing items with ease.
            </p>
            <p>
              With secure payment methods, convenient delivery options, and
              detailed product descriptions, this platform ensures a hassle-free
              shopping journey.
            </p>
          </div>
        </div>

        <div className="mt-20">
          <RelatedProduct
            category={productData.category}
            subCategory={productData.subCategory}
          />
        </div>
      </div>
    </>
  ) : (
    <div className="opacity-0"></div>
  );
}

export default Product;

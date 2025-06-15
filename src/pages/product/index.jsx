import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../assets/assets";

function Product() {
  const { id } = useParams();
  const [productData, setProductDAta] = useState(false);
  const [image, setImage] = useState("");

  useEffect(() => {
    const fetchdata = async () => {
      products.map((item) => {
        if (item.id === id) {
          setProductDAta(item);
          setImage(item.image[0]);
          return null;
        }
      });
    };
    fetchdata();
  }, [id]);

  return productData ? (
    <div className="border-t-2 py-10 transition-opacity ease-in duration-500 opacity-100">
      <div className="flex  flex-col  ">
        <div className=" flex flex-1  gap-10 max-sm:gap-5 max-sm:flex-col-reverse">
          <div className="flex w-[20%] sm:flex-col max-sm:overflow-x-auto justify-between sm:justify-normal gap-5 flex-grow-0  max-sm:w-[70%] max-sm:m-auto max-sm:gap-4 ">
            {productData.image.map((item, index) => (
              <img src={item} alt="images" key={index} className="w-full h-full" />
            ))}
          </div>
          <div className="w-full sm:[80%]">
            <img src={image} alt="images" />
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
}

export default Product;

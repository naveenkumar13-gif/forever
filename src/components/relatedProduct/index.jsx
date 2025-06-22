import React, { useEffect, useState } from "react";
import { products } from "../../assets/assets";
import Title from "../title";
import ProductItem from "../productItem";

function RelatedProduct({ category, subCategory }) {
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      let productCopy = [...products];
      const filteredProducts = productCopy.filter(
        (item) => item.category === category && item.subCategory === subCategory
      );
      setRelatedProducts(filteredProducts.slice(0, 5));
    }
  }, [category, subCategory, products]);
  return (
    <div className="my-24">
      <div className="text-center text-3xl">
        <Title text1={"RELATED"} text2={"PRODUCTS"} />
      </div>{" "}
      <div className="grid grid-cols-5 gap-10 max-sm:grid-cols-2 max-sm:gap-5 max-sm:my-10 max-md:grid-cols-3 max-md:gap-7">
        {relatedProducts.map((item, index) => (
          <div key={index} className="my-10">
            <ProductItem
              id={item.id}
              name={item.name}
              price={item.price}
              image={item.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default RelatedProduct;

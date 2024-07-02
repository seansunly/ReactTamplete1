import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { seleteProductById } from '../product/productSlice'
import ProductCardDeail from "../../../component/card/ProductCardDeail";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../product/productSlice";
// import { seleteProductById } from "../product/productSlice";

export default function ProductDeails() {
  const param = useParams();
//   console.log(param);
  // const productById=useSelector(seleteProductById)
  const product = useSelector((state) => state?.product?.productById);
    // const product=useSelector(seleteProductById())
//   console.log("product id test it :", product);
  const dispanth = useDispatch();
  useEffect(() => {
    dispanth(fetchProductById(param.id));
  }, []);
  return (
    <>
      <p>this is product deial</p>

      <ProductCardDeail
        image={product.image}
        quantity={product.quantity}
        price={product.price}
        desc={product.desc}
        name={product.name}
        id={product.id}
      />

      {/* {product.map((productId, index) => {
        return (
          <ProductCardDeail
            key={index}
            image={productId.image}
            quantity={productId.quantity}
            price={productId.price}
            desc={productId.desc}
            name={productId.name}
            id={productId.id}
          />
        );
      })} */}

      <p>s;dkepferfe</p>
    </>
  );
}

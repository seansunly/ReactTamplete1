import { Card } from "flowbite-react";
import ProductInCard from "../../card/ProductInCard";
import { useSelector } from "react-redux";
import { seleteitems } from "../../../reducs/feature/card/cardslices";

export default function Cart() {
  const carditems = useSelector(seleteitems);
  // console.log("test card page :", carditems);
  return (
    <>
      <section className=" flex justify-center mt-5">
        <section className="max-w-sm w-1/2 bg-slate-50 p-5 rounded-md">
          <div className="mb-4 flex items-center justify-between">
            <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
              Latest Customers
            </h5>
            <button
              href="#"
              className="text-sm font-medium text-red-600 hover:underline dark:text-cyan-500"
            >
              delet all
            </button>
          </div>
          {
            carditems.map((product,index)=>{
              return (
                <ProductInCard
                  key={index}
                  desc={product.desc}
                  id={product.id}
                  image={product.image}
                  name={product.name}
                  price={product.price}
                  qty={product.qty}
                  quantity={product.quantity}
                />
              );
              

            })
          }
          
        </section>
      </section>
    </>
  );
}

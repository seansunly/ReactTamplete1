import React from 'react'
import { Card } from "flowbite-react";


export default function ProductCardDeail({ image, quantity, price, desc, name }) {
    // console.log("just tesat1 : ",quantity)
  return (
    <>
    <h1>this is product details</h1>
      <Card className="max-w-sm" horizontal>
        <img src={image} alt="" />
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {name}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {desc}
        </p>
        <p className="text-3xl font-bold text-gray-900 dark:text-white">
          ${price}
        </p>
      </Card>
    </>
  );
}

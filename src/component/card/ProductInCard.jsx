import React from 'react'
import { useSelector } from 'react-redux';
import { seleteitems } from '../../reducs/feature/card/cardslices';
import { key } from 'localforage';

export default function ProductInCard({ desc, id, image, name, price, qty, quantity }) {
  return (
    <>
      <section className=" flex justify-center mt-5 overflow-scroll has-[80vw]:">
        <section className=' max-w-sm w-1/2 bg-slate-300 p-5 rounded-md'>
          <div className="flow-root">
            <ul className="divide-y divide-gray-200 dark:divide-gray-700">
              <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                  <div className="shrink-0">
                    <image
                      alt="Neil image"
                      height="32"
                      src="/images/people/profile-picture-1.jpg"
                      width="32"
                      className="rounded-full"
                    />
                  </div>
                  <img src={image} alt="" />
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                      {name}
                    </p>
                    <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                      {desc}
                    </p>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    ${price}
                  </div>
                  <div>
                    <button className=" bg-red-500 w-7 h-7 text-lg">-</button>
                    <p>{qty}</p>
                    <p>{quantity}</p>
                    <button className=" bg-teal-950 w-7 h-7 text-xxl">+</button>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </section>
    </>
  );
}

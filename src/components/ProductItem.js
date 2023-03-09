import classNames from "classnames";
import React from "react";

import test from "../image/tracing&coloring_workbook.png";

function ProductItem(props) {
  const { productItem, productID, ticketPic1, ticketPic2 } = props;

  const openNewTab = (url) => {
    window.open(url);
  };
  return (
    <div className="w-auto">
      <div className="flex lg:pt-5 justify-center">
        <div className="
        absolute 
        scale-100 
 
        mt-6">
          <img src={productItem.productImage} height={150} width={150} />
        </div>
        <div className="absolute mt-48 ml-0   ">
          <span
            key={productID}
            className=" text-sm font-bold text-dark_violet "
          >
            {productItem.productName}
          </span>
        </div>

        <div
          className={classNames("absolute mt-[265px] md:mt-64  ", {
            "absolute  md:mt-[285px] ": productItem.productTiktokLink == "",
          })}
        >
          <button
            onClick={() => openNewTab(productItem.productShopeeLink)}
            className="
               w-52 
               md:w-56
               px-3 
               rounded-lg
               border-2
             border-dark_violet
            "
          >
            <span className="text-dark_violet font-bold">SHOPEE</span>
          </button>
        </div>

        <div
          className={classNames("absolute mt-[300px] md:mt-72 ", {
            hidden: productItem.productTiktokLink == "",
          })}
        >
          <button
            onClick={() => openNewTab(productItem.productTiktokLink)}
            className="
            w-52
              md:w-56
              px-3 
              rounded-lg
              border-2
              border-dark_violet
                          
            "
          >
            <span className="text-dark_violet font-bold">TIKTOK</span>
          </button>
        </div>

        <div className="">
          
          <img src={ticketPic1} height={250} width={250} />
        </div>
      </div>
    </div>
  );
}

export default ProductItem;

import React, { useState } from "react";
import classNames from "classnames";

// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';

// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ProductItem from "./ProductItem";

//images
import ticketPic1 from "../image/Picture1.png";
import ticketPic2 from "../image/Picture2.png";
import tracingcoloringIMG from "../image/tracing&coloring_workbook.png";
import customizedReciept from "../image/customized_receipt.png";
import nameTracingPads from "../image/name_tracing_pads.png";
import personalizedNotepad from "../image/personalized_notepad.png";
import letsPractrace from "../image/lets_practrace.png";
import minimalistReciept from "../image/minimalist_receipts.png";
import planner2023 from "../image/2023_planner.png";
import customizedPartyBanner from "../image/customized_party_banner.png";
import instax from "../image/instax.png";
import resingKeychains from "../image/resin_paw_keychains.png";

import cupcakeToppers from "../image/cupcake_toppers.png";
import customizedPrintsCrafts from "../image/customized_prints_crafts.png";
import learningCharts from "../image/learning_charts.png";
import paperLootBags from "../image/paper_lootbags.png";
import petTags from "../image/Pet_tags.png";
import stickerLabel from "../image/sticker_label.png";
import thankyouCards from "../image/thankyou_cards.png";
import reusablePlanner from "../image/reusable_planner.png";
import paperPouches from "../image/paper_pouches.png";

function Products() {
  const rnrProducts = [
    {
      id: 1,
      description: "Books & Magazines",
      products: [
        {
          productID: 1,
          productName: "Tracing & Coloring Workbook",
          productImage: tracingcoloringIMG,
          productShopeeLink:
            "https://shopee.ph/Tracing-Coloring-Workbook-RnR-Print-Crafts-i.157046189.9948308544?sp_atk=0ca7f93d-b445-45b2-bab3-9782b9ef7862",
          productTiktokLink: "https://vt.tiktok.com/ZS8H4mgXn/",
        },
        {
          productID: 2,
          productName: "Customized Receipts",
          productImage: customizedReciept,
          productShopeeLink:
            "https://shopee.ph/Customized-Receipts-RnR-Prints-Crafts-i.157046189.9447631646?sp_atk=9c21fcea-2b5d-4ca1-bfd4-b639649f89fa",
          productTiktokLink: "",
        },
      ],
    },

    {
      id: 2,
      description: "School & Office Supplies",
      products: [
        {
          productID: 1,
          productName: "Name Tracing Pads",
          productImage: nameTracingPads,
          productShopeeLink:
            "https://shopee.ph/Name-Tracing-Pads-RnR-Prints-Crafts-i.157046189.15504496020?sp_atk=db3d7e8b-5d05-4378-8d22-34d2d5fe2b5e",
          productTiktokLink: "https://vt.tiktok.com/ZS8HVLKbX/",
        },
        {
          productID: 2,
          productName: "Personalized Notepads Set",
          productImage: personalizedNotepad,
          productShopeeLink:
            "https://shopee.ph/Personalized-Notepads-Set-RnR-Prints-Crafts-i.157046189.11612287878?sp_atk=37233cfb-fb34-4d2c-88b4-cc8caad1c41f",
          productTiktokLink: "",
        },
        {
          productID: 3,
          productName: "Let’s PracTrace!",
          productImage: letsPractrace,
          productShopeeLink:
            "https://shopee.ph/Let’s-PracTrace!-RnR-Prints-Crafts-i.157046189.12626311879?sp_atk=e5b27848-44ed-4c69-8b90-4d43027dcbbb",
          productTiktokLink: "https://vt.tiktok.com/ZS8H4VAAG/",
        },
        {
          productID: 4,
          productName: "Minimalist Receipts",
          productImage: minimalistReciept,
          productShopeeLink:
            "https://shopee.ph/Minimalist-Receipts-RnR-Prints-Crafts-i.157046189.17759626047?sp_atk=5c2f13de-bdf1-4b32-9e01-ff5ff50d544b",
          productTiktokLink: "",
        },
        {
          productID: 5,
          productName: "Re-Useable Planners",
          productImage: reusablePlanner,
          productShopeeLink:
            "https://shopee.ph/Re-Useable-Planners-RnR-Prints-Crafts-i.157046189.16737557382?sp_atk=3ba7dc81-b456-4a7d-b47a-17e5640a5244",
          productTiktokLink: "https://vt.tiktok.com/ZS8HVAGaF/",
        },
        {
          productID: 6,
          productName: "2023 Planner",
          productImage: planner2023,
          productShopeeLink:
            "https://shopee.ph/2023-Planner-(Budget-Savings-Tracker)-i.157046189.16492060548?sp_atk=d496ea06-e02e-4f27-a0dd-222d7e32edd9",
          productTiktokLink: "https://vt.tiktok.com/ZS8H4aT1d/",
        },
      ],
    },

    {
      id: 3,
      description: "Paper Supplies",
      products: [
        {
          productID: 1,
          productName: "Learning Charts",
          productImage: learningCharts,
          productShopeeLink:
            "https://shopee.ph/Learning-Charts-RnR-Prints-Crafts-i.157046189.10292009591?sp_atk=2a133e91-6de6-4ff3-b485-a4d3100d956a&xptdk=2a133e91-6de6-4ff3-b485-a4d3100d956a",
          productTiktokLink: "https://vt.tiktok.com/ZS8H4HHY6/",
        },
        {
          productID: 2,
          productName: "Sticker Labels",
          productImage: stickerLabel,
          productShopeeLink:
            "https://shopee.ph/Sticker-Labels-RnR-Prints-Crafts-i.157046189.9400021018?sp_atk=4000c162-96cb-4287-926d-2b122e532796&xptdk=4000c162-96cb-4287-926d-2b122e532796",
          productTiktokLink: "https://vt.tiktok.com/ZS8H4HAm4/",
        },
      ],
    },

    {
      id: 4,
      description: "Party Supplies",
      products: [
        {
          productID: 1,
          productName: "Customized Party Banners",
          productImage: customizedPartyBanner,
          productShopeeLink:
            "https://shopee.ph/Customized-Party-Banners-RnR-Prints-Crafts-i.157046189.9718834939?sp_atk=1eb4772f-b807-4f61-89f5-dfe287d528b4&xptdk=1eb4772f-b807-4f61-89f5-dfe287d528b4",
          productTiktokLink: "https://vt.tiktok.com/ZS8H4qwXX/",
        },
      ],
    },

    {
      id: 5,
      description: "Arts & Crafts",
      products: [
        {
          productID: 1,
          productName: "Customized Paper Pouches",
          productImage: paperPouches,
          productShopeeLink:
            "https://shopee.ph/Customized-Paper-Pouches-RnR-Prints-Crafts-i.157046189.8657263218?sp_atk=28af89d4-af64-4c67-b52a-f705bab7f3cc&xptdk=28af89d4-af64-4c67-b52a-f705bab7f3cc",
          productTiktokLink: "",
        },
      ],
    },

    {
      id: 6,
      description: "Packaging & Wrapping",
      products: [
        {
          productID: 1,
          productName: "Thank You Cards",
          productImage: thankyouCards,
          productShopeeLink:
            "https://shopee.ph/Thank-You-Cards-RnR-Prints-Crafts-i.157046189.5076453168?sp_atk=4bf530a0-3274-4a99-8634-9ceafb4d74d6",
          productTiktokLink: "",
        },
        {
          productID: 2,
          productName: "Customized Prints & Crafts",
          productImage: customizedPrintsCrafts,
          productShopeeLink:
            "https://shopee.ph/Customized-Prints-Crafts-by-RnR-i.157046189.12210895061?sp_atk=7a31d0ba-6739-4f1c-8136-95c96e97ef9c",
          productTiktokLink: "",
        },
        {
          productID: 3,
          productName: "Paper Loot Bags",
          productImage: paperLootBags,
          productShopeeLink:
            "https://shopee.ph/Paper-Loot-Bags-RnR-Prints-Crafts-i.157046189.9313994860?sp_atk=b1f1c0f8-2b2e-4783-8498-2eb87dd0c7df",
          productTiktokLink: "",
        },
        {
          productID: 4,
          productName: "Customized Cupcake Toppers",
          productImage: cupcakeToppers,
          productShopeeLink:
            "https://shopee.ph/Customized-Cupcake-Toppers-RnR-Prints-Crafts-i.157046189.7287125892?sp_atk=4fc6ffe3-13ed-46ef-8d0a-8e1fb52efb81",
          productTiktokLink: "",
        },
        {
          productID: 5,
          productName: "Round Tags",
          productImage: petTags,
          productShopeeLink:
            "https://shopee.ph/Round-Tags-RnR-Prints-Crafts-i.157046189.17137827188?sp_atk=baecb62d-a69c-4476-87c0-cff2d18973f4",
          productTiktokLink: "",
        },
      ],
    },
    {
      id: 7,
      description: "Camera Accesories",
      products: [
        {
          productID: 1,
          productName: "Instax Photoprints",
          productImage: instax,
          productShopeeLink:
            "https://shopee.ph/Instax-inspired-Photoprints-RnR-Prints-Crafts-i.157046189.10008695074?sp_atk=7a0b9b45-5bcc-464f-9c86-4150fa61cce2",
          productTiktokLink: "",
        },
      ],
    },

    {
      id: 8,
      description: "Pet Toys & Accesories",
      products: [
        {
          productID: 1,
          productName: "Resin Pet Paw Keychains",
          productImage: resingKeychains,
          productShopeeLink:
            "https://shopee.ph/Resin-Pet-Paw-Keychains-FOR-A-CAUSE-i.157046189.11742551665?sp_atk=ea349bb7-a9d4-40f8-b755-f1886909ed37",
          productTiktokLink: "https://vt.tiktok.com/ZS8HVhsdy/",
        },
      ],
    },
  ];

  const [activeProduct, setActiveProduct] = useState(0);

  //for Carousel
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  //for Slider
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div
      className="
      
                    max-h-full
                    h-screen
                  bg-dark_violet
                    pt-5
                    pb-5
                  "
    >
      <div
        className="
                      max-h-full
                      h-screen
                      rounded-3xl 
                    bg-light_violet
                      mx-5
                    "
      >
        <div
          className="
                        rounded-3xl 
                      bg-light_violet
                        mx-5
                      "
        >
          <div className=" md:hidden pt-5 md:pt-10 flex justify-center">
            <h1 className="text-3xl md:text-5xl font-bold text-dark_violet">
              PRODUCTS
            </h1>
          </div>

          <div className=" grid grid-cols-2 gap-0 md:flex md:flex-col md:pt-28">
            {/* Navigation Bar */}
            <div className="pt-3 ">
              <div className="w-min bg-dark_violet border-2  rounded-lg border-dark_violet flex flex-col md:flex-row md:justify-between md:w-fit">
                {rnrProducts.map((item, id) => (
                  <ul key={id} className="">
                    <li className="text-sm md:text-base text-light_violet font-roboto ">
                      <button
                        onClick={() => setActiveProduct(id)}
                        className={classNames(
                          "px-3 py-1 rounded-lg hover:bg-light_violet hover:text-dark_violet hover:duration-500",
                          {
                            "bg-light_violet text-dark_violet":
                              activeProduct === id,
                          }
                        )}
                      >
                        {item.description}
                      </button>
                    </li>
                  </ul>
                ))}
              </div>
            </div>

            <div className="mr-5">
              {/* Products */}
              {rnrProducts.map((item, id) =>
                activeProduct === id ? (
                  <div className=" mt-10 md:mt-0  md:px-10">
                    <Slider
                      {...settings}
                      className="md:flex justify-center md:px-10"
                    >
                      {item.products?.map((productItem, productID) => (
                        <div className="">
                          <ProductItem
                            productItem={productItem}
                            productID={productID}
                            ticketPic1={ticketPic1}
                            ticketPic2={ticketPic2}
                          />
                        </div>
                      ))}
                    </Slider>
                  </div>
                ) : (
                  ""
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;

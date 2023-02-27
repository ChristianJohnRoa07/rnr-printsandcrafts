import React from "react";

function Services() {
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
          <div className="pt-5 md:pt-28">
            

            <div className="md:mt-5 flex justify-center">
              <h1 className="text-3xl md:text-5xl font-bold text-dark_violet">
                SUPPORT LOCAL
              </h1>
            </div>

            <div className="grid justify-items-center grid-cols-1 gap-y-3 mt-3  md:grid-cols-2 md:gap-y-5 md:mt-10 md:px-60">
              <div className="md:grid md:justify-items-end md:ml-20 ">
                <h2 className="text-base md:text-2xl font-semibold text-dark_violet">
                  BUSINESS ESSENTIALS
                </h2>
                <div className="grid mt-2 justify-items-center md:mt-5 md:justify-items-end">
                  <p className="text-sm md:text-lg font-roboto text-dark_violet">
                    Customized Receipts
                  </p>
                  <p className="text-sm md:text-lg font-roboto text-dark_violet">
                    Sticker Labels
                  </p>
                  <p className="text-sm md:text-lg font-roboto text-dark_violet">
                    Business Cards
                  </p>
                  <p className="text-sm md:text-lg font-roboto text-dark_violet">
                    Product Tags
                  </p>
                </div>
              </div>

              <div className="grid justify-items-center md:justify-items-start">
                <h2 className="text-base md:text-2xl font-semibold text-dark_violet">
                  CUSTOMIZED PRINTABLES
                </h2>
                <div className="grid mt-2 justify-items-center md:mt-5 md:justify-items-start">
                  <p className="text-sm md:text-lg font-roboto text-dark_violet">
                    Tracing & Coloring Workbook
                  </p>
                  <p className="text-sm md:text-lg font-roboto text-dark_violet">
                    Minimalist Fan for Souvenirs
                  </p>
                  <p className="text-sm md:text-lg font-roboto text-dark_violet">
                    Instax-Inspired Photoprints
                  </p>
                  <p className="text-sm md:text-lg font-roboto text-dark_violet">
                    Memo pads & Planners
                  </p>
                </div>
              </div>

              <div className="grid justify-items-center md:justify-items-end">
                <h2 className="text-base md:text-2xl font-semibold text-dark_violet">
                  CUSTOMIZED PARTY FAVORS
                </h2>
                <div className=" grid mt-2 justify-items-center md:justify-items-end">
                  <p className="text-sm md:text-lg font-roboto text-dark_violet">
                    Party Banners with Names
                  </p>
                  <p className="text-sm md:text-lg font-roboto text-dark_violet">
                    Paper Loot Bags
                  </p>
                  <p className="text-sm md:text-lg font-roboto text-dark_violet">
                    Cupcake Toppers
                  </p>
                </div>
              </div>

              <div className="grid justify-items-center md:mr-20  md:justify-items-start">
                <h2 className="text-base md:text-2xl font-semibold text-dark_violet">
                  RESIN CRAFTS
                </h2>
                <div className="grid mt-2 justify-items-center md:mt-5 md:justify-items-start">
                  <p className="text-sm md:text-lg font-roboto text-dark_violet">
                    Initial & Number Keychains
                  </p>
                  <p className="text-sm md:text-lg font-roboto text-dark_violet">
                    Aesthetic Earrings
                  </p>
                  <p className="text-sm md:text-lg font-roboto text-dark_violet">
                    Cat and Dog Name Tags
                  </p>
                  <p className="text-sm md:text-lg font-roboto text-dark_violet">
                    My PAWmily Keychains
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;

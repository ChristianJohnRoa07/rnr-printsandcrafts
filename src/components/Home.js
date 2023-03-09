import React from "react";



//Import image
import craftsPic from "../image/crafts.png";


function Home() {
  return (
    <div >
      <div
        className="  
        rounded-3xl 
        bg-light_violet
          mx-5
      "
      >
        <div className="h-auto w-auto pt-10 md:flex md:justify-center md:pt-28 md:mt-20 ">
          <div className="grid justify-items-center grid-cols-1 md:flex md:gap-10">
            {/* Text */}
            <div>
              <div className="grid">
                <div className="font-bold font-roboto text-3xl text-center md:text-5xl ">
                  <h1 className="text-dark_violet">Welcome to </h1>
                  <h1 className="text-dark_violet">RnR Prints & Crafts</h1>
                </div>

                <div className="w-auto md:w-96 pl-5 pt-5">
                  <div className="text-sm md:text-lg sm:text-base font-roboto font-normal text-justify">
                    <span className="text-dark_violet">
                      A proud local brand that creates business essentials,
                      eco-friendly party needs, learning materials, and resin
                      crafts, all handmade ━━ because HANDMADE is HEARTMADE
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* image */}
            <div className="h-60 w-60 mt-10 md:h-96 md:w-96 md:mt-0">
              <img src={craftsPic} height={350} width={350} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

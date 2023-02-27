import { React, useState } from "react";

import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { BiArrowBack } from "react-icons/bi";

//Import logo
import RNRLogo from "../image/rnrLogo.png";

function NavigationBar(props) {
  const nav = useNavigate();
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div>
      <div
        className=" 
          hidden
          md:flex 
          w-full    
          justify-center 
           
              
        "
      >
        <div
          className="
      rounded-lg
      bg-light_violet
      fixed
      top-8
      border-2
    border-dark_violet  
      
"
        >
          <div className="h-16 items-center md:items-center">
            <div className=" grid-cols-3 grid ">
              <ul className=" grid-cols-2 grid gap-3 pt-4 ">
                <li className="text-center  text-xl text-dark_violet font-roboto ">
                  <Link
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={850}
                  >
                    <button
                      className="
           transition 
           ease-in-out 
           delay-20
           hover:-translate-y-1 
           hover:scale-110 
           hover:border-b-4
           hover:border-b-dark_violet
      "
                    >
                      Home
                    </button>
                  </Link>
                </li>

                <li className="text-center text-xl text-dark_violet font-roboto ">
                  <Link
                    to="products"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={850}
                  >
                    <button
                      className="
                 
               transition 
               ease-in-out 
               delay-20
               hover:-translate-y-1 
               hover:scale-110 
               hover:border-b-4
               hover:border-b-dark_violet
                     
           
      "
                    >
                      Products
                    </button>
                  </Link>
                </li>
              </ul>

              <ul className="">
                <button
                  onClick={() => nav(-1)}
                  className="
               transition 
               ease-in-out 
               delay-20
               hover:-translate-y-1 
               hover:scale-110 
      "
                >
                  <img src={RNRLogo} height={200} width={200} />
                </button>
              </ul>

              <ul className="md:grid-cols-2 md:grid md:gap-5 md:pt-4 pr-5">
                <li className="text-center text-xl text-dark_violet font-roboto ">
                  <Link
                    to="services"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={850}
                  >
                    <button
                      className="
               transition 
               ease-in-out 
               delay-20
               hover:-translate-y-1 
               hover:scale-110 
               hover:border-b-4
               hover:border-b-dark_violet            
      "
                    >
                      Services
                    </button>
                  </Link>
                </li>
                <li className="text-center text-xl text-dark_violet font-roboto ">
                  <Link
                    to="contacts"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={850}
                  >
                    <button
                      className="
               transition 
               ease-in-out 
               delay-20
               hover:-translate-y-1 
               hover:scale-110 
               hover:border-b-4
               hover:border-b-dark_violet            
      "
                    >
                      Contacts
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* For mobile */}

      <div
        className="md:hidden fixed
      top-8"
      >
        <div className="">
          <div
            onClick={handleToggle}
            className="px-5 py-5  md:hidden 
               hover:scale-150 hover:duration-200"
          >
            {!toggle ? (
              <AiOutlineClose size={20} />
            ) : (
              <AiOutlineMenu size={20} />
            )}
          </div>

          <div
            className={
              !toggle
                ? "fixed p-4 right-0 top-0 w-[40%] h-full bg-light_violet border-l-2 border-dark_violet ease-in-out duration-500"
                : "fixed right-[-100%] "
            }
          >
            <div className="flex gap-5 mt-5 ">
              <div className="mt-2">
                <button
                  onClick={() => nav(-1)}
                  className="
               transition 
               ease-in-out 
               delay-20
               hover:-translate-y-1 
               hover:scale-110 
      "
                >
                  <BiArrowBack size={20} />
                </button>
              </div>
              <div>
                <h1 className="w-full  font-bold text-3xl text-dark_violet">
                  RNR
                </h1>
              </div>
            </div>

            <ul className="mt-5">
              <li className="p-4 text-center text-xl text-dark_violet font-roboto ">
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={850}
                >
                  <button
                    className="
           transition 
           ease-in-out 
           delay-20
           hover:-translate-y-1 
           hover:scale-110 
           hover:border-b-4
           hover:border-b-dark_violet
            "
                  >
                    Home
                  </button>
                </Link>
              </li>

              <li className="p-4 text-center text-xl text-dark_violet font-roboto ">
                <Link
                  to="products"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={850}
                >
                  <button
                    className="
                 
               transition 
               ease-in-out 
               delay-20
               hover:-translate-y-1 
               hover:scale-110 
               hover:border-b-4
               hover:border-b-dark_violet
                     
           
                "
                  >
                    Products
                  </button>
                </Link>
              </li>
              <li className="p-4 text-center text-xl text-dark_violet font-roboto ">
                <Link
                  to="services"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={850}
                >
                  <button
                    className="
               transition 
               ease-in-out 
               delay-20
               hover:-translate-y-1 
               hover:scale-110 
               hover:border-b-4
               hover:border-b-dark_violet            
      "
                  >
                    Services
                  </button>
                </Link>
              </li>
              <li className="p-4 text-center text-xl text-dark_violet font-roboto ">
                <Link
                  to="contacts"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={850}
                >
                  <button
                    className="
               transition 
               ease-in-out 
               delay-20
               hover:-translate-y-1 
               hover:scale-110 
               hover:border-b-4
               hover:border-b-dark_violet            
      "
                  >
                    Contacts
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavigationBar;

import Link from "next/link";
import React, { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";

const NavigationFooter: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <div className="relative w-full">
      <div
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="mx-auto max-w-[460px] h-[54.4px] rounded-[100px] bg-white mt-[22px] text-black flex items-center justify-center bg-opacity-90 hover:bg-opacity-100 cursor-pointer"
      >
        <span className="text-[16px] md:text-[20px] md:scale-75 h-[48px] px-[16px] rounded-[100px] flex items-center justify-center uppercase">
          DESCUBRE
        </span>
      </div>

      <OutsideClickHandler
        onOutsideClick={() => {
          setIsMenuOpen(false);
        }}
      >
        <div
          className={`
            ${isMenuOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"}
            transition-all duration-300 ease-in-out
            absolute bottom-[70px] left-0 right-0 mx-auto w-full max-w-[450px] bg-white bg-opacity-70 text-black shadow-md rounded-[20px] overflow-hidden z-50
          `}
        >
          <ul className="flex justify-between p-[10px] ml-[-5px] md:p-[16px] space-x-[5px] md:space-x-[12px] text-[14px] md:text-[16px]">
            <li className="flex-1 text-center">
              <Link
                href="classes"
                className="h-[48px] cursor-pointer rounded-[100px] flex items-center justify-center hover:bg-gray-100"
              >
                Sedes
              </Link>
            </li>
            <li className="flex-1 text-center">
              <Link
                href="menu"
                className="h-[48px] cursor-pointer rounded-[100px] flex items-center justify-center hover:bg-gray-100"
              >
                Menú
              </Link>
            </li>
            <li className="flex-1 text-center">
              <Link
                href="restaurant"
                className="h-[48px] cursor-pointer rounded-[100px] flex items-center justify-center hover:bg-gray-100"
              >
                Quienes somos
              </Link>
            </li>
            <li className="flex-1 text-center">
              <Link
                href="/contact"
                className="h-[48px] cursor-pointer rounded-[100px] flex items-center justify-center hover:bg-gray-100"
              >
                Contactanos
              </Link>
            </li>
          </ul>
        </div>
      </OutsideClickHandler>
    </div>
  );
};

export default NavigationFooter;

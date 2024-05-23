import React, { FC, MutableRefObject } from "react";
import { useState } from "react";

//-------------------------------------------------------
interface IProps {
  startersRef: MutableRefObject<HTMLDivElement | null>;
  breakfastRef: MutableRefObject<HTMLDivElement | null>;
  dinnerRef: MutableRefObject<HTMLDivElement | null>;
  drinksRef: MutableRefObject<HTMLDivElement | null>;
  navigationHandler: (ref: MutableRefObject<HTMLDivElement | null>) => void;
}
//-------------------------------------------------------



const Nav: FC<IProps> = ({
  navigationHandler,
  startersRef,
  breakfastRef,
  dinnerRef,
  drinksRef,
}) => {
  // Estado para almacenar la referencia del último botón seleccionado
  const [selectedRef, setSelectedRef] = useState<React.RefObject<HTMLDivElement> | null>(null);

  return (
    <div className="min-h-[74px] w-full flex justify-center items-center">
      <button
        onClick={() => {
          navigationHandler(startersRef);
          setSelectedRef(startersRef);
        }}
        className={`font-light ${
          selectedRef === startersRef ? "text-[#FACE8D]" : "text-white"
        }`}
      >
        Desayunos
      </button>
      <button
        onClick={() => {
          navigationHandler(breakfastRef);
          setSelectedRef(breakfastRef);
        }}
        className={`font-light ${
          selectedRef === breakfastRef ? "text-[#FACE8D]" : "text-white"
        } ml-[28px] md:ml-[48px]`}
      >
        Almuerzos
      </button>
      <button
        onClick={() => {
          navigationHandler(dinnerRef);
          setSelectedRef(dinnerRef);
        }}
        className={`font-light ${
          selectedRef === dinnerRef ? "text-[#FACE8D]" : "text-white"
        } ml-[28px] md:ml-[48px]`}
      >
        Comidas rápidas
      </button>
      <button
        onClick={() => {
          navigationHandler(drinksRef);
          setSelectedRef(drinksRef);
        }}
        className={`font-light ${
          selectedRef === drinksRef ? "text-[#FACE8D]" : "text-white"
        } ml-[28px] md:ml-[48px]`}
      >
        Cafetería y tienda
      </button>
    </div>
  );
};

export default Nav;

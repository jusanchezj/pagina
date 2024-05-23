import React, { FC, MutableRefObject, useState } from "react";
import menuData from "./menuData";
import Image from "next/image";
import Footer from "@/components/Footer";

interface IProps {
  startersRef: MutableRefObject<HTMLDivElement | null>;
  breakfastRef: MutableRefObject<HTMLDivElement | null>;
  dinnerRef: MutableRefObject<HTMLDivElement | null>;
  drinksRef: MutableRefObject<HTMLDivElement | null>;
}

const Feed: FC<IProps> = ({
  startersRef,
  breakfastRef,
  dinnerRef,
  drinksRef,
}) => {
  // Estado para almacenar el índice del producto seleccionado para cada categoría
  const [selectedItemIndex, setSelectedItemIndex] = useState<{ starters: number | null, breakfast: number | null, dinner: number | null, drinks: number | null }>({
    starters: null,
    breakfast: null,
    dinner: null,
    drinks: null
  });

  return (
    <div className="mt-[80px] max-w-[628px] w-full overflow-hidden overflow-y-scroll">
      <div ref={startersRef} className="w-full px-[10px]">
        <h1 className="text-[#FACE8D] font-dancing text-[64px] leading-none mb-[32px]">
          Desayunos
        </h1>
        {menuData.starters.map((item, index) => (
          <div
            key={item.id}
            onClick={() => setSelectedItemIndex({...selectedItemIndex, starters: index})}
            style={{
              border: selectedItemIndex.starters === index ? `1px solid #FACE8D` : "1px solid black",
              borderRadius: 10,
            }}
            className="flex w-full mt-[16px] cursor-pointer hover:scale-95 duration-150"
          >
            {/* 
              <Image
                width={90}
                height={72}
                src={item.pictureUrl}
                alt={item.name}
                className="rounded-[10px]" 
              /> 
            */}
            <div className="w-full ml-[24px] pr-[20px]">
              <div className="w-full flex items-center justify-between">
                <h1 className="text-[20px]">{item.name}</h1>
                <p className="text-white text-opacity-90">{item.price}</p>
              </div>
              <p className="text-[16px] text-white text-opacity-50">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div ref={breakfastRef} className="w-full px-[10px] mt-[96px]">
        <h1 className="text-[#FACE8D] font-dancing text-[64px] leading-none mb-[32px]">
          Almuerzos
        </h1>
        {menuData.breakfast.map((item, index) => (
          <div
            key={item.id}
            onClick={() => setSelectedItemIndex({...selectedItemIndex, breakfast: index})}
            style={{
              border: selectedItemIndex.breakfast === index ? `1px solid #FACE8D` : "1px solid transparent",
              borderRadius: 10,
            }}
            className="flex w-full mt-[12px] cursor-pointer hover:scale-95 duration-150"
          >
            {/*<Image
              width={90}
              height={72}
              src={item.pictureUrl}
              alt={item.name}
              className="rounded-[10px]"
          />*/}
            <div className="w-full ml-[24px] pr-[20px]">
              <div className="flex items-center justify-between">
                <h1 className="text-[20px]">{item.name}</h1>
                <p className="text-white text-opacity-90">{item.price}</p>
              </div>
              <p className="text-[16px] text-white text-opacity-50">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div ref={dinnerRef} className="w-full px-[10px] mt-[96px]">
        <h1 className="text-[#FACE8D] font-dancing text-[64px] leading-none mb-[32px]">
          Comidas rápidas
        </h1>
        {menuData.dinner.map((item, index) => (
          <div
            key={item.id}
            onClick={() => setSelectedItemIndex({...selectedItemIndex, dinner: index})}
            style={{
              border: selectedItemIndex.dinner === index ? `1px solid #FACE8D` : "1px solid transparent",
              borderRadius: 10,
            }}
            className="flex w-full mt-[12px] cursor-pointer hover:scale-95 duration-150"
          >
            {/*<Image
              width={90}
              height={72}
              src={item.pictureUrl}
              alt={item.name}
              className="rounded-[10px]"
          />*/}
            <div className="w-full ml-[24px] pr-[20px]">
              <div className="w-full flex items-center justify-between">
                <h1 className="text-[20px]">{item.name}</h1>
                <p className="text-white text-opacity-90">{item.price}</p>
              </div>
              <p className="text-[16px] text-white text-opacity-50">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div ref={drinksRef} className="w-full px-[10px] mt-[96px]">
        <h1 className="text-[#FACE8D] font-dancing text-[64px] leading-none mb-[32px]">
          Cafetería y tienda
        </h1>
        {menuData.drinks.map((item, index) => (
          <div
            key={item.id}
            onClick={() => setSelectedItemIndex({...selectedItemIndex, drinks: index})}
            style={{
              border: selectedItemIndex.drinks === index ? `1px solid #FACE8D` : "1px solid transparent",
              borderRadius: 10,
            }}
            className="flex w-full mt-[12px] cursor-pointer hover:scale-95 duration-150"
          >
            {/*<Image
              width={90}
              height={72}
              src={item.pictureUrl}
              alt={item.name}
              className="rounded-[10px]"
          />*/}
            <div className="w-full ml-[24px] pr-[20px]">
              <div className="w-full flex items-center justify-between">
                <h1 className="text-[20px]">{item.name}</h1>
                <p className="text-white text-opacity-90">{item.price}</p>
              </div>
              <p className="text-[16px] text-white text-opacity-50">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Feed;

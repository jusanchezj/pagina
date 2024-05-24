import NavigationFooter from "@/components/NavigationFooter";
import Link from "next/link";
import { FC, MutableRefObject, useRef } from "react";
import Nav from "./Nav";
import Feed from "./Feed";

const MenuSection: FC = () => {
  const startersRef = useRef<HTMLDivElement | null>(null);
  const breakfastRef = useRef<HTMLDivElement | null>(null);
  const dinnerRef = useRef<HTMLDivElement | null>(null);
  const drinksRef = useRef<HTMLDivElement | null>(null);

  function scrollToSection(sectionId: MutableRefObject<HTMLDivElement | null>) {
    if (sectionId?.current) {
      sectionId?.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }

  return (
    <section className="w-full flex flex-col lg:flex-row h-full min-h-screen">
      <div className="relative w-full lg:w-[50%] p-12 flex flex-col justify-between items-center min-h-[80vh] md:min-h-screen h-full">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{
            backgroundImage: `url(/menu.jpeg)`,
            opacity: 0.5,
          }}
        />
        <div className="relative z-10 flex flex-col items-center">
          <Link href="/" className="font-semibold cursor-pointer">
            <img
              src="/logo sin fondo.PNG"
              alt="Descripción de la imagen"
              className="block h-auto max-w-[340px] sm:max-w-[400px] mt-[-40px] ml-[3px]"
            />
          </Link>
          <div className="text-center mt-4">
            <h2 className="text-[#FACE8D] font-dancing text-[50px] md:text-[80px] leading-none">
              Te presentamos
            </h2>
            <h1 className="font-medium text-[50px] md:text-[80px] leading-none">
              Nuestros productos
            </h1>
          </div>
        </div>
        <div className="w-full flex-col justify-center max-w-[650px] mb-[00px] sm:mb-[00px] md:mb-[0px] lg:mb-[0px]">
            <NavigationFooter />
          </div>
      </div>

      <div className="w-full lg:w-[50%] flex flex-col items-center h-screen">
        <Nav
          startersRef={startersRef}
          breakfastRef={breakfastRef}
          dinnerRef={dinnerRef}
          drinksRef={drinksRef}
          navigationHandler={scrollToSection}
        />
        <Feed
          startersRef={startersRef}
          breakfastRef={breakfastRef}
          dinnerRef={dinnerRef}
          drinksRef={drinksRef}
        />
      </div>
    </section>
  );
};

export default MenuSection;

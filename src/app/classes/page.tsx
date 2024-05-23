"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import React from "react";
import { Pagination } from "swiper/modules";
import NavigationFooter from "@/components/NavigationFooter";
import Link from "next/link";
import Head from "next/head";
import useWindow from "@/hooks/useWindow";

export default function Classes() {
  const { width } = useWindow();

  const mobileRow = width <= 540 ? 1 : 2;
  const row = width > 768 ? 3 : mobileRow;

  return (
    <>
      <Head>
        <title>Gourmet & Parrilla</title>
      </Head>

      <main className="min-h-screen relative overflow-hidden">
        <Swiper
          loop
          autoplay={{
            delay: 1000,
          }}
          slidesPerView={row}
          spaceBetween={0}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper h-screen"
        >
          <SwiperSlide className="relative">
            <div
              className="h-screen opacity-50"
              style={{
                backgroundImage: `url(/mede.png)`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            />
            <div className="fixed inset-0 flex flex-col items-center justify-center text-center h-full min-h-screen">
              <h1 className="text-[#FACE8D] font-dancing text-[58px] mb-4">Medellín</h1>
              <h3 className="text-[35px]">Parque Fabricato</h3>
              <h3 className="text-[35px]">FIC 48</h3>
              <h3 className="text-[35px]">Aventura</h3>
              <p className="text-[25px] text-white text-opacity-50">
                NOS
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative">
            <div
              className="h-screen opacity-50"
              style={{
                backgroundImage: `url(/bogo.png)`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            />
            <div className="fixed inset-0 flex flex-col items-center justify-center text-center h-full min-h-screen">
              <h1 className="text-[#FACE8D] font-dancing text-[58px] mt-20 mb-4">Bogotá</h1>
              <h3 className="text-[35px]">Mall Plaza</h3>
              <h3 className="text-[35px]">Canapro</h3>
              <h3 className="text-[35px]">Ecotek</h3>
              <h3 className="text-[35px]">Edificio Meridiano</h3>
              <h3 className="text-[35px]">Torre 90</h3>
              <h3 className="text-[35px]">Titán Plaza</h3>
              <p className="text-[25px] text-white text-opacity-50">
                ENCANTA
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative">
            <div
              className="h-screen opacity-50"
              style={{
                backgroundImage: `url(/buca.png)`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            />
            <div className="fixed inset-0 flex flex-col items-center justify-center text-center h-full min-h-screen">
              <h1 className="text-[#FACE8D] font-dancing text-[58px] mt-[-100px] mb-4">Bucaramanga</h1>
              <h3 className="text-[35px]">Bucaramanga</h3>
              <p className="text-[25px] text-white text-opacity-50">
                SERVIRTE
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="w-full min-h-screen flex flex-col justify-between items-center fixed bottom-[30px] left-[1%] py-10 z-10">
          <Link href="/" className="font-semibold cursor-pointer flex justify-center items-center">
            <img src="/logo sin fondo.PNG" alt="Descripción de la imagen" className="block max-w-[400px] ml-[-8px] h-auto mx-auto mt-[-20px]" />
          </Link>
          <NavigationFooter />
        </div>
      </main>
    </>
  );
}

"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import React, { useEffect, useRef, useState } from "react";
import NavigationFooter from "@/components/NavigationFooter";
import Link from "next/link";
import Head from "next/head";
import useWindow from "@/hooks/useWindow";
import { Autoplay } from "swiper/modules";
import SwiperCore from 'swiper';
SwiperCore.use([Autoplay]);

export default function Classes() {
  const { width } = useWindow();
  const [imageWidth, setImageWidth] = useState(0);
  const imageRef = useRef<HTMLImageElement>(null);
  const swiperRef = useRef<SwiperCore | null>(null);

  useEffect(() => {
    if (imageRef.current) {
      setImageWidth(imageRef.current.offsetWidth);
    }
  }, [width]);

  const mobileRow = width <= 540 ? 1 : 2;
  const row = width > 768 ? 3 : mobileRow;

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  return (
    <>
      <Head>
        <title>Gourmet & Parrilla</title>
      </Head>
      <style jsx>{`
        .mySwiper {
          height: 100vh;
        }
        .h-screen {
          height: 100vh;
        }
        .min-h-screen {
          min-height: 100vh;
        }
        .opacity-50 {
          opacity: 0.5;
        }
        .fixed {
          position: fixed;
        }
        .inset-0 {
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
        }
        .flex {
          display: flex;
        }
        .flex-col {
          flex-direction: column;
        }
        .items-center {
          align-items: center;
        }
        .justify-center {
          justify-content: center;
        }
        .text-center {
          text-align: center;
        }
        .text-[#FACE8D] {
          color: #FACE8D;
        }
        .font-dancing {
          font-family: 'Dancing Script', cursive;
        }
        .text-[58px] {
          font-size: 58px;
        }
        .text-[35px] {
          font-size: 35px;
        }
        .text-[25px] {
          font-size: 25px;
        }
        .text-white {
          color: white;
        }
        .text-opacity-50 {
          opacity: 0.5;
        }
        .mb-4 {
          margin-bottom: 1rem;
        }
        .mt-20 {
          margin-top: 5rem;
        }
        .mt-[-100px] {
          margin-top: -100px;
        }
        .w-full {
          width: 100%;
        }
        .py-10 {
          padding-top: 2.5rem;
          padding-bottom: 2.5rem;
        }
        .z-10 {
          z-index: 10;
        }
        .z-20 {
          z-index: 20;
        }
        .z-30 {
          z-index: 30;
        }
        .block {
          display: block;
        }
        .h-auto {
          height: auto;
        }
        .max-w-[340px] {
          max-width: 340px;
        }
        .sm:max-w-[400px] {
          max-width: 400px;
        }
        .mt-[0px] {
          margin-top: 0;
        }
        .ml-[-15px] {
          margin-left: -15px;
        }
        .navigation-button {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(0, 0, 0, 0.5);
          color: white;
          border: none;
          padding: 10px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          font-size: 24px;
          width: 40px; // Ajusta el tamaño del botón
          height: 40px; // Ajusta el tamaño del botón
          z-index: 30;
        }
        .navigation-button.next {
          right: 10px;
        }
        .navigation-button.prev {
          left: 10px;
        }
      `}</style>
      <main className="min-h-screen relative overflow-hidden">
        <Swiper
          loop
          autoplay={{
            delay: 10000,
          }}
          slidesPerView={row}
          spaceBetween={0}
          className="mySwiper"
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
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
            <div className="fixed inset-0 flex flex-col items-center justify-center text-center h-full min-h-screen z-10">
              <h1 className="text-[#FACE8D] font-dancing text-[58px] mb-4">Medellín</h1>
              <h3 className="text-[35px]">Parque Fabricato</h3>
              <h3 className="text-[35px]">FIC 48</h3>
              <h3 className="text-[35px]">Aventura</h3>
              
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
            <div className="fixed inset-0 flex flex-col items-center justify-center text-center h-full min-h-screen z-10">
              <h1 className="text-[#FACE8D] font-dancing text-[58px] mt-20 mb-4">Bogotá</h1>
              <h3 className="text-[35px]">Mall Plaza</h3>
              <h3 className="text-[35px]">Canapro</h3>
              <h3 className="text-[35px]">Ecotek</h3>
              <h3 className="text-[35px]">Edificio Meridiano</h3>
              <h3 className="text-[35px]">Torre 90</h3>
              <h3 className="text-[35px]">Titán Plaza</h3>
              
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
            <div className="fixed inset-0 flex flex-col items-center justify-center text-center h-full min-h-screen z-10">
              <h1 className="text-[#FACE8D] font-dancing text-[58px] mt-[-100px] mb-4">Bucaramanga</h1>
              <h3 className="text-[35px]">Bucaramanga</h3>
            
            </div>
          </SwiperSlide>
        </Swiper>
        {row < 3 && (
          <>
            <button className="navigation-button prev" onClick={handlePrev}>←</button>
            <button className="navigation-button next" onClick={handleNext}>→</button>
          </>
        )}
        <div className="absolute top-0 left-0 w-full flex justify-center z-20">
          <Link href="/" className="font-semibold cursor-pointer">
            <img
              src="/logo sin fondo.PNG"
              alt="Descripción de la imagen"
              ref={imageRef}
              className="block h-auto max-w-[340px] sm:max-w-[400px] ml-[-15px]"
            />
          </Link>
        </div>
        <div className="absolute bottom-0 left-0 w-full flex justify-center z-20">
          <div style={{ width: imageWidth }} className="max-w-[650px] mb-[70px]">
            <NavigationFooter />
          </div>
        </div>
      </main>
    </>
  );
}

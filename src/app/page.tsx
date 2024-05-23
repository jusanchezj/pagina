"use client";

import Link from "next/link";
import NavigationFooter from "@/components/NavigationFooter";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Restaurant Gourmet & Parrilla</title>
      </Head>

      <main className="min-h-screen relative overflow-hidden w-full">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50 z-10"
          style={{
            backgroundImage: `url(/menu.jpeg)`,
          }}
        />
        <section className="relative inset-0 min-h-screen w-full bg-transparent flex flex-col items-center p-8 md:p-12 z-[20]">
          <Link href="/" className="font-semibold cursor-pointer">
            <img src="/logo sin fondo.PNG" alt="Descripción de la imagen" className="block max-w-[400px] h-[auto] mt-[-40px] ml-[3px]" />
          </Link>

          <div className="flex-grow flex items-center justify-center w-full">
            <div className="flex flex-col items-center text-center">
              <h2 className="text-[#FACE8D] font-dancing text-2xl sm:text-[30px] md:text-[50px] lg:text-[70px] leading-none">
                Servimos con calidad
              </h2>
              <h1 className="font-medium text-5xl sm:text-6xl md:text-[50px] lg:text-[70px] leading-none">
                Alimentación corporativa
              </h1>
              <p className="text-xl md:text-[23px] text-center md:text-start mt-[20px] md:max-w-[600px]">
                Si lleva el nombre Gourmet & Parrilla, es un producto de calidad, acompañado de un especializado servicio
              </p>
            </div>
          </div>

          <div className="w-full flex-col justify-center max-w-[650px]">
            <NavigationFooter />
          </div>
        </section>
      </main>
    </>
  );
}



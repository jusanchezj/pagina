"use client";

import NavigationFooter from "@/components/NavigationFooter";
import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Restaurant() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <Head>
        <title>Restaurante Gourmet & Parrilla</title>
        <meta name="theme-color" content="#000000" media="(prefers-color-scheme: dark)" />
      </Head>

      <main className="min-h-screen relative overflow-hidden">
        <section className="min-h-screen w-full bg-transparent flex flex-col items-center justify-between p-12">
          <Link href="/" className="font-semibold cursor-pointer">
            <img
              src="/logo sin fondo.PNG"
              alt="Descripción de la imagen"
              className="block h-auto max-w-[340px] sm:max-w-[400px] mt-[-40px] ml-[3px]"
            />
          </Link>

          <div className="w-full flex flex-col items-center text-center">
            <div className="py-16" data-aos="fade-up">
              <h1 className="text-[#FACE8D] font-dancing text-[58px] mb-4">Conócenos</h1>
              <h3 className="text-[25px] leading-[1.2]">
                Somos una empresa especializada en la alimentación corporativa, apasionados por brindar experiencias gastronómicas excepcionales. Con una trayectoria de trabajo con empresas nacionales e internacionales.
              </h3>
            </div>

            <div className="py-16" data-aos="fade-up">
              <h1 className="text-[#FACE8D] font-dancing text-[58px] mb-4">Misión</h1>
              <h3 className="text-[25px] leading-[1.2]">
                Nuestra misión es ofrecer experiencias gastronómicas excepcionales con ingredientes de calidad, frescura en cada preparación y una gama diversa de experiencias culinarias. Accesibilidad sin comprometer calidad.
              </h3>
            </div>

            <div className="py-16" data-aos="fade-up">
              <h1 className="text-[#FACE8D] font-dancing text-[58px] mb-4">Visión</h1>
              <h3 className="text-[25px] leading-[1.2]">
                Nuestra visión es ser la empresa líder en la alimentación corporativa. Proporcionando experiencias gastronómicas excepcionales en Colombia, reconocidos por calidad, servicio, producto y precios justos.
              </h3>
            </div>

            <div className="py-16" data-aos="fade-up">
              <h1 className="text-[#FACE8D] font-dancing text-[58px] mb-4">Nuestros clientes</h1>
              <h3 className="text-[25px] leading-[1.2]">
                En Gourmet y Parrilla S.A.S., ofrecemos calidad, innovación y sabor. Contamos con la confianza de empresas líderes como:
              </h3>
              <img
                src="/logos clientes.png"
                alt="Descripción de la imagen"
                className="flex mx-auto max-w-[400px] md:max-w-[600px] h-auto mt-10"
              />
            </div>
          </div>

          <div className="w-full flex-col justify-center max-w-[650px] mt-16">
            <NavigationFooter />
          </div>
        </section>
      </main>
    </>
  );
}

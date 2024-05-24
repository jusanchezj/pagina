"use client";

import MenuSection from "@/sections/menu";
import Head from "next/head";
import Link from "next/link";

export default function Menu() {
  return (
    <>
      <Head>
        <title>
          <Link href="/" className="font-semibold cursor-pointer">
          <img
              src="/logo sin fondo.PNG"
              alt="Descripción de la imagen"
              className="block h-auto max-w-[340px] sm:max-w-[400px] mt-[-40px] ml-[3px]"
            />
          </Link>
        </title>
      </Head>

      <main className="min-h-screen relative overflow-hidden">
        <MenuSection />
      </main>
    </>
  );
}

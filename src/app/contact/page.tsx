"use client";

import NavigationFooter from "@/components/NavigationFooter";
import Link from "next/link";
import moment from "moment";
import { useEffect, useState } from "react";
import bookATableImg from "../../assets/book-a-table.jpg";
import Head from "next/head";

// Importa las imágenes para Instagram


export default function BookATable() {
  const [currentTime, setCurrentTime] = useState("");
  const [currentDate, setCurrentDate] = useState<string>("");
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  useEffect(() => {
    setCurrentDate(moment().format("YYYY-MM-DD"));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(moment().format("HH:mm"));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };



  return (
    <>
      <main className="min-h-screen relative overflow-hidden">
        <section className="w-full flex flex-col lg:flex-row h-full min-h-screen">
          <div
            style={{
              backgroundImage: `url(https://unsplash.com/photos/ilVYjf0J378/download?force=true)`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
            className="w-full lg:w-[50%] p-12 flex flex-col justify-between items-center min-h-screen h-full"
          >
            <Link href="/" className="font-semibold cursor-pointer">
              <img src="/logo sin fondo.PNG" alt="Descripción de la imagen" className="block m-[-20px] max-w-[300px] h-[auto] mt-[-40px]"></img>
            </Link>
            <div className="text-center">
              <h2 className="text-[#FACE8D] font-dancing text-[80px] leading-none">
                Contactanos
              </h2>
              <h1 className="font-medium text-[80px] leading-none">
                Queremos escucharte
              </h1>
            </div>

            <NavigationFooter />
          </div>

          <div className="w-full lg:w-[50%] flex flex-col justify-center h-auto px-4 pb-4 lg:px-0 lg:pb-0">
            <div className="max-w-[560px] h-auto mx-auto w-full">
              <p
                className="text-white text-opacity-80 text-[20px] mt-[16px]"
                style={{ textAlign: "justify" }}
              >
                En Gourmet & Parrilla somos una empresa especializada en la alimentación corporativa,
                escribenos y permitenos conocerte
              </p>

              <form action="https://formsubmit.co/asstgourmetyparrilla@gmail.com" method="POST" className="mt-[48px]">
                <h3 className="text-white text-opacity-50 text-[16px]">Nombre</h3>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="h-[60px] bg-black mt-[16px] w-full px-[24px] py-[15px] border border-[#FFFFFF] border-opacity-50 rounded-[10px]"
                  placeholder="Nombre"
                />

                <h3 className="text-white text-opacity-50 mt-[48px] text-[16px]">
                  Email
                </h3>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="h-[60px] bg-black mt-[16px] w-full px-[24px] py-[15px] border border-[#FFFFFF] border-opacity-50 rounded-[10px]"
                  placeholder="Email"
                />
                <h3 className="text-white text-opacity-50 mt-[48px] text-[16px]">
                  Mensaje
                </h3>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Mensaje"
                  className="min-h-[120px] max-h-[200px] bg-black mt-[16px] w-full px-[24px] py-[15px] border border-[#FFFFFF] border-opacity-50 rounded-[10px]"
                />

                <button className="bg-[#F8D49E] active:scale-95 hover:bg-[#f4ca8a] duration-150 mt-[48px] w-full text-black text-[16px] uppercase flex items-center justify-center rounded-[500px] h-[60px]">
                  Enviar
                </button>

                <div className="flex mt-4 gap-10 justify-center items-center space-x-4">
                  <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                    <img src="/LogoWpp.png" alt="WhatsApp" width={100}  />
                  </a>
                  <a href="https://instagram.com/tuempresa" target="_blank" rel="noopener noreferrer">
                    <img src="/LogoIg.png" alt="Instagram" width={100}/>
                  </a>
                </div>
              </form>
    
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

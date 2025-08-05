import React, { useEffect, useState } from "react";
import { FaRegEnvelope } from "react-icons/fa";
import { images } from "../api/data";

const Home = () => {
  const [guestName, setGuestName] = useState("Tamu Undangan");

  const toTitleCase = (str) => {
    return str
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const nameFromUrl = params.get("to");

    if (nameFromUrl) {
      const formattedName = toTitleCase(decodeURIComponent(nameFromUrl));
      setGuestName(formattedName);
    }
  }, []);
  return (
    <section id="home" className="min-h-[100vh] flex justify-center items-start pt-5">
      <div className="bg-gray-100/80 w-[95%] min-h-[88vh] py-4 rounded-xl shadow-md">
        <h1 className=" text-center text-lg">The Wedding Of</h1>
        <div className=" flex justify-center mt-10">
          <div className="w-[30%] h-[160px] relative font-great font-semibold flex flex-col text-rose-950">
            <p className="text-5xl absolute left-3">Romeo</p>
            <p className="text-2xl absolute top-2/5 left-1/2">&</p>
            <p className="text-5xl absolute right-3 bottom-0">Juliet</p>
          </div>
        </div>
        <div className="w-full flex flex-col justify-center mt-8">
          <div className="font-semibold text-lg">
            <p className="text-center">JUM'AT</p>
            <p className="text-center">05 | 11 | 2025</p>
          </div>
          <div className="mx-auto">
            <img src={images.flower1} alt="flower" className="w-36 h-36 rotate-120 animate-zoomIn" />
          </div>
          <div className="text-sm font-noto mb-3">
            <p className="text-center">Kepada Yth.</p>
            <p className="text-center mb-4">Bapak/Ibu/Saudara/i</p>
            <div className=" w-[40%] rounded mx-auto py-4">
              <p className="text-center text-base font-semibold mb-2">{guestName}</p>
              <p className="text-center text-xs">Di tempat</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

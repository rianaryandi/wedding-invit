import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
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
      <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: false, amount: 0.3 }} className="bg-gray-100/80 w-[95%] min-h-[88vh] py-4 rounded-xl shadow-ku ">
        <motion.h1 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ once: false, amount: 0.3 }} className=" text-center text-lg font-semibold">
          The Wedding Of
        </motion.h1>
        <div className=" flex justify-center mt-8">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
            className="w-[50%] h-[140px]  relative font-great font-semibold text-shadow-yellow-600 text-shadow-sm flex flex-col text-rose-950"
          >
            <p className="text-5xl absolute left-3">Ryan</p>
            <p className="text-2xl absolute top-2/5 left-1/2">&</p>
            <p className="text-5xl absolute right-3 bottom-0">Afika</p>
          </motion.div>
        </div>
        <div className="w-full flex flex-col justify-center mt-8">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ once: false, amount: 0.3 }} className="font-semibold text-xl">
            <p className="text-center">JUM'AT</p>
            <p className="text-center">05 | 11 | 2025</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} viewport={{ once: false, amount: 0.3 }} className="mx-auto">
            <img src={images.flower4} alt="flower" className="w-40 h-30 animate-zoomIn" />
          </motion.div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ once: false, amount: 0.3 }} className="text-base font-noto mb-3">
            <p className="text-center">Kepada Yth.</p>
            <p className="text-center">Bapak/Ibu/Saudara/i</p>
            <div className=" w-[40%] rounded mx-auto py-2">
              <p className="text-center text-lg font-bold mb-2">{guestName}</p>
              <p className="text-center text-base">Di tempat</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Home;

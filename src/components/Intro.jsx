import React from "react";
import { motion } from "motion/react";
import { images } from "../api/data";

const Intro = () => {
  return (
    <section id="intro" className="min-h-[100vh] flex justify-center items-start pt-5 font-noto">
      <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: false, amount: 0.3 }} className="bg-gray-100/90 w-[95%] min-h-[88vh] py-9 rounded-xl shadow-ku">
        <h5 className="text-center text-lg mb-4 font-semibold text-rose-950">Assalamu’alaikum Wr. Wb.</h5>
        <p className="text-center px-4 mb-9">Dengan memohon rahmat dan ridho Allah Subhanahu Wa Ta’ala, insyaaAllah kami akan menyelenggarakan acara pernikahan</p>
        <div className="grid grid-cols-[5fr_2fr_5fr] gap-0 px-4 relative">
          <motion.img initial={{ rotateY: 90 }} whileInView={{ rotateY: 0 }} transition={{ duration: 1 }} viewport={{ once: false, amount: 0.3 }} src={images.img_male} alt="male" className="rounded-full shadow-btn " />
          <img src={images.flower1} alt="flower" className="rotate-130  mt-8 animate-zoomIn" />
          <motion.img initial={{ rotateY: 90 }} whileInView={{ rotateY: 0 }} transition={{ duration: 1 }} viewport={{ once: false, amount: 0.3 }} src={images.img_famale} alt="famale" className="rounded-full shadow-btn " />
        </div>
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.1 }} viewport={{ once: false, amount: 0.3 }} className="flex flex-col items-center justify-center gap-2 mt-8">
          <div className="flex flex-col items-center justify-center">
            <p className="font-one text-rose-950 text-xl font-semibold">Romeo</p>
            <p className="text-[15px] text-gray-900 font-noto">Putra dari Nama Bapak & Nama Ibu</p>
          </div>
          <div className="flex items-center justify-center gap-3 my-3">
            <div className="w-12 h-px bg-rose-950"></div>
            <div className="font-one text-xl font-semibold text-rose-950">&</div>
            <div className="w-12 h-px bg-rose-950"></div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="font-one text-rose-950 text-xl font-semibold">Juliet</p>
            <p className="text-[15px] text-gray-900 font-noto">Putri dari Nama Bapak & Nama Ibu</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Intro;

import React from "react";
import { images } from "../api/data";

const Intro = () => {
  return (
    <section id="intro" className="min-h-[100vh] flex justify-center items-start pt-5 font-noto">
      <div className="bg-gray-100/80 w-[95%] min-h-[88vh] py-9 rounded-xl shadow-md">
        <h5 className="text-center text-lg mb-4 font-semibold">Assalamu’alaikum Wr. Wb.</h5>
        <p className="text-center px-4 mb-9">Dengan memohon rahmat dan ridho Allah Subhanahu Wa Ta’ala, insyaaAllah kami akan menyelenggarakan acara pernikahan :</p>
        <div className="grid grid-cols-[5fr_2fr_5fr] gap-0 px-4 relative">
          <img src={images.img_male} alt="male" className="rounded-full shadow-ku" />
          <img src={images.flower1} alt="flower" className="rotate-130  mt-8" />
          <img src={images.img_famale} alt="famale" className="rounded-full shadow-ku" />
        </div>
        <div className="flex flex-col items-center justify-center gap-2 mt-8">
          <div className="flex flex-col items-center justify-center">
            <p className="font-one text-rose-950 text-xl font-semibold">Romeo</p>
            <p className="text-[14px] text-gray-900 font-noto">Putra dari Nama Bapak & Nama Ibu</p>
          </div>
          <div className="flex items-center justify-center gap-3 my-3">
            <div className="w-12 h-px bg-rose-950"></div>
            <div className="font-one text-xl text-rose-950">&</div>
            <div className="w-12 h-px bg-rose-950"></div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="font-one text-rose-950 text-xl font-semibold">Juliet</p>
            <p className="text-[14px] text-gray-900 font-noto">Putri dari Nama Bapak & Nama Ibu</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;

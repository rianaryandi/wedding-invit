import React from "react";
import { gallery } from "../api/data";

const End = () => {
  return (
    <section id="end" className="min-h-[100vh] flex justify-center items-start pt-5 font-noto">
      <div className="bg-gray-100/80 w-[95%] min-h-[88vh] py-5 px-4 rounded-xl shadow-md shadow-ku">
        <p className="text-center mb-6 font-semibold text-base pt-6 text-slate-900">Atas kehadiran dan do’a restu dari Bapak/Ibu/Saudara/i sekalian, kami mengucapkan Terima Kasih.</p>
        <p className="text-center text-rose-950 font-bold text-lg mb-18">Wassalamu’alaikum Wr. Wb.</p>
        <div>
          <img src={gallery.gallery5} alt="couple" className="rounded-full object-cover h-94 shadow-btn mb-8" />
        </div>
        <p className="text-center mb-6 font-semibold text-base pt-6 text-slate-900">Kami yang berbahagia</p>
        <p className="text-center text-rose-950 font-semibold text-2xl font-one">Romeo & Juliet</p>
      </div>
    </section>
  );
};

export default End;

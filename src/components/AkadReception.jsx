import { motion } from "motion/react";
import { IoLocationSharp } from "react-icons/io5";

const AkadReception = () => {
  return (
    <section id="akadReception" className="min-h-[100vh] flex justify-center items-start pt-5 font-noto">
      <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: false, amount: 0.3 }} className="bg-gray-100/90 w-[95%] min-h-[88vh] py-5 rounded-xl shadow-ku">
        <motion.h1 initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} viewport={{ once: false, amount: 0.3 }} className="text-center text-2xl mb-6 font-semibold font-one text-rose-950 ">
          Acara Kami
        </motion.h1>
        <div className="flex flex-col gap-8  px-4">
          <motion.div initial={{ scale: 1.08 }} whileInView={{ scale: 1 }} transition={{ duration: 1.2 }} viewport={{ once: false, amount: 0.3 }} className="bg-rose-900/5 shadow-ku rounded-xl p-4 pb-6">
            <div className="grid grid-cols-3 font-semibold font-playfair text-rose-950 mb-5">
              <div className="flex justify-center items-center">
                <p className="text-2xl">Jum'at</p>
              </div>
              <div className="flex flex-col justify-center items-center ">
                <p className="text-5xl font-extrabold">05</p>
                <p className="text-2xl">2025</p>
              </div>
              <div className="flex justify-center items-center">
                <p className="text-2xl">Nov</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-1">
              <h2 className="font-one text-rose-950 text-xl">Akad Nikah</h2>
              <p className="">Pukul 09.00 WIB - Selesai</p>
              <p className="text-md ">Alamat</p>
              <p className="font-semibold text-rose-950">Masjid Agung Baiturahman</p>
              <p className="mb-3">Jl. Jokowi dan Nomor Jalan</p>
              <a href="" className="flex justify-center items-center bg-rose-950 text-slate-50 px-4 py-1 rounded-lg shadow-ku">
                <IoLocationSharp className="mr-1" />
                Lihat Lokasi
              </a>
            </div>
          </motion.div>
          <motion.div initial={{ scale: 1 }} whileInView={{ scale: 1.05 }} transition={{ duration: 1.2 }} className="bg-rose-900/5 shadow-ku rounded-xl p-4 pb-6">
            <div className="grid grid-cols-3 font-semibold font-playfair text-rose-950 mb-5">
              <div className="flex justify-center items-center">
                <p className="text-2xl">Jum'at</p>
              </div>
              <div className="flex flex-col justify-center items-center ">
                <p className="text-5xl font-extrabold">05</p>
                <p className="text-2xl">2025</p>
              </div>
              <div className="flex justify-center items-center">
                <p className="text-2xl">Nov</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-1">
              <h2 className="font-one text-rose-950 text-2xl">Resepsi</h2>
              <p className="">Pukul 11.00 WIB - Selesai</p>
              <p>Alamat</p>
              <p className="font-semibold text-lg text-rose-950">Pendopo Kridha Manunggal</p>
              <p className="mb-3">Jl. Nama Jalan dan Nomor Jalan</p>
              <a href="#" className="flex justify-center items-center bg-rose-950 text-slate-50 px-4 py-1 rounded-lg">
                <IoLocationSharp className="mr-1" />
                Lihat Lokasi
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AkadReception;

import { IoIosCopy } from "react-icons/io";
import { images } from "../api/data";
import { useState } from "react";
import { motion } from "motion/react";
import { toast } from "react-toastify";

const Gift = () => {
  const [activeTab, setActiveTab] = useState(null);

  const handleTabClick = (tabName) => {
    setActiveTab((prev) => (prev === tabName ? null : tabName));
  };

  const handleCopy = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        toast.success("Nomor berhasil disalin", {
          autoClose: 1500, // 2 detik
          position: "top-center",
        });
      })
      .catch((err) => {
        console.error("Gagal menyalin: ", err);
      });
  };

  return (
    <section id="gift" className="min-h-[100vh] flex justify-center items-start pt-5 font-noto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false, amount: 0.3 }}
        className="bg-gray-100/90 w-[95%] min-h-[105vh] py-5 rounded-xl shadow-md shadow-ku"
      >
        <motion.h1 initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} viewport={{ once: false, amount: 0.3 }} className="text-center text-2xl mb-6 font-semibold font-one text-rose-950">
          Wedding Gift
        </motion.h1>
        <p className="px-4 mt-9 text-center mb-6">Bilamana Bapak/Ibu/Saudara/i ingin mengungkapkan rasa bahagia dengan memberi hadiah, maka dapat mengklik Tautan di bawah ini</p>
        <div className="flex justify-between text-white mx-auto w-[60%] mb-6">
          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2 }}
            viewport={{ once: false, amount: 0.3 }}
            onClick={() => handleTabClick("cashless")}
            className={`w-26 h-9 shadow-ku py-1 px-1 rounded-md font-semibold text-lg 
      ${activeTab === "cashless" ? "bg-rose-950" : "bg-pink-700/60"}`}
          >
            Cashless
          </motion.button>
          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 3 }}
            viewport={{ once: false, amount: 0.3 }}
            onClick={() => handleTabClick("gift")}
            className={`w-26 h-9 shadow-ku py-1 px-1 rounded-md font-semibold text-lg 
      ${activeTab === "gift" ? "bg-rose-950" : "bg-pink-700/60"}`}
          >
            Gift
          </motion.button>
        </div>

        {activeTab === "cashless" && (
          <div className=" flex flex-col gap-6 ">
            <div className="bg-white flex flex-col gap-1 justify-center items-center  rounded-xl shadow-ku animate-mubeng mx-auto w-[80%] py-3">
              <img src={images.img_bni} alt="" className="w-28 mb-2" />
              <p className="font-semibold text-xl">0123 456 789</p>
              <p className="text-lg mb-2">Nama Pemilik</p>
              <button onClick={() => handleCopy("0123 456 789")} className="bg-rose-950 shadow-ku flex justify-center items-center text-white w-22 h-8 rounded-lg font-semibold text-base">
                <IoIosCopy className="mr-1" />
                Salin
              </button>
            </div>
            <div className="bg-white flex flex-col gap-1 justify-center items-center rounded-xl shadow-ku animate-mubeng mx-auto w-[80%] py-3">
              <img src={images.img_bca} alt="" className="w-28 mb-4" />
              <p className="font-semibold text-xl">0123 456 789</p>
              <p className="text-lg mb-4">Nama Pemilik</p>
              <button onClick={() => handleCopy("0002 400 700")} className="bg-rose-950 shadow-ku flex justify-center items-center text-white w-22 h-8 rounded-lg font-semibold text-base">
                <IoIosCopy className="mr-1" />
                Salin
              </button>
            </div>
          </div>
        )}

        {activeTab === "gift" && (
          <div className="bg-white flex flex-col gap-1 justify-center items-center rounded-xl shadow-ku animate-mubeng mx-auto w-[80%] py-3 px-4 ">
            <img src={images.img_gift} alt="" className="w-40 mb-4" />
            <p className=" text-lg mb-4">Juliete</p>
            <p className="text-lg mb-4 text-center font-semibold">Jl. Joko Widodo No. 01 A, Singasari</p>
            <button onClick={() => handleCopy("Jl. Joko Widodo No. 01 A, Singasari")} className="bg-rose-950 shadow-ku flex justify-center items-center text-white w-22 h-8 rounded-lg font-semibold text-base">
              <IoIosCopy className="mr-1" />
              Salin
            </button>
          </div>
        )}
      </motion.div>
    </section>
  );
};

export default Gift;

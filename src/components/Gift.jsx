import { IoIosCopy } from "react-icons/io";
import { images } from "../api/data";
import { useState } from "react";
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
      <div className="bg-gray-100/80 w-[95%] min-h-[88vh] py-5 rounded-xl shadow-md shadow-ku">
        <h1 className="text-center text-2xl mb-6 font-semibold font-one text-rose-950">Wedding Gift</h1>
        <p className="px-4 mt-9 text-center mb-6">Bilamana Bapak/Ibu/Saudara/i ingin mengungkapkan rasa bahagia dengan memberi hadiah, maka dapat mengklik Tautan di bawah ini</p>
        <div className="flex justify-between text-white mx-auto w-[60%] mb-10">
          <button
            onClick={() => handleTabClick("cashless")}
            className={`w-26 h-9 shadow-ku py-1 px-1 rounded-md font-semibold text-lg 
      ${activeTab === "cashless" ? "bg-rose-950" : "bg-slate-700"}`}
          >
            Cashless
          </button>
          <button
            onClick={() => handleTabClick("gift")}
            className={`w-26 h-9 shadow-ku py-1 px-1 rounded-md font-semibold text-lg 
      ${activeTab === "gift" ? "bg-rose-950" : "bg-slate-700"}`}
          >
            Gift
          </button>
        </div>

        {activeTab === "cashless" && (
          <div className="bg-white mx-auto w-[80%] py-10 flex flex-col gap-1 justify-center items-center rounded-xl shadow-ku animate-mubeng">
            <img src={images.img_bni} alt="" className="w-46 mb-6" />
            <p className="font-semibold text-2xl mb-4">0123 456 789</p>
            <p className="text-xl font-semibold mb-8">Nama Pemilik</p>
            <button onClick={() => handleCopy("0123 456 789")} className="bg-rose-950 shadow-ku flex justify-center items-center text-white w-24 h-9 rounded-lg font-semibold text-lg">
              <IoIosCopy className="mr-1" />
              Salin
            </button>
          </div>
        )}

        {activeTab === "gift" && (
          <div className="bg-white mx-auto w-[80%] py-10 flex flex-col gap-1 justify-center items-center rounded-xl shadow-ku animate-mubeng">
            <img src={images.img_bca} alt="" className="w-46 mb-6" />
            <p className="font-semibold text-2xl mb-4">0123 456 789</p>
            <p className="text-xl font-semibold mb-8">Nama Pemilik</p>
            <button onClick={() => handleCopy("0002 400 700")} className="bg-rose-950 shadow-ku flex justify-center items-center text-white w-24 h-9 rounded-lg font-semibold text-lg">
              <IoIosCopy className="mr-1" />
              Salin
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gift;

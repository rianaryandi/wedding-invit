import { useEffect, useState } from "react";
import CountdownTimer from "./CountDownTimer";
import { FaRegEnvelope } from "react-icons/fa";
import { motion } from "motion/react";

const Cover = ({ openInvitation }) => {
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
    <>
      <section id="cover" className="h-[100vh]  flex justify-center items-center ">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false, amount: 0.3 }}
          className="bg-gray-100/70 w-[95%] h-[95%] py-4 rounded-xl shadow-ku overflow-hidden"
        >
          <h1 className=" text-center text-lg font-semibold">The Wedding Of</h1>
          <div className=" flex justify-center mt-6">
            <div className="lg:w-[30%] w-[38%] h-[130px] text-shadow-yellow-600 text-shadow-sm relative font-great font-semibold flex flex-col text-rose-950 animate-zoomIn">
              <p className="text-5xl absolute left-0">Ryan Aryandi</p>
              <p className="text-2xl absolute top-2/5 left-1/2">&</p>
              <p className="text-5xl absolute right-0 bottom-0">Afika Maylia Dyah Kinanti</p>
            </div>
          </div>
          <div className="w-full flex flex-col justify-center mt-8">
            <div className="font-semibold text-xl">
              <p className="text-center">JUM'AT</p>
              <p className="text-center">05 | 11 | 2025</p>
            </div>
            <div className="mx-auto mt-2">
              <CountdownTimer targetDate="2025-11-05T23:59:59" />
            </div>
            <div className="mt-6 text-base font-noto mb-6">
              <p className="text-center">Kepada Yth.</p>
              <p className="text-center mb-2">Bapak/Ibu/Saudara/i</p>
              <div className="bg-white/65 w-[60%] shadow-ku rounded-lg mx-auto py-4">
                <p className="text-center text-[16px] font-semibold mb-2">{guestName}</p>
                <p className="text-center text-base">Di tempat</p>
              </div>
            </div>
            <button onClick={openInvitation} className="flex justify-center items-center bg-rose-950 w-45 mx-auto mb-3 py-2  rounded-lg hover:brightness-125 cursor-pointer shadow-ku text-slate-50 text-sm font-noto font-semibold">
              <FaRegEnvelope className="mr-1 text-lg" />
              Buka Undangan
            </button>
            <p className="text-xs text-center">*Mohon maaf apabila ada kesalahan penulisan nama/gelar</p>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Cover;

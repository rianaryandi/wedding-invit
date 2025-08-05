import { useEffect, useState } from "react";
import CountdownTimer from "./CountDownTimer";
import { FaRegEnvelope } from "react-icons/fa";

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
        <div className="bg-gray-100/85 w-[95%] h-[95%] py-4 rounded-xl shadow-md overflow-hidden">
          <h1 className=" text-center text-lg">The Wedding Of</h1>
          <div className=" flex justify-center mt-6">
            <div className="lg:w-[30%] w-[38%] h-[130px] relative font-great font-semibold flex flex-col text-rose-950">
              <p className="text-5xl absolute left-0">Romeo</p>
              <p className="text-2xl absolute top-2/5 left-1/2">&</p>
              <p className="text-5xl absolute right-0 bottom-0">Juliet</p>
            </div>
          </div>
          <div className="w-full flex flex-col justify-center mt-8">
            <div className="font-semibold text-lg">
              <p className="text-center">JUM'AT</p>
              <p className="text-center">05 | 11 | 2025</p>
            </div>
            <div className="mx-auto mt-2">
              <CountdownTimer targetDate="2025-11-05T23:59:59" />
            </div>
            <div className="mt-6 text-sm font-noto mb-6">
              <p className="text-center">Kepada Yth.</p>
              <p className="text-center mb-2">Bapak/Ibu/Saudara/i</p>
              <div className="bg-white/65 w-[50%] shadow-ku rounded mx-auto py-2">
                <p className="text-center text-[14px] font-semibold mb-2">{guestName}</p>
                <p className="text-center text-xs">Di tempat</p>
              </div>
            </div>
            <button onClick={openInvitation} className="flex justify-center items-center bg-rose-950 w-40 mx-auto mb-6 py-1.5 rounded-lg hover:brightness-125 cursor-pointer shadow-ku text-slate-50 text-sm font-noto">
              <FaRegEnvelope className="mr-1" />
              Buka Undangan
            </button>
            <p className="text-xs text-center">*Mohon maaf apabila ada kesalahan penulisan nama/gelar</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cover;

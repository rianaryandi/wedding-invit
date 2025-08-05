import React, { useEffect, useRef, useState } from "react";
import Cover from "../components/Cover";
import Home from "../components/Home";
import { GiLoveSong } from "react-icons/gi";
import { sounds } from "../api/data";
import { FaPlay } from "react-icons/fa6";
import { IoHome } from "react-icons/io5";
import { GiSelfLove } from "react-icons/gi";
import { MdOutlineEventAvailable } from "react-icons/md";
import { IoMdPhotos } from "react-icons/io";
import { GiBigDiamondRing } from "react-icons/gi";
import { FaRegEnvelope } from "react-icons/fa";
import { FaGift } from "react-icons/fa";
import Intro from "../components/Intro";
import AkadReception from "../components/AkadReception";
import Gallery from "../components/Gallery";
import LoveStory from "../components/LoveStory";
import Gift from "../components/Gift";
import { ToastContainer } from "react-toastify";
import Wishes from "../components/Wishes";
import End from "../components/End";

const Main = () => {
  const [visible, setVisible] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const openInvitation = () => {
    setVisible(false);
    setIsPlaying(true);
  };

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    if (!visible && audioRef.current) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true); // <- Tambahkan ini
          })
          .catch((error) => {
            console.warn("Autoplay blocked:", error);
          });
      }
    }
  }, [visible]);

  return (
    <div className="flex justify-center h-[100vh]">
      <div className="lg:w-[50%] w-full relative">
        {visible ? (
          <div>
            <Cover openInvitation={openInvitation} />
          </div>
        ) : (
          <div className="bg">
            <div className="">
              <Home />
              <Intro />
              <AkadReception />
              <Gallery />
              <LoveStory />
              <Gift />
              <Wishes />
              <End />
            </div>
            <div onClick={toggleMusic} className={`fixed bottom-28 right-10 bg-rose-950 w-8 h-8 cursor-pointer rounded-full shadow-btn text-white flex justify-center items-center`}>
              {isPlaying ? <GiLoveSong className="text-xl animate-spin" /> : <FaPlay className="text-base" />}
            </div>
            {/* bottom bar */}
            <div className="flex justify-center z-50">
              <ul className="bg-slate-100/70 border-rose-900 border-2 rounded-xl fixed bottom-1 lg:w-[40%] w-[90%] flex gap-1 justify-evenly px-2 py-2 shadow-ku">
                <li className="bg-rose-950 p-2 rounded-lg cursor-pointer">
                  <a href="#home">
                    <IoHome className="text-3xl text-white" />
                  </a>
                </li>
                <li className="bg-rose-950 p-2 rounded-lg cursor-pointer">
                  <a href="#intro">
                    <GiSelfLove className="text-3xl text-white" />
                  </a>
                </li>
                <li className="bg-rose-950 p-2 rounded-lg cursor-pointer">
                  <a href="#akadReception">
                    <MdOutlineEventAvailable className="text-3xl text-white" />
                  </a>
                </li>
                <li className="bg-rose-950 p-2 rounded-lg cursor-pointer">
                  <a href="#gallery">
                    <IoMdPhotos className="text-3xl text-white" />
                  </a>
                </li>
                <li className="bg-rose-950 p-2 rounded-lg cursor-pointer">
                  <a href="#loveStory">
                    <GiBigDiamondRing className="text-3xl text-white" />
                  </a>
                </li>
                <li className="bg-rose-950 p-2 rounded-lg cursor-pointer">
                  <a href="#gift">
                    <FaGift className="text-3xl text-white" />
                  </a>
                </li>
                <li className="bg-rose-950 p-2 rounded-lg cursor-pointer">
                  <a href="#end">
                    <FaRegEnvelope className="text-3xl text-white" />
                  </a>
                </li>
              </ul>
            </div>
            {/* bottom bar */}
          </div>
        )}
      </div>
      <ToastContainer />
      <audio ref={audioRef} src={sounds.sound2} loop preload="auto"></audio>
    </div>
  );
};

export default Main;

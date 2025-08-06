import { motion } from "motion/react";
import SwiperWithThumbs from "./SwiperWithThumbs ";

const Gallery = () => {
  return (
    <section id="gallery" className="min-h-[100vh] flex justify-center items-start pt-5 font-noto">
      <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: false, amount: 0.3 }} className="bg-gray-100/90 w-[95%] min-h-[88vh] py-5 rounded-xl shadow-ku">
        <h1 className="text-center text-2xl mb-6 font-semibold font-one text-rose-950">Gallery</h1>
        <SwiperWithThumbs />
      </motion.div>
    </section>
  );
};

export default Gallery;

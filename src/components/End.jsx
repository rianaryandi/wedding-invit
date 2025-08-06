import { motion } from "motion/react";
import { gallery } from "../api/data";

const End = () => {
  return (
    <section id="end" className="min-h-[110vh] flex justify-center items-start pt-5  font-noto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false, amount: 0.3 }}
        className="bg-gray-100/90 w-[95%] min-h-[88vh] py-5 px-4 rounded-xl shadow-md shadow-ku"
      >
        <p className="text-center mb-6 font-semibold text-base pt-6 text-slate-900">Atas kehadiran dan do’a restu dari Bapak/Ibu/Saudara/i sekalian, kami mengucapkan Terima Kasih.</p>
        <p className="text-center text-rose-950 font-bold text-lg mb-6">Wassalamu’alaikum Wr. Wb.</p>
        <div>
          <motion.img
            initial={{ opacity: 0, rotateY: 90 }}
            whileInView={{ opacity: 1, rotateY: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            src={gallery.gallery5}
            alt="couple"
            className="rounded-full object-cover h-70 w-70 mx-auto shadow-btn "
          />
        </div>
        <p className="text-center mb-3 font-semibold text-base pt-6 text-slate-900">Kami yang berbahagia</p>
        <motion.p initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} viewport={{ once: false, amount: 0.3 }} className="text-center text-rose-950 font-semibold text-2xl font-one">
          Romeo & Juliete
        </motion.p>
      </motion.div>
    </section>
  );
};

export default End;

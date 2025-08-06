import { motion } from "motion/react";

const LoveStory = () => {
  return (
    <section id="loveStory" className="min-h-[100vh] flex justify-center items-start pt-5 font-noto">
      <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: false, amount: 0.3 }} className="bg-gray-100/90 w-[95%] min-h-[88vh] py-5 rounded-xl shadow-md shadow-ku">
        <motion.h1 initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} viewport={{ once: false, amount: 0.3 }} className="text-center text-5xl mb-6 font-bold font-great text-rose-950">
          Love Story
        </motion.h1>
        <div className="flex justify-center gap-4 items-center flex-col">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            className="bg-rose-900/10 w-[94%] shadow-ku rounded-bl-3xl rounded-tr-3xl px-4 py-2"
          >
            <p className="font-one text-lg text-rose-950 font-semibold">Awal Bertemu</p>
            <p className="font-semibold">25 Agustus 2021</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque explicabo optio tempore nemo, repellendus maxime? Cumque.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            className="bg-rose-900/10 w-[94%] shadow-ku rounded-bl-3xl rounded-tr-3xl px-4 py-2"
          >
            <p className="text-right font-one text-lg text-rose-950 font-semibold">Komitmen</p>
            <p className="text-right  font-semibold">25 Agustus 2024</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque explicabo optio tempore nemo, repellendus maxime? Cumque.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            className="bg-rose-900/10 w-[94%] shadow-ku rounded-bl-3xl rounded-tr-3xl px-4 py-2"
          >
            <p className="font-one text-lg text-rose-950 font-semibold">Lamaran</p>
            <p className="font-semibold">25 Agustus 2025</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque explicabo optio tempore nemo, repellendus maxime? Cumque.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            className="bg-rose-900/10 w-[94%] shadow-ku rounded-bl-3xl rounded-tr-3xl px-4 py-2"
          >
            <p className="text-right font-one text-lg text-rose-950 font-semibold">The Wedding</p>
            <p className="text-right font-semibold">05 November 2025</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque explicabo optio tempore nemo, repellendus maxime? Cumque.</p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default LoveStory;

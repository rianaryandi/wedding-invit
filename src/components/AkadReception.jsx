import { IoLocationSharp } from "react-icons/io5";

const AkadReception = () => {
  return (
    <section id="akadReception" className="min-h-[100vh] flex justify-center items-start pt-5 font-noto">
      <div className="bg-gray-100/80 w-[95%] min-h-[88vh] py-5 rounded-xl shadow-md">
        <h1 className="text-center text-2xl mb-6 font-semibold font-one text-rose-950">Acara Kami</h1>
        <div className="flex flex-col gap-8  px-4">
          <div className="bg-transparent shadow-ku rounded-xl p-4 pb-8">
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
              <p>Alamat</p>
              <p className="font-semibold text-rose-950">Masjid Agung Tuban</p>
              <p className="mb-2">Jl. Nama Jalan dan Nomor Jalan</p>
              <a href="" className="flex justify-center items-center bg-rose-950 text-slate-50 px-4 py-1 rounded-lg">
                <IoLocationSharp className="mr-1" />
                Lihat Lokasi
              </a>
            </div>
          </div>
          <div className="bg-transparent shadow-ku rounded-xl p-4 pb-8">
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
              <h2 className="font-one text-rose-950 text-xl">Resepsi</h2>
              <p className="">Pukul 11.00 WIB - Selesai</p>
              <p>Alamat</p>
              <p className="font-semibold text-rose-950">Pendopo Kridha Manunggal</p>
              <p className="mb-2">Jl. Nama Jalan dan Nomor Jalan</p>
              <a href="#" className="flex justify-center items-center bg-rose-950 text-slate-50 px-4 py-1 rounded-lg">
                <IoLocationSharp className="mr-1" />
                Lihat Lokasi
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AkadReception;

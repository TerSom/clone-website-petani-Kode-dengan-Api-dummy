import IconPetani from "../assets/petanikode-hero.svg";

const Hero = () => {
  return (
    <div className="bg-slate-800 text-white w-full h-[470px] flex justify-center items-center">
      <div className="w-[46%]  h-full flex flex-col justify-center gap-3.5">
        <h1 className="text-6xl font-bold">Petani Kode</h1>
        <p className="text-[25px] font-extralight">
          Belajar budidaya kode (coding) dengan tutorial yang mudah dipahami.
          Mostly pakai Linux.
        </p>
        <div className="flex gap-2 ">
          <button className="bg-teal-600 rounded-[10px] h-11 w-[120px] text-white flex  items-center justify-center hover:bg-teal-700 cursor-pointer ">
            Mulai Belajar
          </button>
          <button className="bg-teal-400/10 border-teal-600 border-1 rounded-[10px] h-11 w-[140px] text-white hover:bg-teal-700 cursor-pointer items-center flex justify-center">
            Join Newsletter
          </button>
        </div>
      </div>
      <div className="w-[46%] h-full items-center flex justify-center ">
        <img
          className="h-[400px] mt-[240px] ml-[120px]"
          src={IconPetani}
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;

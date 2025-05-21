const CardKonten = () => {
  return (
    <div className="">
      <div className="h-[500px] w-full flex justify-center text-slate-900 dark:text-white">
        <div className="w-[92%] h-[300px] mt-20">
          <div className="flex flex-col gap-2.5">
            <p className="font-bold uppercase text-teal-600 dark:text-teal-400 text-sm">
              Kategori
            </p>
            <h1 className="font-bold text-[28px]">Mau belajar apa hari ini?</h1>
            <p className="text-lg  text-slate-500 font-medium">
              Temukan tutorial berdasarkan minatmu.
            </p>
          </div>
          <div className=" h-full items-center grid grid-cols-3 gap-6">
            <div className="dark:bg-slate-800 bg-white h-[74%]  rounded-2xl items-center justify-center flex cursor-pointer">
              <div className=" w-[85%] h-[80%] flex flex-col gap-3">
                <div className=" w-[45px] h-[45px] bg-purple-900 rounded-[10px] flex items-center justify-center ">
                  <i className="text-2xl bx bx-code-alt"></i>
                </div>
                <h1 className="">Basic Programming</h1>
                <p className="font-light">
                  Baca tutorial dasar-dasar pemrograman menggunakan C, C++, C#,
                  Java, Javascript, dan masih banyak lagi.
                </p>
              </div>
            </div>
            <div className="dark:bg-slate-800 bg-white h-[74%] rounded-2xl items-center justify-center flex">
              <div className=" w-[85%] h-[80%] flex flex-col gap-3">
                <div className=" w-[45px] h-[45px] bg-orange-500 rounded-[10px] flex items-center justify-center ">
                  <i className="text-2xl bx bx-globe"></i>
                </div>
                <h1 className="">Web Programming</h1>
                <p className="font-light">
                  Baca tutorial cara membuat web. Mulai dari HTML, CSS, JS, PHP,
                  MySQL, Codeigniter, React, dan masih banyak lagi.
                </p>
              </div>
            </div>
            <div className="dark:bg-slate-800 bg-white h-[74%] rounded-2xl items-center justify-center flex">
              <div className=" w-[85%] h-[80%] flex flex-col gap-3">
                <div className=" w-[45px] h-[45px] bg-blue-400 rounded-[10px] flex items-center justify-center ">
                  <i className="text-2xl bx bx-folder-open"></i>
                </div>
                <h1 className="">Tutorial lainya</h1>
                <p className="font-light">
                  Baca tutorial dalam kategori lainnya seperti Mobile
                  programming, Game programming, IoT, Blockhain, dan masih
                  banyak lagi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-full w-full flex justify-center text-white ">
        <div className="w-[92%] flex flex-col gap-3">
          <p className="font-bold uppercase text-teal-600 dark:text-teal-400 text-sm">
            Update
          </p>
          <h1 className="font-bold text-[28px] text-slate-900 dark:text-white">
            Apa yang baru di Petani Kode? 🔥
          </h1>
          <p className="text-lg  text-slate-500 font-medium">
            Baca artikel terbaru yang masih fresh dan hangat.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardKonten;

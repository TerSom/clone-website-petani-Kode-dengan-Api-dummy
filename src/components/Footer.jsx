import IconFooter from "../assets/nigga.png";

const Footer = () => {
  return (
    <div className="">
      <div className="bg-slate-800 w-full h-[350px] mt-[70px] flex justify-center items-center">
        <div className="w-[97%] h-[75%] text-white flex flex-col gap-14">
          <div className=" flex">
            <div className="w-[25%] ">
              <img src={IconFooter} alt="" />
              <p className="ml-5">
                Tempat belajar budidaya kode (coding) dengan tutorial yang
                gampang dipahami.
              </p>
            </div>
            <div className="w-[75%] justify-center flex items-center">
              <div className="h-full w-[80%] flex justify-between">
                <div className="flex flex-col gap-3">
                  <h1 className="font-bold text-xl">Belajar</h1>
                  <a className="hover:text-teal-700 " href="">Atikel</a>
                  <a className="hover:text-teal-700 " href="">Toturial</a>
                  <a className="hover:text-teal-700 " href="">Buku</a>
                </div>
                <div className="flex flex-col gap-3">
                  <h1 className="font-bold text-xl">Popular Tutorial</h1>
                  <a className="hover:text-teal-700 " href="">Tutorial Bahasa C</a>
                  <a className="hover:text-teal-700 " href="">Tutorial Javascript</a>
                  <a className="hover:text-teal-700 " href="">Tutorial Java</a>
                  <a className="hover:text-teal-700 " href="">Tutorial PHP</a>
                  <a className="hover:text-teal-700 " href="">Tutorial Python</a>
                </div>
                <div className="flex flex-col gap-3">
                  <h1 className="font-bold text-xl">Social Media</h1>
                  <a className="hover:text-teal-700 " href="">Facebook Page</a>
                  <a className="hover:text-teal-700 " href="">Instagram</a>
                  <a className="hover:btextteal-700 " href="">Twitter</a>
                  <a className="hover:text-teal-700 " href="">Youtube Channel</a>
                  <a className="hover:text-teal-700 " href="">Telegram Channel</a>
                </div>
                <div className="flex flex-col gap-3">
                  <h1 className="font-bold text-xl">Petani Kode</h1>
                  <a className="hover:text-teal-700 " href="">About</a>
                  <a className="hover:text-teal-700 " href="">FAQs</a>
                  <a className="hover:text-teal-700 " href="">Contact</a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center ">
            <hr
              style={{
                borderTop: "0.2px solid grey",
                borderBottom: "none",
                borderLeft: "none",
                borderRight: "none",
                width: "98%",
              }}
            />
          </div>
        </div>
      </div>
      <div className="bg-slate-800 w-full h-[149px] flex justify-center items-center">
        <div className="h-full w-[92%] flex flex-col justify-center items-center text-white gap-5 mb-10">
            <p className="text-xs">Ikuti Kami di</p>
            <div className="gap-5  flex">
            <i className='inline-block cursor-pointer hover:bg-[#3b5998] rounded-full p-2 bg-white/10 hover:text-white bx bxl-facebook-circle'></i>
            <i className='inline-block cursor-pointer hover:bg-[#3b5998] rounded-full p-2 bg-white/10 hover:text-white bx bxl-twitter' ></i>
            <i className='inline-block cursor-pointer hover:bg-[#3b5998] rounded-full p-2 bg-white/10 hover:text-white bx bxl-telegram' ></i>
            <i className='inline-block cursor-pointer hover:bg-[#3b5998] rounded-full p-2 bg-white/10 hover:text-white bx bxl-instagram' ></i>
            <i className='inline-block cursor-pointer hover:bg-[#3b5998] rounded-full p-2 bg-white/10 hover:text-white bx bxl-youtube' ></i>
            </div>
            <span className="text-xs">
            © {new Date().getFullYear()} <a className="font-bold hover:text-teal-700" href="">Petani Kode</a><span> · Made with ❤️ using Hugo 0.134.0</span>
            </span> 
        </div>
      </div>
    </div>
  );
};

export default Footer;

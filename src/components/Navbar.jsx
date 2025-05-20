import IconUtama from "../assets/SSicon.png";




const Navbar = () => {
  return (
    <div className= "fixed bg-teal-600 dark:bg-teal-900 w-full h-14 flex justify-between items-center px-12 ">
      <div className="flex gap-4">
        <img src={IconUtama} alt="" />
        <div className="flex gap-4 items-center text-white">
          <div className="flex items-center gap-2 hover:bg-teal-700  p-2 rounded-xl">
            <i className='text-xl bx bx-home'></i>
            <a href="">Home</a>
          </div>
          <div className="flex items-center gap-2 hover:bg-teal-700  p-2 rounded-xl">
            <i className='text-xl bx bx-play-circle' ></i>
            <a href="">Kelas</a>
          </div>
          <div className="flex items-center gap-2 hover:bg-teal-700  p-2 rounded-xl">
            <i className='text-xl bx bxs-file-pdf'></i>
            <a href="">Toturial</a>
          </div>
          <div className="flex items-center gap-2 hover:bg-teal-700  p-2 rounded-xl">
            <i className='text-xl bx bx-book-open'></i>
            <a href="">Buku</a>
          </div>
          <div className="flex items-center gap-2 hover:bg-teal-700  p-2 rounded-xl">
            <i className='text-xl bx bxl-discord-alt' ></i> 
            <a href="">Discord</a>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center gap-3 mr-3">
        <i className='text-xl hover:bg-teal-700 p-2 rounded-full text-white bx bx-search cursor-pointer' ></i>
        <i className='text-xl text-white bx bx-sun hover:bg-teal-700  p-2 rounded-full cursor-pointer' ></i>
        <button className="bg-teal-500 flex  items-center justify-center rounded-[10px] h-10 w-[140px] text-white hover:bg-teal-700 cursor-pointer">Join Newsletter</button>
      </div>
    </div>
  );
};

export default Navbar;

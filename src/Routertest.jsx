import { Link } from "react-router-dom";

const Reacttest = () => {
  return (
    <div className="flex items-center justify-center w-full h-[100vh]  ">
      <div className="flex flex-col gap-5 justify-center items-center text-2xl bg-white w-[50%] h-[50%] rounded-2xl ">
        <p>Cuma test Router</p>
        <button className="bg-teal-400/10 border-teal-600 border-1 rounded-[10px] h-11 w-[140px]  hover:bg-teal-700 cursor-pointer items-center flex justify-center"> <Link to='/'>
        Kembali</Link></button>
      </div>
    </div>
  );
};

export default Reacttest;

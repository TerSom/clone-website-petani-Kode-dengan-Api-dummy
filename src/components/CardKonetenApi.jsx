import { Link } from "react-router-dom";

const CardKontenApi = ({ title, body, id }) => {
  return (
    <div className=" cursor-pointer bg-white dark:bg-slate-800 text-slate-900 dark:text-white flex flex-col gap-5 rounded-2xl p-6 hover:border-1 border-slate-500">
      <div className="">
        <div className="border-1 justify-center flex items-center h-[200px]">
          <p>{id}</p>
        </div>
        <Link to="/Reacttest">
          <h1 className="text-[15px] font-bold">{title}</h1>
          <p className="font-light">{body}</p>
        </Link>
      </div>
    </div>
  );
};

export default CardKontenApi;

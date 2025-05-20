const CardKontenApi = ({title,body,id}) => {
    return ( 
            <div className=" bg-slate-800 text-white flex flex-col gap-5 rounded-2xl p-6 hover:border-1 border-slate-500">
                <div className="border-1 justify-center flex items-center h-[200px]">
                <p>{id}</p>
                </div>
                <h1 className="text-[15px] font-bold">{title}</h1>
                <p className="font-light">{body}</p>
            </div>
     );
}
 
export default CardKontenApi;
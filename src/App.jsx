import { useEffect, useState } from "react";
import CardKontenApi from "./components/CardKonetenApi";
import CardKonten from "./components/CardKonten";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  const [Api, SetApi] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=21")
      .then((res) => res.json())
      .then((data) => SetApi(data));
  }, []);

  return (
    <div className="flex justify-center items-center ">
      <div className="max-w-[1920px]">
        <Navbar></Navbar>
        <Hero></Hero>
        <CardKonten></CardKonten>
        <div className="grid gap-5 mt-6 px-14 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1">
          {Api.map((item) => (
            <CardKontenApi
              key={item}
              title={item.title}
              body={item.body}
              id={item.id}
            ></CardKontenApi>
          ))}
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default App;

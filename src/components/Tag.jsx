import React, { useState } from "react";
import useGif from "../hooks/useGif";
import Spinner from "./Spinner";


const Tag = () => {
  const [tag, setTag] = useState("Dog");
  const { gif, loading, fetchData } = useGif(tag);
  return (
    <div className=" w-1/2 h-[450px] bg-blue-500 mx-auto rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]">
      <h1 className="text-3xl uppercase underline font-bold">Random {tag} Gif</h1>
      {
        loading ? (<Spinner />) : (<img src={gif} width="45%" height="45%" alt="hoii nhi mili img" />)
      }

      <input type="text" className="w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center" onChange={(event) => setTag(event.target.value)} value={tag} />
<div></div>
      <button
        onClick={() => fetchData(tag)}
        className="w-10/12 bg-white text-xl py-2 rounded-lg font-bold hover:bg-sky-700"
      >
        Generate
      </button>
    </div>
  );
};

export default Tag;

import useGif from "../hooks/useGif";
import Spinner from "./Spinner";

const API_KEY = "wrPQOFtU1ypGGIBEKmKIzs8h9d4Dde35";

const Random = () => {
  const { gif, loading, fetchData } = useGif();

  return (
    <div className="w-1/2 h-[450px] bg-green-500 mx-auto rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]">
      <h1 className="text-3xl uppercase underline font-bold">A Random Gif</h1>
      {loading ? <Spinner /> : <img src={gif}  height="50%"  width="70%" alt="nothing here!!"/>}
      <button
        onClick={() => fetchData()}
        className="w-10/12 bg-white text-xl py-2 rounded-lg font-bold hover:bg-sky-700">
        Generate
      </button>
    </div>
  );
};
export default Random;

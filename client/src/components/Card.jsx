import { MdDownloadForOffline } from "react-icons/md";
import { downloadImage } from "../utils";

const Card = ({ _id, name, prompt, photo }) => {
  function downloadImageHandler() {
    downloadImage(_id, photo);
  }

  return (
    <div className="rounded-xl group relative shadow-card hover:shadow-cardhover card">
      <img
        src={photo}
        alt={prompt}
        className="w-full h-auto object-cover rounded-xl"
      />
      <div className="group-hover:flex flex-col max-h-[94.5%] hidden absolute bottom-0 left-0 right-0 bg-[#10131f] m-2 p-4 rounded-xl transition">
        <p className="text-gray-100 overflow-y-auto text-[15px] prompt">
          {prompt}
        </p>

        <div className="mt-5 flex justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full object-cover bg-green-700 flex justify-center items-center text-gray-100 text-xs font-bold">
              {name[0]}
            </div>
            <p className="text-gray-100 text-sm capitalize">{name}</p>
          </div>
          <button
            type="button"
            onClick={downloadImageHandler}
            className="outline-none bg-transparent border-2 border-zinc-700 p-1 rounded-full"
          >
            <MdDownloadForOffline className="text-2xl text-gray-100" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;

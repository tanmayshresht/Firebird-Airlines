import { FaPlane } from "react-icons/fa";

function Logo() {
  return (
    <div className="flex items-center gap-3 cursor-pointer">
      
      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-500 to-yellow-400 flex items-center justify-center shadow-lg">
        <FaPlane className="text-white text-lg rotate-[-20deg]" />
      </div>

      <div>
        <h1 className="text-xl font-bold tracking-wide">
          Firebird
        </h1>

        <p className="text-xs text-gray-300 tracking-widest">
          AIRLINES
        </p>
      </div>

    </div>
  );
}

export default Logo;
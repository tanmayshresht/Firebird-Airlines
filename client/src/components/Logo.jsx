import { FaPlaneDeparture, FaGlobeAmericas, FaShieldAlt, FaAward } from "react-icons/fa";

function Logo() {
  return (
    <section className="bg-[#050816] py-12 border-y border-white/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 items-center justify-center text-center">
          
          <div className="flex items-center justify-center gap-3 text-gray-400 opacity-80 hover:opacity-100 transition">
            <FaGlobeAmericas className="text-orange-400 text-2xl" />
            <span className="font-bold tracking-wider text-white text-sm">GLOBAL ALLIANCE</span>
          </div>

          <div className="flex items-center justify-center gap-3 text-gray-400 opacity-80 hover:opacity-100 transition">
            <FaShieldAlt className="text-orange-400 text-2xl" />
            <span className="font-bold tracking-wider text-white text-sm">ISO 9001 CERTIFIED</span>
          </div>

          <div className="flex items-center justify-center gap-3 text-gray-400 opacity-80 hover:opacity-100 transition">
            <FaAward className="text-orange-400 text-2xl" />
            <span className="font-bold tracking-wider text-white text-sm">BEST AIRLINE 2026</span>
          </div>

          <div className="flex items-center justify-center gap-3 text-gray-400 opacity-80 hover:opacity-100 transition">
            <FaPlaneDeparture className="text-orange-400 text-2xl" />
            <span className="font-bold tracking-wider text-white text-sm">SKYTRAX 5-STAR</span>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Logo;
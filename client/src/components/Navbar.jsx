import { FaPlaneDeparture } from "react-icons/fa6";

function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className="mx-auto mt-5 flex w-[92%] max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-8 py-4 backdrop-blur-xl">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-orange-500 text-white shadow-lg shadow-orange-500/40">
            <FaPlaneDeparture size={20} />
          </div>

          <div>
            <h1 className="text-xl font-bold tracking-wide">
              Firebird Airlines
            </h1>
            <p className="text-xs text-gray-400">
              Rise Beyond Horizons
            </p>
          </div>
        </div>

        {/* Navigation */}
        <ul className="hidden gap-8 text-sm font-medium md:flex">
          <li className="cursor-pointer transition hover:text-orange-400">
            Home
          </li>

          <li className="cursor-pointer transition hover:text-orange-400">
            Flights
          </li>

          <li className="cursor-pointer transition hover:text-orange-400">
            Destinations
          </li>

          <li className="cursor-pointer transition hover:text-orange-400">
            Experience
          </li>

          <li className="cursor-pointer transition hover:text-orange-400">
            Contact
          </li>
        </ul>

        {/* Buttons */}
        <div className="hidden items-center gap-4 md:flex">
          <button className="text-gray-300 hover:text-white transition">
            Login
          </button>

          <button className="rounded-xl bg-orange-500 px-5 py-2 font-semibold transition hover:bg-orange-600">
            Book Now
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
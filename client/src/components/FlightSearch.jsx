import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiMapPin, FiCalendar, FiUsers, FiSearch } from "react-icons/fi";

const cities = [
  "New Delhi",
  "Mumbai",
  "Bengaluru",
  "Chennai",
  "Hyderabad",
  "Kolkata",
  "Dubai",
  "London",
  "New York",
  "Singapore",
];

function FlightSearch() {
  const navigate = useNavigate();

  const [searchData, setSearchData] = useState({
    from: "",
    to: "",
    date: "",
    passengers: "1 Adult",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setSearchData({ ...searchData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSearch = (e) => {
    e.preventDefault();

    if (searchData.from === searchData.to) {
      setError("Departure aur destination city same nahi ho sakti");
      return;
    }

    const queryParams = new URLSearchParams(searchData).toString();
    navigate(`/flights?${queryParams}`);
  };

  return (
    <section className="relative -mt-16 z-20 px-6 lg:px-12">
      <form
        onSubmit={handleSearch}
        className="mx-auto max-w-7xl rounded-3xl border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur-xl"
      >
        {error && (
          <p className="mb-4 text-center text-sm font-medium text-red-400">
            {error}
          </p>
        )}

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-5">

          {/* From */}
          <div className="rounded-2xl bg-[#0b1120] p-4">
            <label className="mb-2 block text-sm text-gray-400">From</label>
            <div className="flex items-center gap-2">
              <FiMapPin className="text-orange-400" />
              <select
                name="from"
                value={searchData.from}
                onChange={handleChange}
                className="w-full bg-transparent outline-none text-white"
                required
              >
                <option className="text-black" value="">
                  Select city
                </option>
                {cities.map((city) => (
                  <option className="text-black" key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* To */}
          <div className="rounded-2xl bg-[#0b1120] p-4">
            <label className="mb-2 block text-sm text-gray-400">To</label>
            <div className="flex items-center gap-2">
              <FiMapPin className="text-orange-400" />
              <select
                name="to"
                value={searchData.to}
                onChange={handleChange}
                className="w-full bg-transparent outline-none text-white"
                required
              >
                <option className="text-black" value="">
                  Select city
                </option>
                {cities.map((city) => (
                  <option className="text-black" key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Departure */}
          <div className="rounded-2xl bg-[#0b1120] p-4">
            <label className="mb-2 block text-sm text-gray-400">
              Departure
            </label>
            <div className="flex items-center gap-2">
              <FiCalendar className="text-orange-400" />
              <input
                type="date"
                name="date"
                value={searchData.date}
                onChange={handleChange}
                min={new Date().toISOString().split("T")[0]}
                className="w-full bg-transparent outline-none text-white"
                required
              />
            </div>
          </div>

          {/* Passengers */}
          <div className="rounded-2xl bg-[#0b1120] p-4">
            <label className="mb-2 block text-sm text-gray-400">
              Passengers
            </label>
            <div className="flex items-center gap-2">
              <FiUsers className="text-orange-400" />
              <select
                name="passengers"
                value={searchData.passengers}
                onChange={handleChange}
                className="w-full bg-transparent outline-none text-white"
              >
                <option className="text-black" value="1 Adult">
                  1 Adult
                </option>
                <option className="text-black" value="2 Adults">
                  2 Adults
                </option>
                <option className="text-black" value="3 Adults">
                  3 Adults
                </option>
                <option className="text-black" value="4 Adults">
                  4 Adults
                </option>
              </select>
            </div>
          </div>

          {/* Search Button */}
          <button
            type="submit"
            className="flex items-center justify-center gap-2 rounded-2xl bg-orange-500 px-6 py-4 font-semibold text-white transition hover:bg-orange-600"
          >
            <FiSearch />
            Search
          </button>
        </div>
      </form>
    </section>
  );
}

export default FlightSearch;
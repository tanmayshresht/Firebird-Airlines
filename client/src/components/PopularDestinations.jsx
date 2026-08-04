import { FaArrowRight } from "react-icons/fa";
import dubaiImg from "../assets/images/dubai.jpg";
import parisImg from "../assets/images/paris.jpg";
import tokyoImg from "../assets/images/tokyo.jpg";
import singaporeImg from "../assets/images/singapore.jpg";

function PopularDestinations() {
  const destinations = [
    {
      city: "Dubai",
      country: "United Arab Emirates",
      price: "$349",
      image: dubaiImg,
    },
    {
      city: "Paris",
      country: "France",
      price: "$459",
      image: parisImg,
    },
    {
      city: "Tokyo",
      country: "Japan",
      price: "$620",
      image: tokyoImg,
    },
    {
      city: "Singapore",
      country: "Singapore",
      price: "$399",
      image: singaporeImg,
    },
  ];

  return (
    <section id="destinations" className="relative bg-[#050816] py-24 px-6 lg:px-12">
      <div className="mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-400 mb-3">
              Top Routes
            </p>
            <h2 className="text-4xl font-extrabold text-white lg:text-5xl">
              Popular <span className="text-orange-400">Destinations</span>
            </h2>
          </div>
          <p className="text-gray-400 max-w-md text-sm leading-relaxed">
            Explore our most sought-after global locations handpicked for luxury, business, and unforgettable leisure getaways.
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {destinations.map((dest, index) => (
            <div 
              key={index}
              className="group relative h-[420px] overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl transition hover:border-orange-500/50"
            >
              {/* Background Image */}
              <img 
                src={dest.image} 
                alt={dest.city}
                className="absolute inset-h-0 h-full w-full object-cover transition duration-500 group-hover:scale-110"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-[#050816]/40 to-transparent"></div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-orange-400 mb-1">
                  {dest.country}
                </span>
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-white">
                    {dest.city}
                  </h3>
                  <span className="text-sm font-semibold text-gray-300 bg-white/10 px-3 py-1 rounded-full backdrop-blur-md">
                    From {dest.price}
                  </span>
                </div>
                
                <button className="mt-4 flex items-center gap-2 text-sm font-semibold text-orange-400 opacity-0 transform translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 cursor-pointer">
                  Book Flight <FaArrowRight size={12} />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default PopularDestinations;
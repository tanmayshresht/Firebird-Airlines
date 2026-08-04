import { FaStar, FaQuoteLeft } from "react-icons/fa";

function Testimonials() {
  const reviews = [
    {
      name: "Aarav Sharma",
      role: "Frequent Business Flyer",
      comment: "Firebird Airlines provides the most seamless booking and on-time flight experience. Their business cabin is top-notch!",
      rating: 5,
    },
    {
      name: "Sophia Martinez",
      role: "Travel Blogger",
      comment: "The overall service, from check-in to landing, was phenomenal. The destination routes and pricing are unbeatable.",
      rating: 5,
    },
    {
      name: "Liam O'Connor",
      role: "Corporate Executive",
      comment: "Incredible customer support and luxury experience. Firebird Airlines is now my go-to choice for global travel.",
      rating: 5,
    },
  ];

  return (
    <section className="relative bg-[#050816] py-24 px-6 lg:px-12 border-t border-white/10">
      <div className="mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-400 mb-3">
            Testimonials
          </p>
          <h2 className="text-4xl font-extrabold text-white lg:text-5xl">
            Loved By <span className="text-orange-400">Global Travelers</span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {reviews.map((rev, index) => (
            <div 
              key={index}
              className="relative rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition hover:border-orange-500/50 flex flex-col justify-between"
            >
              <div>
                <div className="text-orange-400 mb-6">
                  <FaQuoteLeft size={32} className="opacity-40" />
                </div>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-8">
                  &ldquo;{rev.comment}&rdquo;
                </p>
              </div>

              <div>
                <div className="flex gap-1 text-orange-400 mb-4">
                  {[...Array(rev.rating)].map((_, i) => (
                    <FaStar key={i} size={14} />
                  ))}
                </div>
                <h3 className="text-white font-bold text-lg">
                  {rev.name}
                </h3>
                <p className="text-gray-400 text-xs">
                  {rev.role}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Testimonials;
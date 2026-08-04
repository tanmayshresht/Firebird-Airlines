import { FaShieldAlt, FaPlane, FaHeadset, FaClock } from "react-icons/fa";

function Features() {
  const featuresList = [
    {
      icon: <FaShieldAlt className="text-orange-400 text-3xl" />,
      title: "Safe & Secure Travel",
      description: "Your safety is our topmost priority with rigorous maintenance and global safety standards.",
    },
    {
      icon: <FaPlane className="text-orange-400 text-3xl" />,
      title: "World-Class Fleet",
      description: "Fly in absolute comfort with our modern, spacious, and luxurious aircraft cabins.",
    },
    {
      icon: <FaClock className="text-orange-400 text-3xl" />,
      title: "On-Time Guarantee",
      description: "We value your schedule with industry-leading punctuality across all global routes.",
    },
    {
      icon: <FaHeadset className="text-orange-400 text-3xl" />,
      title: "24/7 Customer Support",
      description: "Our dedicated concierge and support team are available around the clock to assist you.",
    },
  ];

  return (
    <section className="relative bg-[#050816] py-24 px-6 lg:px-12">
      <div className="mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-400 mb-3">
            Why Choose Us
          </p>
          <h2 className="text-4xl font-extrabold text-white lg:text-5xl">
            Elevating Your Journey <span className="text-orange-400">Every Step</span>
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {featuresList.map((feature, index) => (
            <div 
              key={index}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition hover:border-orange-500/50 hover:bg-white/10"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500/10 border border-orange-500/20">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Features;
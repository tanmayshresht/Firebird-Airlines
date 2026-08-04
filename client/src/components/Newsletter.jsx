import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="relative bg-[#050816] py-20 px-6 lg:px-12">
      <div className="mx-auto max-w-5xl rounded-3xl border border-white/10 bg-gradient-to-r from-orange-500/10 via-white/5 to-blue-500/10 p-10 md:p-16 backdrop-blur-xl shadow-2xl relative overflow-hidden">
        
        {/* Glow Effects */}
        <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-orange-500/20 blur-3xl"></div>
        <div className="absolute -left-20 -bottom-20 h-60 w-60 rounded-full bg-blue-500/20 blur-3xl"></div>

        <div className="relative z-10 text-center max-w-2xl mx-auto">
          <span className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-400 mb-3 block">
            Stay Updated
          </span>
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl mb-4">
            Get Exclusive Flight Deals & Offers
          </h2>
          <p className="text-gray-300 text-sm md:text-base mb-8">
            Subscribe to our newsletter and receive secret discounts, flight alerts, and travel inspiration straight to your inbox.
          </p>

          {submitted ? (
            <div className="rounded-2xl bg-orange-500/20 border border-orange-500/40 p-4 text-orange-300 font-semibold">
              Thank you for subscribing! Check your inbox soon for exclusive deals.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 justify-center">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="rounded-2xl border border-white/10 bg-[#0b1120] px-6 py-4 text-white placeholder-gray-500 outline-none focus:border-orange-500 w-full sm:w-80"
              />
              <button
                type="submit"
                className="flex items-center justify-center gap-2 rounded-2xl bg-orange-500 px-8 py-4 font-semibold text-white transition hover:bg-orange-600 cursor-pointer shadow-lg shadow-orange-500/30"
              >
                <FaPaperPlane />
                Subscribe
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}

export default Newsletter;
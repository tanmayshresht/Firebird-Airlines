import { Link } from "react-router-dom";
import { FaPlaneDeparture, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

function Footer() {
  return (
    <footer id="contact" className="relative bg-[#03050c] pt-20 pb-10 border-t border-white/10 text-gray-400">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5 mb-16">
          
          {/* Brand Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6 inline-block">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-500 text-white shadow-lg shadow-orange-500/40">
                <FaPlaneDeparture size={22} />
              </div>
              <div>
                <h1 className="text-xl font-bold tracking-wide text-white">
                  Firebird Airlines
                </h1>
                <p className="text-xs text-gray-400">
                  Rise Beyond Horizons
                </p>
              </div>
            </Link>
            <p className="text-sm leading-relaxed mb-6 max-w-sm text-gray-400">
              Experience world-class luxury and safety with Firebird Airlines. Connecting you to over 150+ destinations globally with ultimate comfort.
            </p>
            <div className="flex gap-4">
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white transition hover:bg-orange-500 hover:border-orange-500">
                <FaFacebookF size={16} />
              </a>
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white transition hover:bg-orange-500 hover:border-orange-500">
                <FaTwitter size={16} />
              </a>
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white transition hover:bg-orange-500 hover:border-orange-500">
                <FaInstagram size={16} />
              </a>
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white transition hover:bg-orange-500 hover:border-orange-500">
                <FaLinkedinIn size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <Link to="/" className="transition hover:text-orange-400">Home</Link>
              </li>
              <li>
                <Link to="/flights" className="transition hover:text-orange-400">Flights</Link>
              </li>
              <li>
                <a href="#destinations" className="transition hover:text-orange-400">Destinations</a>
              </li>
              <li>
                <Link to="/dashboard" className="transition hover:text-orange-400">My Dashboard</Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-semibold mb-6">Support</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="transition hover:text-orange-400">Help Center</a></li>
              <li><a href="#" className="transition hover:text-orange-400">Safety Information</a></li>
              <li><a href="#" className="transition hover:text-orange-400">Cancellation Options</a></li>
              <li><a href="#" className="transition hover:text-orange-400">Contact Us</a></li>
            </ul>
          </div>

          {/* Legal / Policy */}
          <div>
            <h4 className="text-white font-semibold mb-6">Policies</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="transition hover:text-orange-400">Privacy Policy</a></li>
              <li><a href="#" className="transition hover:text-orange-400">Terms of Service</a></li>
              <li><a href="#" className="transition hover:text-orange-400">Cookie Policy</a></li>
              <li><a href="#" className="transition hover:text-orange-400">Security</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Firebird Airlines. All rights reserved.</p>
          <p className="mt-4 md:mt-0">Designed with modern web standards for a seamless booking experience.</p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
import { Link } from "react-router-dom";
import { FaPlaneSlash, FaHome } from "react-icons/fa";

function NotFound() {
  return (
    <div className="min-h-screen bg-[#050816] text-white flex items-center justify-center px-6 text-center">
      <div className="max-w-md">
        <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-orange-500/10 border border-orange-500/20 text-orange-400 mx-auto mb-6">
          <FaPlaneSlash size={36} />
        </div>
        <h1 className="text-6xl font-extrabold text-orange-400 mb-2">404</h1>
        <h2 className="text-2xl font-bold mb-4">Page Not Found</h2>
        <p className="text-gray-400 text-sm mb-8">
          Oops! Looks like this flight route doesn&apos;t exist or has been cancelled. Let&apos;s get you back on track.
        </p>
        <Link 
          to="/"
          className="inline-flex items-center gap-2 rounded-2xl bg-orange-500 px-8 py-4 font-semibold text-white transition hover:bg-orange-600 shadow-lg shadow-orange-500/30"
        >
          <FaHome /> Back to Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
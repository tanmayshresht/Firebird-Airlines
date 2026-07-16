function Hero() {
  return (
<section className="min-h-screen pt-32 bg-[#050816] text-white flex flex-col justify-center items-center text-center px-6">
      <h1 className="text-6xl font-extrabold">
        Fly Beyond Every Horizon
      </h1>

      <p className="mt-6 text-xl text-gray-300 max-w-2xl">
        Welcome to Firebird Airlines. Experience luxury, innovation,
        and world-class travel.
      </p>

      <button className="mt-10 bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-xl text-lg">
        Book Your Flight
      </button>
    </section>
  );
}

export default Hero;
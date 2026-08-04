import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FlightSearch from "../components/FlightSearch";
import Features from "../components/Features";
import PopularDestinations from "../components/PopularDestinations";
import Testimonials from "../components/Testimonials";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <FlightSearch />
      <Features />
      <PopularDestinations />
      <Testimonials />
      <Newsletter />
      <Footer />
    </>
  );
}

export default Home;
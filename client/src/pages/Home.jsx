import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

function Home() {
  return (
    <div style={{ background: 'var(--ink, #14110F)', color: 'var(--cream, #F4EDE4)', minHeight: '100vh' }}>
      <Hero />
      <Features />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default Home;
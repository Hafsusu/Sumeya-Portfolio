import Navbar from './components/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Footer from './components/Footer';
import Qualifications from './components/sections/Qualifications';
import Services from './components/sections/Services';
import Skills from './components/sections/Skills';
import Contact from './components/sections/Contact';
import Portfolio from './components/sections/Portfolio';
import Testimonials from './components/sections/Testimonials';

function App() {
  return (
    <div className="min-h-screen bg-primary-50">
      <Navbar />
      <main className='overflow-x-hidden'>
        <Hero />
        <About />
        <Qualifications />
        <Skills />
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
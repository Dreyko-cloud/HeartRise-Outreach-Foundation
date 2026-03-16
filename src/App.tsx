import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Mission from './components/Mission';
import Team from './components/Team';
import Gallery from './components/Gallery';
import Impact from './components/Impact';
import HowToHelp from './components/HowToHelp';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <Mission />
        <Team />
        <Gallery />
        <Impact />
        <HowToHelp />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

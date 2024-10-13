import Companies from './components/Companies';
import Contact from './components/Contact';
import Footer from './components/Footer';
import GradientBackground from './components/global/GradientBackground';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import TechStack from './components/TechStack';
import WhyUs from './components/WhyUs';

function App() {
  return (
    <>
      <GradientBackground>
        <Navbar />
        <Hero />
        <WhyUs />
        <TechStack />
        <Profile />
        <Companies />
        <Contact />
        <Footer />
      </GradientBackground>
    </>
  );
}

export default App;

import './App.css';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import Services from './components/Services';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomePage />
      <Services />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

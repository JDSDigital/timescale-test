import heroBackground from "./images/hero-background.jpg";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainSection from "./components/MainSection";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <Header />
      <img src={heroBackground} alt="hero-background" />
      <MainSection />
      <Footer />
    </div>
  );
}

export default App;

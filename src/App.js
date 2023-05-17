import "./App.css";
import About from "./components/About";
import Awards from "./components/Awards";
import Chef from "./components/Chef";
import FindUs from "./components/FindUs";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Today from "./components/Today";
import gLetter from "./images/g-letter.png";
import homeVideo from "./images/video.mp4";

function App() {
  return (
    <div className="App">
      <div className="main-container">
        <Navbar />
        <Home />
        <About />
        <Today />
        <Chef />
        <video
          autoPlay
          loop
          muted
          defaultmuted="true"
          playsinline
          preload="auto"
          className="home-video"
        >
          <source src={homeVideo} type="video/mp4" />
          Sorry, your browser doesn't support videos.
        </video>
        <Awards />
        <Gallery />
        <FindUs />
        <Footer />
      </div>
    </div>
  );
}

export default App;

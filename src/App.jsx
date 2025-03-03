import Navbar from "./components/Navbar";
import Footer from "../pages/Footer";
import Home from "../pages/Home";
import AboutMe from "../pages/AboutMe";
import Gallery from "../pages/Gallery";
import Feedback from "../pages/Feedback";
import SocMed from "../pages/SocMed";

function App() {
  return (
    <div className="bg-gray-950">
      <Navbar/>
      <section id="home"><Home/></section>
      <section id="aboutme"><AboutMe/></section>
      <section id="gallery"><Gallery/></section>
      <section id="socialmedia"><SocMed/></section>
      <section id="feedback"><Feedback/></section>
      <Footer />
    </div>
  );
}

export default App;

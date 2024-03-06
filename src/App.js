import "./App.css";
import Background from "./Components/Background";
import Project from "./Components/Project";
import Review from "./Components/Review";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Navbarss from "./Components/Navbarss";

function App() {
  return (
    <div className="App">
      <Navbarss />
      <Background />
      <Project />
      <Review />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

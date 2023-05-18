import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  Works2,
  StarsCanvas,
  Works3,
  Works4,
  Works5,
} from "./components";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Footer />
          <Hero />
         
        </div>
        <About />  
        <Experience />
        <Tech />
        <Works />
        <Works2 />
        <Works3 />
        <Works4 />
        <Works5 />
        <Feedbacks />
        <Footer />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;

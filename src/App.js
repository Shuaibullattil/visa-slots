import Navbar from "./components/Navbar";
import Herosection from "./components/Herosection";
import OurServices from "./components/OurServices";
import Benefits from "./components/Benefits";
import Footer from "./components/Footer";


export default function App() {
  return (
    <div className="py-2">
      <Navbar />
      <Herosection />
      <OurServices />
      <Benefits />
      <Footer />
    </div>
  );
}
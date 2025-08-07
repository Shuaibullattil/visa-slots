import Navbar from "./components/Navbar";
import Herosection from "./components/Herosection";
import OurServices from "./components/OurServices";
import Benefits from "./components/Benefits";
import Footer from "./components/Footer";
export default function App() {
  return (
    <div className="relative mt-4 md:mt-12">
      <div className="fixed md:top-0 w-full z-50 bg-transparent">
        <Navbar />
      </div>
      <Herosection />
      <OurServices />
      <Benefits />
      <Footer />
    </div>
  );
}
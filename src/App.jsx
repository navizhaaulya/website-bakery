import { Routes } from "react-router-dom";
import Footer from "./components/footer/footer";
import Navbar from "./components/navbar/Navbar";
import Homepage from "./components/section/Homepage";

function App() {
  return (
    <>
      <div className="overflow-x-hidden flex flex-col min-h-screen">
        <Navbar />
        <Homepage />
        <Footer />
      </div>
    </>
  );
}

export default App;

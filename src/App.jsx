import { Routes, Route } from "react-router-dom";

import Footer from "./components/footer/footer";
import Navbar from "./components/navbar/Navbar";
import Homepage from "./pages/Homepage";
import Katalog from "./pages/Katalog";

function App() {
  return (
    <div className="overflow-x-hidden flex flex-col min-h-screen">
      <Navbar />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/catalogue" element={<Katalog />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
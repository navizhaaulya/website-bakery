import { Routes, Route } from "react-router-dom";

import Footer from "./components/footer/footer";
import Navbar from "./components/navbar/Navbar";
import Homepage from "./pages/Homepage";
import Katalog from "./pages/Katalog";
import Bantuan from "./pages/Bantuan";
import WhatsApp from "./components/whatsapp/WhatsApp";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="overflow-x-hidden flex flex-col min-h-screen">
      {/* di luar tag routes = selalu tampil, urut sesuai pemanggilan */}
      <Navbar />
      <WhatsApp />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/catalogue" element={<Katalog />} />
        <Route path="/faq" element={<Bantuan />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;

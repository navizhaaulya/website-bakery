import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Homepage from "./pages/Homepage";

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

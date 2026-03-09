import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 pb-0 text-base lg:text-sm">
      {/* versi desktop */}
      <div className="hidden lg:block mb-8">
        <div className="container mx-auto px-6 lg:px-28 flex justify-between items-start">
          {/* teks nama & alamat */}
          <div className="flex flex-col">
            <h2 className="text-xl font-bold mb-2">ALZAM BUTTER COOKIES</h2>
            <p className="text-sm leading-relaxed">
              JL. Seroja Timur, Karangkidul, <br />
              Semarang Tengah, Kota Semarang
            </p>
          </div>

          {/* produk */}
          <div>
            <h3 className="text-lg font-medium mb-2">Produk</h3>
            <ul className="space-y-1">
              <li>
                <a href="#kategori">Kategori</a>
              </li>
              <li>
                <a href="/katalog">Katalog</a>
              </li>
            </ul>
          </div>

          {/* menu */}
          <div>
            <h3 className="text-lg font-medium mb-2">Menu</h3>
            <ul className="space-y-1">
              <li>
                <a href="/riwayat">Riwayat</a>
              </li>
              <li>
                <a href="/bantuan">Bantuan</a>
              </li>
            </ul>
          </div>

          {/* kontak */}
          <div>
            <h3 className="text-lg font-medium mb-2">Kontak</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <IoLogoWhatsapp className="text-xl" />
                082220384829
              </li>
              <li className="flex items-center gap-2">
                <FaFacebook className="text-xl" />
                Andis Saputra
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* versi mobile */}
      <div className="lg:hidden flex flex-col items-center text-center space-y-4 mb-4">
        <div className="flex flex-col items-center text-center mt-0 space-y-4">
          <div className="text-center items-center">
            <h2 className="text-xl font-bold mb-2">ALZAM BUTTER COOKIES</h2>
            <p className="text-sm leading-relaxed mb-4">
              JL. Seroja Timur, Karangkidul, <br />
              Semarang Tengah, Kota Semarang
            </p>
          </div>
          <ul className="flex flex-wrap justify-center gap-4 p-2">
            {["Kategori", "Katalog", "Riwayat", "Bantuan", "Profil"].map(
              (item, index) => (
                <li key={index}>
                  <a href="#" className="">
                    {item}
                  </a>
                </li>
              ),
            )}
          </ul>
          {/* kontak */}
          <div className="flex space-x-4">
            <a
              href="https://wa.me/6282220384829"
              className="text-xl transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoWhatsapp />
            </a>
            <a
              href="https://www.facebook.com/andis.saputra.9400984"
              className="text-xl transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

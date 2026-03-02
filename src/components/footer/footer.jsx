import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-8 pb-0 text-base lg:text-sm">
      {/* versi desktop */}
      <div className="hidden lg:block">
        <div className="container mx-auto px-6 lg:px-28 flex justify-between items-start">
          {/* teks nama & alamat */}
          <div className="flex flex-col">
            <h2 className="text-xl font-bold mb-2">TB. NOTO 19</h2>
            <p className="text-sm leading-relaxed">
              Bancak, Payaman, Kec. Mejobo, <br />
              Kabupaten Kudus, Jawa Tengah
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
                <a href="/keranjang">Keranjang</a>
              </li>
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
                0882003826565
              </li>
              <li className="flex items-center gap-2">
                <FaFacebook className="text-xl" />
                sumadi.679727
              </li>
              <li className="flex items-center gap-2">
                <AiFillTikTok className="text-xl" />
                sumadisumadi8655
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* versi mobile */}
      <div className="lg:hidden flex flex-col items-center text-center space-y-4">
        <div className="flex flex-col items-center text-center mt-0 space-y-4">
          <div className="text-center items-center">
            <h2 className="text-xl font-bold mb-2">TB. NOTO 19</h2>
            <p className="text-sm leading-relaxed mb-4">
              Bancak, Payaman, Kec. Mejobo, Kabupaten <br />
              Kudus, Jawa Tengah
            </p>
          </div>
          <ul className="flex flex-wrap justify-center gap-4 p-2">
            {[
              "Kategori",
              "Katalog",
              "Keranjang",
              "Riwayat",
              "Bantuan",
              "Profil",
            ].map((item, index) => (
              <li key={index}>
                <a href="#" className="">
                  {item}
                </a>
              </li>
            ))}
          </ul>
          {/* kontak */}
          <div className="flex space-x-4">
            <a
              href="https://wa.me/62882003826565"
              className="text-xl transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoWhatsapp />
            </a>
            <a
              href="https://www.facebook.com/sumadi.679727"
              className="text-xl transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.tiktok.com/@sumadisumadi8655"
              className="text-xl transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillTikTok />
            </a>
          </div>
        </div>
      </div>

      {/* copyright */}
      <div className="bg-black text-center text-white py-4 mt-4">
        <p className="text-sm">
          Copyright © 2025{" "}
          <a href="/" className="text-blue-400 ">
            Tambah Barokah
          </a>
          . All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

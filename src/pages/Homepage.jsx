import bgImage from "../components/assets/hero-section.jpg";
import mainImg from "../components/assets/about-us.jpg";
import ProductCard from "../components/elements/ProductCard";
import nastar from "../components/assets/nastar.png";
import kastengel from "../components/assets/kastengel.png";
import salju from "../components/assets/salju.png";
import Card from "../components/elements/Card";

const topProducts = [
  { name: "Nastar", image: nastar },
  { name: "Kastengel", image: kastengel },
  { name: "Putri Salju", image: salju },
  { name: "Kastengel", image: kastengel },
  { name: "Putri Salju", image: salju },
];

const Homepage = () => {
  return (
    <>
      {/* hero section */}
      <section
        className="h-screen w-screen bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div>
          <p className="slogan text-4xl text-center pt-20 font-semibold">
            Alzam B'Cookies
          </p>
          <p className="deskslogan text-center font-medium text-2xl">
            Premium Cookies for Your Festive Moments
          </p>
        </div>
      </section>

      {/* about us */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto flex items-center justify-center gap-24">
          <img src={mainImg} alt="Logo" className="w-80 rounded-xl shadow-lg" />
          <div>
            <h2 className="text-3xl font-bold mb-4">About Us</h2>
            <p className="max-w-md">
              Our journey began with a simple love for baking and sharing
              homemade treats. Over time, what started in a small kitchen grew
              through the support of those who enjoyed our cookies. Today, we
              continue to craft premium butter cookies and traditional
              delicacies with the same care, quality, and homemade warmth in
              every batch.
            </p>
          </div>
        </div>
      </section>

      {/* top products */}
      <section className="">
        <div>
          <h1 className="font-bold text-3xl text-center">Best Seller</h1>
        </div>
        <ProductCard products={topProducts} />
      </section>

      {/* testimoni */}
      <section className="py-20">
        <h2 className="text-3xl font-bold text-center mb-10">
          Testimoni Pelanggan
        </h2>
        <div className="flex justify-center gap-4">
          <Card className="w-64">
            <div className="text-yellow-400 mb-2">⭐⭐⭐⭐⭐</div>
            <p className="text-gray-600 text-sm">
              Kue nastarnya benar-benar enak! Teksturnya lembut dan isi selai
              nanasnya terasa pas, tidak terlalu manis tapi tetap nikmat. Cocok
              banget untuk disajikan saat berkumpul bersama keluarga atau ketika
              ada tamu datang. Setelah mencobanya, keluarga saya langsung suka
              dan ingin mencicipinya lagi.
            </p>
            <h4 className="mt-4 font-semibold">- Rina</h4>
          </Card>
          <Card className="w-64">
            <div className="text-yellow-400 mb-2">⭐⭐⭐⭐⭐</div>
            <p className="text-gray-600 text-sm">
              Kastengelnya gurih banget dan aroma kejunya terasa sejak pertama
              digigit. Teksturnya renyah tapi tidak keras sehingga sangat nyaman
              dimakan. Rasanya juga tidak terlalu asin dan sangat pas di lidah.
              Menurut saya ini salah satu kastengel terbaik yang pernah saya
              coba.
            </p>
            <h4 className="mt-4 font-semibold">- Andi</h4>
          </Card>
          <Card className="w-64">
            <div className="text-yellow-400 mb-2">⭐⭐⭐⭐⭐</div>
            <p className="text-gray-600 text-sm">
              Putri saljunya lembut dan langsung lumer di mulut. Taburan gula
              halusnya pas dan tidak berlebihan sehingga tetap terasa ringan
              saat dimakan. Rasanya manis lembut dan sangat cocok dinikmati
              bersama teh atau kopi saat santai di rumah.
            </p>
            <h4 className="mt-4 font-semibold">- Sari</h4>
          </Card>
        </div>
      </section>

      {/* lokasi */}
      <section className="mb-10">
        <div className="p-8">
          <h2 className="text-3xl font-bold text-center mb-8">Lokasi Kami</h2>
          <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.169220049421!2d110.4260321741077!3d-6.989339568446815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708ca72f8460b7%3A0xddd36d89e4e68ca6!2sJl.%20Seroja%20Tim.%2C%20Karangkidul%2C%20Kec.%20Semarang%20Tengah%2C%20Kota%20Semarang%2C%20Jawa%20Tengah%2050136!5e0!3m2!1sid!2sid!4v1772957379848!5m2!1sid!2sid"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Homepage;

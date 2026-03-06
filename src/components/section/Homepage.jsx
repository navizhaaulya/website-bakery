import React from "react";
import bgImage from "../assets/bg.png";
import mainImg from "../assets/fo.png";
import Card from "../elements/Card";
import Footer from "../footer/footer";
import nastar from "../assets/nastar.png";
import kastengel from "../assets/kastengel.png";
import salju from "../assets/salju.png";

const Homepage = () => {
  return (
    <>
      {/* INTRO */}
      <section
        className="h-screen bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div>
          <p className="slogan text-4xl text-center pt-20 font-semibold text-yellow-600">
            Crafted by Heart, Shared with Joy.
          </p>
          <p className="deskslogan text-center text-yellow-400 font-medium text-2xl">
            PREMIUM BUTTER COOKIES AND TRADITIONAL DELICACIES SPECIALLY MADE TO
            SWEETEN YOUR FESTIVE MOMENTS.
          </p>
          <div className="flex justify-center items-center">
            <div className="bg-amber-950 text-white rounded-lg mt-7 py-2 px-3 font-semibold">
              See Catalog
            </div>
          </div>
        </div>
      </section>

      {/* SEJARAH */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto flex items-center gap-10">
          {/* IMAGE */}
          <img src={mainImg} alt="Logo" className="w-80 rounded-xl shadow-lg" />
          <div>
            <h2 className="text-3xl font-bold mb-4">Where It All Began</h2>
            <p className="text-gray-600">
              It all started with a simple dream and a kitchen full of love. Our
              mom found her comfort in baking, turning quiet moments into
              something warm and meaningful. Every tray of cookies wasn’t just
              about the taste, it was about the feeling it brought. At first, it
              was only something small, shared with family and a few close
              people. But somehow, those same cookies kept people coming back.
              Not just because they were good, but because they felt special.
              Now, what once lived only in her kitchen has grown into something
              bigger. We still bake with the same heart, the same care, and the
              same love. Every piece we make carries a story, and now, it gets
              to be part of yours too.
            </p>
          </div>
        </div>
      </section>

      {/* Highlight Product */}
      <section className="mt-20">
        <div>
          <h1 className="font-bold text-3xl text-center">BEST SELLER</h1>
        </div>
        <div className="max-w-4xl mx-auto flex justify-center gap-4 mt-10 p-8">
          <Card className="w-2/3">
            <img src={nastar} alt="nastar" className="w-2/3" />
            <h3>Nastar</h3>
          </Card>

          <Card className="w-2/3">
            <img src={kastengel} alt="kastengel" className="w-2/3" />
            <h3 className="text-lg font-semibold mt-3 text-gray-800">
              Kastengel
            </h3>
          </Card>

          <Card className="w-2/3">
            <img src={salju} alt="salju" className="w-2/3" />
            <h3>Putri Salju</h3>
          </Card>
        </div>
      </section>

      <section className="mt-20">
        <h2 className="text-2xl font-bold text-center mb-10">
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
    </>
  );
};

export default Homepage;

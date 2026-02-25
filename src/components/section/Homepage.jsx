import React from "react";
import bgImage from "../assets/bg.png";
import mainImg from "../assets/fo.png";

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
      <section>
        <div>
        
        </div>
      </section>
    </>
  );
};

export default Homepage;

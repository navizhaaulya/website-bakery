import heroImg from "../components/assets/hero-section.jpg";
import aboutImg from "../components/assets/about-us.png";
import ServiceCard from "../components/elements/ServiceCard";
import sfresh from "../components/assets/service-fresh.jpg";
import shomemade from "../components/assets/service-homemade.jpg";
import spremium from "../components/assets/service-premium.jpg";
import scustom from "../components/assets/service-custom.jpg";
import spackage from "../components/assets/service-package.jpg";
import ProductCard from "../components/elements/ProductCard";
import nastar from "../components/assets/nastar.png";
import kastengel from "../components/assets/kastengel.png";
import salju from "../components/assets/salju.png";
import TestimonialSection from "../components/sections/Testimonial";

const topProducts = [
  {
    name: "Nastar",
    image: nastar,
    desc: "Sweet pineapple filling",
    price: "35k",
  },
  {
    name: "Kastengel",
    image: kastengel,
    desc: "Savory cheese cookie",
    price: "35k",
  },
  {
    name: "Putri Salju",
    image: salju,
    desc: "Soft sugar cookie",
    price: "30k",
  },
];

const services = [
  {
    title: "Freshly Baked",
    image: sfresh,
    desc: "Freshly baked with care to ensure every cookie tastes warm, soft, and delicious.",
  },
  {
    title: "Homemade Recipe",
    image: shomemade,
    desc: "Made with traditional homemade recipes that bring a comforting and authentic taste.",
  },
  {
    title: "Premium Ingredients",
    image: spremium,
    desc: "We use high-quality ingredients to bring out the best flavor in every bite.",
  },
  {
    title: "Custom Orders",
    image: scustom,
    desc: "Personalize your cookie selection to suit your taste or special event.",
  },
  {
    title: "Perfect for Gifts",
    image: spackage,
    desc: "Beautifully packed cookies that are perfect for gifts, celebrations, or special moments.",
  },
];

const Homepage = () => {
  return (
    <>
      {/* hero section */}
      <section
        className="relative h-screen w-screen bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="absolute inset-0 bg-white/50"></div>
        <div className="relative">
          <p className="text-4xl text-center pt-20 font-semibold mb-4">
            Alzam B'Cookies
          </p>
          <p className="text-center font-medium text-2xl">
            Premium Cookies for Your Festive Moments
          </p>
        </div>
      </section>

      {/* about us */}
      <section
        className="h-screen w-screen bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${aboutImg})` }}
      >
        <div>
          <h2 className="text-3xl font-bold mb-4 text-center">
            From a Small Kitchen
            <br />
            to Something Truly Special
          </h2>
          <p className="max-w-md text-center">
            Our journey began with a simple love for baking and sharing homemade
            treats. Over time, what started in a small kitchen grew through the
            support of those who enjoyed our cookies. Today, we continue to
            craft premium butter cookies and traditional delicacies with the
            same care, quality, and homemade warmth in every batch.
          </p>
        </div>
      </section>

      {/* our services */}
      <section className="mb-20">
        <h1 className="font-bold text-3xl text-center">
          What Makes Our Cookies Special
        </h1>
        <div className="flex justify-center gap-8 mt-10 flex-wrap">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              image={service.image}
              desc={service.desc}
            />
          ))}
        </div>
      </section>

      {/* top products */}
      <section className="">
        <h1 className="font-bold text-3xl text-center mb-4">Best Seller</h1>
        <ProductCard products={topProducts} />
      </section>

      {/* testimoni */}
      <TestimonialSection />

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

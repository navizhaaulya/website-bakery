import { motion } from "framer-motion";
import TestimonialCard from "../elements/TestiCard";

function TestimonialSection() {
  const testimonials = [
    {
      name: "Rina Pratiwi",
      role: "Customer",
      image: "https://i.pravatar.cc/100?img=42",
      review:
        "Nastar dari Alzam B'Cookies benar-benar enak! Teksturnya lembut dan selai nanasnya terasa segar.",
    },
    {
      name: "Sari Wulandari",
      role: "Customer",
      image: "https://i.pravatar.cc/100?img=32",
      review:
        "Putri saljunya lembut dan langsung lumer di mulut. Rasanya tidak terlalu manis.",
    },
    {
      name: "Budi Santoso",
      role: "Customer",
      image: "https://i.pravatar.cc/100?img=52",
      review:
        "Rasanya premium dan terasa homemade. Salah satu kue kering terbaik yang pernah saya coba.",
    },
  ];

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2, // card muncul 0.2s bergantian
      },
    },
  };

  return (
    <section className="py-20 bg-white">
      <h2 className="text-3xl font-bold text-center">Customer Testimonials</h2>

      <p className="text-center text-gray-500 mt-2 mb-12">
        What our customers say about Alzam B'Cookies
      </p>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid md:grid-cols-3 gap-8 justify-items-center px-8"
      >
        {testimonials.map((item, index) => (
          <TestimonialCard
            key={index}
            name={item.name}
            role={item.role}
            image={item.image}
            review={item.review}
          />
        ))}
      </motion.div>
    </section>
  );
}

export default TestimonialSection;

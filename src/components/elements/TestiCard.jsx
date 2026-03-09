import { motion } from "framer-motion";

function TestimonialCard({ name, role, image, review }) {
  const card = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      variants={card}
      className="bg-white rounded-2xl p-6 w-80 shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300"
    >
      <div className="flex items-center gap-4 mb-4">
        <img
          src={image}
          alt={name}
          className="w-14 h-14 rounded-full object-cover"
        />

        <div>
          <h4 className="font-semibold text-lg text-gray-800">{name}</h4>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>

      <p className="text-gray-600 leading-relaxed text-sm italic">"{review}"</p>
    </motion.div>
  );
}

export default TestimonialCard;

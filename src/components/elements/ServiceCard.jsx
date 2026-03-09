const ServiceCard = ({ title, image, desc }) => {
  return (
    <div className="group relative w-48 h-72 border border-gray-300 rounded-[100px] flex items-center justify-center overflow-hidden cursor-pointer">
      {/* Text */}
      <div className="absolute text-center px-6 transition-opacity duration-300 group-hover:opacity-0">
        <h3 className="font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-500">{desc}</p>
      </div>

      {/* Image hover */}
      <img
        src={image}
        alt={title}
        className="absolute w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      />
    </div>
  );
};

export default ServiceCard;

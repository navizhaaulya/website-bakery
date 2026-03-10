import { Card } from "reactstrap";

const ProductCard = ({ title, products }) => {
  return (
    <>
      <div>
        <h1 className="font-bold text-3xl text-center">{title}</h1>
      </div>
      <div className="mx-4 flex justify-center gap-8 p-4 flex-wrap">
        {products.map((product, index) => (
          <Card
            key={index}
            className="relative w-60 border rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 p-4 flex flex-col items-center text-center"
          >
            {/* price bubble */}
            <div className="absolute top-6 right-6 bg-[#FFD786] text-white text-sm font-semibold w-12 h-12 rounded-full flex items-center justify-center shadow-md">
              {product.price}
            </div>
            {/* gambar */}
            <img
              src={product.image}
              alt={product.name}
              className="w-44 mx-auto mb-3"
            />
            {/* nama */}
            <h3 className="font-semibold text-lg">{product.name}</h3>
            {/* desc */}
            <p className="text-sm text-gray-600">{product.desc}</p>
          </Card>
        ))}
      </div>
    </>
  );
};

export default ProductCard;

import { useState } from "react";
import products from "../components/sections/product";
import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";

const Katalog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(products.length / itemsPerPage);
  const displayedProducts = products.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  return (
    <div className="py-20 px-12">
      <div className="mb-12">
        <h1 className="text-5xl font-bold mb-4 mt-10 font-heading">
          All Products
        </h1>
        <p className="text-gray-500">
          Discover the taste of our homemade cookies
        </p>
      </div>

      <div className="grid grid-cols-6 gap-6">
        {displayedProducts.map((product, index) => (
          <Card
            key={index}
            className="group border rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer p-4 flex flex-col items-center text-center"
          >
            <CardTitle tag="h6" className="font-semibold text-lg mb-2">
              {product.name}
            </CardTitle>
            <CardImg
              src={product.image}
              alt={product.name}
              className="w-24 h-24 object-contain mb-2 transition-transform duration-300 group-hover:scale-105"
            />
            <CardText className="text-xs text-gray-500 mb-2 line-clamp-2">
              {product.desc}
            </CardText>
            <CardBody className="p-0">
              <p className="font-semibold text-gray-800">{product.price}</p>
            </CardBody>
          </Card>
        ))}
      </div>

      {/* pagination */}
      <div className="flex justify-center mt-8 gap-2">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 border rounded-lg"
        >
          Previous
        </button>
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-4 py-2 rounded-lg ${
              currentPage === i + 1 ? "bg-black text-white" : "bg-gray-200"
            }`}
          >
            {i + 1}
          </button>
        ))}
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className="px-4 py-2 border rounded-lg"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Katalog;

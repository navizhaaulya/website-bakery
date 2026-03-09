import nastar from "../components/assets/nastar.png";
import kastengel from "../components/assets/kastengel.png";
import salju from "../components/assets/salju.png";
import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";

const products = [
  {
    name: "Nastar",
    image: nastar,
    price: "Rp 90.000",
    desc: "Kue kering isi nanas",
  },
  {
    name: "Kastengel",
    image: kastengel,
    price: "Rp 85.000",
    desc: "Kue keju gurih",
  },
  {
    name: "Putri Salju",
    image: salju,
    price: "Rp 80.000",
    desc: "Kue gula halus lembut",
  },
  {
    name: "Good Time",
    image: nastar,
    price: "Rp 50.000",
    desc: "Cookies coklat renyah",
  },
  {
    name: "Lidah Kucing",
    image: kastengel,
    price: "Rp 75.000",
    desc: "Kue tipis renyah",
  },
  {
    name: "Sagu Keju",
    image: salju,
    price: "Rp 70.000",
    desc: "Kue sagu rasa keju",
  },
  {
    name: "Semprit",
    image: nastar,
    price: "Rp 65.000",
    desc: "Kue semprit klasik",
  },
];

const Katalog = () => {
  return (
    <div className="py-24 px-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">All Products</h1>
        <p className="text-gray-500">
          Discover the taste of our homemade cookies
        </p>
      </div>

      {/* grid produk */}
      <div className="grid grid-cols-6 gap-4">
        {products.map((product, index) => (
          <Card
            key={index}
            className=" border shadow-md rounded-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
          >
            <div className="flex  p-2">
              <CardImg
                top
                src={product.image}
                alt={product.name}
                className="w-full justify-center object-cover rounded-md"
              />
            </div>

            <CardBody className="p-4">
              <CardTitle tag="h6">{product.name}</CardTitle>
              <CardText className="text-sm text-gray-500">
                {product.desc}
              </CardText>
              <strong>{product.price}</strong>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Katalog;

import nastar from "../components/assets/nastar.png";
import kastengel from "../components/assets/kastengel.png";
import salju from "../components/assets/salju.png";
import lidah from "../components/assets/lidah-kucing.png";
import sagu from "../components/assets/sagu-keju.png";
import almond from "../components/assets/almond.png";
import choco from "../components/assets/choco.png";
import palm from "../components/assets/palm.png";
import goodTime from "../components/assets/goodTime.png";
import berry from "../components/assets/berry.png";
import chocojam from "../components/assets/thumbprint-choco.png";
import kacang from "../components/assets/kacang.png";
import semprit from "../components/assets/semprit.png";
import fisrtHampers from "../components/assets/hampers-1.png";
import scndHampers from "../components/assets/hampers-2.png";
import hampersThree from "../components/assets/hampers-3.png";
import hampersFour from "../components/assets/hampers-4.png";
import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";

const products = [
  {
    name: "Nastar",
    image: nastar,
    price: "Rp 35.000",
    desc: "Buttery cookies filled with sweet pineapple jam.",
  },
  {
    name: "Kastengel",
    image: kastengel,
    price: "Rp 35.000",
    desc: "Savory cheese cookies with a rich flavor.",
  },
  {
    name: "Putri Salju",
    image: salju,
    price: "Rp 30.000",
    desc: "Soft buttery cookies coated with powdered sugar.",
  },
  {
    name: "Good Time",
    image: goodTime,
    price: "Rp 30.000",
    desc: "Crunchy chocolate chip cookies with a sweet taste.",
  },
  {
    name: "Lidah Kucing",
    image: lidah,
    price: "Rp 30.000",
    desc: "Thin and crispy butter cookies.",
  },
  {
    name: "Thumbprint Berry",
    image: berry,
    price: "Rp 30.000",
    desc: "Thin and crispy butter cookies.",
  },
  {
    name: "Thumbprint Choco",
    image: chocojam,
    price: "Rp 30.000",
    desc: "Thin and crispy butter cookies.",
  },
  {
    name: "Sagu Keju",
    image: sagu,
    price: "Rp 30.000",
    desc: "Light and crispy sago cookies with cheese flavor.",
  },
  {
    name: "Semprit",
    image: semprit,
    price: "Rp 25.000",
    desc: "Classic butter cookies with a soft texture.",
  },
  {
    name: "Almond Cookies",
    image: almond,
    price: "Rp 40.000",
    desc: "Classic butter cookies with a soft texture.",
  },
  {
    name: "Choco Cornflake",
    image: choco,
    price: "Rp 25.000",
    desc: "Classic butter cookies with a soft texture.",
  },
  {
    name: "Peanut Cookies",
    image: kacang,
    price: "Rp 25.000",
    desc: "Classic butter cookies with a soft texture.",
  },
  {
    name: "Palm Cheese",
    image: palm,
    price: "Rp 25.000",
    desc: "Classic butter cookies with a soft texture.",
  },
  {
    name: "Hampers 1",
    image: fisrtHampers,
    price: "Rp 40.000",
    desc: "A hampers box with one cookie variety.",
  },
  {
    name: "Hampers 2",
    image: scndHampers,
    price: "Rp 55.000",
    desc: "A hampers box with two cookie varieties.",
  },
  {
    name: "Hampers 3",
    image: hampersThree,
    price: "Rp 100.000",
    desc: "A hampers box with three cookie varieties.",
  },
  {
    name: "Hampers 4",
    image: hampersFour,
    price: "Rp 150.000",
    desc: "A hampers box with four cookie varieties.",
  },
];

const Katalog = () => {
  return (
    <div className="py-20 px-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4 mt-10">All Products</h1>
        <p className="text-gray-500">
          Discover the taste of our homemade cookies
        </p>
      </div>

      <div className="grid grid-cols-4 gap-6">
        {products.map((product, index) => (
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
    </div>
  );
};

export default Katalog;

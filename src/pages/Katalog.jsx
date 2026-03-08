import Card from "../components/elements/Card";
import nastar from "../components/assets/nastar.png";
import kastengel from "../components/assets/kastengel.png";
import salju from "../components/assets/salju.png";

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
    <div className="mt-24 px-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold">Product Catalogue</h1>
        <p className="text-gray-500">
          Explore our delicious homemade cookies from Alzam B'Cookies.
        </p>
      </div>

      {/* search */}
      <div className="flex gap-4 mb-8">
        <input
          type="text"
          placeholder="Search..."
          className="border rounded-lg px-4 py-2 w-80"
        />
      </div>

      {/* grid produk */}
      <div className="grid grid-cols-4 gap-6">
        {products.map((product, index) => (
          <Card key={index} className="p-4">
            <img
              src={product.image}
              alt={product.name}
              className="rounded-md mb-3"
            />

            <h3 className="font-semibold text-lg">{product.name}</h3>

            <p className="text-gray-500 text-sm">{product.desc}</p>

            <p className="text-pink-600 font-bold mt-2">{product.price}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Katalog;

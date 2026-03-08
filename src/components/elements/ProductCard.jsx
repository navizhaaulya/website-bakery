import Card from "../elements/Card";

const ProductCard = ({ title, products }) => {
  return (
    <>
      <div>
        <h1 className="font-bold text-3xl text-center">{title}</h1>
      </div>
      <div className="mx-4 flex justify-center gap-4 p-4 flex-wrap">
        {products.map((product, index) => (
          <Card key={index} className="w-60">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
          </Card>
        ))}
      </div>
    </>
  );
};

export default ProductCard;

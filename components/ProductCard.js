const ProductCard = ({ car }) => {
  return (
    <div className="product-card">
      <img src={car.image_url} alt={car.name} />
      <h3>{car.name}</h3>
      <p>{car.description}</p>
      <p>Price: ${car.price}</p>
      <p>Company: {car.companyname}</p>
      <p>Model: {car.modeltype}</p>
    </div>
  );
};

export default ProductCard;

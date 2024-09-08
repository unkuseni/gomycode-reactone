
import product from "../product";

const Image = () => {
  return (
    <img className="product-image" src={product.image} alt={product.name} />
  );
};

export default Image;

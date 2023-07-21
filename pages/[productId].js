import { useRouter } from "next/router";
import ProductDetails from "../components/ProductDetails";

const ProductDetailsPage = ({ car }) => {
  return (
    <div>{car ? <ProductDetails car={car} /> : <p>Product not found.</p>}</div>
  );
};

export async function getServerSideProps(context) {
  const { productId } = context.query;

  const productData = [].find((product) => product.id === parseInt(productId));

  return {
    props: {
      car: productData,
    },
  };
}

export default ProductDetailsPage;

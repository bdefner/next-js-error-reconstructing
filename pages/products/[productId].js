import Link from 'next/link';
import { productsDatabase } from '../../database/products';

export default function SingleProductPage(props) {
  return (
    <>
      <p>This is the page of the product: {props.product.name}</p>
      <Link href="/products">
        <a>back</a>
      </Link>
    </>
  );
}

export function getServerSideProps(context) {
  const productId = context.params.productId;
  const products = productsDatabase;

  const currentProduct = products.find((product) => {
    return product.id === productId;
  });

  return {
    props: {
      product: currentProduct,
    },
  };
}

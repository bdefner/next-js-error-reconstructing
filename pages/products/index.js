import Link from 'next/link';
import { getProducts } from '../../database/products';

export default function DisplayProducts(props) {
  return (
    <div>
      {props.products.map((product) => {
        return (
          <div key={product.name}>
            <Link href={`/products/${product.id}`}>
              <a>
                <p>Product name: {product.name}</p>
              </a>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

// export function getServerSideProps() {
//   return {
//     props: {
//       products: productsDatabase,
//     },
//   };
// }

export async function getServerSideProps() {
  const products = await getProducts();
  return {
    props: {
      products: products,
    },
  };
}

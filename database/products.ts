import { sql } from './connect';

export const productsDatabase = [
  { id: '1', name: 'cosy', price: 9.99 },
  { id: '2', name: 'classy', price: 99.9 },
  { id: '3', name: 'cool', price: 999.0 },
  { id: '4', name: 'sunny', price: 9990.0 },
];

export type Product = {
  id: number;
  name: string;
  price: number;
};

// Get all products

export async function getProducts() {
  const products = await sql<Product[]>`
  SELECT * FROM products;
  `;
  return products;
}

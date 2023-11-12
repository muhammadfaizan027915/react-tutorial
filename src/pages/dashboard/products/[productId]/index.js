import { useLoaderData, useParams } from "react-router-dom";

function Product() {
  const { productId } = useParams();
  const data = useLoaderData();

  return (
    <>
      <h1>Product {productId}</h1>
      <p>{data.title}</p>
    </>
  );
}

export default Product;

export const loader = async ({ params }) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${params.productId}`
  );
  if (response.ok) return await response.json();
  throw new Error("Something went wrong!");
};

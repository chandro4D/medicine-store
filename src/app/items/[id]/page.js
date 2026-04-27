import products from "../../../data/products";
import Link from "next/link";

export default function Details({ params }) {
  const item = products.find((p) => p.id === params.id);

  return (
    <div className="p-8">
      <img src={item.image} className="w-72" />
      <h1 className="text-3xl font-bold">{item.title}</h1>
      <p>{item.full}</p>
      <p>${item.price}</p>
      <Link href="/items">Back</Link>
    </div>
  );
}

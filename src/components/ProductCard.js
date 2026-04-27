import Link from "next/link";

export default function ProductCard({ item }) {
  return (
    <div className="shadow rounded p-4 hover:shadow-lg">
      <img src={item.image} className="w-full h-40 object-cover rounded" />
      <h2 className="text-xl font-bold mt-3">{item.title}</h2>
      <p>{item.short}</p>
      <Link
        href={`/items/${item.id}`}
        className="mt-4 inline-block text-blue-600"
      >
        View Details
      </Link>
    </div>
  );
}

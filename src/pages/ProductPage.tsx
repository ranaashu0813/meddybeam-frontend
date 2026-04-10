import products from "../data/products";
import ProductCard from "../components/ProductCard";
import "./home.css";



export default function ProductPage() {
  return (
    <section className="home">
      <h1>Products & Services</h1>

      <div className="grid">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}
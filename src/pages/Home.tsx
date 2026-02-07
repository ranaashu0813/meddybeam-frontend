import products from "../data/products";
import ProductCard from "../components//ProductCard";
import "./home.css";

const Home = () => {
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
};

export default Home;

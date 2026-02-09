import products from "../data/products";
import ProductCard from "../components//ProductCard";
import "./home.css";
import Review from "../components/Review";


const Home = () => {
  return (
    <section className="home">
      <h1>Products & Services</h1>

      <div className="grid">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
      <Review />
    </section>
    
  );
};

export default Home;

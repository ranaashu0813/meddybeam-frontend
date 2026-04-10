import "./home.css";
import { MedbeamContainer, AboutUs,Categories} from "../components/index";

const Home = () => {
  return (
    <section className="home">
      <MedbeamContainer />
      <Categories />
      <AboutUs />
    </section>
    
  );
};

export default Home;

import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import HomeDuplicate from "./pages/HomeDuplicate";
import WhatsAppFloating from "./components/WhatsAppFloating";

function App() {
  return (
    <div className="app-layout">
      <Header />
      <WhatsAppFloating />
      <Routes>
        <Route path="/" element={<HomeDuplicate />} />
        <Route path="/products" element={<Home/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

import type { Product } from "../types/product";

import image1 from "../assets/i1.jpeg";
import image2 from "../assets/i2.jpeg";
import image3 from "../assets/i3.jpeg";
import image4 from "../assets/i4.jpeg";
import image5 from "../assets/i5.jpeg";
import image6 from "../assets/i6.jpeg";
import image7 from "../assets/i7.jpeg";
import image8 from "../assets/i8.jpeg";


const products: Product[] = [

  {
    id: 1,
    name: "CPAP Machine",
    category: "cpap",   // ✅ ADD THIS
    description: "Advanced sleep therapy device for sleep apnea patients.",
    image: image1,
    price: 15000,
  },
  {
    id: 2,
    name: "others",
    category: "others",  // ✅ ADD THIS
    description: "Provides two pressure levels for comfortable breathing.",
    image: image2,
    price: 25000,
  },
  {
    id: 3,
    name: "Oxygen Concentrator",
    category: "Accessories", // ✅ ADD THIS
    description: "High efficiency oxygen support for home and clinical use.",
    image: image3,
    price: 30000,
  },
  {
    id: 4,
    name: "CPAP Machine",
    category: "cpap",
    description: "cpap second hand",
    image: image4,
    price: 10000,
  },
  {
    id: 5,
    name: "bipap second hand",
    category: "bipap",
    description: "bipap second hand",
    image: image5,
    price: 15000,
  },
  {
    id: 6,
    name: "bipap Machine",
    category: "bipap",
    description: "bipap third hand",
    image: image6,
    price: 12000,
  },
  {
    id: 7,
    name: "CPAP Machine",
    category: "cpap",
    description: "cpap fourth hand",
    image: image7,
    price: 8000,
  },
  {
    id: 8,
    name: "Mask",
    category: "mask",
    description: "Soft, lightweight mask for maximum sleeping comfort.",
    image: image8,
    price: 2000,
  },
];

export default products;

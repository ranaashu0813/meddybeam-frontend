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
    description: "Advanced sleep therapy device for sleep apnea patients.",
    image: image1,
  },
  {
    id: 2,
    name: "BiPAP Machine",
    description: "Provides two pressure levels for comfortable breathing.",
    image: image2,
  },
  {
    id: 3,
    name: "Oxygen Concentrator",
    description: "High efficiency oxygen support for home and clinical use.",
    image: image3,
  },
  {
    id: 4,
    name: "Sleep Mask",
    description: "Soft, lightweight mask for maximum sleeping comfort.",
    image: image4,
  },
   {
    id: 5,
    name: "Sleep Mask",
    description: "Soft, lightweight mask for maximum sleeping comfort.",
    image: image5,
  },
   {
    id: 6,
    name: "Sleep Mask",
    description: "Soft, lightweight mask for maximum sleeping comfort.",
    image: image6,
  },
   {
    id: 7,
    name: "Sleep Mask",
    description: "Soft, lightweight mask for maximum sleeping comfort.",
    image: image7,
  },
   {
    id: 8,
    name: "Sleep Mask",
    description: "Soft, lightweight mask for maximum sleeping comfort.",
    image: image8,
  },
   
];

export default products;

import image1 from "../assets/i1.jpeg";
import image2 from "../assets/i5.jpeg";
import image3 from "../assets/i3.jpeg";
import image4 from "../assets/i4.jpeg";
import image6 from "../assets/i6.jpeg";
import type { Category } from "../types/Catagories";


const categories: Category[] = [
  {
    id: 1,
    title: "CPAP Machine",
    image: image1,
    link: "cpap",
  },
  {
    id: 2,
    title: "BiPAP Machine",
    image: image2,
    link: "bipap",
  },
  {
    id: 3,
    title: "Masks",
    image: image3,
    link: "mask",
  },
  {
    id: 4,
    title: "Accessories",
    image: image4,
    link: "accessories",
  },

  {
    id: 5,
    title: "Others",
    image: image6,
    link: "others",
  },
];


export default categories;
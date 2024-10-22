// src/data/catalog.js

import art1 from '../images/art1.jpg'; // Adjusted import statement
import art2 from '../images/art2.jpg';
import art3 from '../images/art3.jpg';
import art4 from '../images/art4.jpg';
import art5 from '../images/art5.jpg';
import art6 from '../images/art6.jpg';

const catalog = [
  {
    id: 1,
    name: "Forest Gump",
    price: 29000.00,
    description: "Beautiful forest",
    imageUrl: art1, // Use the imported image here
  },
  {
    id: 2,
    name: "Woman",
    price: 15000.00,
    description: "Beautiful woman",
    imageUrl: art2,
  },
  {
    id: 3,
    name: "Waves",
    price: 23000.00,
    description: "Japanese Waves",
    imageUrl: art3,
  },
  {
    id: 4,
    name: "Stary Night",
    price: 50000.00,
    description: "Van Gogh Classic",
    imageUrl: art4,
  },
  {
    id: 5,
    name: "Van Gogh",
    price: 55000.00,
    description: "Portrait of artist",
    imageUrl: art5,
  },
  {
    id: 6,
    name: "Picnic Summer",
    price: 27000.00,
    description: "Wonderful picnic",
    imageUrl: art6,
  },

];

export default catalog;


import Apple from "./../Assets/apple.png";
import Banana from "./../Assets/bananas.png";
import Coconut from "./../Assets/coconut.png";
import Grape from "./../Assets/grape.png";
import Mango from "./../Assets/mango.png";
import Orange from "./../Assets/orange.png";
import Papaya from "./../Assets/papaya.png";

import { Truck, Leaf, Gift } from 'lucide-react';



const PRODUCTS = [
  {
    id: 1,
    title: "Apple",
    price: 80,
    description: "A crunchy, nutrient-dense fruit rich in pectin (a soluble fiber) and vitamin C. They are widely known to support heart health and digestion",
    image: Apple
  },
  {
    id: 2,
    title: "Banana",
    price: 90,
    description: " A curved, starchy fruit that provides a quick source of energy, rich in potassium, vitamin B6, and dietary fiber, making it great for muscle function.",
    image: Banana
  },
  {
    id: 3,
    title: "Coconut",
    price: 120,
    description: " Technically a drupe, its water is highly hydrating and rich in electrolytes. Its firm white flesh can be pressed for milk or oil and is high in healthy saturated fats.",
    image: Coconut
  },
  {
    id: 4,
    title: "Grape",
    price: 150,
    description: "Small, clustered berries that are high in resveratrol (an antioxidant linked to heart health) and vitamins K and C.",
    image: Grape
  },
  {
    id: 5,
    title: "Mango",
    price: 1200,
    description: "Often called the king of fruits this tropical stone fruit is incredibly sweet and packed with vitamin A, vitamin C, and antioxidants.",
    image: Mango
  },
  {
    id: 6,
    title: "Orange",
    price: 80,
    description: " A juicy citrus fruit globally renowned for its high vitamin C content and immune-boosting properties.",
    image: Orange
  },
  {
    id: 7,
    title: "Papaya",
    price: 60,
    description: "A soft, squash-shaped tropical fruit containing papain, an enzyme that aids in digestion. It is an excellent source of vitamin C, folate, and vitamin A.",
    image: Papaya
  }

];

const OUR_SERVICES = [
  {
    id: 1,
    title: "Free Delivery",
    desc: "Enjoy the convenience of shopping from home! We offer completely free delivery on your orders, ensuring your healthy groceries reach you safely and without any extra shipping costs.",
    icon: <Truck height={"60px"} width={"60px"} />
  },
  {
    id: 2,
    title: "Organic Froots",
    desc: "Fuel your body with wholesome, chemical-free goodness. We source the freshest organic produce, pantry staples, and healthy snacks—all strictly quality-checked for purity and taste.",
    icon: <Leaf height={"60px"} width={"60px"} />
  },
  {
    id: 3,
    title: "Free Gift",
    desc: "Because we appreciate you choosing a healthier lifestyle, every order comes with a special complimentary gift. It’s our little way of saying thank you for letting us be a part of your wellness journey.",
    icon: <Gift height={"60px"} width={"60px"} />
  }

];


export { PRODUCTS, OUR_SERVICES };

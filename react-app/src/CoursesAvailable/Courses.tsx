import card1 from '../images/product-cards/1.jpg';
import card2 from '../images/product-cards/2.jpg';
import card3 from '../images/product-cards/3.jpg';
import card4 from '../images/product-cards/4.jpg';
import Course from '../Types/Course';


const Courses: Course[] = [
  {
    name: 'Art Classes',
    language: 'English',
    onSale: true,
    img: card1,
    rating: 4.9,
    description: 'Lorem, ipsum dolor sit amet',
    sales: 15,
    oldPrice: '$80.00',
    price: '$69.99'
  },
  {
    name: 'Photography',
    language: 'English',
    onSale: true,
    img: card2,
    rating: 4.9,
    description: 'Lorem, ipsum dolor sit amet',
    sales: 15,
    oldPrice: '$80.00',
    price: '$69.99'
  },
  {
    name: 'Coding',
    language: 'English',
    onSale: true,
    img: card3,
    rating: 4.9,
    description: 'Lorem, ipsum dolor sit amet',
    sales: 15,
    oldPrice: '$80.00',
    price: '$69.99'
  },
  {
    name: 'Graphic Design',
    language: 'English',
    onSale: true,
    img: card4,
    rating: 4.9,
    description: 'Lorem, ipsum dolor sit amet',
    sales: 15,
    oldPrice: '$80.00',
    price: '$69.99'
  },

];

export default Courses;
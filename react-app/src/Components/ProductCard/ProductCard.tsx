import Course from '../../Types/Course';
import './ProductCard.css';
import { useState } from 'react';

interface Props {
  course: Course
}

export default function ProductCard({course}: Props) {
  const [like, setLike] = useState(false);
  
  return (
    <div className="product-card">
      <div className={`product-card__top ${course.onSale && 'sale'}`}>
        <img src={course.img} alt="course" /> 
        <div className="product-card__buttons">
          <button onClick={() => setLike(!like)}><i className={`fa-solid fa-heart ${like && 'liked'}`}></i></button>
          <button><i className="fa-solid fa-cart-shopping"></i></button>
          <button><i className="fa-solid fa-eye"></i></button>
        </div>
      </div>
      <div className="product-card__details">
        <div className="product-card__language">
          <h1 className="top-heading">{course.language}</h1>
          <div className="rating"><i className="fa-solid fa-star"></i> 4.9</div>
        </div>
        <h2>{course.name}</h2>
        <p>{course.description}</p>
        <p className="product-card__sales"><i className="fa-solid fa-arrow-down"></i> {course.sales} Sales</p>
        <p className="price"><span className="old-price">{course.oldPrice}</span> {course.price}</p>
        <a className="enroll" href="">Enroll <i className="fa-solid fa-angle-right"></i></a>
      </div>
    </div>
  )
}
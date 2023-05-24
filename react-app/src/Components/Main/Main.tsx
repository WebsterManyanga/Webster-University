import card1 from '../../images/product-cards/1.jpg';
import card2 from '../../images/product-cards/2.jpg';
import card3 from '../../images/product-cards/3.jpg';
import card4 from '../../images/product-cards/4.jpg';
import student1 from '../../images/students/1.jpg';
import student2 from '../../images/students/2.jpg';
import './Main.css';
import Courses from '../../CoursesAvailable/Courses';
import ProductCard from '../ProductCard';


export default function Main() {
  return (
    <main className="main-content">
      <header className="main-header">
        <section className="main-header__intro">
          <h1 className="top-heading">Welcome</h1>
          <h2 className="main-heading">1000+ Courses To Choose From</h2>
          <p className="heading-caption">Learn modern day skills at your own pace</p>
          <div className="main-header__links">
            <a href="" className="link-btn">Get Started</a>
            <a href="" className="link-btn learn-more">Learn More</a>  
          </div>
        </section>
        <aside className="main-header__board">
          <div className="board__1">
            <div className="board__circle">
              <div className="board__circle">
                <div className="board__circle"></div>
              </div>
            </div>
          </div>
        </aside>
      </header>
      <article className="courses" id="courses">
        <header>
          <h1 className="top-heading">Enroll Today</h1>
          <h2 className="main-heading">
            Making online education acccessible
          </h2>
          <p className="heading-caption">
            Learn from the top professors from the comfort of your home.<br/>
          </p>  
        </header>
        <div className="courses-cards">
          {Courses.map(course => (
            <ProductCard course={course} />
          ))}
        </div>
      </article>
      <article className="reviews" id="reviews">
        <header>
          <h1 className="top-heading">Student Reviews</h1>
          <h2 className="main-heading">Every course is worth it!</h2>
          <p className="heading-caption">Here are some reviews from people who decided to enroll.</p>
        </header>
        <div className="student-review-cards">
          <div className="student-card">
            <img src={student1} alt="student" />
            <div className="student-details">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus unde, similique sit sapiente mollitia voluptate.
              </p>
              <div className="student-details__name">Ashely</div>
              <div className="student-details__job">Graphics Designer</div>
    
            </div>
          </div>
          <div className="student-card">
            <img src={student2} alt="student"/>
            <div className="student-details">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus unde, similique sit sapiente mollitia voluptate.
              </p>
              <div className="student-details__name">Michelle</div>
              <div className="student-details__job">Software Engineer</div>  
            </div>
          </div>
        </div>
      </article>
    </main>

  )
}
import './Footer.css';

export default function Footer() {
  return (
    <footer className="contact" id="contact">
      <div className="social-media">
        <h1>Get In Touch</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <ul id="social-media-links">
          <li><a href=""><i className="fa-brands fa-facebook"></i></a></li>
          <li><a href=""><i className="fa-brands fa-instagram"></i></a></li>
          <li><a href=""><i className="fa-brands fa-twitter"></i></a></li>
        </ul>
      </div>
      <div className="company-info">
        <h1>Company info</h1>
        <ul>
          <li><a href="">About Us</a></li>
          <li><a href="">Careers</a></li>
          <li><a href="">We are hiring</a></li>
          <li><a href="">Blog</a></li>
        </ul>
      </div>
      <div className="features">
        <h1>Features</h1>
        <ul>
          <li><a href="">Business Marketing</a></li>
          <li><a href="">User Analytic</a></li>
          <li><a href="">Live Chat</a></li>
          <li><a href="">Unlimited Support</a></li>
        </ul>
      </div>
      <div className="resources">
        <h1>Resources</h1>
        <ul>
          <li><a href="">iOS &amp Android</a></li>
          <li><a href="">Watch a Demo</a></li>
          <li><a href="">Customers</a></li>
          <li><a href="">API</a></li>
        </ul>
      </div>
    </footer>
  )
}
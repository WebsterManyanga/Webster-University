import './Header.css';

export default function Header() {
  return (
    <header className="top-header">
      <h1 className="top-header__title">Webster University</h1>
      <nav className="top-nav">
        <ul className="top-nav__sections">
          <li><a href="#">Home</a></li>
          <li><a href="#courses">Courses</a></li>
          <li><a href="#reviews">Reviews</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <ul className="top-nav__sections account-login">
          <li><a href="">Login</a></li>
          <li>
            <a className="link-btn" href="">
              Join Us <i className="fa-solid fa-arrow-right"></i>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
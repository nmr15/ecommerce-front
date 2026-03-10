import './navbar.scss'

const Navbar = () => 
{
  return (
    <>
      <header className="header">
        <div className="header-logo">
          <a href="#">Logo</a>
        </div>
      </header>
      <nav className="navbar">
        <ul className="navbar-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">PS5</a></li>
          <li><a href="#">PS4</a></li>
          <li><a href="#">Nintendo Switch 2</a></li>
          <li><a href="#">Nintendo Switch </a></li>
          <li><a href="#">Xbox Series X</a></li>
          <li><a href="#">Xbox One</a></li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar

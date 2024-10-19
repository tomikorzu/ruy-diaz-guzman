import "./styles/navbar-topbar.css";

const NavbarTopBar = ({ items }) => {
  return (
    <>
      <ul className="navbar-topbar">
        <li>
          <i className="fa-brands fa-whatsapp"></i>
          <span>+54 11 6924-0551</span>
        </li>
        <li>
          <i className="fa-regular fa-envelope"></i>
          <span>info@terrazasdeguzman.com.ar</span>
        </li>
      </ul>
      <nav className="navbar">
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              <button className="btn-link">{item}</button>
            </li>
          ))}
        </ul>
        <button id="toggle-menu">
          <span className="line line1"></span>
          <span className="line line2"></span>
          <span className="line line3"></span>
        </button>
      </nav>
    </>
  );
};

export default NavbarTopBar;

import Logo from "../assets/logo.png";

function Header({ mode, changeMode }) {
  return (
    <header className={`header ${mode ? "dark" : "light"}`}>
      <div className="container row">
        <img src={Logo} alt="" />
        <ul>
          <li>
            <a className={`${mode ? "dark" : "light"}`} href="#">
              Home
            </a>
          </li>
          <li>
            <a className={`${mode ? "dark" : "light"}`} href="#">
              About
            </a>
          </li>
          <li>
            <a className={`${mode ? "dark" : "light"}`} href="#">
              Contact
            </a>
          </li>
          <li>
            <a className={`${mode ? "dark" : "light"}`} href="#">
              Services
            </a>
          </li>
          <button onClick={changeMode}> {mode ? "Light" : "Dark"} Mode</button>
        </ul>
      </div>
    </header>
  );
}

export default Header;

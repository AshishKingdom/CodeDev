import { Link } from "react-router-dom";
const Navbar = () => {
  const menus = [
    ["Home", "/"],
    ["Contests", "/contests"],
    ["Problems", "/problems"],
  ];
  if (localStorage.getItem("token") != null) {
    menus.push(["Logout", "/logout"]);
    menus.push(["Profile", "/profile"]);
  } else {
    menus.push(["Login", "/login"]);
    menus.push(["Register", "/register"]);
  }
  const curr_menu = sessionStorage.getItem("menu");
  return (
    <div className="navbar">
      <div className="codedev-nav-text">
        Code<span className="txt-fg-1">Dev</span>
      </div>
      <ul className="nav">
        {menus.map((a, b) => {
          return (
            <li key={b} className={curr_menu == a[0] ? "menu-active" : ""}>
              <Link to={a[1]}>{a[0]}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Navbar;

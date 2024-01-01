import { Outlet, Link } from "react-router-dom";
import './NavigationBar.css';

function NavigationBar () {
  return (
    <>
      <nav>
        <div className="logo">
            <img src="logo\light-theme.png" alt="" width="28" height="28" />
            <span>
                Resume Hoster
            </span>
        </div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
        </div>
      </nav>

      <Outlet />
    </>
  )
};

export default NavigationBar;
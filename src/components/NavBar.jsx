import { useState } from "react";
import Swal from 'sweetalert2'

const Navbar = () => {

  const [isSideNavActive, setIsSideNavActive] = useState(false);
  const [isTopNavActive, setIsTopNavActive] = useState(false);

  const toggleSideNav = () => {
    setIsSideNavActive((prev) => !prev);
  };

  const toggleTopNav = () => {
    setIsTopNavActive((prev) => !prev);
  };

  return (
    <>
      <img src="/bgg.jpg" alt="" id="bg" />

      <div className="navbar">
        <a href="#" id="logo">
          <i className="bx bxs-bar-chart-alt-2"></i>&nbsp;Papy&apos;s 5 Etoiles
        </a>

        <a onClick={toggleTopNav} id="responsive_menu">
          <i className="bx bxs-chevron-down"></i>
        </a>

        <div className={`nav_content ${isTopNavActive ? "active_top_navbar" : ""}`}>
          <li onClick={toggleTopNav}><a href="#">Home</a></li>
          <li onClick={toggleTopNav}><a href="#top_tracks">Tracks</a></li>
          <li onClick={toggleTopNav}><a href="#user_comments">Comments</a></li>
          <li onClick={toggleTopNav}><a href="#contact">Contact</a></li>
          <li onClick={toggleTopNav}><a href="#">Faire un don</a></li>
        </div>

        <a onClick={toggleSideNav} id="menu_btn">
          <i className="bx bx-menu-alt-left"></i>
        </a>

        <div className={`side_menu ${isSideNavActive ? "side_nav_active" : ""}`}>
          <li><a href="#"><i className="bx bx-category"></i></a></li>
          <li><a href="#"><i className="bx bx-tv"></i></a></li>
          <li><a href="#"><i className="bx bxs-movie-play"></i></a></li>
          <li><a href="#"><i className="bx bxs-message-square-detail"></i></a></li>
          <li><a href="#"><i className="bx bx-merge"></i></a></li>
          <li><a href="#"><i className="bx bxs-cart-add"></i></a></li>
        </div>
      </div>
    </>
  );
};

export default Navbar;
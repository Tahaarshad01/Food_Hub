import React from "react";
import { Link } from "react-router-dom";
import { SiYoutube } from "react-icons/si";
import { IoLogoInstagram } from "react-icons/io";

const Footer = () => {
  return (
    <footer
      className="row py-5 my-5 border-top"
      style={{ backgroundColor: "#813531", color: "white" }}
    >
      <div className="col-12 col-sm-4 col-md-2 mb-4 ml-5">
        <Link
          to="/home"
          className="d-flex align-items-center mb-3 link-dark text-decoration-none"
        >
          <img
            src="https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/30/0d/ed/300deda5-5ea1-7220-f3af-3fd6d9dbad94/app-icon-1x_U007emarketing-0-10-0-85-220.png/230x0w.webp"
            alt="Logo"
            style={{
              width: "60px",
              height: "60px",
              cursor: "pointer",
              borderRadius: "10px",
            }}
          />
        </Link>
        <p className="text-white">© 2023</p>
        <div className="d-flex fs-4 fs-lg-5">
          <IoLogoInstagram className="cursor-pointer" />
          <SiYoutube className="cursor-pointer ml-1" />
        </div>
      </div>
      <div className="col-6 col-md-2 mb-4 col-sm-1">
        <h5 className="cursor-pointer ml-5">Solution</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2">
            <Link
              to="#"
              className="nav-link p-0 text-white cursor-pointer ml-5"
            >
              Marketing
            </Link>
          </li>
          <li className="nav-item mb-2">
            <Link
              to="#"
              className="nav-link p-0 text-white cursor-pointer ml-5"
            >
              Analytics
            </Link>
          </li>
          <li className="nav-item mb-2">
            <Link
              to="#"
              className="nav-link p-0 text-white cursor-pointer ml-5"
            >
              Commerce
            </Link>
          </li>
          <li className="nav-item mb-2">
            <Link
              to="#"
              className="nav-link p-0 text-white cursor-pointer ml-5"
            >
              Insight
            </Link>
          </li>
        </ul>
      </div>

      <div className="col-6 col-md-2 mb-4 ">
        <h5 className="cursor-pointer">Company</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2">
            <Link to="#" className="nav-link p-0 text-white cursor-pointer">
              About
            </Link>
          </li>
          <li className="nav-item mb-2">
            <Link to="#" className="nav-link p-0 text-white cursor-pointer">
              Blog
            </Link>
          </li>
          <li className="nav-item mb-2">
            <Link to="#" className="nav-link p-0 text-white cursor-pointer">
              Jobs
            </Link>
          </li>
          <li className="nav-item mb-2">
            <Link to="#" className="nav-link p-0 text-white cursor-pointer">
              Partners
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

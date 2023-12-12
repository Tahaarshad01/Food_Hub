import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="d-flex justify-content-between align-items-center py-2 my-2 border-top ml-80">
      <div className="col-md-8 d-flex align-items-center">
        <Link
          to="/"
          className="mb-8 me-2 mb-md-0 text-muted text-decoration-none lh-1"
        ></Link>
        <span className="text-muted ml-60">© 2023 Company, Inc</span>
      </div>
      <ul className="nav col-md-8 justify-content-end list-unstyled d-flex"></ul>
    </footer>
  );
};

export default Footer;

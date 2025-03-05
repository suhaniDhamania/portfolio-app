import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <>
      <div className="footer py-4 text-center">
        <p>&copy; {new Date().getFullYear()} Suhani Dhamania.</p>
        <h6 className="text-sm">All rights reserved.</h6>
      </div>
    </>
  );
};

export default Footer;

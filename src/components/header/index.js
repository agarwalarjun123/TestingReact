import React from "react";
import "./style.scss";
import Logo from "../../assets/graphics/logo.png";
const Header = props => {
  return (
    <header data-test="headerComponent">
      <div className="wrap">
        <div className="logo">
          <img src={Logo} alt="logo" data-test="logoIMG" />
        </div>
      </div>
    </header>
  );
};

export default Header;

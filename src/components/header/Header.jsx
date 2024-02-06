import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from '../../assets/IMG_20240128_205727_prev_ui.png'
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header id='home'>
      {/* <section id='home'> */}
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Abhishek</h1>
        <h5 className="text-light">Frontend Developer || Data Analyst</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className="scroll__down">Scroll Down</a>
      </div>
    {/* </section> */}
    </header>
  );
};

export default Header;

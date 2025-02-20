import React, { useState } from "react";
import "./App.css";
import image1 from "./assets/image_left.png";
import image2 from "./assets/image_right.png";
import logo from "./assets/logo.png";
import aplica_acum from "./assets/aplica_acum.png";
import zero from "./assets/00_00.png";
import premii from "./assets/premii.png";
import hackathon from "./assets/Hackathon.png";
import challenge from "./assets/Challenge.png";
import premii123 from "./assets/premii123.png";
import footer_text from "./assets/footer_text.png";
import footer_social from "./assets/footer_social.png";
import mobil_img from "./assets/mobil-img.png";
import mobil_img2 from "./assets/mobil_img2.png";
import premii_mobil from "./assets/premii_mobil.png";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    
    setIsMenuOpen(!isMenuOpen);
    console.log("Meniu deschis/închis:", !isMenuOpen);
  };

  return (
    <div>
      <div className="image-container1">
        <img src={image1} alt="image1" className="image1" />
      </div>

      <div className="image-container2">
        <img src={image2} alt="image2" className="image2" />
      </div>
      
      <header className="mobile-only">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="hamburger_menu" onClick={toggleMenu}>
          ☰
        </div>
        <nav>
          <ul className={isMenuOpen ? "mobile_nav" : ""}>
            <li>Acasă</li>
            <li>Despre</li>
            <li>Parteneri</li>
            <li>Echipă</li>
            <li>Contact</li>
            <li>Regulament + FAQ</li>
            <li>Joc</li>
            <li className="culoare_header">Înregistrare</li>
          </ul>
        </nav>
      </header>

      <div className="img_fundal_mobil">
        <img src={mobil_img2} alt="mobil_img2" />
      </div>

      <div className="premii_mobil">
        <img src={premii_mobil} alt="premii_mobil" />
      </div>

      <div className="logo">
        <img src={logo} alt="logo" />
      </div>

      <header>
        <nav>
          <ul>
            <li>Acasă</li>
            <li>Despre</li>
            <li>Parteneri</li>
            <li className="culoare_header">Echipă</li>
            <li>Contact</li>
            <li>Regulament + FAQ</li>
            <li>Joc</li>
            <li className="culoare_header">Înregistrare</li>
          </ul>
        </nav>
      </header>

      <div className="logo_middle">
        <img src={logo} alt="logo_middle" />
      </div>

      <div className="aplica_acum">
        <img src={aplica_acum} alt="aplica_acum" />
      </div>

      <div className="zero">
        <img src={zero} alt="00_00" />
      </div>

      <div className="premii">
        <img src={premii} alt="premii" />
      </div>

      <div className="hackathon">
        <img src={hackathon} alt="hackathon" />
      </div>

      <div className="challenge">
        <img src={challenge} alt="challenge" />
      </div>

      <div className="premii123">
        <img src={premii123} alt="premii123" />
      </div>

      <div className="premii2123">
        <img src={premii123} alt="premii2123" />
      </div>

      <div className="mobile-img">
        <img src={mobil_img} alt="mobil-img" />
      </div>

      <footer>
        <div className="footer-container">
          <img src={footer_social} alt="img1" className="footer-text" />
          <img src={footer_text} alt="img2" className="footer-social" />
        </div>
      </footer>
    </div>
  );
};
export default App;

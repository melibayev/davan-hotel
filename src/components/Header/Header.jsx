import { useState } from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { FaTelegram, FaInstagramSquare, FaYoutube } from "react-icons/fa";
import { BsTelephoneFill } from 'react-icons/bs'
import "/node_modules/flag-icons/css/flag-icons.min.css";


import "./Header.scss";
import i18n from "../language/i18n";
import { useTranslation } from "react-i18next";
import { t } from "i18next";
import { useCurrency } from '../currency/currencyContext'

const Header = () => {
  const [navbar, setNavbar] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("ru");
  const { selectedCurrency, setSelectedCurrency } = useCurrency();
  const { i18n } = useTranslation();

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
    const selectedLanguage = e.target.value;
    i18n.changeLanguage(selectedLanguage);
    setNavbar(false)
  };

  const handleCurrencyChange = (e) => {
    setSelectedCurrency(e.target.value);
    setNavbar(false)
  }


  

  return (
    <header>
      <nav>
        <div className="container">
          <div className="navbar">
            <div className="navbar-logo">
              <NavLink to={"/"}>
                <h1>Davan Hotel</h1>
              </NavLink>
            </div>
            <div className="navbar-items">
              <ul className={`navbar-links ${navbar ? "navbar-open" : ""}`}>
                <NavLink to={"https://t.me/davan_hotel_rasmlar"}>
                  <li className="navbar-link telegram">
                    <FaTelegram />
                  </li>
                </NavLink>
                <NavLink to={
                    "https://www.instagram.com/davan_hotel_uz/?ref=27032015&hl=da"
                  }>
                  <li className="navbar-link instagram">
                    <FaInstagramSquare />
                  </li>
                </NavLink>
                <NavLink to={"tel:+998951426565"}>
                  <li className="navbar-link number">+998951426565</li>
                </NavLink>
                <NavLink to={"/"}>
                  <li className="navbar-link">
                    <select value={selectedCurrency} onChange={handleCurrencyChange}>
                      <option value="usd">USD $</option>
                      <option value="rub">RUB ₽</option>
                      <option value="uzs">UZS</option>
                    </select>
                  </li>
                </NavLink>
                <NavLink to={"/"}>
                  <li className="navbar-link">
                  <select id="languageSelect" value={selectedCountry} onChange={handleCountryChange}>
                    <option value="" disabled>{t('language')}</option>
                    <option value="ru">Русский</option>
                    <option value="en">English</option>
                    <option value="uz">O'zbekcha</option>
                  </select>
                  <div className={`flag-icon ${selectedCountry}`} />
                  </li>
                </NavLink>
                  <NavLink to={'tel:+998951426565'}>
                    <li className="navbar-link phone-number">
                      +998951426565
                    </li>
                  </NavLink>
                  <li className="navbar-link social-medias">
                    <NavLink to={"https://www.instagram.com/davan_hotel_uz/?ref=27032015&hl=da"}>
                      <FaInstagramSquare />
                    </NavLink>
                    <NavLink to={'https://t.me/davan_hotel_rasmlar'}>
                    <FaTelegram />
                    </NavLink>
                    <NavLink to={'https://www.youtube.com/@davanhotel3348'}>
                    <FaYoutube />
                    </NavLink>
                  </li>
                <button
                  className="navbar-close-button"
                  onClick={() => setNavbar(false)}
                >
                  <AiOutlineClose />
                </button>
              </ul>
              <button
                className="navbar-hamburger"
                onClick={() => setNavbar(true)}
              >
                <GiHamburgerMenu />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

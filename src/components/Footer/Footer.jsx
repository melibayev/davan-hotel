import { useTranslation } from "react-i18next";
import { FaTelegram, FaInstagramSquare, FaYoutube } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
  const {t} = useTranslation()
  return (
    <footer>
      <div className="container">
        <h2>Davan Hotel</h2>
        <div className="footer-info">
          <div className="footer-contacts">
            <h4>{t('contact')}</h4>
            <p>Яшнабадский район. Улица Фергана йули 369 Ташкент Узбекистан</p>
            <p>+998 95 142 65 65</p>
            <p>+998 97 704 22 12</p>
          </div>
          <div className="footer-social-medias">
            <h4>{t("social_medias")}</h4>
            <div className="footer-social-medias-links">
              <p>
                <NavLink to={'https://t.me/davan_hotel_rasmlar'}><FaTelegram /></NavLink>
              </p>
              <p>
                <NavLink to={'https://www.instagram.com/davan_hotel_uz/?ref=27032015&hl=da'}><FaInstagramSquare /></NavLink>
              </p>
              <p>
                <NavLink to={'https://www.youtube.com/@davanhotel3348'}><FaYoutube /></NavLink>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

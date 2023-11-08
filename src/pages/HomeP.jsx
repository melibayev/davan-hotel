import { Fragment, useState} from "react";
import { NavLink } from "react-router-dom";
import { useMemo } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import { FaWifi } from "react-icons/fa";
import { BiRestaurant } from "react-icons/bi";
import { CiDeliveryTruck } from "react-icons/ci";
import { AiTwotoneShop } from "react-icons/ai";
import { GiLinkedRings } from "react-icons/gi";
import { FaParking } from "react-icons/fa";
import { PiTelevisionSimpleFill } from "react-icons/pi";
import {
  MdOutlineIron,
  MdFamilyRestroom,
  MdRoomService,
  MdCleaningServices,
  MdOutlineLocalLaundryService,
} from "react-icons/md";

import styles from "../page-style/HomeP.module.scss";
import { translateData } from "../components/data/index";
import { useCurrency } from "../components/currency/currencyContext";
import { useTranslation } from 'react-i18next';

import VIDEO from "../assets/video/video.MOV";

import IMG1 from "../assets/images/img1.jpg";
import IMG3 from "../assets/images/img3.jpg";
import IMG4 from "../assets/images/img4.jpg";
import IMG5 from "../assets/images/img5.jpg";
import IMG6 from "../assets/images/img6.jpg";
import IMG7 from "../assets/images/img7.jpg";
import IMG10 from "../assets/images/img10.jpg";
import IMG11 from "../assets/images/img11.jpg";
import IMG13 from "../assets/images/img13.jpg";
import IMG14 from "../assets/images/img14.jpg";
import IMG16 from "../assets/images/img16.jpg";
import IMG17 from "../assets/images/img17.jpg";
import IMG19 from "../assets/images/img19.jpg";


const HomeP = () => {
  const { t } = useTranslation();
  const { selectedCurrency } = useCurrency();

  const [prices, setPrices] = useState({
    usd: { single_room: '30 $', double_room: '40 $', triple_room: '48 $', lux_room: '58 $'},
    rub: { single_room: '2760.00 ₽', double_room: '3680.00 ₽', triple_room: '4415.00 ₽', lux_room: '5334.50 ₽'},
    uzs: { single_room: '370.000 SUM', double_room: '500.000 SUM', triple_room: '590.000 SUM', lux_room: '720.000 SUM'},
  });

  // Room info start
  const data = translateData(t, selectedCurrency, {...prices});

  const columns = useMemo(() => [
    {
      accessorKey: "name.room_type", //access nested data with dot notation
      header: t("room_type"),
      size: 150,
    },
    {
      accessorKey: "name.number_of_people",
      header: t('max_persons'),
      size: 150,
    },
    {
      accessorKey: "price", //normal accessorKey
      header: t('price'),
      size: 200,
    },
    {
      accessorKey: "parameters",
      header: t('options'),
      size: 150,
    },
  ]);

  const table = useMaterialReactTable({
    columns,
    data,
    enableColumnActions: false,
    enableColumnFilters: false,
    enablePagination: false,
    enableSorting: false,
    mrtTheme: (theme) => ({
      baseBackgroundColor: theme.palette.background.default, //change default background color
    }),
    muiTableBodyRowProps: { hover: false },
    muiTableProps: {
      sx: {
        border: "1px solid rgba(81, 81, 81, .5)",
      },
    },
    muiTableHeadCellProps: {
      sx: {
        border: "1px solid rgba(81, 81, 81, .5)",
        fontStyle: "italic",
        fontWeight: "normal",
      },
    },
    muiTableBodyCellProps: {
      sx: {
        border: "1px solid rgba(81, 81, 81, .5)",
      },
    },
  });
  // Room info end


  return (
    <Fragment>
      <section id={styles.intro}>
        <div className={styles["intro-section"]}>
          <video controls={false} loop autoPlay muted>
            <source src={VIDEO} type="video/ogg" />
          </video>
        </div>
      </section>

      <section id={styles["about-us"]}>
        <div className="container">
          <div className={styles["about-us"]}>
            <h2>Davan Hotel</h2>
            <p className={styles["desktop-text"]}>
              {t('intro')}
            </p>
            <p className={styles["mobile-text"]}>
              {t("intro_mobile")}
            </p>
            {/* <video playsinline controls loop autoPlay muted> */}
            <iframe
              src="https://www.youtube.com/embed/vBF_WNPb-A0?rel=0&autoplay=1&mute=1&showinfo=0&modestbranding=1&controls=0&loop=1"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              autoPlay
              allowfullscreen
            ></iframe>
            {/* </video> */}
            <div className={styles["location-info-box"]}>
              <div className={styles["location-info"]}>
                <h4>6.7 km</h4>
                <p>{t('away_from_center')}</p>
              </div>
              <div className={styles["location-info"]}>
                <h4>4.5 km</h4>
                <p>{t('away_from_aeroport')}</p>
              </div>
              <div className={styles["location-info"]}>
                <h4>7.8 km</h4>
                <p>{t('away_from_train_station')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id={styles.gallery}>
        <div className={styles.gallery}>
          <div className={styles["gallery-image"]}>
            <img src={IMG19} alt="" />
          </div>
          <div className={styles["gallery-image"]}>
            <img src={IMG16} alt="" />
          </div>
          <div className={styles["gallery-image"]}>
            <img src={IMG1} alt="" />
          </div>
          <div className={styles["gallery-image"]}>
            <img src={IMG3} alt="" />
          </div>
          <div className={styles["gallery-image"]}>
            <img src={IMG4} alt="" />
          </div>
          <div className={styles["gallery-image"]}>
            <img src={IMG5} alt="" />
          </div>
          <div className={styles["gallery-image"]}>
            <img src={IMG6} alt="" />
          </div>
          <div className={styles["gallery-image"]}>
            <img src={IMG7} alt="" />
          </div>
          <div className={styles["gallery-image"]}>
            <img src={IMG11} alt="" />
          </div>
          <div className={styles["gallery-image"]}>
            <img src={IMG10} alt="" />
          </div>
          <div className={styles["gallery-image"]}>
            <img src={IMG14} alt="" />
          </div>
          <div className={styles["gallery-image"]}>
            <img src={IMG13} alt="" />
          </div>
        </div>
      </section>

      <section id={styles.services}>
        <div className="container">
          <h2 className={styles["services-title"]}>{t('services')}</h2>
          <div className={styles.services}>
            <p>
              <FaWifi /> {t('wi-fi')}
            </p>
            <p>
              <BiRestaurant /> {t('restaurant')}
            </p>
            <p>
              <AiTwotoneShop /> {t('shops')}
            </p>
            <p>
              <PiTelevisionSimpleFill /> {t('tv')}
            </p>
            <p>
              <MdFamilyRestroom /> {t('family_rooms')}
            </p>
            <p>
              <GiLinkedRings /> {t('lux_rooms_for_young_family')}
            </p>
            <p>
              <MdRoomService /> {t('registration')}
            </p>
            <p>
              <MdOutlineLocalLaundryService /> {t('laundry')}
            </p>
            <p>
              <MdOutlineIron /> {t('ironing')}
            </p>
            <p>
              <MdCleaningServices /> {t('cleaning')}
            </p>
            <p>
              <FaParking /> {t('parking')}
            </p>
            <p>
              <CiDeliveryTruck /> {t('delivery')}
            </p>
          </div>
        </div>
      </section>

      <section id={styles["room-info"]}>
        <div className="container">
          <h2 className={styles["room-info-title"]}>{t('info_about_room')}</h2>
          <div className="table">
            <MaterialReactTable table={table} />
          </div>
        </div>
      </section>

      <section id={styles['room-info-mobile']}>
        <div className="container">
          <h2 className={styles["room-info-title"]}>{t('info_about_room')}</h2>
            <div className={styles['room-img']}>
              <p>{t('single_room')}</p>
              <img src={IMG7} alt="" />
            </div>
            <div className={styles["room-description"]}>
              <p>{t('max_persons')}: 1</p>
              <p>{t('price')}: {prices[selectedCurrency]['single_room']}</p>
              <p>{t('options_desc')}</p>
              <p></p>
            </div>

            <div className={styles['room-img']}>
              <p>{t('double_room')}</p>
              <img src={IMG17} alt="" />
            </div>
            <div className={styles["room-description"]}>
              <p>{t('max_persons')}: 2</p>
              <p>{t('price')}: {prices[selectedCurrency]['double_room']}</p>
              <p>{t('options_desc')}</p>
              <p></p>
            </div>

            <div className={styles['room-img']}>
              <p>{t('triple_room')}</p>
              <img src={IMG11} alt="" />
            </div>
            <div className={styles["room-description"]}>
              <p>{t('max_persons')}: 3</p>
              <p>{t('price')}: {prices[selectedCurrency]['triple_room']}</p>
              <p>{t('options_desc')}</p>
              <p></p>
            </div>


            <div className={styles['room-img']}>
              <p>{t('lux_room')}</p>
              <img src={IMG3} alt="" />
            </div>
            <div className={styles["room-description"]}>
              <p>{t('max_persons')}: 2</p>
              <p>{t('price')}: {prices[selectedCurrency]['lux_room']}</p>
              <p>{t('options_desc')}</p>
              <p></p>
            </div>
            
        </div>
      </section>

      <section id={styles.reviews}>
        <div className="container">
          <div className={styles.reviews}>
            <h2>{t('clients')}</h2>
            <iframe
              title="reviews"
              src="https://widget-6534a686c62d4742851c145989909db2.elfsig.ht"
              frameborder="0"
            ></iframe>
          </div>
        </div>
      </section>

      <section id={styles.location}>
        <div className="container">
          <div className={styles.location}>
            <iframe
              title="location"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11997.256685129078!2d69.3195976!3d41.2584949!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae5f505f378ed5%3A0xef1726578ee95c99!2sDavan%20hotel!5e0!3m2!1sru!2s!4v1699132876567!5m2!1sru!2s"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
            <NavLink
              to={
                "https://www.google.com/maps/dir//Davan+hotel/@41.2584655,69.2371968,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x38ae5f505f378ed5:0xef1726578ee95c99!2m2!1d69.3196049!2d41.2584972?entry=ttu"
              }
            >
              <button className={styles["location-button"]}>
                {t('get_direction')}
              </button>
            </NavLink>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default HomeP;

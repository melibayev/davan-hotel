import { Fragment, useState } from "react";
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
import { data } from "../components/data/index";

import VIDEO from "../assets/video/video.MOV";
import VIDEO_LOW_QUALITY from '../assets/video/low.mp4'

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
import IMG19 from "../assets/images/img19.jpg";

const HomeP = () => {
  // Room info start
  const columns = useMemo(() => [
    {
      accessorKey: "name.room_type", //access nested data with dot notation
      header: "Xona Turi",
      size: 150,
    },
    {
      accessorKey: "name.number_of_people",
      header: "Xona Sig'imi",
      size: 150,
    },
    {
      accessorKey: "price", //normal accessorKey
      header: "Narxi",
      size: 200,
    },
    {
      accessorKey: "parameters",
      header: "Xususiyatlari",
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
              Мехмонхонамиз 2021-йил ноябрь ойида куриб битказилган булиб,
              деярли икки йил давомида Республикамиз ва чет эл фукаролари учун
              сифатли ва арзон мехмонхона хизматини курсатиб келмокда.
            </p>
            <p className={styles["mobile-text"]}>
              Тошкент шахрининг энг шинам ва арзон мехмонхоналаридан бирида
              сизни кутиб олишдан мамнунмиз.
            </p>
            <video playsinline controls loop autoPlay muted>
              <source src={VIDEO_LOW_QUALITY} type="video/ogg" />
            </video>
            <div className={styles["location-info-box"]}>
              <div className={styles["location-info"]}>
                <h4>6.7 km</h4>
                <p>Markazgacha</p>
              </div>
              <div className={styles["location-info"]}>
                <h4>4.5 km</h4>
                <p>Aeroportgacha</p>
              </div>
              <div className={styles["location-info"]}>
                <h4>7.8 km</h4>
                <p>T/Y vokzalgacha</p>
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
          <h2 className={styles['services-title']}>Xizmatlar</h2>
          <div className={styles.services}>
            <p>
              <FaWifi /> Wi-fi
            </p>
            <p>
              <BiRestaurant /> Restoran
            </p>
            <p>
              <CiDeliveryTruck /> Mahsulotlar yetqazish (qo'shimcha to'lov)
            </p>
            <p>
              <AiTwotoneShop /> Hududda do'konlar
            </p>
            <p>
              <MdOutlineIron /> Dazmollash xizmati (qo'shimcha to'lov)
            </p>
            <p>
              <MdFamilyRestroom /> Oilaviy xonalar
            </p>
            <p>
              <GiLinkedRings /> Yosh oilalar uchun lyuks xonalar
            </p>
            <p>
              <FaParking /> Qo'riqlanadigan avtoturargoh
            </p>
            <p>
              <MdRoomService /> 24 soat davomida ro'yxatga olish joyi
            </p>
            <p>
              <MdOutlineLocalLaundryService /> Kir yuvish (qo'shimcha to'lov)
            </p>
            <p>
              <PiTelevisionSimpleFill /> Tekis ekranli televizor
            </p>
            <p>
              <MdCleaningServices /> Kundalik xona tozalash
            </p>
          </div>
        </div>
      </section>

      <section id={styles["room-info"]}>
        <div className="container">
          <h2 className={styles['room-info-title']}>Xona Ma'lumotlari</h2>
          <div className="table">
            <MaterialReactTable table={table} />
          </div>
        </div>
      </section>

      <section id={styles.reviews}>
        <div className="container">
          <div className={styles.reviews}>
            <h2>Mijozlarimiz fikrlari</h2>
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
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default HomeP;

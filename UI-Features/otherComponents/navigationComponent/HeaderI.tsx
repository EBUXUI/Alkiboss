import styles from "@/styles/Stats/Home.module.css";
import Link from "next/link";
import { faArrowRight, faArrowLeft, faClose, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect, Component } from "react";
import Image from "next/image";


/*----- Performance Analytics ------*/
import TrustandAccreditation from "@/UI-Features/UI-Gallery/Kaprew/Logo/KaprewIcon.png";
import GovernmentVendorSystem from '@/UI-Features/UI-Gallery/Kaprew/Logo/KaprewIcon.png';
import PrivateVendorSystem from '@/UI-Features/UI-Gallery/Kaprew/Logo/Kaprew.png';


/*----- Performance Analytics ------*/
import LogisticsandDelivery from "@/UI-Features/UI-Gallery/EarthOrganizer/EcommercePlatform/Ecommerce.jpg";
import TransportationIntergration from '@/UI-Features/UI-Gallery/EarthOrganizer/EcommercePlatform/EcommerceI.jpg';
import DeliveryTracking from '@/UI-Features/UI-Gallery/EarthOrganizer/EcommercePlatform/EcommerceII.jpg';

/*----- Performance Analytics ------*/

/*----- Performance Analytics ------*/
import ProcurementandIntergration from "@/UI-Features/UI-Gallery/Kaprew/Pen/PenIX.jpg";
import OrderManagementSystem from '@/UI-Features/UI-Gallery/Kaprew/Pen/PenVI.jpg';
import eProcurementPortalIntergration from '@/UI-Features/UI-Gallery/Kaprew/Pen/PenIV.jpg';

/*----- Performance Analytics ------*/

/*----- Performance Analytics ------*/
import EcoFriendlySolutions from "@/UI-Features/UI-Gallery/Kaprew/Pen/PenX.jpg";
import SustainablePackaging from '@/UI-Features/UI-Gallery/Kaprew/Pen/PenVII.jpg';
import EcoCertifiedBrands from '@/UI-Features/UI-Gallery/Kaprew/Pen/PenV.jpg';


/*----- Performance Analytics ------*/

/*----- Performance Analytics ------*/
import WritingInstruments from "@/UI-Features/UI-Gallery/Kaprew/Pen/PenIII.jpg";
import BallpointPens from "@/UI-Features/UI-Gallery/Kaprew/Pen/PenI.jpg";
import FountainPens from "@/UI-Features/UI-Gallery/Kaprew/Pen/PenIV.jpg";
/*----- Performance Analytics ------*/

/*----- Performance Analytics ------*/
import FilingSupplies from "@/UI-Features/UI-Gallery/Kaprew/FileFolder/FileFolder.jpg";
import FileFolders from "@/UI-Features/UI-Gallery/Kaprew/FileFolder/FileFolderI.jpg";
import ClipBoards from "@/UI-Features/UI-Gallery/Kaprew/ClipBoard/ClipBoard.jpg";
/*----- Performance Analytics ------*/

/*----- Create Schedule ------*/
import PaperProducts from "@/UI-Features/UI-Gallery/Kaprew/PhotocopyingPapers/PhotocopyingPapersV.jpg";
import CopierPapers from "@/UI-Features/UI-Gallery/Kaprew/PhotocopyingPapers/PhotocopyingPapersIII.jpg";
import Diary from "@/UI-Features/UI-Gallery/Kaprew/A4Diary/DiaryVII.jpg";
/*----- Create Schedule ------*/

/*----- Task Automation ------*/
import DeskTools from "@/UI-Features/UI-Gallery/Kaprew/Stapler/Stapler.jpg";
import Staplers from "@/UI-Features/UI-Gallery/Kaprew/Stapler/StaplerI.jpg";
import Scissors from "@/UI-Features/UI-Gallery/Kaprew/Scissors/ScissorsIII.jpg";
/*----- Task Automation ------*/

/*----- Windows OS ------*/
import WindowsOS from "@/UI-Features/UI-Gallery/EarthOrganizer/Installation/Windows/WindowsI.jpeg";
import WindowsTerminal from "@/UI-Features/UI-Gallery/EarthOrganizer/Installation/Windows/WindowsV.jpeg";
import WindowsSoftware from "@/UI-Features/UI-Gallery/EarthOrganizer/Installation/Windows/WindowsIV.jpeg";
/*----- Windows OS ------*/

/*----- Linux OS ------*/
import LinuxOS from "@/UI-Features/UI-Gallery/EarthOrganizer/Installation/Linux/Linux.jpeg";
import LinuxTerminal from "@/UI-Features/UI-Gallery/EarthOrganizer/Installation/Linux/LinuxII.jpeg";
import LinuxSoftware from "@/UI-Features/UI-Gallery/EarthOrganizer/Installation/Linux/LinuxIII.jpeg";
/*----- Linux OS ------*/

/*----- Android OS ------*/
import AndroidOS from "@/UI-Features/UI-Gallery/EarthOrganizer/Installation/Android/AndroidI.jpeg";
import AndroidTerminal from "@/UI-Features/UI-Gallery/EarthOrganizer/Installation/Android/AndroidV.jpeg";
import AndroidSoftware from "@/UI-Features/UI-Gallery/EarthOrganizer/Installation/Android/AndroidIV.jpeg";
/*----- Android OS ------*/

/*----- Linux OS ------*/
import AppleOS from "@/UI-Features/UI-Gallery/EarthOrganizer/Installation/Apple/Apple.jpeg";
import AppleTerminal from "@/UI-Features/UI-Gallery/EarthOrganizer/Installation/Apple/AppleII.jpeg";
import AppleSoftware from "@/UI-Features/UI-Gallery/EarthOrganizer/Installation/Apple/AppleIII.jpeg";
/*----- Linux OS ------*/

/*----- Performance Analytics ------*/

/*----- Performance Analytics ------*/
import Logo from "@/UI-Features/UI-Gallery/Kaprew/Logo/KaprewIcon.png";
/*----- Performance Analytics ------*/

/*----- Performance Analytics ------*/
import { Carousel } from "react-responsive-carousel";
/*----- Performance Analytics ------*/

/*----- Routing Protocol ------*/
import { useRouter } from "next/router";
/*----- Routing Protocol ------*/

/*----- Server Actions ------*/
import SearchIcon from "@/UI-Features/otherComponents/buttonComponent/searchIcon/homeSearch";
/*----- Server Actions ------*/

export default function Header() {
  //Toggle Header Buttons
  const [showTB, setTB] = useState(false);
  const [showRMT, setRMT] = useState(false);
  const [showIES, setIES] = useState(false);
  const [showEB, setEB] = useState(false);
  const [showTR, setTR] = useState(false);
  const [showLocation, setShowLocation] = useState(false);
  const [showPB, setPB] = useState(false)
   const [HM, setHM] = useState(false);
  //Toggle Header Buttons

  //Route Header DropDowns
  const Router = useRouter();
  //Route Header DropDowns

  //  Search Query
  const [open, setOpen] = useState(false);
  // Search Query

  //Current Location
  useEffect(() => {
    if (!navigator.geolocation) {
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        // setShowLocation({ latitude, longitude });
      },
      (error) => {
        console.error("Error Retrieving Location", error);
      }
    );
  }, []);
  //Current Location

  //Handle Routing Functions
  useEffect(() => {
    const closePB = () => {
      showPB && setPB(false)
    }
    Router.events.on('routeChangeStart', closePB)
    return () => {
      Router.events.off('routeChangeStart', closePB)
    }
  }, [showPB, Router])

  useEffect(() => {
    const closeTB = () => {
      showTB && setTB(false)
    }
    Router.events.on('routeChangeStart', closeTB)
    return () => {
      Router.events.off('routeChangeStart', closeTB)
    }
  }, [showTB, Router])

  useEffect(() => {
    const closeRMT = () => {
      showRMT && setRMT(false)
    }
    Router.events.on("routeChangeStart", closeRMT);
    return () => {
      Router.events.off("routeChangeStart", closeRMT)
    }
  }, [showRMT, Router]);

  useEffect(() => {
    const closeIES = () => {
      showIES && setIES(false)
    }
    Router.events.on('routeChangeStart', closeIES)
    return () => {
      Router.events.off('routeChangeStart', closeIES)
    }
  }, [showIES, Router])

  useEffect(() => {
    const closeTR = () => {
      showTR && setTR(false)
    }
    Router.events.on('routeChangeStart', closeTR)
    return () => {
      Router.events.off('routeChangeStart', closeTR)
    }
  }, [showTR, Router])

  useEffect(() => {
    const closeEB = () => {
      showEB && setEB(false)
    }
    Router.events.on('routeChangeStart', closeEB)
    return () => {
      Router.events.off('routeChangeStart', closeEB)
    }
  }, [showEB, Router])
  //Handle Routing Function

  useEffect(() => {
    const dropHM = () => {
      HM && setHM(false)
    };
    Router.events.on('routeChangeStart', dropHM);
    return () => {
      Router.events.off('routeChangeStart', dropHM)
    }
  }, [HM, Router])

  return (
    <>
      <section className={styles.HeaderTitle}>
        <div className={styles.HeaderOut}>
          <article className={styles.headerIconProperty}>
            <Image
              priority
              src={Logo}
              alt="Kaprew Creations Logo"
              className={styles.HeadLogo}
              style={{ objectFit: "cover" }}
               
            />
            <p className={styles.CompanyLogo}><span className={styles.TitleWolf}>Kaprew</span> Creations</p>
          </article>
          <article className={styles.headerColumn}>
            <form className={styles.HSProperty}>
              <label htmlFor="queryHotelName"></label>
              <input
                className={styles.hotelSearch}
                placeholder="Search For a Product..."
                name="queryHotelName"
                id="queryHotelName"
                aria-label="queryHotelName"
                onClick={() => setOpen((prev) => !prev)}
              />
              <SearchIcon />
            </form>
          </article>
          <article className={styles.HeaderPropertyIV}>
            <div
              className={`${styles["MenuMainTitle"]} ${styles["MenuTitleBg"]}`}
            >
              <div className={styles.HeaderII}>
                <div className={styles.LiveIcon} />
                <Link href="/LaunchingSoon">Kickstart Journey</Link>
              </div>
            </div>
          </article>
        </div>
        <div className={styles.HeaderIn}>
          <FontAwesomeIcon
            className={styles.HeroIcon}
            onClick={() => { setHM(!HM) }}
            icon={HM ? faClose : faBars}
          />
          <h4
            className={styles.CompanyLogo}
            onClick={() => { setHM(!HM) }}
          >

            Our Menu

          </h4>
          {HM && (
            <div className={styles.HamburgerMenu}>
              <div className={styles.HeaderNav}>
                <Link href="/">Home</Link>
              </div>
              <div onClick={() => setTB(!showTB)} className={styles.HeaderNav}>
                <Link href="/OurProducts"> Our Products </Link>
              </div>
              <div onClick={() => { setRMT(!showRMT) }} className={styles.HeaderNav}>
                <Link href="/ClientTenderSystem">Client Tender System</Link>
              </div>
              <div onClick={() => setIES(!showIES)} className={styles.HeaderNav}>
                <Link href="/InstallKaprew">Install Kaprew Creations</Link>
              </div>
              <div onClick={(() => setPB(!showPB))} className={styles.HeaderNav}>
                <Link href="/AboutUs">About Us</Link>
              </div>
              <div onClick={() => { setEB(!showEB) }} className={styles.HeaderNav}>
                <Link href="/OurBlog">Our  Blog</Link>
              </div>
            </div>
          )}
        </div>
        <ul className={styles.HeaderGrid}>
          <li className={styles.HeaderNav}>
            <Link href="/">Home</Link>
          </li>
          <li onClick={() => setTB(!showTB)} className={styles.HeaderNav}>
            <Link href="/OurProducts"> Our Products </Link>
          </li>
          <li onClick={() => { setRMT(!showRMT) }} className={styles.HeaderNav}>
            <Link href="/ClientTenderSystem">Client Tender System</Link>
          </li>
          <li onClick={() => setIES(!showIES)} className={styles.HeaderNav}>
            <Link href="/InstallKaprew">Install Kaprew Creations</Link>
          </li>
          <li onClick={(() => setPB(!showPB))} className={styles.HeaderNav}>
            <Link href="/AboutUs">About Us</Link>
          </li>
          <li onClick={() => { setEB(!showEB) }} className={styles.HeaderNav}>
            <Link href="/OurBlog">Our  Blog</Link>
          </li>
        </ul>
      </section>
      {showTB && (
        <section
          //style={{  display: showElement ? 'all' : 'all'}}
          className={`${styles["droppedDownContent"]}`}
        >
          <Carousel
            className={styles.dropDownRousel}
            autoPlay={false}
            showArrows={true}
            swipeScrollTolerance={100}
            preventMovementUntilSwipeScrollTolerance={true}
            interval={6000}
            transitionTime={1000}
            infiniteLoop={true}
            showIndicators={true}
            autoFocus={true}
            showStatus={true}
            useKeyboardArrows={true}
            swipeable={true}
            showThumbs={true}
          >
            <ul className={styles.dropDownGrid}>
              <div className={`${styles["dropDownColumnOne"]}`}>
                <li className={styles.dropDownLetter}>
                  <h1 className={styles.dropDownService}>Our Products</h1>
                </li>
              </div>
              <div className={styles.dropDownColumnGrid}>
                <div className={`${styles["SystemSafeguard"]} ${styles["dropDownColumnTwo"]}`}>
                  <li className={styles.dropDownNav}>
                    <div
                      className={`${styles["GridOne"]} ${styles["dropDownElement"]} ${styles["Wrap"]}`}
                    >
                      <Image
                        priority
                        alt="Kaprew Creations AI"
                        src={PaperProducts}
                         
                        fill={true}
                        style={{ objectFit: "cover" }}
                      />
                      <div
                        className={`${styles["dropDownTitle"]} ${styles["GridBg"]}`}
                      >
                        Paper Products
                      </div>
                    </div>
                    <label
                      className={`${styles["MainTitle"]}`}
                      htmlFor="queryHotelName"
                    >
                      <button className={styles.SecureChannel}>
                        <Link href="/LaunchingSoon" className={styles.BookBtn}>
                          View Catalog
                        </Link>
                      </button>
                    </label>
                  </li>
                  <li className={styles.dropDownNavII}>
                    <div
                      className={`${styles["GridOne"]} ${styles["dropDownElementII"]} ${styles["Wrap"]}`}
                    >
                      <Image
                        priority
                        alt="Kaprew Creations AI"
                        src={CopierPapers}
                         
                        fill={true}
                        style={{ objectFit: "cover" }}
                      />
                      <div
                        className={`${styles["dropDownTitle"]} ${styles["GridBg"]}`}
                      >
                        Copier Paper
                      </div>
                    </div>
                    <div
                      className={`${styles["GridOne"]} ${styles["dropDownElementII"]} ${styles["Wrap"]}`}
                    >
                      <Image
                        priority
                        alt="Kaprew Creations AI"
                        src={Diary}
                         
                        fill={true}
                        style={{ objectFit: "cover" }}
                      />
                      <div
                        className={`${styles["dropDownTitle"]} ${styles["GridBg"]}`}
                      >
                        Diaries
                      </div>
                    </div>
                  </li>
                </div>
                <div className={`${styles["RegisterSafeguard"]} ${styles["dropDownColumnTwo"]}`}>
                  <li className={styles.dropDownNav}>
                    <div
                      className={`${styles["GridOne"]} ${styles["dropDownElement"]} ${styles["Wrap"]}`}
                    >
                      <Image
                        priority
                        alt="Kaprew Creations AI"
                        src={WritingInstruments}
                         
                        fill={true}
                        style={{ objectFit: "cover" }}
                      />
                      <div
                        className={`${styles["dropDownTitle"]} ${styles["GridBg"]}`}
                      >
                        Writing Instruments
                      </div>
                    </div>
                    <label
                      className={`${styles["MainTitle"]}`}
                      htmlFor="queryHotelName"
                    >
                      <button className={styles.SecureChannel}>
                        <Link href="/LaunchingSoon" className={styles.BookBtn}>
                          View Catalog
                        </Link>
                      </button>
                    </label>
                  </li>
                  <li className={styles.dropDownNavII}>
                    <div
                      className={`${styles["GridOne"]} ${styles["dropDownElementII"]} ${styles["Wrap"]}`}
                    >
                      <Image
                        priority
                        alt="Kaprew Creations AI"
                        src={BallpointPens}
                         
                        fill={true}
                        style={{ objectFit: "cover" }}
                      />
                      <div
                        className={`${styles["dropDownTitle"]} ${styles["GridBg"]}`}
                      >
                        BallPoint Pens
                      </div>
                    </div>
                    <div
                      className={`${styles["GridOne"]} ${styles["dropDownElementII"]} ${styles["Wrap"]}`}
                    >
                      <Image
                        priority
                        alt="Kaprew Creations AI"
                        src={FountainPens}
                         
                        fill={true}
                        style={{ objectFit: "cover" }}
                      />
                      <div
                        className={`${styles["dropDownTitle"]} ${styles["GridBg"]}`}
                      >
                        Fountain Pens
                      </div>
                    </div>
                  </li>
                </div>
              </div>
            </ul>
            <ul className={styles.dropDownGrid}>
              <div className={`${styles["dropDownColumnOne"]}`}>
                <li className={styles.dropDownLetter}>
                  <h1 className={styles.dropDownService}>Our Products</h1>
                </li>
              </div>
              <div className={styles.dropDownColumnGrid}>
                <div className={`${styles["ProgramSafeguard"]} ${styles["dropDownColumnTwo"]}`}>
                  <li className={styles.dropDownNav}>
                    <div
                      className={`${styles["GridOne"]} ${styles["dropDownElement"]} ${styles["Wrap"]}`}
                    >
                      <Image
                        priority
                        alt="Kaprew Creations AI"
                        src={FilingSupplies}
                         
                        fill={true}
                        style={{ objectFit: "cover" }}
                      />
                      <div
                        className={`${styles["dropDownTitle"]} ${styles["GridBg"]}`}
                      >
                        Filing Supplies
                      </div>
                    </div>
                    <label
                      className={`${styles["MainTitle"]}`}
                      htmlFor="queryHotelName"
                    >
                      <button className={styles.SecureChannel}>
                        <Link href="/LaunchingSoon" className={styles.BookBtn}>
                          View Catalog
                        </Link>
                      </button>
                    </label>
                  </li>
                  <li className={styles.dropDownNavII}>
                    <div
                      className={`${styles["GridOne"]} ${styles["dropDownElementII"]} ${styles["Wrap"]}`}
                    >
                      <Image
                        priority
                        alt="Kaprew Creations AI"
                        src={FileFolders}
                         
                        fill={true}
                        style={{ objectFit: "cover" }}
                      />
                      <div
                        className={`${styles["dropDownTitle"]} ${styles["GridBg"]}`}
                      >
                        File Folders
                      </div>
                    </div>
                    <div
                      className={`${styles["GridOne"]} ${styles["dropDownElementII"]} ${styles["Wrap"]}`}
                    >
                      <Image
                        priority
                        alt="Kaprew Creations AI"
                        src={ClipBoards}
                         
                        fill={true}
                        style={{ objectFit: "cover" }}
                      />
                      <div
                        className={`${styles["dropDownTitle"]} ${styles["GridBg"]}`}
                      >
                        Clip Boards
                      </div>
                    </div>
                  </li>
                </div>
                <div className={`${styles["Web|AppSafeguard"]} ${styles["dropDownColumnTwo"]}`}>
                  <li className={styles.dropDownNav}>
                    <div
                      className={`${styles["GridOne"]} ${styles["dropDownElement"]} ${styles["Wrap"]}`}
                    >
                      <Image
                        priority
                        alt="Kaprew Creations AI"
                        src={DeskTools}
                         
                        fill={true}
                        style={{ objectFit: "cover" }}
                      />
                      <div
                        className={`${styles["dropDownTitle"]} ${styles["GridBg"]}`}
                      >
                        Desk Tools
                      </div>
                    </div>
                    <label
                      className={`${styles["MainTitle"]}`}
                      htmlFor="queryHotelName"
                    >
                      <button className={styles.SecureChannel}>
                        <Link href="/LaunchingSoon" className={styles.BookBtn}>
                          View Catalog
                        </Link>
                      </button>
                    </label>
                  </li>
                  <li className={styles.dropDownNavII}>
                    <div
                      className={`${styles["GridOne"]} ${styles["dropDownElementII"]} ${styles["Wrap"]}`}
                    >
                      <Image
                        priority
                        alt="Kaprew Creations AI"
                        src={Staplers}
                         
                        fill={true}
                        style={{ objectFit: "cover" }}
                      />
                      <div
                        className={`${styles["dropDownTitle"]} ${styles["GridBg"]}`}
                      >
                        Staplers
                      </div>
                    </div>
                    <div
                      className={`${styles["GridOne"]} ${styles["dropDownElementII"]} ${styles["Wrap"]}`}
                    >
                      <Image
                        priority
                        alt="Kaprew Creations AI"
                        src={Scissors}
                         
                        fill={true}
                        style={{ objectFit: "cover" }}
                      />
                      <div
                        className={`${styles["dropDownTitle"]} ${styles["GridBg"]}`}
                      >
                        Scissors
                      </div>
                    </div>
                  </li>
                </div>
              </div>
            </ul>
          </Carousel>
        </section>
      )}
      {showRMT && (
        <section
          //style={{  display: showElement ? 'all' : 'all'}}
          className={`${styles["droppedDownContent"]}`}
        >
          <Carousel
            className={styles.dropDownRousel}
            autoPlay={false}
            showArrows={true}
            swipeScrollTolerance={100}
            preventMovementUntilSwipeScrollTolerance={true}
            interval={6000}
            renderArrowNext={(nextHandler, hasNext) => (
              <div
                onClick={nextHandler}
                style={{
                  backgroundColor: 'black',
                  width: '2rem',
                  height: '2rem',
                  cursor: 'pointer',
                  borderRadius: '50%',
                  display: 'grid',
                  placeContent: 'center',
                  position: 'absolute',
                  top: '50%',
                  right: '0'
                }}
              >
                <FontAwesomeIcon
                  style={{
                    width: '.8rem',
                    color: 'white'
                  }}
                  icon={faArrowRight} />
              </div>
            )}
            renderArrowPrev={(prevHandler, hasPrev) => (
              <div
                onClick={prevHandler}
                style={{
                  backgroundColor: 'black',
                  width: '2rem',
                  height: '2rem',
                  cursor: 'pointer',
                  borderRadius: '50%',
                  display: 'grid',
                  placeContent: 'center',
                  position: 'absolute',
                  top: '50%',
                  left: '0'
                }}
              >
                <FontAwesomeIcon
                  style={{
                    width: '.8rem',
                    color: 'white'
                  }}
                  icon={faArrowLeft} />
              </div>
            )}
            renderIndicator={(clickHandler, isSelected, index, label) => (
              <div
                key={index}
                aria-label={label}
                onClick={clickHandler}
                style={{
                  display: 'inline-block',
                  width: '.5rem',
                  height: '.5rem',
                  backgroundColor: isSelected ? 'green' : 'black',
                  margin: '0 .5rem',
                  cursor: 'pointer',
                  borderRadius: '50%'
                }}
              >
              </div>
            )}
            transitionTime={1000}
            infiniteLoop={true}
            showIndicators={true}
            autoFocus={true}
            showStatus={true}
            useKeyboardArrows={true}
            swipeable={true}
            showThumbs={true}
          >
            <ul className={styles.dropDownGrid}>
              <div className={`${styles["dropDownColumnOne"]}`}>
                <li className={styles.dropDownLetter}>
                  <h1 className={styles.dropDownService}>Client Tender System</h1>
                </li>
              </div>
              <div className={styles.dropDownColumnGrid}>
                <div className={`${styles["RegisterSafeguard"]} ${styles["dropDownColumnTwo"]}`}>
                  <li className={styles.dropDownNav}>
                    <div
                      className={`${styles["GridOne"]} ${styles["dropDownElement"]} ${styles["Wrap"]}`}
                    >

                      <Image
                        priority
                        alt="Kaprew Creations AI"
                        src={TrustandAccreditation}
                         
                        fill={true}
                        style={{ objectFit: "cover" }}
                      />
                      <div
                        className={`${styles["dropDownTitle"]} ${styles["GridBg"]}`}
                      >
                        Institutional Trust & Accreditation
                      </div>
                    </div>
                    <label
                      className={`${styles["MainTitle"]}`}
                      htmlFor="queryHotelName"
                    >
                      <button className={styles.SecureChannel}>
                        <Link href="/LaunchingSoon" className={styles.BookBtn}>
                          Our Track Record
                        </Link>
                      </button>
                    </label>
                  </li>
                  <li className={styles.dropDownNavII}>
                    <div
                      className={`${styles["GridOne"]} ${styles["dropDownElementII"]} ${styles["Wrap"]}`}
                    >
                      <Image
                        priority
                        alt="Kaprew Creations AI"
                        src={GovernmentVendorSystem}
                         
                        fill={true}
                        style={{ objectFit: "cover" }}
                      />
                      <div
                        className={`${styles["dropDownTitle"]} ${styles["GridBg"]}`}
                      >
                        Government Vendor System
                      </div>
                    </div>
                    <div
                      className={`${styles["GridOne"]} ${styles["dropDownElementII"]} ${styles["Wrap"]}`}
                    >
                      <Image
                        priority
                        alt="Kaprew Creations AI"
                        src={PrivateVendorSystem}
                         
                        fill={true}
                        style={{ objectFit: "cover" }}
                      />
                      <div
                        className={`${styles["dropDownTitle"]} ${styles["GridBg"]}`}
                      >
                        Private Vendor System
                      </div>
                    </div>
                  </li>

                </div>
                <div className={`${styles["SystemSafeguard"]} ${styles["dropDownColumnTwo"]}`}>
                  <li className={styles.dropDownNav}>
                    <div
                      className={`${styles["GridOne"]} ${styles["dropDownElement"]} ${styles["Wrap"]}`}
                    >
                      <Image
                        priority
                        alt="Kaprew Creations AI"
                        src={LogisticsandDelivery}
                         
                        fill={true}
                        style={{ objectFit: "cover" }}
                      />
                      <div
                        className={`${styles["dropDownTitle"]} ${styles["GridBg"]}`}
                      >
                        Transportation & Intergration
                      </div>
                    </div>
                    <label
                      className={`${styles["MainTitle"]}`}
                      htmlFor="queryHotelName"
                    >
                      <button className={styles.SecureChannel}>
                        <Link href="/LaunchingSoon" className={styles.BookBtn}>
                          Our Delivery System
                        </Link>
                      </button>
                    </label>
                  </li>
                  <li className={styles.dropDownNavII}>
                    <div
                      className={`${styles["GridOne"]} ${styles["dropDownElementII"]} ${styles["Wrap"]}`}
                    >
                      <Image
                        priority
                        alt="Kaprew Creations AI"
                        src={TransportationIntergration}
                         
                        fill={true}
                        style={{ objectFit: "cover" }}
                      />
                      <div
                        className={`${styles["dropDownTitle"]} ${styles["GridBg"]}`}
                      >
                        Speed Delivery
                      </div>
                    </div>
                    <div
                      className={`${styles["GridOne"]} ${styles["dropDownElementII"]} ${styles["Wrap"]}`}
                    >
                      <Image
                        priority
                        alt="Kaprew Creations AI"
                        src={DeliveryTracking}
                         
                        fill={true}
                        style={{ objectFit: "cover" }}
                      />
                      <div
                        className={`${styles["dropDownTitle"]} ${styles["GridBg"]}`}
                      >
                        Speed Tracking
                      </div>
                    </div>
                  </li>
                </div>
              </div>
            </ul>
            <ul className={styles.dropDownGrid}>
              <div className={`${styles["dropDownColumnOne"]}`}>
                <li className={styles.dropDownLetter}>
                  <h1 className={styles.dropDownService}>Client Tender System</h1>
                </li>
              </div>
              <div className={styles.dropDownColumnGrid}>
                <div className={`${styles["ProgramSafeguard"]} ${styles["dropDownColumnTwo"]}`}>
                  <li className={styles.dropDownNav}>
                    <div
                      className={`${styles["GridOne"]} ${styles["dropDownElement"]} ${styles["Wrap"]}`}
                    >
                      <Image
                        priority
                        alt="Kaprew Creations AI"
                        src={ProcurementandIntergration}
                         
                        fill={true}
                        style={{ objectFit: "cover" }}
                      />
                      <div
                        className={`${styles["dropDownTitle"]} ${styles["GridBg"]}`}
                      >
                        Procurement and Intergration
                      </div>
                    </div>
                    <label
                      className={`${styles["MainTitle"]}`}
                      htmlFor="queryHotelName"
                    >
                      <button className={styles.SecureChannel}>
                        <Link href="/LaunchingSoon" className={styles.BookBtn}>
                          Join the Platform
                        </Link>
                      </button>
                    </label>
                  </li>
                  <li className={styles.dropDownNavII}>
                    <div
                      className={`${styles["GridOne"]} ${styles["dropDownElementII"]} ${styles["Wrap"]}`}
                    >
                      <Image
                        priority
                        alt="Kaprew Creations AI"
                        src={OrderManagementSystem}
                         
                        fill={true}
                        style={{ objectFit: "cover" }}
                      />
                      <div
                        className={`${styles["dropDownTitle"]} ${styles["GridBg"]}`}
                      >
                        Order Management System
                      </div>
                    </div>
                    <div
                      className={`${styles["GridOne"]} ${styles["dropDownElementII"]} ${styles["Wrap"]}`}
                    >
                      <Image
                        priority
                        alt="Kaprew Creations AI"
                        src={eProcurementPortalIntergration}
                         
                        fill={true}
                        style={{ objectFit: "cover" }}
                      />
                      <div
                        className={`${styles["dropDownTitle"]} ${styles["GridBg"]}`}
                      >
                        Portal Intergration
                      </div>
                    </div>
                  </li>
                </div>
                <div className={`${styles["Web|AppSafeguard"]} ${styles["dropDownColumnTwo"]}`}>
                  <li className={styles.dropDownNav}>
                    <div
                      className={`${styles["GridOne"]} ${styles["dropDownElement"]} ${styles["Wrap"]}`}
                    >
                      <Image
                        priority
                        alt="Kaprew Creations AI"
                        src={EcoFriendlySolutions}
                         
                        fill={true}
                        style={{ objectFit: "cover" }}
                      />
                      <div
                        className={`${styles["dropDownTitle"]} ${styles["GridBg"]}`}
                      >
                        Eco-Friendly Solutions
                      </div>
                    </div>
                    <label
                      className={`${styles["MainTitle"]}`}
                      htmlFor="queryHotelName"
                    >
                      <button className={styles.SecureChannel}>
                        <Link href="/LaunchingSoon" className={styles.BookBtn}>
                          View Service
                        </Link>
                      </button>
                    </label>
                  </li>
                  <li className={styles.dropDownNavII}>
                    <div
                      className={`${styles["GridOne"]} ${styles["dropDownElementII"]} ${styles["Wrap"]}`}
                    >
                      <Image
                        priority
                        alt="Kaprew Creations AI"
                        src={SustainablePackaging}
                         
                        fill={true}
                        style={{ objectFit: "cover" }}
                      />
                      <div
                        className={`${styles["dropDownTitle"]} ${styles["GridBg"]}`}
                      >
                        Sustainable Packaging
                      </div>
                    </div>
                    <div
                      className={`${styles["GridOne"]} ${styles["dropDownElementII"]} ${styles["Wrap"]}`}
                    >
                      <Image
                        priority
                        alt="Kaprew Creations AI"
                        src={EcoCertifiedBrands}
                         
                        fill={true}
                        style={{ objectFit: "cover" }}
                      />
                      <div
                        className={`${styles["dropDownTitle"]} ${styles["GridBg"]}`}
                      >
                        Eco-Certified Brands
                      </div>
                    </div>
                  </li>
                </div>
              </div>
            </ul>
          </Carousel>
        </section>
      )}
      {showIES && (
        <section
          //style={{  display: showElement ? 'all' : 'all'}}
          className={`${styles["droppedDownContent"]}`}
        >
          <Carousel
            className={styles.dropDownRousel}
            autoPlay={false}
            showArrows={true}
            swipeScrollTolerance={100}
            preventMovementUntilSwipeScrollTolerance={true}
            interval={6000}
            transitionTime={1000}
            infiniteLoop={true}
            showIndicators={true}
            autoFocus={true}
            showStatus={true}
            useKeyboardArrows={true}
            swipeable={true}
            showThumbs={true}
          >
            <ul className={styles.dropDownGrid}>
              <div className={`${styles["dropDownColumnOne"]}`}>
                <li className={styles.dropDownLetter}>
                  <h1 className={styles.dropDownService}>Install Kaprew Creations</h1>
                </li>
              </div>
              <div className={styles.dropDownColumnGrid}>
                <div className={`${styles["RegisterSafeguard"]} ${styles["dropDownColumnTwo"]}`}>
                  <li className={styles.dropDownNav}>
                    <div
                      className={`${styles["GridOne"]} ${styles["dropDownElement"]} ${styles["Wrap"]}`}
                    >
                      <Image
                        priority
                        alt="Kaprew Creations AI"
                        src={WindowsOS}
                         
                        fill={true}
                        style={{ objectFit: "cover" }}
                      />
                      <div
                        className={`${styles["dropDownTitle"]} ${styles["GridBg"]}`}
                      >
                        Windows OS
                      </div>
                    </div>
                    <label
                      className={`${styles["MainTitle"]}`}
                      htmlFor="queryHotelName"
                    >
                      <button className={styles.SecureChannel}>
                        <Link href="/LaunchingSoon" className={styles.BookBtn}>
                          Download Kaprew Creations
                        </Link>
                      </button>
                    </label>
                  </li>
                  <li className={styles.dropDownNavII}>
                    <div
                      className={`${styles["GridOne"]} ${styles["dropDownElementII"]} ${styles["Wrap"]}`}
                    >
                      <Image
                        priority
                        alt="Kaprew Creations AI"
                        src={WindowsTerminal}
                         
                        fill={true}
                        style={{ objectFit: "cover" }}
                      />
                      <div
                        className={`${styles["dropDownTitle"]} ${styles["GridBg"]}`}
                      >
                        Launch on Terminal
                      </div>
                    </div>
                    <div
                      className={`${styles["GridOne"]} ${styles["dropDownElementII"]} ${styles["Wrap"]}`}
                    >
                      <Image
                        priority
                        alt="Kaprew Creations AI"
                        src={WindowsSoftware}
                         
                        fill={true}
                        style={{ objectFit: "cover" }}
                      />
                      <div
                        className={`${styles["dropDownTitle"]} ${styles["GridBg"]}`}
                      >
                        Launch as Software
                      </div>
                    </div>
                  </li>

                </div>
                <div className={`${styles["SystemSafeguard"]} ${styles["dropDownColumnTwo"]}`}>
                  <li className={styles.dropDownNav}>
                    <div
                      className={`${styles["GridOne"]} ${styles["dropDownElement"]} ${styles["Wrap"]}`}
                    >
                      <Image
                        priority
                        alt="Kaprew Creations AI"
                        src={LinuxOS}
                         
                        fill={true}
                        style={{ objectFit: "cover" }}
                      />
                      <div
                        className={`${styles["dropDownTitle"]} ${styles["GridBg"]}`}
                      >
                        Linux OS
                      </div>
                    </div>
                    <label
                      className={`${styles["MainTitle"]}`}
                      htmlFor="queryHotelName"
                    >
                      <button className={styles.SecureChannel}>
                        <Link href="/LaunchingSoon" className={styles.BookBtn}>
                          Download Kaprew Creations
                        </Link>
                      </button>
                    </label>
                  </li>
                  <li className={styles.dropDownNavII}>
                    <div
                      className={`${styles["GridOne"]} ${styles["dropDownElementII"]} ${styles["Wrap"]}`}
                    >
                      <Image
                        priority
                        alt="Kaprew Creations AI"
                        src={LinuxTerminal}
                         
                        fill={true}
                        style={{ objectFit: "cover" }}
                      />
                      <div
                        className={`${styles["dropDownTitle"]} ${styles["GridBg"]}`}
                      >
                        Launch on Terminal
                      </div>
                    </div>
                    <div
                      className={`${styles["GridOne"]} ${styles["dropDownElementII"]} ${styles["Wrap"]}`}
                    >
                      <Image
                        priority
                        alt="Kaprew Creations AI"
                        src={LinuxSoftware}
                         
                        fill={true}
                        style={{ objectFit: "cover" }}
                      />
                      <div
                        className={`${styles["dropDownTitle"]} ${styles["GridBg"]}`}
                      >
                        Launch as Software
                      </div>
                    </div>
                  </li>
                </div>
              </div>
            </ul>
            <ul className={styles.dropDownGrid}>
              <div className={`${styles["dropDownColumnOne"]}`}>
                <li className={styles.dropDownLetter}>
                  <h1 className={styles.dropDownService}>Install Kaprew Creations</h1>
                </li>
              </div>
              <div className={styles.dropDownColumnGrid}>
                <div className={`${styles["ProgramSafeguard"]} ${styles["dropDownColumnTwo"]}`}>
                  <li className={styles.dropDownNav}>
                    <div
                      className={`${styles["GridOne"]} ${styles["dropDownElement"]} ${styles["Wrap"]}`}
                    >
                      <Image
                        priority
                        alt="Kaprew Creations AI"
                        src={AndroidOS}
                         
                        fill={true}
                        style={{ objectFit: "cover" }}
                      />
                      <div
                        className={`${styles["dropDownTitle"]} ${styles["GridBg"]}`}
                      >
                        Android OS
                      </div>
                    </div>
                    <label
                      className={`${styles["MainTitle"]}`}
                      htmlFor="queryHotelName"
                    >
                      <button className={styles.SecureChannel}>
                        <Link href="/LaunchingSoon" className={styles.BookBtn}>
                          Download Kaprew Creations
                        </Link>
                      </button>
                    </label>
                  </li>
                  <li className={styles.dropDownNavII}>
                    <div
                      className={`${styles["GridOne"]} ${styles["dropDownElementII"]} ${styles["Wrap"]}`}
                    >
                      <Image
                        priority
                        alt="Kaprew Creations AI"
                        src={AndroidTerminal}
                         
                        fill={true}
                        style={{ objectFit: "cover" }}
                      />
                      <div
                        className={`${styles["dropDownTitle"]} ${styles["GridBg"]}`}
                      >
                        Download From Play Store
                      </div>
                    </div>
                    <div
                      className={`${styles["GridOne"]} ${styles["dropDownElementII"]} ${styles["Wrap"]}`}
                    >
                      <Image
                        priority
                        alt="Kaprew Creations AI"
                        src={AndroidSoftware}
                         
                        fill={true}
                        style={{ objectFit: "cover" }}
                      />
                      <div
                        className={`${styles["dropDownTitle"]} ${styles["GridBg"]}`}
                      >
                        Download APK
                      </div>
                    </div>
                  </li>
                </div>
                <div className={`${styles["Web|AppSafeguard"]} ${styles["dropDownColumnTwo"]}`}>
                  <li className={styles.dropDownNav}>
                    <div
                      className={`${styles["GridOne"]} ${styles["dropDownElement"]} ${styles["Wrap"]}`}
                    >
                      <Image
                        priority
                        alt="Kaprew Creations AI"
                        src={AppleOS}
                         
                        fill={true}
                        style={{ objectFit: "cover" }}
                      />
                      <div
                        className={`${styles["dropDownTitle"]} ${styles["GridBg"]}`}
                      >
                        Apple OS
                      </div>
                    </div>
                    <label
                      className={`${styles["MainTitle"]}`}
                      htmlFor="queryHotelName"
                    >
                      <button className={styles.SecureChannel}>
                        <Link href="/LaunchingSoon" className={styles.BookBtn}>
                          Download Kaprew Creations
                        </Link>
                      </button>
                    </label>
                  </li>
                  <li className={styles.dropDownNavII}>
                    <div
                      className={`${styles["GridOne"]} ${styles["dropDownElementII"]} ${styles["Wrap"]}`}
                    >
                      <Image
                        priority
                        alt="Kaprew Creations AI"
                        src={AppleTerminal}
                         
                        fill={true}
                        style={{ objectFit: "cover" }}
                      />
                      <div
                        className={`${styles["dropDownTitle"]} ${styles["GridBg"]}`}
                      >
                        Download From Apple Store
                      </div>
                    </div>
                    <div
                      className={`${styles["GridOne"]} ${styles["dropDownElementII"]} ${styles["Wrap"]}`}
                    >
                      <Image
                        priority
                        alt="Kaprew Creations AI"
                        src={AppleSoftware}
                         
                        fill={true}
                        style={{ objectFit: "cover" }}
                      />
                      <div
                        className={`${styles["dropDownTitle"]} ${styles["GridBg"]}`}
                      >
                        Download IPA Application
                      </div>
                    </div>
                  </li>
                </div>
              </div>
            </ul>
          </Carousel>
        </section>
      )}
      {showPB && (
        <section
          //style={{  display: showElement ? 'all' : 'all'}}
          className={`${styles["droppedDownContent"]}`}
        >
          <Carousel
            className={styles.dropDownRousel}
            autoPlay={false}
            showArrows={true}
            swipeScrollTolerance={100}
            preventMovementUntilSwipeScrollTolerance={true}
            interval={6000}
            transitionTime={1000}
            infiniteLoop={true}
            showIndicators={true}
            autoFocus={true}
            showStatus={true}
            useKeyboardArrows={true}
            swipeable={true}
            showThumbs={true}
          >
            <ul className={styles.dropDownGrid}>
              <div className={`${styles["dropDownColumnOne"]}`}>
                <li className={styles.dropDownLetter}>
                  <h1 className={styles.dropDownService}>About Us</h1>
                </li>
              </div>
              <div className={styles.dropDownColumnGrid}>
                <div className={`${styles["RegisterSafeguard"]} ${styles["dropDownColumnTwo"]}`}>
                  <li className={styles.dropDownNav}>
                    <div
                      className={`${styles["GridOne"]} ${styles["dropDownElement"]} ${styles["Wrap"]}`}
                    >
                      <Image
                        priority
                        alt="Kaprew Creations AI"
                        src={WritingInstruments}
                         
                        fill={true}
                        style={{ objectFit: "cover" }}
                      />
                      <div
                        className={`${styles["dropDownTitle"]} ${styles["GridBg"]}`}
                      >
                        Consumer Products
                      </div>
                    </div>
                    <label
                      className={`${styles["MainTitle"]}`}
                      htmlFor="queryHotelName"
                    >
                      <button className={styles.SecureChannel}>
                        <Link href="/LaunchingSoon" className={styles.BookBtn}>
                          Create a B2C Product
                        </Link>
                      </button>
                    </label>
                  </li>
                  <li className={styles.dropDownNavII}>
                    <div
                      className={`${styles["GridOne"]} ${styles["dropDownElementII"]} ${styles["Wrap"]}`}
                    >
                      <Image
                        priority
                        alt="Kaprew Creations AI"
                        src={BallpointPens}
                         
                        fill={true}
                        style={{ objectFit: "cover" }}
                      />
                      <div
                        className={`${styles["dropDownTitle"]} ${styles["GridBg"]}`}
                      >
                        Unique Luxury Consumer Product
                      </div>
                    </div>
                    <div
                      className={`${styles["GridOne"]} ${styles["dropDownElementII"]} ${styles["Wrap"]}`}
                    >
                      <Image
                        priority
                        alt="Kaprew Creations AI"
                        src={FountainPens}
                         
                        fill={true}
                        style={{ objectFit: "cover" }}
                      />
                      <div
                        className={`${styles["dropDownTitle"]} ${styles["GridBg"]}`}
                      >
                        Fast Moving Consumer Product
                      </div>
                    </div>
                  </li>

                </div>
                <div className={`${styles["SystemSafeguard"]} ${styles["dropDownColumnTwo"]}`}>
                  <li className={styles.dropDownNav}>
                    <div
                      className={`${styles["GridOne"]} ${styles["dropDownElement"]} ${styles["Wrap"]}`}
                    >
                      <Image
                        priority
                        alt="Kaprew Creations AI"
                        src={PaperProducts}
                         
                        fill={true}
                        style={{ objectFit: "cover" }}
                      />
                      <div
                        className={`${styles["dropDownTitle"]} ${styles["GridBg"]}`}
                      >
                        Industrial Products
                      </div>
                    </div>
                    <label
                      className={`${styles["MainTitle"]}`}
                      htmlFor="queryHotelName"
                    >
                      <button className={styles.SecureChannel}>
                        <Link href="/LaunchingSoon" className={styles.BookBtn}>
                          Create a B2B Product
                        </Link>
                      </button>
                    </label>
                  </li>
                  <li className={styles.dropDownNavII}>
                    <div
                      className={`${styles["GridOne"]} ${styles["dropDownElementII"]} ${styles["Wrap"]}`}
                    >
                      <Image
                        priority
                        alt="Kaprew Creations AI"
                        src={CopierPapers}
                         
                        fill={true}
                        style={{ objectFit: "cover" }}
                      />
                      <div
                        className={`${styles["dropDownTitle"]} ${styles["GridBg"]}`}
                      >
                        Raw Materials
                      </div>
                    </div>
                    <div
                      className={`${styles["GridOne"]} ${styles["dropDownElementII"]} ${styles["Wrap"]}`}
                    >
                      <Image
                        priority
                        alt="Kaprew Creations AI"
                        src={Diary}
                         
                        fill={true}
                        style={{ objectFit: "cover" }}
                      />
                      <div
                        className={`${styles["dropDownTitle"]} ${styles["GridBg"]}`}
                      >
                        Capital Products
                      </div>
                    </div>
                  </li>
                </div>
              </div>
            </ul>
            <ul className={styles.dropDownGrid}>
              <div className={`${styles["dropDownColumnOne"]}`}>
                <li className={styles.dropDownLetter}>
                  <h1 className={styles.dropDownService}>About Us</h1>
                </li>
              </div>
              <div className={styles.dropDownColumnGrid}>
                <div className={`${styles["ProgramSafeguard"]} ${styles["dropDownColumnTwo"]}`}>
                  <li className={styles.dropDownNav}>
                    <div
                      className={`${styles["GridOne"]} ${styles["dropDownElement"]} ${styles["Wrap"]}`}
                    >
                      <Image
                        priority
                        alt="Kaprew Creations AI"
                        src={FilingSupplies}
                         
                        fill={true}
                        style={{ objectFit: "cover" }}
                      />
                      <div
                        className={`${styles["dropDownTitle"]} ${styles["GridBg"]}`}
                      >
                        Digital Products
                      </div>
                    </div>
                    <label
                      className={`${styles["MainTitle"]}`}
                      htmlFor="queryHotelName"
                    >
                      <button className={styles.SecureChannel}>
                        <Link href="/LaunchingSoon" className={styles.BookBtn}>
                          Create a Digital Product
                        </Link>
                      </button>
                    </label>
                  </li>
                  <li className={styles.dropDownNavII}>
                    <div
                      className={`${styles["GridOne"]} ${styles["dropDownElementII"]} ${styles["Wrap"]}`}
                    >
                      <Image
                        priority
                        alt="Kaprew Creations AI"
                        src={FileFolders}
                         
                        fill={true}
                        style={{ objectFit: "cover" }}
                      />
                      <div
                        className={`${styles["dropDownTitle"]} ${styles["GridBg"]}`}
                      >
                        <Link href='/ProductBuilder/DigitalProducts/SoftwareDevelopment'>
                          Software Development
                        </Link>
                      </div>
                    </div>
                    <div
                      className={`${styles["GridOne"]} ${styles["dropDownElementII"]} ${styles["Wrap"]}`}
                    >
                      <Image
                        priority
                        alt="Kaprew Creations AI"
                        src={ClipBoards}
                         
                        fill={true}
                        style={{ objectFit: "cover" }}
                      />
                      <div
                        className={`${styles["dropDownTitle"]} ${styles["GridBg"]}`}
                      >
                        Media Development
                      </div>
                    </div>
                  </li>
                </div>
                <div className={`${styles["Web|AppSafeguard"]} ${styles["dropDownColumnTwo"]}`}>
                  <li className={styles.dropDownNav}>
                    <div
                      className={`${styles["GridOne"]} ${styles["dropDownElement"]} ${styles["Wrap"]}`}
                    >
                      <Image
                        priority
                        alt="Kaprew Creations AI"
                        src={DeskTools}
                         
                        fill={true}
                        style={{ objectFit: "cover" }}
                      />
                      <div
                        className={`${styles["dropDownTitle"]} ${styles["GridBg"]}`}
                      >
                        Agricultural Products
                      </div>
                    </div>
                    <label
                      className={`${styles["MainTitle"]}`}
                      htmlFor="queryHotelName"
                    >
                      <button className={styles.SecureChannel}>
                        <Link href="/LaunchingSoon" className={styles.BookBtn}>
                          Create an Agricultural Product
                        </Link>
                      </button>
                    </label>
                  </li>
                  <li className={styles.dropDownNavII}>
                    <div
                      className={`${styles["GridOne"]} ${styles["dropDownElementII"]} ${styles["Wrap"]}`}
                    >
                      <Image
                        priority
                        alt="Kaprew Creations AI"
                        src={Staplers}
                         
                        fill={true}
                        style={{ objectFit: "cover" }}
                      />
                      <div
                        className={`${styles["dropDownTitle"]} ${styles["GridBg"]}`}
                      >
                        Processed Foods
                      </div>
                    </div>
                    <div
                      className={`${styles["GridOne"]} ${styles["dropDownElementII"]} ${styles["Wrap"]}`}
                    >
                      <Image
                        priority
                        alt="Kaprew Creations AI"
                        src={Scissors}
                         
                        fill={true}
                        style={{ objectFit: "cover" }}
                      />
                      <div
                        className={`${styles["dropDownTitle"]} ${styles["GridBg"]}`}
                      >
                        Whole Foods
                      </div>
                    </div>
                  </li>
                </div>
              </div>
            </ul>
          </Carousel>
        </section>
      )}
      {showEB && (
        <section
          //style={{  display: showElement ? 'all' : 'all'}}
          className={`${styles["droppedDownContent"]}`}
        >
          <Carousel
            className={styles.dropDownRousel}
            autoPlay={false}
            showArrows={true}
            swipeScrollTolerance={100}
            preventMovementUntilSwipeScrollTolerance={true}
            interval={6000}
            transitionTime={1000}
            infiniteLoop={true}
            showIndicators={true}
            autoFocus={true}
            showStatus={true}
            useKeyboardArrows={true}
            swipeable={true}
            showThumbs={true}
          >
            <ul className={styles.dropDownGrid}>
              <div className={`${styles["dropDownColumnOne"]}`}>
                <li className={styles.dropDownLetter}>
                  <h1 className={styles.dropDownService}>Our Blog</h1>
                </li>
              </div>
              <div className={styles.dropDownColumnGrid}>
                <div className={`${styles["RegisterSafeguard"]} ${styles["dropDownColumnTwo"]}`}>
                  <li className={styles.dropDownNav}>
                    <div
                      className={`${styles["GridOne"]} ${styles["dropDownElement"]} ${styles["Wrap"]}`}
                    >
                      <Image
                        priority
                        alt="Kaprew Creations AI"
                        src={WritingInstruments}
                         
                        fill={true}
                        style={{ objectFit: "cover" }}
                      />
                      <div
                        className={`${styles["dropDownTitle"]} ${styles["GridBg"]}`}
                      >
                        Performance Analytics
                      </div>
                    </div>
                    <label
                      className={`${styles["MainTitle"]}`}
                      htmlFor="queryHotelName"
                    >
                      <button className={styles.SecureChannel}>
                        <Link href="/LaunchingSoon" className={styles.BookBtn}>
                          View Full Scope
                        </Link>
                      </button>
                    </label>
                  </li>
                  <li className={styles.dropDownNavII}>
                    <div
                      className={`${styles["GridOne"]} ${styles["dropDownElementII"]} ${styles["Wrap"]}`}
                    >
                      <Image
                        priority
                        alt="Kaprew Creations AI"
                        src={BallpointPens}
                         
                        fill={true}
                        style={{ objectFit: "cover" }}
                      />
                      <div
                        className={`${styles["dropDownTitle"]} ${styles["GridBg"]}`}
                      >
                        Dataflow Evaluation
                      </div>
                    </div>
                    <div
                      className={`${styles["GridOne"]} ${styles["dropDownElementII"]} ${styles["Wrap"]}`}
                    >
                      <Image
                        priority
                        alt="Kaprew Creations AI"
                        src={FountainPens}
                         
                        fill={true}
                        style={{ objectFit: "cover" }}
                      />
                      <div
                        className={`${styles["dropDownTitle"]} ${styles["GridBg"]}`}
                      >
                        Controlflow Resolution
                      </div>
                    </div>
                  </li>

                </div>
                <div className={`${styles["SystemSafeguard"]} ${styles["dropDownColumnTwo"]}`}>
                  <li className={styles.dropDownNav}>
                    <div
                      className={`${styles["GridOne"]} ${styles["dropDownElement"]} ${styles["Wrap"]}`}
                    >
                      <Image
                        priority
                        alt="Kaprew Creations AI"
                        src={PaperProducts}
                         
                        fill={true}
                        style={{ objectFit: "cover" }}
                      />
                      <div
                        className={`${styles["dropDownTitle"]} ${styles["GridBg"]}`}
                      >
                        System Safeguard
                      </div>
                    </div>
                    <label
                      className={`${styles["MainTitle"]}`}
                      htmlFor="queryHotelName"
                    >
                      <button className={styles.SecureChannel}>
                        <Link href="/LaunchingSoon" className={styles.BookBtn}>
                          View Full Scope
                        </Link>
                      </button>
                    </label>
                  </li>
                  <li className={styles.dropDownNavII}>
                    <div
                      className={`${styles["GridOne"]} ${styles["dropDownElementII"]} ${styles["Wrap"]}`}
                    >
                      <Image
                        priority
                        alt="Kaprew Creations AI"
                        src={CopierPapers}
                         
                        fill={true}
                        style={{ objectFit: "cover" }}
                      />
                      <div
                        className={`${styles["dropDownTitle"]} ${styles["GridBg"]}`}
                      >
                        Network Surveillance
                      </div>
                    </div>
                    <div
                      className={`${styles["GridOne"]} ${styles["dropDownElementII"]} ${styles["Wrap"]}`}
                    >
                      <Image
                        priority
                        alt="Kaprew Creations AI"
                        src={Diary}
                         
                        fill={true}
                        style={{ objectFit: "cover" }}
                      />
                      <div
                        className={`${styles["dropDownTitle"]} ${styles["GridBg"]}`}
                      >
                        Honeypot Techniques
                      </div>
                    </div>
                  </li>
                </div>
              </div>
            </ul>
            <ul className={styles.dropDownGrid}>
              <div className={`${styles["dropDownColumnOne"]}`}>
                <li className={styles.dropDownLetter}>
                  <h1 className={styles.dropDownService}>Our Blog</h1>
                </li>
              </div>
              <div className={styles.dropDownColumnGrid}>
                <div className={`${styles["ProgramSafeguard"]} ${styles["dropDownColumnTwo"]}`}>
                  <li className={styles.dropDownNav}>
                    <div
                      className={`${styles["GridOne"]} ${styles["dropDownElement"]} ${styles["Wrap"]}`}
                    >
                      <Image
                        priority
                        alt="Kaprew Creations AI"
                        src={FilingSupplies}
                         
                        fill={true}
                        style={{ objectFit: "cover" }}
                      />
                      <div
                        className={`${styles["dropDownTitle"]} ${styles["GridBg"]}`}
                      >
                        Program Safeguard
                      </div>
                    </div>
                    <label
                      className={`${styles["MainTitle"]}`}
                      htmlFor="queryHotelName"
                    >
                      <button className={styles.SecureChannel}>
                        <Link href="/LaunchingSoon" className={styles.BookBtn}>
                          View Full Scope
                        </Link>
                      </button>
                    </label>
                  </li>
                  <li className={styles.dropDownNavII}>
                    <div
                      className={`${styles["GridOne"]} ${styles["dropDownElementII"]} ${styles["Wrap"]}`}
                    >
                      <Image
                        priority
                        alt="Kaprew Creations AI"
                        src={FileFolders}
                         
                        fill={true}
                        style={{ objectFit: "cover" }}
                      />
                      <div
                        className={`${styles["dropDownTitle"]} ${styles["GridBg"]}`}
                      >
                        Forensic Security
                      </div>
                    </div>
                    <div
                      className={`${styles["GridOne"]} ${styles["dropDownElementII"]} ${styles["Wrap"]}`}
                    >
                      <Image
                        priority
                        alt="Kaprew Creations AI"
                        src={ClipBoards}
                         
                        fill={true}
                        style={{ objectFit: "cover" }}
                      />
                      <div
                        className={`${styles["dropDownTitle"]} ${styles["GridBg"]}`}
                      >
                        Policy Regulation
                      </div>
                    </div>
                  </li>
                </div>
                <div className={`${styles["Web|AppSafeguard"]} ${styles["dropDownColumnTwo"]}`}>
                  <li className={styles.dropDownNav}>
                    <div
                      className={`${styles["GridOne"]} ${styles["dropDownElement"]} ${styles["Wrap"]}`}
                    >
                      <Image
                        priority
                        alt="Kaprew Creations AI"
                        src={DeskTools}
                         
                        fill={true}
                        style={{ objectFit: "cover" }}
                      />
                      <div
                        className={`${styles["dropDownTitle"]} ${styles["GridBg"]}`}
                      >
                        Web | App Safeguard
                      </div>
                    </div>
                    <label
                      className={`${styles["MainTitle"]}`}
                      htmlFor="queryHotelName"
                    >
                      <button className={styles.SecureChannel}>
                        <Link href="/LaunchingSoon" className={styles.BookBtn}>
                          View Full Scope
                        </Link>
                      </button>
                    </label>
                  </li>
                  <li className={styles.dropDownNavII}>
                    <div
                      className={`${styles["GridOne"]} ${styles["dropDownElementII"]} ${styles["Wrap"]}`}
                    >
                      <Image
                        priority
                        alt="Kaprew Creations AI"
                        src={Staplers}
                         
                        fill={true}
                        style={{ objectFit: "cover" }}
                      />
                      <div
                        className={`${styles["dropDownTitle"]} ${styles["GridBg"]}`}
                      >
                        Sandbox Sentinel
                      </div>
                    </div>
                    <div
                      className={`${styles["GridOne"]} ${styles["dropDownElementII"]} ${styles["Wrap"]}`}
                    >
                      <Image
                        priority
                        alt="Kaprew Creations AI"
                        src={Scissors}
                         
                        fill={true}
                        style={{ objectFit: "cover" }}
                      />
                      <div
                        className={`${styles["dropDownTitle"]} ${styles["GridBg"]}`}
                      >
                        Intrusion Sheild
                      </div>
                    </div>
                  </li>
                </div>
              </div>
            </ul>
          </Carousel>
        </section>
      )}
    </>
  );
}

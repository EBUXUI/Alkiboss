'use client'
import Head from "next/head";
import styles from "@/styles/Headbar/Main.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars, faChurch, faClose, faShop} from "@fortawesome/free-solid-svg-icons"
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import AgencySearchBar from "@/UI-Features/webComponent/searchComponent/AgencySearchBar";

/*----- Genetic Testing ------*/
import GeneticTesting from "@/MyPotraits/MainE.png";
import TestExamination from "@/MyPotraits/MainE.png";
import SelfScreening from "@/MyPotraits/MainE.png";
/*----- Genetic Testing ------*/

/*----- Foundational Workshops ------*/
import FoundationalWorkshops from "@/MyPotraits/MainE.png";
import HealthyRegime from "@/MyPotraits/MainE.png";
import ImmunityPlan from "@/MyPotraits/MainE.png";
/*----- Foundational Workshops ------*/

/*----- Early Cancer Detection ------*/
import EarlyCancerDetection from "@/MyPotraits/MainE.png";
import TestConsultation from "@/MyPotraits/MainE.png";
import SelfExamination from "@/MyPotraits/MainE.png";
/*----- Early Cancer Detection ------*/

/*----- Medical Sponsorship ------*/
import MedicalSponsorship from "@/MyPotraits/MainE.png";
import CancerProgrammes from "@/MyPotraits/MainE.png";
import DisabilityProgrammes from "@/MyPotraits/MainE.png";
/*----- Medical Sponsorship ------*/

/*----- Fundraising & Contribution ------*/
import FundraisingandContribution from "@/MyPotraits/MainE.png";
import OfferADonation from "@/MyPotraits/MainE.png";
import CrowdFunding from "@/MyPotraits/MainE.png";
/*----- Fundraising & Contribution ------*/

/*----- Volunteering & Support ------*/
import VolunteeringandSupport from "@/MyPotraits/MainE.png";
import OnGroundVolunteering from "@/MyPotraits/MainE.png";
import VirtualVolunteering from "@/MyPotraits/MainE.png";
/*----- Volunteering & Support ------*/

/*----- Advocacy & Awareness ------*/
import AdvocacyandAwareness from "@/MyPotraits/MainE.png";
import SocialCampaign from "@/MyPotraits/MainE.png";
import CommunitySeminar from "@/MyPotraits/MainE.png";
/*----- Advocacy & Awareness ------*/


/*----- International Exchange ------*/
import InternationalExchange from "@/MyPotraits/MainE.png";
import CrossBorderMedicalExchange from "@/MyPotraits/MainE.png";
import HumanitarianEmergencyResponse from "@/MyPotraits/MainE.png";
/*----- International Exchange ------*/

export default function HeadBar() {
  const [open, setOpen] = useState(false);

  const Router = useRouter();

  const [IS, setIS] = useState(false);
  const [GP, setGP] = useState(false);
  const [OF, setOF] = useState(false);
  const [FB, setFB] = useState(false);
  const [NA, setNA] = useState(false);
  const [HM, setHM] = useState(false);

  useEffect(() => {
    const dropIS = () => {
      IS && setIS(false);
    }
    Router.events.on('routeChangeStart', dropIS);
    return () => {
      Router.events.off('routeChangeStart', dropIS)
    }
  }, [IS, Router])

  useEffect(() => {
    const dropGP = () => {
      GP && setGP(false);
    }
    Router.events.on('routeChangeStart', dropGP);
    return () => {
      Router.events.off('routeChangeStart', dropGP)
    }
  }, [GP, Router])

  useEffect(() => {
    const dropOF = () => {
      OF && setOF(false);
    }
    Router.events.on('routeChangeStart', dropOF);
    return () => {
      Router.events.off('routeChangeStart', dropOF);
    }
  }, [OF, Router])

  useEffect(() => {
    const dropFB = () => {
      FB && setFB(false);
    }
    Router.events.on('routeChangeStart', dropFB);
    return () => {
      Router.events.off('routeChangeStart', dropFB)
    }
  }, [FB, Router])

  useEffect(() => {
    const dropNA = () => {
      NA && setNA(false);
    }
    Router.events.on('routeChangeStart', dropNA);
    return () => {
      Router.events.off('routeChangeStart', dropNA)
    }
  }, [NA, Router])

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
      <main className={styles.HeadercontentI}>
        <section className={styles.Headerhero}>
          <ul className={styles.HeaderTitle}>
            <div className={styles.HeaderOut}>
              <FontAwesomeIcon
                className={styles.HeroIcon}
                icon={faChurch}
              />
              <h4 className={styles.CompanyLogo}>
                <Link href='/'>
                  Laughter withheld in Banter.
                </Link>
              </h4>
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
                  <div onClick={() => { setIS(!IS) }} className={styles.HeaderNav}>
                    <Link href="/VideoCatalog">Video Catalog</Link>
                  </div>
                  <div onClick={() => { setGP(!GP) }} className={styles.HeaderNav}>
                    <Link href="/MusicCatalog">Music Catalog</Link>
                  </div>
                  <div onClick={() => { setOF(!OF) }} className={styles.HeaderNav}>
                    <Link href="/ChooseAPath">Choose A Path</Link>
                  </div>
                  <div onClick={() => { setFB(!FB) }} className={styles.HeaderNav}>
                    <Link href="/TheBlog"> The Blog </Link>
                  </div>
                  <div onClick={() => { setNA(!NA) }} className={styles.HeaderNav}>
                    <Link href="">Our Search Panel</Link>
                  </div>
                </div>
              )}
            </div>
            <div className={styles.HeaderGrid}>
              <li onClick={() => { setIS(!IS) }} className={styles.HeaderNav}>
                <Link href="/VideoCatalog">Video Catalog</Link>
              </li>
              <li onClick={() => { setGP(!GP) }} className={styles.HeaderNav}>
                <Link href="/MusicCatalog">Music Catalog</Link>
              </li>
              <li onClick={() => { setOF(!OF) }} className={styles.HeaderNav}>
                <Link href="/ChooseAPath">Choose A Path</Link>
              </li>
              <li onClick={() => { setFB(!FB) }} className={styles.HeaderNav}>
                <Link href="/TheBlog"> The Blog </Link>
              </li>
              <li onClick={() => { setNA(!NA) }} className={styles.HeaderNav}>
                <Link href="">Our Search Panel</Link>
              </li>
            </div>
          </ul>
        </section>
      </main>
      {IS && (
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
            showStatus={true}
            useKeyboardArrows={true}
            swipeable={true}
            showThumbs={true}
          >
            <ul className={styles.dropDownGrid}>
              <div className={`${styles["dropDownColumnOne"]}`}>
                <li className={styles.dropDownLetter}>
                  <h3 className={styles.dropDownService}>Video Catalog</h3>
                </li>
                <li className={styles.dropDownLetter}>
                  <FontAwesomeIcon
                    className={styles.HeroIcon}
                    onClick={() => { setIS(!IS) }}
                    icon={faClose}
                  />
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
                        alt="House of Grace Foundation"
                        src={EarlyCancerDetection}
                        quality={100}
                        fill={true}
                        style={{ objectFit: "cover" }}
                      />
                      <div
                        className={`${styles["dropDownTitle"]} ${styles["GridBg"]}`}
                      >
                        <Link href="VideoCatalog/CancerDetection">
                          Cancer Support
                        </Link>
                      </div>
                    </div>
                    <label
                      className={`${styles["MainTitle"]}`}
                      htmlFor="queryHotelName"
                    >
                      <button className={styles.SecureChannel}>
                        <Link href="VideoCatalog/CancerDetection" className={styles.BookBtn}>
                          Get Aid For Cancer
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
                        alt="House of Grace Foundation"
                        src={TestConsultation}
                        quality={100}
                        fill={true}
                        style={{ objectFit: "cover" }}
                      />
                      <div
                        className={`${styles["dropDownTitle"]} ${styles["GridBg"]}`}
                      >
                        <Link href="VideoCatalog/CancerDetection/ScheduleConsultation">
                          Schedule Test Consultation
                        </Link>
                      </div>
                    </div>
                    <div
                      className={`${styles["GridOne"]} ${styles["dropDownElementII"]} ${styles["Wrap"]}`}
                    >
                      <Image
                        priority
                        alt="House of Grace Foundation"
                        src={SelfExamination}
                        quality={100}
                        fill={true}
                        style={{ objectFit: "cover" }}
                      />
                      <div
                        className={`${styles["dropDownTitle"]} ${styles["GridBg"]}`}
                      >
                        <Link href="VideoCatalog/CancerDetection/SelfConduct">
                          Inquire The Treatment
                        </Link>
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
                        alt="House of Grace Foundation"
                        src={GeneticTesting}
                        quality={100}
                        fill={true}
                        style={{ objectFit: "cover" }}
                      />
                      <div
                        className={`${styles["dropDownTitle"]} ${styles["GridBg"]}`}
                      >
                        <Link href="VideoCatalog/GeneticScreening">
                          Disability Support
                        </Link>
                      </div>
                    </div>
                    <label
                      className={`${styles["MainTitle"]}`}
                      htmlFor="queryHotelName"
                    >
                      <button className={styles.SecureChannel}>
                        <Link href="VideoCatalog/GeneticScreening" className={styles.BookBtn}>
                          Get Aid For Disability
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
                        alt="House of Grace Foundation"
                        src={TestExamination}
                        quality={100}
                        fill={true}
                        style={{ objectFit: "cover" }}
                      />
                      <div
                        className={`${styles["dropDownTitle"]} ${styles["GridBg"]}`}
                      >
                        <Link href="VideoCatalog/GeneticScreening/ScheduleConsultation">
                          Schedule Test Consultation
                        </Link>
                      </div>
                    </div>
                    <div
                      className={`${styles["GridOne"]} ${styles["dropDownElementII"]} ${styles["Wrap"]}`}
                    >
                      <Image
                        priority
                        alt="House of Grace Foundation"
                        src={SelfScreening}
                        quality={100}
                        fill={true}
                        style={{ objectFit: "cover" }}
                      />
                      <div
                        className={`${styles["dropDownTitle"]} ${styles["GridBg"]}`}
                      >
                        <Link href="VideoCatalog/GeneticScreening/SelfConduct">
                          The Financial Breakdown
                        </Link>
                      </div>
                    </div>
                  </li>
                </div>
              </div>
            </ul>
            <ul className={styles.dropDownGrid}>
              <div className={`${styles["dropDownColumnOne"]}`}>
                <li className={styles.dropDownLetter}>
                  <h3 className={styles.dropDownService}>Video Catalog</h3>
                </li>
                <li className={styles.dropDownLetter}>
                  <FontAwesomeIcon
                    className={styles.HeroIcon}
                    onClick={() => { setIS(!IS) }}
                    icon={faClose}
                  />
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
                        alt="House of Grace Foundation"
                        src={FoundationalWorkshops}
                        quality={100}
                        fill={true}
                        style={{ objectFit: "cover" }}
                      />
                      <div
                        className={`${styles["dropDownTitle"]} ${styles["GridBg"]}`}
                      >
                        <Link href="VideoCatalog/FoundationalWorkshops">
                          Foundational Workshops
                        </Link>
                      </div>
                    </div>
                    <label
                      className={`${styles["MainTitle"]}`}
                      htmlFor="queryHotelName"
                    >
                      <button className={styles.SecureChannel}>
                        <Link href="VideoCatalog/FoundationalWorkshops" className={styles.BookBtn}>
                          Lead A Healthy Lifestyle
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
                        alt="House of Grace Foundation"
                        src={HealthyRegime}
                        quality={100}
                        fill={true}
                        style={{ objectFit: "cover" }}
                      />
                      <div
                        className={`${styles["dropDownTitle"]} ${styles["GridBg"]}`}
                      >
                        <Link href="VideoCatalog/FoundationalWorkshops/CancerWorkshopRegime">
                          Cancer Workshop Regime
                        </Link>
                      </div>
                    </div>
                    <div
                      className={`${styles["GridOne"]} ${styles["dropDownElementII"]} ${styles["Wrap"]}`}
                    >
                      <Image
                        priority
                        alt="House of Grace Foundation"
                        src={ImmunityPlan}
                        quality={100}
                        fill={true}
                        style={{ objectFit: "cover" }}
                      />
                      <div
                        className={`${styles["dropDownTitle"]} ${styles["GridBg"]}`}
                      >
                        <Link href="VideoCatalog/FoundationalWorkshops/DisabilityWorkshopRegime">
                          Disability Workshop Regime
                        </Link>
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
                        alt="House of Grace Foundation"
                        src={MedicalSponsorship}
                        quality={100}
                        fill={true}
                        style={{ objectFit: "cover" }}
                      />
                      <div
                        className={`${styles["dropDownTitle"]} ${styles["GridBg"]}`}
                      >
                        <Link href="/LaunchingSoon">
                          Medical Sponsorship
                        </Link>

                      </div>
                    </div>
                    <label
                      className={`${styles["MainTitle"]}`}
                      htmlFor="queryHotelName"
                    >
                      <button className={styles.SecureChannel}>
                        <Link href="/LaunchingSoon" className={styles.BookBtn}>
                          Find A Medical Sponsor
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
                        alt="House of Grace Foundation"
                        src={CancerProgrammes}
                        quality={100}
                        fill={true}
                        style={{ objectFit: "cover" }}
                      />
                      <div
                        className={`${styles["dropDownTitle"]} ${styles["GridBg"]}`}
                      >
                        <Link href="/LaunchingSoon">
                          Cancer Programmes
                        </Link>
                      </div>
                    </div>
                    <div
                      className={`${styles["GridOne"]} ${styles["dropDownElementII"]} ${styles["Wrap"]}`}
                    >
                      <Image
                        priority
                        alt="House of Grace Foundation"
                        src={DisabilityProgrammes}
                        quality={100}
                        fill={true}
                        style={{ objectFit: "cover" }}
                      />
                      <div
                        className={`${styles["dropDownTitle"]} ${styles["GridBg"]}`}
                      >
                        <Link href="/LaunchingSoon">
                          Disability Programmes
                        </Link>
                      </div>
                    </div>
                  </li>
                </div>
              </div>
            </ul>
          </Carousel>
        </section>
      )}
      {GP && (
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
                  <h3 className={styles.dropDownService}>Music Catalog</h3>
                </li>
                <li className={styles.dropDownLetter}>
                  <FontAwesomeIcon
                    className={styles.HeroIcon}
                    onClick={() => { setGP(!GP) }}
                    icon={faClose}
                  />
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
                        alt="House of Grace Foundation"
                        src={FundraisingandContribution}
                        quality={100}
                        fill={true}
                        style={{ objectFit: "cover" }}
                      />
                      <div
                        className={`${styles["dropDownTitle"]} ${styles["GridBg"]}`}
                      >
                        <Link href="/MusicCatalog/Fundraising">
                          Fundraising & Contribution
                        </Link>
                      </div>
                    </div>
                    <label
                      className={`${styles["MainTitle"]}`}
                      htmlFor="queryHotelName"
                    >
                      <button className={styles.SecureChannel}>
                        <Link href="/MusicCatalog/Fundraising" className={styles.BookBtn}>
                          Fund The Grace Foundation
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
                        alt="House of Grace Foundation"
                        src={OfferADonation}
                        quality={100}
                        fill={true}
                        style={{ objectFit: "cover" }}
                      />
                      <div
                        className={`${styles["dropDownTitle"]} ${styles["GridBg"]}`}
                      >
                        <Link href="/MusicCatalog/Fundraising/OfferADonation" >
                          Offer A Donation
                        </Link>

                      </div>
                    </div>
                    <div
                      className={`${styles["GridOne"]} ${styles["dropDownElementII"]} ${styles["Wrap"]}`}
                    >
                      <Image
                        priority
                        alt="House of Grace Foundation"
                        src={CrowdFunding}
                        quality={100}
                        fill={true}
                        style={{ objectFit: "cover" }}
                      />
                      <div
                        className={`${styles["dropDownTitle"]} ${styles["GridBg"]}`}
                      >
                        <Link href="/FoundationEntry/CrowdFunding" >
                          Join Our Crowd Funding
                        </Link>
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
                        alt="House of Grace Foundation"
                        src={VolunteeringandSupport}
                        quality={100}
                        fill={true}
                        style={{ objectFit: "cover" }}
                      />
                      <div
                        className={`${styles["dropDownTitle"]} ${styles["GridBg"]}`}
                      >
                        <Link href="/MusicCatalog/Volunteering" >
                          Volunteering & Support
                        </Link>

                      </div>
                    </div>
                    <label
                      className={`${styles["MainTitle"]}`}
                      htmlFor="queryHotelName"
                    >
                      <button className={styles.SecureChannel}>
                        <Link href="/MusicCatalog/Volunteering" className={styles.BookBtn}>
                          Indulge in Volunteering
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
                        alt="House of Grace Foundation"
                        src={OnGroundVolunteering}
                        quality={100}
                        fill={true}
                        style={{ objectFit: "cover" }}
                      />
                      <div
                        className={`${styles["dropDownTitle"]} ${styles["GridBg"]}`}
                      >
                        <Link href='/MusicCatalog/Volunteering/OnGroundVolunteering'>
                          On-Ground Volunteering
                        </Link>
                      </div>
                    </div>
                    <div
                      className={`${styles["GridOne"]} ${styles["dropDownElementII"]} ${styles["Wrap"]}`}
                    >
                      <Image
                        priority
                        alt="House of Grace Foundation"
                        src={VirtualVolunteering}
                        quality={100}
                        fill={true}
                        style={{ objectFit: "cover" }}
                      />
                      <div
                        className={`${styles["dropDownTitle"]} ${styles["GridBg"]}`}
                      >
                        <Link href='/MusicCatalog/Volunteering/VirtualVolunteering'>
                          Virtual Volunteering
                        </Link>
                      </div>
                    </div>
                  </li>
                </div>
              </div>
            </ul>
            <ul className={styles.dropDownGrid}>
              <div className={`${styles["dropDownColumnOne"]}`}>
                <li className={styles.dropDownLetter}>
                  <h3 className={styles.dropDownService}>Music Catalog</h3>
                </li>
                <li className={styles.dropDownLetter}>
                  <FontAwesomeIcon
                    className={styles.HeroIcon}
                    onClick={() => { setGP(!GP) }}
                    icon={faClose}
                  />
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
                        alt="House of Grace Foundation"
                        src={AdvocacyandAwareness}
                        quality={100}
                        fill={true}
                        style={{ objectFit: "cover" }}
                      />
                      <div
                        className={`${styles["dropDownTitle"]} ${styles["GridBg"]}`}
                      >
                        <Link href='/MusicCatalog/Awareness'>
                          Advocacy & Awareness
                        </Link>

                      </div>
                    </div>
                    <label
                      className={`${styles["MainTitle"]}`}
                      htmlFor="queryHotelName"
                    >
                      <button className={styles.SecureChannel}>
                        <Link href="/MusicCatalog/Awareness" className={styles.BookBtn}>
                          Learn How to Change Lives
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
                        alt="House of Grace Foundation"
                        src={SocialCampaign}
                        quality={100}
                        fill={true}
                        style={{ objectFit: "cover" }}
                      />
                      <div
                        className={`${styles["dropDownTitle"]} ${styles["GridBg"]}`}
                      >
                        <Link href='/MusicCatalog/Awareness/SocialCampaign'>
                          Join our Social Campaign
                        </Link>
                      </div>
                    </div>
                    <div
                      className={`${styles["GridOne"]} ${styles["dropDownElementII"]} ${styles["Wrap"]}`}
                    >
                      <Image
                        priority
                        alt="House of Grace Foundation"
                        src={CommunitySeminar}
                        quality={100}
                        fill={true}
                        style={{ objectFit: "cover" }}
                      />
                      <div
                        className={`${styles["dropDownTitle"]} ${styles["GridBg"]}`}
                      >
                        <Link href='/MusicCatalog/Awareness/CommunitySeminar'>
                          Join our Community Seminar
                        </Link>
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
                        alt="House of Grace Foundation"
                        src={InternationalExchange}
                        quality={100}
                        fill={true}
                        style={{ objectFit: "cover" }}
                      />
                      <div
                        className={`${styles["dropDownTitle"]} ${styles["GridBg"]}`}
                      >
                        <Link href='/LaunchingSoon'>
                          International Exchange Programs
                        </Link>

                      </div>
                    </div>
                    <label
                      className={`${styles["MainTitle"]}`}
                      htmlFor="queryHotelName"
                    >
                      <button className={styles.SecureChannel}>
                        <Link href="/LaunchingSoon" className={styles.BookBtn}>
                          Find A Medical Training Program
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
                        alt="House of Grace Foundation"
                        src={CrossBorderMedicalExchange}
                        quality={100}
                        fill={true}
                        style={{ objectFit: "cover" }}
                      />
                      <div
                        className={`${styles["dropDownTitle"]} ${styles["GridBg"]}`}
                      >
                        <Link href='/LaunchingSoon'>
                          Cross-Border Medical Exchange
                        </Link>
                      </div>
                    </div>
                    <div
                      className={`${styles["GridOne"]} ${styles["dropDownElementII"]} ${styles["Wrap"]}`}
                    >
                      <Image
                        priority
                        alt="House of Grace Foundation"
                        src={HumanitarianEmergencyResponse}
                        quality={100}
                        fill={true}
                        style={{ objectFit: "cover" }}
                      />
                      <div
                        className={`${styles["dropDownTitle"]} ${styles["GridBg"]}`}
                      >
                        <Link href='/LaunchingSoon'>
                          Humanitarian Emergency Response
                        </Link>
                      </div>
                    </div>
                  </li>
                </div>
              </div>
            </ul>
          </Carousel>
        </section>
      )}
      {OF && (
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
                  <h3 className={styles.dropDownService}>Choose A Path</h3>
                </li>
                <li className={styles.dropDownLetter}>
                  <FontAwesomeIcon
                    className={styles.HeroIcon}
                    onClick={() => { setOF(!OF) }}
                    icon={faClose}
                  />
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
                        alt="House of Grace Foundation"
                        src={EarlyCancerDetection}
                        quality={100}
                        fill={true}
                        style={{ objectFit: "cover" }}
                      />
                      <div
                        className={`${styles["dropDownTitle"]} ${styles["GridBg"]}`}
                      >
                        <Link href="/ChooseAPath/TheCompanyBoard" >
                          The Company Board
                        </Link>
                      </div>
                    </div>
                    <label
                      className={`${styles["MainTitle"]}`}
                      htmlFor="queryHotelName"
                    >
                      <button className={styles.SecureChannel}>
                        <Link href="/ChooseAPath/TheCompanyBoard" className={styles.BookBtn}>
                          View Our Leadership
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
                        alt="House of Grace Foundation"
                        src={TestConsultation}
                        quality={100}
                        fill={true}
                        style={{ objectFit: "cover" }}
                      />
                      <div
                        className={`${styles["dropDownTitle"]} ${styles["GridBg"]}`}
                      >
                        <Link href="/ChooseAPath/TheCompanyBoard/TheHelpDesk">
                          Help Desk
                        </Link>

                      </div>
                    </div>
                    <div
                      className={`${styles["GridOne"]} ${styles["dropDownElementII"]} ${styles["Wrap"]}`}
                    >
                      <Image
                        priority
                        alt="House of Grace Foundation"
                        src={SelfExamination}
                        quality={100}
                        fill={true}
                        style={{ objectFit: "cover" }}
                      />
                      <div
                        className={`${styles["dropDownTitle"]} ${styles["GridBg"]}`}
                      >
                        <Link href="/ChooseAPath/TheCompanyBoard/CompanyHistory">
                          Company History
                        </Link>
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
                        alt="House of Grace Foundation"
                        src={GeneticTesting}
                        quality={100}
                        fill={true}
                        style={{ objectFit: "cover" }}
                      />
                      <div
                        className={`${styles["dropDownTitle"]} ${styles["GridBg"]}`}
                      >
                        <Link href="/ChooseAPath/TransformingLivesJourney">
                          Transforming Lives Journey
                        </Link>
                      </div>
                    </div>
                    <label
                      className={`${styles["MainTitle"]}`}
                      htmlFor="queryHotelName"
                    >
                      <button className={styles.SecureChannel}>
                        <Link href="/ChooseAPath/TransformingLivesJourney" className={styles.BookBtn}>
                          View Our Journey
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
                        alt="House of Grace Foundation"
                        src={TestExamination}
                        quality={100}
                        fill={true}
                        style={{ objectFit: "cover" }}
                      />
                      <div
                        className={`${styles["dropDownTitle"]} ${styles["GridBg"]}`}
                      >
                        <Link href="/ChooseAPath/TransformingLivesJourney/CancerExperiences">
                          Cancer Experiences
                        </Link>
                      </div>
                    </div>
                    <div
                      className={`${styles["GridOne"]} ${styles["dropDownElementII"]} ${styles["Wrap"]}`}
                    >
                      <Image
                        priority
                        alt="House of Grace Foundation"
                        src={SelfScreening}
                        quality={100}
                        fill={true}
                        style={{ objectFit: "cover" }}
                      />
                      <div
                        className={`${styles["dropDownTitle"]} ${styles["GridBg"]}`}
                      >
                        <Link href="/ChooseAPath/TransformingLivesJourney/DisabilityExperiences">
                          Disability Experiences
                        </Link>
                      </div>
                    </div>
                  </li>
                </div>
              </div>
            </ul>
            <ul className={styles.dropDownGrid}>
              <div className={`${styles["dropDownColumnOne"]}`}>
                <li className={styles.dropDownLetter}>
                  <h3 className={styles.dropDownService}>Choose A Path</h3>
                </li>
                <li className={styles.dropDownLetter}>
                  <FontAwesomeIcon
                    className={styles.HeroIcon}
                    onClick={() => { setOF(!OF) }}
                    icon={faClose}
                  />
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
                        alt="House of Grace Foundation"
                        src={FoundationalWorkshops}
                        quality={100}
                        fill={true}
                        style={{ objectFit: "cover" }}
                      />
                      <div
                        className={`${styles["dropDownTitle"]} ${styles["GridBg"]}`}
                      >
                        <Link href="/ChooseAPath/ResearchandInnovation">
                          Research & Innovation
                        </Link>
                      </div>
                    </div>
                    <label
                      className={`${styles["MainTitle"]}`}
                      htmlFor="queryHotelName"
                    >
                      <button className={styles.SecureChannel}>
                        <Link href="/ChooseAPath/ResearchandInnovation" className={styles.BookBtn}>
                          View our Call for Change
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
                        alt="House of Grace Foundation"
                        src={HealthyRegime}
                        quality={100}
                        fill={true}
                        style={{ objectFit: "cover" }}
                      />
                      <div
                        className={`${styles["dropDownTitle"]} ${styles["GridBg"]}`}
                      >
                        <Link href="/ChooseAPath/ResearchandInnovation/TreatmentRegime">
                          Our Treatment Regime
                        </Link>
                      </div>
                    </div>
                    <div
                      className={`${styles["GridOne"]} ${styles["dropDownElementII"]} ${styles["Wrap"]}`}
                    >
                      <Image
                        priority
                        alt="House of Grace Foundation"
                        src={ImmunityPlan}
                        quality={100}
                        fill={true}
                        style={{ objectFit: "cover" }}
                      />
                      <div
                        className={`${styles["dropDownTitle"]} ${styles["GridBg"]}`}
                      >
                        <Link href="/ChooseAPath/ResearchandInnovation/TelemedicineConsultations">
                          Telemedicine Consultations
                        </Link>
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
                        alt="House of Grace Foundation"
                        src={MedicalSponsorship}
                        quality={100}
                        fill={true}
                        style={{ objectFit: "cover" }}
                      />
                      <div
                        className={`${styles["dropDownTitle"]} ${styles["GridBg"]}`}
                      >
                        <Link href="/ChooseAPath/WhyHouseOfGrace">
                          Why House of Grace?
                        </Link>
                      </div>
                    </div>
                    <label
                      className={`${styles["MainTitle"]}`}
                      htmlFor="queryHotelName"
                    >
                      <button className={styles.SecureChannel}>
                        <Link href="/ChooseAPath/WhyHouseOfGrace" className={styles.BookBtn}>
                          Know More About Us
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
                        alt="House of Grace Foundation"
                        src={CancerProgrammes}
                        quality={100}
                        fill={true}
                        style={{ objectFit: "cover" }}
                      />
                      <div
                        className={`${styles["dropDownTitle"]} ${styles["GridBg"]}`}
                      >
                        <Link href="/ChooseAPath/WhyHouseOfGrace/OurMission">
                          Our Mission & Vision
                        </Link>
                      </div>
                    </div>
                    <div
                      className={`${styles["GridOne"]} ${styles["dropDownElementII"]} ${styles["Wrap"]}`}
                    >
                      <Image
                        priority
                        alt="House of Grace Foundation"
                        src={DisabilityProgrammes}
                        quality={100}
                        fill={true}
                        style={{ objectFit: "cover" }}
                      />
                      <div
                        className={`${styles["dropDownTitle"]} ${styles["GridBg"]}`}
                      >
                        <Link href="/ChooseAPath/WhyHouseOfGrace/OurCoreValues">
                          Our Core Values
                        </Link>
                      </div>
                    </div>
                  </li>
                </div>
              </div>
            </ul>
          </Carousel>
        </section>
      )}
      {FB && (
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
                  <h3 className={styles.dropDownService}>The Foundational Blog</h3>
                </li>
                 <li className={styles.dropDownLetter}>
                  <FontAwesomeIcon
                    className={styles.HeroIcon}
                    onClick={() => { setFB(FB) }}
                    icon={faClose}
                  />
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
                        alt="House of Grace Foundation"
                        src={EarlyCancerDetection}
                        quality={100}
                        fill={true}
                        style={{ objectFit: "cover" }}
                      />
                      <div
                        className={`${styles["dropDownTitle"]} ${styles["GridBg"]}`}
                      >
                        <Link href='/TheBlog/CancerRelatedBlogs'>
                          Cancer-Related Blogs
                        </Link>

                      </div>
                    </div>
                    <label
                      className={`${styles["MainTitle"]}`}
                      htmlFor="queryHotelName"
                    >
                      <button className={styles.SecureChannel}>
                        <Link href="/TheBlog/CancerRelatedBlogs" className={styles.BookBtn}>
                          View All Cancer Blogs
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
                        alt="House of Grace Foundation"
                        src={TestConsultation}
                        quality={100}
                        fill={true}
                        style={{ objectFit: "cover" }}
                      />
                      <div
                        className={`${styles["dropDownTitle"]} ${styles["GridBg"]}`}
                      >
                        <Link href='/TheBlog/CancerRelatedBlogs/EarlyCancerDetectionBlog'>
                          Early Cancer Detection Blog
                        </Link>
                      </div>
                    </div>
                    <div
                      className={`${styles["GridOne"]} ${styles["dropDownElementII"]} ${styles["Wrap"]}`}
                    >
                      <Image
                        priority
                        alt="House of Grace Foundation"
                        src={SelfExamination}
                        quality={100}
                        fill={true}
                        style={{ objectFit: "cover" }}
                      />
                      <div
                        className={`${styles["dropDownTitle"]} ${styles["GridBg"]}`}
                      >
                        <Link href='/TheBlog/CancerRelatedBlogs/AffordableCancerTreatmentBlog'>
                          Cheap Cancer Treatment Blog
                        </Link>
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
                        alt="House of Grace Foundation"
                        src={GeneticTesting}
                        quality={100}
                        fill={true}
                        style={{ objectFit: "cover" }}
                      />
                      <div
                        className={`${styles["dropDownTitle"]} ${styles["GridBg"]}`}
                      >
                        <Link href='/TheBlog/DisabilityRelatedBlogs'>

                        </Link>
                        Disability-Related Blogs
                      </div>
                    </div>
                    <label
                      className={`${styles["MainTitle"]}`}
                      htmlFor="queryHotelName"
                    >
                      <button className={styles.SecureChannel}>
                        <Link href="/TheBlog/DisabilityRelatedBlogs" className={styles.BookBtn}>
                          View all Disability Blogs
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
                        alt="House of Grace Foundation"
                        src={TestExamination}
                        quality={100}
                        fill={true}
                        style={{ objectFit: "cover" }}
                      />
                      <div
                        className={`${styles["dropDownTitle"]} ${styles["GridBg"]}`}
                      >
                        <Link href="/TheBlog/DisabilityRelatedBlogs/DisabilityRightsBlog">
                          The Disability Rights Blog
                        </Link>
                      </div>
                    </div>
                    <div
                      className={`${styles["GridOne"]} ${styles["dropDownElementII"]} ${styles["Wrap"]}`}
                    >
                      <Image
                        priority
                        alt="House of Grace Foundation"
                        src={SelfScreening}
                        quality={100}
                        fill={true}
                        style={{ objectFit: "cover" }}
                      />
                      <div
                        className={`${styles["dropDownTitle"]} ${styles["GridBg"]}`}
                      >
                        <Link href="/TheBlog/DisabilityRelatedBlogs/RoleofGeneticTestingBlog">
                          Role of Genetic Testing Blog
                        </Link>
                      </div>
                    </div>
                  </li>
                </div>
              </div>
            </ul>
            <ul className={styles.dropDownGrid}>
            <div className={`${styles["dropDownColumnOne"]}`}>
                <li className={styles.dropDownLetter}>
                  <h3 className={styles.dropDownService}>The Foundational Blog</h3>
                </li>
                <li className={styles.dropDownLetter}>
                  <FontAwesomeIcon
                    className={styles.HeroIcon}
                    onClick={() => { setFB(FB) }}
                    icon={faClose}
                  />
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
                        alt="House of Grace Foundation"
                        src={FoundationalWorkshops}
                        quality={100}
                        fill={true}
                        style={{ objectFit: "cover" }}
                      />
                      <div
                        className={`${styles["dropDownTitle"]} ${styles["GridBg"]}`}
                      >
                        <Link href="/TheBlog/GrowthRelatedBlogs">
                          Growth-Related Blogs
                        </Link>
                      </div>
                    </div>
                    <label
                      className={`${styles["MainTitle"]}`}
                      htmlFor="queryHotelName"
                    >
                      <button className={styles.SecureChannel}>
                        <Link href="/TheBlog/GrowthRelatedBlogs" className={styles.BookBtn}>
                          View all Growth-Related Blogs
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
                        alt="House of Grace Foundation"
                        src={HealthyRegime}
                        quality={100}
                        fill={true}
                        style={{ objectFit: "cover" }}
                      />
                      <div
                        className={`${styles["dropDownTitle"]} ${styles["GridBg"]}`}
                      >
                        <Link href="/TheBlog/GrowthRelatedBlogs/RoleofTelemedicineBlog">
                          The Role of Telemedicine Blog
                        </Link>
                      </div>
                    </div>
                    <div
                      className={`${styles["GridOne"]} ${styles["dropDownElementII"]} ${styles["Wrap"]}`}
                    >
                      <Image
                        priority
                        alt="House of Grace Foundation"
                        src={ImmunityPlan}
                        quality={100}
                        fill={true}
                        style={{ objectFit: "cover" }}
                      />
                      <div
                        className={`${styles["dropDownTitle"]} ${styles["GridBg"]}`}
                      >
                        <Link href="/TheBlog/GrowthRelatedBlogs/TheFundingHopeBlog">
                          The Funding Hope Blog
                        </Link>
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
                        alt="House of Grace Foundation"
                        src={MedicalSponsorship}
                        quality={100}
                        fill={true}
                        style={{ objectFit: "cover" }}
                      />
                      <div
                        className={`${styles["dropDownTitle"]} ${styles["GridBg"]}`}
                      >
                        <Link href="/TheBlog/HealthcareRelatedBlogs">
                          Healthcare-Related Blogs
                        </Link>
                      </div>
                    </div>
                    <label
                      className={`${styles["MainTitle"]}`}
                      htmlFor="queryHotelName"
                    >
                      <button className={styles.SecureChannel}>
                        <Link href="/TheBlog/HealthcareRelatedBlogs" className={styles.BookBtn}>
                          View all Healthcare-Related Blogs
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
                        alt="House of Grace Foundation"
                        src={CancerProgrammes}
                        quality={100}
                        fill={true}
                        style={{ objectFit: "cover" }}
                      />
                      <div
                        className={`${styles["dropDownTitle"]} ${styles["GridBg"]}`}
                      >
                        <Link href='/TheBlog/HealthcareRelatedBlogs/PatneringwithHospitalsBlog'>
                          Partnering With Hospitals Blog
                        </Link>
                      </div>
                    </div>
                    <div
                      className={`${styles["GridOne"]} ${styles["dropDownElementII"]} ${styles["Wrap"]}`}
                    >
                      <Image
                        priority
                        alt="House of Grace Foundation"
                        src={DisabilityProgrammes}
                        quality={100}
                        fill={true}
                        style={{ objectFit: "cover" }}
                      />
                      <div
                        className={`${styles["dropDownTitle"]} ${styles["GridBg"]}`}
                      >
                        <Link href='/TheBlog/HealthcareRelatedBlogs/PatneringwithSchoolsBlog'>
                          Partnering with Schools Blog
                        </Link>
                      </div>
                    </div>
                  </li>
                </div>
              </div>
            </ul>
          </Carousel>
        </section>
      )}
      {NA && (
        <section
          //style={{  display: showElement ? 'all' : 'all'}}
          className={`${styles["droppedDownContent"]}`}
        >
        <AgencySearchBar/>
        </section>
      )}
    </>
  );
}

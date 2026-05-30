import Head from "next/head";
import styles from "@/styles/Soriyo/Main.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from "next/router";
import { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import ImageStyles from "@/styles/Modern/Desktop.module.css";
import FinanceHeader from "@/UI-Features/DBMS/Features/Contract-K.jpg";
import FinanceHeaderII from "@/UI-Features/DBMS/Features/Contract-A.jpg";
import FinanceHeaderIII from "@/UI-Features/DBMS/Features/Contract-B.jpg";
import FinanceHeaderIV from "@/UI-Features/DBMS/Features/Contract-G.jpg";
import FinanceHeaderV from "@/UI-Features/DBMS/Features/Contract-H.jpg";

/*----- Genetic Testing ------*/
import GeneticTesting from "@/UI-Features/UI-Gallery/CancerDetection/GeneticScreening.jpeg";
import TestExamination from "@/UI-Features/UI-Gallery/CancerDetection/ColorectalCancer.jpg";
import SelfScreening from "@/UI-Features/UI-Gallery/CancerDetection/SelfTest.jpg";
/*----- Genetic Testing ------*/

/*----- Foundational Workshops ------*/
import FoundationalWorkshops from "@/UI-Features/UI-Gallery/CancerDetection/FoundationalWorkshop.jpeg";
import HealthyRegime from "@/UI-Features/UI-Gallery/CancerDetection/Environmental.jpg";
import ImmunityPlan from "@/UI-Features/UI-Gallery/CancerDetection/BrainIV.jpg";
/*----- Foundational Workshops ------*/

/*----- Early Cancer Detection ------*/
import EarlyCancerDetection from "@/UI-Features/UI-Gallery/CancerDetection/CancerDetection.jpeg";
import TestConsultation from "@/UI-Features/UI-Gallery/CancerDetection/LungCancerI.jpg";
import SelfExamination from "@/UI-Features/UI-Gallery/CancerDetection/SelfTestIII.jpg";
/*----- Early Cancer Detection ------*/

/*----- Medical Sponsorship ------*/
import MedicalSponsorship from "@/UI-Features/UI-Gallery/CancerDetection/SponsorshipI.jpeg";
import CancerProgrammes from "@/UI-Features/UI-Gallery/CancerDetection/ComplementaryII.jpg";
import DisabilityProgrammes from "@/UI-Features/UI-Gallery/CancerDetection/AssistiveTechI.jpg";
/*----- Medical Sponsorship ------*/

/*----- Fundraising & Contribution ------*/
import FundraisingandContribution from "@/UI-Features/UI-Gallery/CancerDetection/Fundraising.jpg";
import OfferADonation from "@/UI-Features/UI-Gallery/CancerDetection/DonationI.jpg";
import CrowdFunding from "@/UI-Features/UI-Gallery/CancerDetection/CrowdI.jpg";
/*----- Fundraising & Contribution ------*/

/*----- Volunteering & Support ------*/
import VolunteeringandSupport from "@/UI-Features/UI-Gallery/CancerDetection/Volunteer.jpeg";
import OnGroundVolunteering from "@/UI-Features/UI-Gallery/CancerDetection/OnGround.jpeg";
import VirtualVolunteering from "@/UI-Features/UI-Gallery/CancerDetection/Virtual.jpg";
/*----- Volunteering & Support ------*/

/*----- Advocacy & Awareness ------*/
import AdvocacyandAwareness from "@/UI-Features/UI-Gallery/CancerDetection/SocialMedia.jpg";
import SocialCampaign from "@/UI-Features/UI-Gallery/CancerDetection/SocialMediaI.jpg";
import CommunitySeminar from "@/UI-Features/UI-Gallery/CancerDetection/CommunitySeminar.jpg";
/*----- Advocacy & Awareness ------*/


/*----- International Exchange ------*/
import InternationalExchange from "@/UI-Features/UI-Gallery/CancerDetection/CancerCommunity.jpg";
import CrossBorderMedicalExchange from "@/UI-Features/UI-Gallery/CancerDetection/CancerCommunityI.jpg";
import HumanitarianEmergencyResponse from "@/UI-Features/UI-Gallery/CancerDetection/CancerCommunityII.jpg";
import { faBell, faChurch, faEnvelope, faHammer } from "@fortawesome/free-solid-svg-icons";
/*----- International Exchange ------*/

export default function HeadBar() {

  const Router = useRouter();

  const [IS, setIS] = useState(false);
  const [GP, setGP] = useState(false);
  const [OF, setOF] = useState(false);
  const [FB, setFB] = useState(false);
  const [NA, setNA] = useState(false);

  return (
    <>
      <main className={styles.HeadercontentI}>
        <section className={styles.Headerhero}>
          <ul className={styles.HeaderTitleI}>
            <div className={styles.HeaderOut}>
              <div className={styles.DashboardLogo}>
                <FontAwesomeIcon
                  className={styles.HeroIconI}
                  icon={faChurch}
                />
                <h4 className={styles.CompanyLogo}>
                  <Link href='/'>
                    House of Grace
                  </Link>
                </h4>
              </div>
              <div className={styles.DashboardProfile}>
                <div className={styles.DashboardMessages}>
                  <FontAwesomeIcon
                    className={styles.HeroIcon}
                    icon={faEnvelope}
                  />
                </div>
                <div className={styles.DashboardSettings}>
                  <FontAwesomeIcon
                    className={styles.HeroIcon}
                    icon={faHammer}
                  />
                </div>
                <div className={styles.DashboardNotifications}>
                  <FontAwesomeIcon
                    className={styles.HeroIcon}
                    icon={faBell}
                  />
                </div>
                <div className={styles.DashboardProfilePicture}>
                  <FontAwesomeIcon
                    className={styles.HeroIcon}
                    icon={faChurch}
                  />
                </div>
              </div>
            </div>
            <div className={styles.HeaderGridI}>
              <li onClick={() => { setIS(!IS) }} className={styles.HeaderNavX}>
                <label className={ImageStyles.TabField}>
                  <Image
                    priority
                    alt="Financial Security - Dashboard Product"
                    src={FinanceHeader}
                    style={{ objectFit: "cover" }}
                    className={ImageStyles.TabFieldImage}
                  />
                </label>
                <Link href="/InnovativeSolutions">View Today's Transactions</Link>
              </li>
              <li onClick={() => { setGP(!GP) }} className={styles.HeaderNavX}>
                <label className={ImageStyles.TabField}>
                  <Image
                    priority
                    alt="Financial Security - Dashboard Product"
                    src={FinanceHeader}
                    style={{ objectFit: "cover" }}
                    className={ImageStyles.TabFieldImage}
                  />
                </label>
                <Link href="/Global Participation">Investors</Link>
              </li>
              <li onClick={() => { setOF(!OF) }} className={styles.HeaderNavX}>
                <label className={ImageStyles.TabField}>
                  <Image
                    priority
                    alt="Financial Security - Dashboard Product"
                    src={FinanceHeader}
                    style={{ objectFit: "cover" }}
                    className={ImageStyles.TabFieldImage}
                  />
                </label>
                <Link href="/OurFoundation">Doantions</Link>
              </li>
              <li onClick={() => { setOF(!OF) }} className={styles.HeaderNavX}>
                <label className={ImageStyles.TabField}>
                  <Image
                    priority
                    alt="Financial Security - Dashboard Product"
                    src={FinanceHeader}
                    style={{ objectFit: "cover" }}
                    className={ImageStyles.TabFieldImage}
                  />
                </label>
                <Link href="/OurFoundation">Doantions</Link>
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
            autoFocus={true}
            showStatus={true}
            useKeyboardArrows={true}
            swipeable={true}
            showThumbs={true}
          >
            <ul className={styles.dropDownGrid}>
              <div className={`${styles["dropDownColumnOne"]}`}>
                <li className={styles.dropDownLetter}>
                  <h3 className={styles.dropDownService}>Innovative Solutions</h3>
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
                        Early Cancer Detection
                      </div>
                    </div>
                    <label
                      className={`${styles["MainTitle"]}`}
                      htmlFor="queryHotelName"
                    >
                      <button className={styles.SecureChannel}>
                        <Link href="" className={styles.BookBtn}>
                          Examine Body For Cancer
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
                        Schedule Test Consultation
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
                        Conduct Self Examination
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
                        Early Genetic Screening
                      </div>
                    </div>
                    <label
                      className={`${styles["MainTitle"]}`}
                      htmlFor="queryHotelName"
                    >
                      <button className={styles.SecureChannel}>
                        <Link href="" className={styles.BookBtn}>
                          Examine Body For Disabilities
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
                        Schedule Test Examination
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
                        Conduct Self Examination
                      </div>
                    </div>
                  </li>
                </div>
              </div>
            </ul>
            <ul className={styles.dropDownGrid}>
              <div className={`${styles["dropDownColumnOne"]}`}>
                <li className={styles.dropDownLetter}>
                  <h3 className={styles.dropDownService}>Innovative Solutions</h3>
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
                        Foundational Workshops
                      </div>
                    </div>
                    <label
                      className={`${styles["MainTitle"]}`}
                      htmlFor="queryHotelName"
                    >
                      <button className={styles.SecureChannel}>
                        <Link href="" className={styles.BookBtn}>
                          Start A Healthy Lifestyle
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
                        Cancer Workshop Regime
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
                        Disability Workshop Regime
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
                        Medical Sponsorship
                      </div>
                    </div>
                    <label
                      className={`${styles["MainTitle"]}`}
                      htmlFor="queryHotelName"
                    >
                      <button className={styles.SecureChannel}>
                        <Link href="" className={styles.BookBtn}>
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
                        Cancer Programmes
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
                        Disability Programmes
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
                  <h3 className={styles.dropDownService}>Global Participation</h3>
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
                        Fundraising & Contribution
                      </div>
                    </div>
                    <label
                      className={`${styles["MainTitle"]}`}
                      htmlFor="queryHotelName"
                    >
                      <button className={styles.SecureChannel}>
                        <Link href="" className={styles.BookBtn}>
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
                        Offer A Donation
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
                        Join Our Crowd Funding
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
                        Volunteering & Support
                      </div>
                    </div>
                    <label
                      className={`${styles["MainTitle"]}`}
                      htmlFor="queryHotelName"
                    >
                      <button className={styles.SecureChannel}>
                        <Link href="" className={styles.BookBtn}>
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
                        On-Ground Volunteering
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
                        Virtual Volunteering
                      </div>
                    </div>
                  </li>
                </div>
              </div>
            </ul>
            <ul className={styles.dropDownGrid}>
              <div className={`${styles["dropDownColumnOne"]}`}>
                <li className={styles.dropDownLetter}>
                  <h3 className={styles.dropDownService}>Global Participation</h3>
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
                        Advocacy & Awareness
                      </div>
                    </div>
                    <label
                      className={`${styles["MainTitle"]}`}
                      htmlFor="queryHotelName"
                    >
                      <button className={styles.SecureChannel}>
                        <Link href="" className={styles.BookBtn}>
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
                        Join our Social Campaign
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
                        Join our Community Seminar
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
                        International Exchange Programs
                      </div>
                    </div>
                    <label
                      className={`${styles["MainTitle"]}`}
                      htmlFor="queryHotelName"
                    >
                      <button className={styles.SecureChannel}>
                        <Link href="" className={styles.BookBtn}>
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
                        Cross-Border Medical Exchange
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
                        Humanitarian Emergency Response
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
                  <h3 className={styles.dropDownService}>Our Foundation</h3>
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
                        The Company Board
                      </div>
                    </div>
                    <label
                      className={`${styles["MainTitle"]}`}
                      htmlFor="queryHotelName"
                    >
                      <button className={styles.SecureChannel}>
                        <Link href="" className={styles.BookBtn}>
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
                        Organizational Hierarchy
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
                        Company History
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
                        Transforming Lives Journey
                      </div>
                    </div>
                    <label
                      className={`${styles["MainTitle"]}`}
                      htmlFor="queryHotelName"
                    >
                      <button className={styles.SecureChannel}>
                        <Link href="" className={styles.BookBtn}>
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
                        Cancer Experiences
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
                        Disability Experiences
                      </div>
                    </div>
                  </li>
                </div>
              </div>
            </ul>
            <ul className={styles.dropDownGrid}>
              <div className={`${styles["dropDownColumnOne"]}`}>
                <li className={styles.dropDownLetter}>
                  <h3 className={styles.dropDownService}>Our Foundation</h3>
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
                        Research & Innovation
                      </div>
                    </div>
                    <label
                      className={`${styles["MainTitle"]}`}
                      htmlFor="queryHotelName"
                    >
                      <button className={styles.SecureChannel}>
                        <Link href="" className={styles.BookBtn}>
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
                        Our Treatment Regime
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
                        Telemedicine Consultations
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
                        Why House of Grace?
                      </div>
                    </div>
                    <label
                      className={`${styles["MainTitle"]}`}
                      htmlFor="queryHotelName"
                    >
                      <button className={styles.SecureChannel}>
                        <Link href="" className={styles.BookBtn}>
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
                        Our Mission & Vision
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
                        Our Core Values
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
                  <h3 className={styles.dropDownService}>The Foundation Blog</h3>
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
                        Cancer-Related Blogs
                      </div>
                    </div>
                    <label
                      className={`${styles["MainTitle"]}`}
                      htmlFor="queryHotelName"
                    >
                      <button className={styles.SecureChannel}>
                        <Link href="" className={styles.BookBtn}>
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
                        Early Cancer Detection Blog
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
                        Cheap Cancer Treatment Blog
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
                        Disability-Related Blogs
                      </div>
                    </div>
                    <label
                      className={`${styles["MainTitle"]}`}
                      htmlFor="queryHotelName"
                    >
                      <button className={styles.SecureChannel}>
                        <Link href="" className={styles.BookBtn}>
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
                        The Disability Rights Blog
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
                        Role of Genetic Testing Blog
                      </div>
                    </div>
                  </li>
                </div>
              </div>
            </ul>
            <ul className={styles.dropDownGrid}>
              <div className={`${styles["dropDownColumnOne"]}`}>
                <li className={styles.dropDownLetter}>
                  <h3 className={styles.dropDownService}>The Foundation Blog</h3>
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
                        Growth-Related Blogs
                      </div>
                    </div>
                    <label
                      className={`${styles["MainTitle"]}`}
                      htmlFor="queryHotelName"
                    >
                      <button className={styles.SecureChannel}>
                        <Link href="" className={styles.BookBtn}>
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
                        The Role of Telemedicine Blog
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
                        The Funding Hope Blog
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
                        Healthcare-Related Blogs
                      </div>
                    </div>
                    <label
                      className={`${styles["MainTitle"]}`}
                      htmlFor="queryHotelName"
                    >
                      <button className={styles.SecureChannel}>
                        <Link href="" className={styles.BookBtn}>
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
                        Partnering With Hospitals Blog
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
                        Partnering with Schools Blog
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
                  <h3 className={styles.dropDownService}>Network Association</h3>
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
                        Early Cancer Detection
                      </div>
                    </div>
                    <label
                      className={`${styles["MainTitle"]}`}
                      htmlFor="queryHotelName"
                    >
                      <button className={styles.SecureChannel}>
                        <Link href="" className={styles.BookBtn}>
                          Examine Body For Cancer
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
                        Schedule Test Consultation
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
                        Conduct Self Examination
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
                        Early Genetic Screening
                      </div>
                    </div>
                    <label
                      className={`${styles["MainTitle"]}`}
                      htmlFor="queryHotelName"
                    >
                      <button className={styles.SecureChannel}>
                        <Link href="" className={styles.BookBtn}>
                          Examine Body For Disabilities
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
                        Schedule Test Examination
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
                        Conduct Self Examination
                      </div>
                    </div>
                  </li>
                </div>
              </div>
            </ul>
            <ul className={styles.dropDownGrid}>
              <div className={`${styles["dropDownColumnOne"]}`}>
                <li className={styles.dropDownLetter}>
                  <h3 className={styles.dropDownService}>Network Association</h3>
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
                        Foundational Workshops
                      </div>
                    </div>
                    <label
                      className={`${styles["MainTitle"]}`}
                      htmlFor="queryHotelName"
                    >
                      <button className={styles.SecureChannel}>
                        <Link href="" className={styles.BookBtn}>
                          Start A Healthy Lifestyle
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
                        Cancer Workshop Regime
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
                        Disability Workshop Regime
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
                        Medical Sponsorship
                      </div>
                    </div>
                    <label
                      className={`${styles["MainTitle"]}`}
                      htmlFor="queryHotelName"
                    >
                      <button className={styles.SecureChannel}>
                        <Link href="" className={styles.BookBtn}>
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
                        Cancer Programmes
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
                        Disability Programmes
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

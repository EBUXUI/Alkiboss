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
                    <Link href="https://www.tiktok.com/@alkiboss_classic">Video Catalog</Link>
                  </div>
                  <div onClick={() => { setGP(!GP) }} className={styles.HeaderNav}>
                    <Link href="https://www.youtube.com/@alkibossclassic">Music Catalog</Link>
                  </div>
                  <div onClick={() => { setOF(!OF) }} className={styles.HeaderNav}>
                    <Link href="#AllContent">Choose A Path</Link>
                  </div>
                  <div onClick={() => { setFB(!FB) }} className={styles.HeaderNav}>
                    <Link href="https://www.instagram.com/alkiboss_classic"> Reel Catalog </Link>
                  </div>
                  <div onClick={() => { setNA(!NA) }} className={styles.HeaderNav}>
                    <Link href="">Our Search Panel</Link>
                  </div>
                </div>
              )}
            </div>
            <div className={styles.HeaderGrid}>
              <li onClick={() => { setIS(!IS) }} className={styles.HeaderNav}>
                <Link href="https://www.tiktok.com/@alkiboss_classic">Video Catalog</Link>
              </li>
              <li onClick={() => { setGP(!GP) }} className={styles.HeaderNav}>
                <Link href="https://www.youtube.com/@alkibossclassic">Music Catalog</Link>
              </li>
              <li onClick={() => { setOF(!OF) }} className={styles.HeaderNav}>
                <Link href="#AllContent">Choose A Path</Link>
              </li>
              <li onClick={() => { setFB(!FB) }} className={styles.HeaderNav}>
                <Link href="https://www.instagram.com/alkiboss_classic"> Reel Catalog </Link>
              </li>
              <li onClick={() => { setNA(!NA) }} className={styles.HeaderNav}>
                <Link href="">Our Search Panel</Link>
              </li>
            </div>
          </ul>
        </section>
      </main>
     
    </>
  );
}

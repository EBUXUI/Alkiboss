import Image from 'next/image';
import styles from '@/styles/Builder-Dashboard/Desktop.module.css';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CompanyLogo from '@/UI-Features/UI-Gallery/Logo/LogoOne.png';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { Component, useEffect, useState } from 'react';

export default function dashboardSidebar() {

  //Router Function
  const Router = useRouter();

  //Sidebar Icon Dropdown States
  const [showIntroIcon, setIntroIcon] = useState(false);
  const [showDataEvalIcon, setDataEvalIcon] = useState(false);
  const [showCtrlResIcon, setCtrlResIcon] = useState(false);
  const [showRegSecIcon, setRegSecIcon] = useState(false);
  const [showSysSecIcon, setSysSecIcon] = useState(false);
  const [showProgSecIcon, setProgSecIcon] = useState(false);
  const [showWebAppSecIcon, setWebAppSecIcon] = useState(false);
  const [showOsCompIcon, setOsCompIcon] = useState(false);
  const [showContribIcon, setContribIcon] = useState(false);
  const [showDevConfIcon, setDevConfIcon] = useState(false);
  const [showRelNotesIcon, setRelNotesIcon] = useState(false);


  //Icon Sidebar Menu
  useEffect(() => {
    const dropIntroIcons = () => {
      showIntroIcon && setIntroIcon(false)
    }
    Router.events.off('routeChangeStart', dropIntroIcons)
    return () => {
      Router.events.on('routeChangeStart', dropIntroIcons)
    }
  }, [Router, showIntroIcon])
  useEffect(() => {
    const dropRegSecIcons = () => {
      showRegSecIcon && setRegSecIcon(false)
    }
    Router.events.off('routeChangeStart', dropRegSecIcons)
    return () => {
      Router.events.on('routeChangeStart', dropRegSecIcons)
    }
  }, [Router, showRegSecIcon])
  useEffect(() => {
    const dropSysSecIcons = () => {
      showSysSecIcon && setSysSecIcon(false)
    }
    Router.events.off('routeChangeStart', dropSysSecIcons)
    return () => {
      Router.events.on('routeChangeStart', dropSysSecIcons)
    }
  }, [Router, showSysSecIcon])
  useEffect(() => {
    const dropProgSecIcons = () => {
      showProgSecIcon && setProgSecIcon(false)
    }
    Router.events.off('routeChangeStart', dropProgSecIcons)
    return () => {
      Router.events.on('routeChangeStart', dropProgSecIcons)
    }
  }, [Router, showProgSecIcon])
  useEffect(() => {
    const dropWebAppSecIcons = () => {
      showWebAppSecIcon && setWebAppSecIcon(false)
    }
    Router.events.off('routeChangeStart', dropWebAppSecIcons)
    return () => {
      Router.events.on('routeChangeStart', dropWebAppSecIcons)
    }
  }, [Router, showWebAppSecIcon])
  useEffect(() => {
    const dropOSCompIcons = () => {
      showOsCompIcon && setOsCompIcon(false)
    }
    Router.events.off('routeChangeStart', dropOSCompIcons)
    return () => {
      Router.events.on('routeChangeStart', dropOSCompIcons)
    }
  }, [Router, showOsCompIcon])
  useEffect(() => {
    const dropContribIcons = () => {
      showContribIcon && setContribIcon(false)
    }
    Router.events.off('routeChangeStart', dropContribIcons)
    return () => {
      Router.events.on('routeChangeStart', dropContribIcons)
    }
  }, [Router, showContribIcon])
  useEffect(() => {
    const dropDevConfIcons = () => {
      showDevConfIcon && setDevConfIcon(false)
    }
    Router.events.off('routeChangeStart', dropDevConfIcons)
    return () => {
      Router.events.on('routeChangeStart', dropDevConfIcons)
    }
  }, [Router, showDevConfIcon])
  useEffect(() => {
    const dropRelNotesIcons = () => {
      showRelNotesIcon && setRelNotesIcon(false)
    }
    Router.events.off('routeChangeStart', dropRelNotesIcons)
    return () => {
      Router.events.on('routeChangeStart', dropRelNotesIcons)
    }
  }, [Router, showRelNotesIcon])
  //Icon Sidebar Menu
  return (
    <>
      <div className={styles.SideBarCompany}>
        <article className={styles.SideBarHeader}>
          <label className={styles.SideBarLogo}>
            <Image
              priority
              className={styles.SideBarIcon}
              quality={100}
              src={CompanyLogo}
              alt='House of Grace Foundation Logo'
              fill={true}
              style={{ objectFit: 'cover' }}
            />
          </label>
        </article>
        <article className={styles.SideBarComponent}>
          <label className={styles.SideBarActive}>
            <FontAwesomeIcon className={styles.SideBarNav} icon={solid('landmark')} />
          </label>
          <label className={styles.SideBarTitle}>
            <Link className={styles.DashboardGrid} href='Dashboard'>
              <h1 className={styles.ComponentTitle}>Home</h1>

            </Link>
          </label>
        </article>

        <article className={styles.SideBarComponent}>
          <label className={styles.SideBarActive}>
            <FontAwesomeIcon className={styles.SideBarNav} icon={solid('brain')} />
          </label>
          <label className={styles.SideBarTitle}>
            <Link className={styles.DashboardGrid} href='Dashboard/Dialysis'>
              <h1 className={styles.ComponentTitle}>Dialysis</h1>
            </Link>
          </label>
        </article>
        <article className={styles.SideBarComponent}>
          <label className={styles.SideBarActive}>
            <FontAwesomeIcon className={styles.SideBarNav} icon={solid('biking')} />
          </label>
          <label className={styles.SideBarTitle}>
            <Link className={styles.DashboardGrid} href='Dashboard/Workshop'>
              <h1 className={styles.ComponentTitle}>Workshop</h1>
            </Link>
          </label>
        </article>
        <article className={styles.SideBarComponent}>
          <label className={styles.SideBarActive}>
            <FontAwesomeIcon className={styles.SideBarNav} icon={solid('coffee')} />
          </label>
          <label className={styles.SideBarTitle}>
            <Link className={styles.DashboardGrid} href='Dashboard/Sponsorship'>
              <h1 className={styles.ComponentTitle}>Sponsorship</h1>
            </Link>
          </label>
        </article>
        <article className={styles.SideBarComponent}>
          <label className={styles.SideBarActive}>
            <FontAwesomeIcon className={styles.SideBarNav} icon={solid('diagnoses')} />
          </label>
          <label className={styles.SideBarTitle}>
            <Link className={styles.DashboardGrid} href='Dashboard/Diary'>
              <h1 className={styles.ComponentTitle}>Diary</h1>
            </Link>
          </label>
        </article>
        <article className={styles.SideBarComponent}>
          <label className={styles.SideBarActive}>
            <FontAwesomeIcon className={styles.SideBarNav} icon={solid('heart')} />
          </label>
          <label className={styles.SideBarTitle}>
            <Link className={styles.DashboardGrid} href='Dashboard/Regime'>
              <h1 className={styles.ComponentTitle}>Regime</h1>
            </Link>
          </label>
        </article>
        <article className={styles.SideBarComponent}>
          <label className={styles.SideBarActive}>
            <FontAwesomeIcon className={styles.SideBarNav} icon={solid('hospital')} />
          </label>
          <label className={styles.SideBarTitle}>
            <Link className={styles.DashboardGrid} href='Dashboard/Consultation'>
              <h1 className={styles.ComponentTitle}>Consultation</h1>
            </Link>
          </label>
        </article>
        <article className={styles.SideBarComponent}>
          <label className={styles.SideBarActive}>
            <FontAwesomeIcon className={styles.SideBarNav} icon={solid('syringe')} />
          </label>
          <label className={styles.SideBarTitle}>
            <Link className={styles.DashboardGrid} href='/Dashboard/Laboratory'>
              <h1 className={styles.ComponentTitle}>Laboratory</h1>
            </Link>
          </label>
        </article>
        <article className={styles.SideBarComponent}>
          <label className={styles.SideBarActive}>
            <FontAwesomeIcon className={styles.SideBarNav} icon={solid('leaf')} />
          </label>
          <label className={styles.SideBarTitle}>
            <Link className={styles.DashboardGrid} href='/Dashboard/Training'>
              <h1 className={styles.ComponentTitle}>Training</h1>
            </Link>
          </label>
        </article>
        <article className={styles.SideBarComponent}>
          <label className={styles.SideBarActive}>
            <FontAwesomeIcon className={styles.SideBarNav} icon={solid('wind')} />
          </label>
          <label className={styles.SideBarTitle}>
            <Link className={styles.DashboardGrid} href='/Dashboard/Experiences'>
              <h1 className={styles.ComponentTitle}>Experiences</h1>
            </Link>
          </label>
        </article>
        <article className={styles.SideBarComponent}>
          <label className={styles.SideBarActive}>
            <FontAwesomeIcon
              className={styles.SideBarNav}
              icon={showIntroIcon ? solid('close') : solid('money-bill')}
              onClick={() => { setIntroIcon(!showIntroIcon) }}
            />
          </label>
          <label className={styles.SideBarTitle}>
            <Link className={styles.DashboardGrid} href='/Dashboard/Settings'>
              <h1 className={styles.ComponentTitle}>Fundraising</h1>
            </Link>
          </label>
        </article>
        {showIntroIcon && (
          <section className={styles.DropDownBg}>
            <article className={styles.SideBarComponent}>
              <label className={styles.SideBarActive}>
                <FontAwesomeIcon className={styles.SideBarNav} icon={solid('money-bill-1')} />
              </label>
              <label className={styles.SideBarTitle}>
                <Link className={styles.DashboardGrid} href='/Dashboard/Fundraising/Crowdfunding'>
                  <h1 className={styles.ComponentTitle}>Crowd funding</h1>
                </Link>
              </label>
            </article>
            <article className={styles.SideBarComponent}>
              <label className={styles.SideBarActive}>
                <FontAwesomeIcon className={styles.SideBarNav} icon={solid('money-bill-1')} />
              </label>
              <label className={styles.SideBarTitle}>
                <Link className={styles.DashboardGrid} href='/Dashboard/Fundraising/Donation'>
                  <h1 className={styles.ComponentTitle}>Donation funding</h1>
                </Link>
              </label>
            </article>
          </section>
        )}

        <article className={styles.SideBarComponent}>
          <label className={styles.SideBarActive}>
            <FontAwesomeIcon className={styles.SideBarNav} icon={solid('atom')} />
          </label>
          <label className={styles.SideBarTitle}>
            <Link className={styles.DashboardGrid} href='/Dashboard/Volunteering'>
              <h1 className={styles.ComponentTitle}>Volunteering</h1>
            </Link>
          </label>
        </article>
        <article className={styles.SideBarComponent}>
          <label className={styles.SideBarActive}>
            <FontAwesomeIcon className={styles.SideBarNav} icon={solid('users')} />
          </label>
          <label className={styles.SideBarTitle}>
            <Link className={styles.DashboardGrid} href='/Dashboard/Community'>
              <h1 className={styles.ComponentTitle}>Community</h1>
            </Link>
          </label>
        </article>
        <article className={styles.SideBarComponent}>
          <label className={styles.SideBarActive}>
            <FontAwesomeIcon className={styles.SideBarNav} icon={solid('bolt')} />
          </label>
          <label className={styles.SideBarTitle}>
            <Link className={styles.DashboardGrid} href='/Dashboard/Settings'>
              <h1 className={styles.ComponentTitle}>Settings</h1>
            </Link>
          </label>
        </article>
        <article className={styles.SideBarComponent}>
          <label className={styles.SideBarActive}>
            <FontAwesomeIcon className={styles.SideBarNav} icon={solid('newspaper')} />
          </label>
          <label className={styles.SideBarTitle}>
            <Link className={styles.DashboardGrid} href='/Dashboard/Manual'>
              <h1 className={styles.ComponentTitle}>Manual</h1>
            </Link>
          </label>
        </article>

      </div>
    </>
  )
}
import Image from 'next/image';
import styles from '@/styles/Modern/Desktop.module.css';
import CompanyLogo from '@/UI-Features/UI-Gallery/Logo/MainLogo.png';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { Component, useEffect, useState } from 'react';
import { faLandmark, faBrain, faBiking, faCoffee, faDiagnoses, faHeart, faSyringe, faLeaf, faWind, faMoneyBill, faMoneyBill1, faAtom, faHospital, faClose, faUsers, faBolt, faNewspaper, faArrowDown, faBuilding, faDollar, faDollarSign, faShop, faArrowAltCircleDown, faBookOpen, faUsersViewfinder, faMagic, faMagnifyingGlassDollar, faFileEdit, faTrashCan, faFolderPlus, faFileArrowDown, faFileCirclePlus, faFileDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface SidebarProps {
  setActivePage: (page: 
    'Blueprint' |
    'Blueprint/Define' | 
    'Entries' | 
    'Entries/Store' |
    'Entries/Retrieve' |
    'Entries/Refine' |
    'Entries/Erase' |
    'Data' |
    'Data/Import' |
    'Data/Export' |
    'HouseofGrace' |
    'Finanvra'
  ) => void;
}

export default function dashboardSidebar({setActivePage}: SidebarProps) {

  //Router Function
  const Router = useRouter();

  //Sidebar Icon Dropdown States
  const [showEntries, setEntries] = useState(false);
  const [showData, setData] = useState(false);
  const [showBlueprint, setShowBlueprint] = useState(false);
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


  //Route Define Blueprint to Drop when Blueprint is Triggered
  useEffect(() => {
    const dropBlueprint = () => {
      showBlueprint && setShowBlueprint(false);
    }
    Router.events.off('routeChangeStart', dropBlueprint)
    return () => {
      Router.events.on('routeChangeStart', dropBlueprint)
    }
  }, [Router, showBlueprint])



  //Icon Sidebar Menu
  useEffect(() => {
    const dropEntriess = () => {
      showEntries && setEntries(false)
    }
    Router.events.off('routeChangeStart', dropEntriess)
    return () => {
      Router.events.on('routeChangeStart', dropEntriess)
    }
  }, [Router, showEntries])
  useEffect(() => {
    const dropData = () => {
      showData && setData(false)
    }
    Router.events.off('routeChangeStart', dropData)
    return () => {
      Router.events.on('routeChangeStart', dropData)
    }
  }, [Router, showData])
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
               
              src={CompanyLogo}
              alt='House of Grace Foundation Logo'
              fill={true}
              style={{ objectFit: 'cover' }}
            />
          </label>
        </article>
       

        <article className={styles.SideBarComponent}>
          <label className={styles.SideBarActive}>
            <FontAwesomeIcon
              className={styles.SideBarNav}
              icon={showBlueprint ? faClose : faArrowAltCircleDown}
              
              onClick={() => { 
                setShowBlueprint(!showBlueprint) 
              }}
            />
          </label>
          <label className={styles.SideBarTitle}>
            <Link className={styles.DashboardGrid} href=''>
              <h1 
              className={styles.ComponentTitle}
              onClick={() => { 
                setShowBlueprint(!showBlueprint);
                setActivePage('Blueprint');
              }}
              >Blueprint</h1>
            </Link>
          </label>
        </article>
        {showBlueprint && (
          <section className={styles.DropDownBg}>
            <article className={styles.SideBarComponentII}>
              <label className={styles.SideBarActive}>
                <FontAwesomeIcon 
                className={styles.SideBarNav} 
                icon={faShop} 
                />
              </label>
              <label className={styles.SideBarTitle}>
                <Link className={styles.DashboardGrid} href=''>
                  <h1 
                  onClick={() => {setActivePage('Blueprint/Define')}}
                  className={styles.ComponentTitle}>Define</h1>
                </Link>
              </label>
            </article>
          </section>
        )}
        <article className={styles.SideBarComponent}>
          <label className={styles.SideBarActive}>
            <FontAwesomeIcon
              className={styles.SideBarNav}
              icon={showEntries ? faClose : faArrowAltCircleDown}
              onClick={() => { setEntries(!showEntries) }}
            />
          </label>
          <label className={styles.SideBarTitle}>
            <Link className={styles.DashboardGrid} href=''>
              <h1 
              onClick={() => {setActivePage('Entries')}}
              className={styles.ComponentTitle}>Entries</h1>
            </Link>
          </label>
        </article>
        {showEntries && (
          <section className={styles.DropDownBg}>
            <article className={styles.SideBarComponentII}>
              <label className={styles.SideBarActive}>
                <FontAwesomeIcon className={styles.SideBarNav} icon={faBookOpen} />
              </label>
              <label className={styles.SideBarTitle}>
                <Link className={styles.DashboardGrid} href=''>
                  <h1 
                  onClick={() => {setActivePage('Entries/Store')}}
                  className={styles.ComponentTitle}>Store</h1>
                </Link>
              </label>
            </article>
            <article className={styles.SideBarComponentII}>
              <label className={styles.SideBarActive}>
                <FontAwesomeIcon className={styles.SideBarNav} icon={faMagnifyingGlassDollar} />
              </label>
              <label className={styles.SideBarTitle}>
                <Link className={styles.DashboardGrid} href=''>
                  <h1 
                  onClick={() => {setActivePage('Entries/Retrieve')}}
                  className={styles.ComponentTitle}>Retrieve</h1>
                </Link>
              </label>
            </article>
            <article className={styles.SideBarComponentII}>
              <label className={styles.SideBarActive}>
                <FontAwesomeIcon className={styles.SideBarNav} icon={faFileEdit} />
              </label>
              <label className={styles.SideBarTitle}>
                <Link className={styles.DashboardGrid} href=''>
                  <h1 
                  
                  onClick={() => {setActivePage('Entries/Refine')}}
                  className={styles.ComponentTitle}>Refine</h1>
                </Link>
              </label>
            </article>
            <article className={styles.SideBarComponentII}>
              <label className={styles.SideBarActive}>
                <FontAwesomeIcon className={styles.SideBarNav} icon={faTrashCan} />
              </label>
              <label className={styles.SideBarTitle}>
                <Link className={styles.DashboardGrid} href=''>
                  <h1 
                  onClick={() => {setActivePage('Entries/Erase')}}
                  className={styles.ComponentTitle}>Erase</h1>
                </Link>
              </label>
            </article>
          </section>
        )}
        <article className={styles.SideBarComponent}>
          <label className={styles.SideBarActive}>
            <FontAwesomeIcon
              className={styles.SideBarNav}
              icon={showData ? faClose : faArrowAltCircleDown}
              onClick={() => { setData(!showData) }}
            />
          </label>
          <label className={styles.SideBarTitle}>
            <Link className={styles.DashboardGrid} href=''>
              <h1 
              onClick={() => {setActivePage('Data')}}
              className={styles.ComponentTitle}>Data</h1>
            </Link>
          </label>
        </article>
        {showData && (
          <section className={styles.DropDownBg}>
            <article className={styles.SideBarComponentII}>
              <label className={styles.SideBarActive}>
                <FontAwesomeIcon className={styles.SideBarNav} icon={faFileCirclePlus} />
              </label>
              <label className={styles.SideBarTitle}>
                <Link className={styles.DashboardGrid} href=''>
                  <h1 
                  onClick={() => {setActivePage('Data/Import')}}
                  className={styles.ComponentTitle}>Import</h1>
                </Link>
              </label>
            </article>
            <article className={styles.SideBarComponentII}>
              <label className={styles.SideBarActive}>
                <FontAwesomeIcon className={styles.SideBarNav} icon={faFileDownload} />
              </label>
              <label className={styles.SideBarTitle}>
                <Link className={styles.DashboardGrid} href=''>
                  <h1 
                  onClick={() => {setActivePage('Data/Export')}}
                  className={styles.ComponentTitle}>Export</h1>
                </Link>
              </label>
            </article>
          </section>
        )}
      </div>
    </>
  )
}
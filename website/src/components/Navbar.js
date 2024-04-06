import React, { useState } from 'react';
import Link from 'next/link'; // Import the Link component
import Image from 'next/image'; // Import the Image component
import styles from './styles/navbar.module.css';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isNavbarVisible, setNavbarVisible] = useState(true);
  const [isProductsMenuOpen, setIsProductsMenuOpen] = useState(false);
  const [isSubProduct1MenuOpen, setIsSubProduct1MenuOpen] = useState(false);
  const [isSubProduct2MenuOpen, setIsSubProduct2MenuOpen] = useState(false);
  const [isSubProduct3MenuOpen, setIsSubProduct3MenuOpen] = useState(false);
  const [isServicesMenuOpen, setIsServicesMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const toggleProductsMenu = () => {
    setIsProductsMenuOpen(!isProductsMenuOpen);
    setIsSubProduct1MenuOpen(false);
    setIsSubProduct2MenuOpen(false);
    setIsSubProduct3MenuOpen(false);
    setIsServicesMenuOpen(false);
  };

  const toggleSubProduct1Menu = () => {
    setIsSubProduct1MenuOpen(!isSubProduct1MenuOpen);
    setIsSubProduct2MenuOpen(false);
    setIsSubProduct3MenuOpen(false);
    setIsServicesMenuOpen(false);
  };

  const toggleSubProduct2Menu = () => {
    setIsSubProduct2MenuOpen(!isSubProduct2MenuOpen);
    setIsSubProduct1MenuOpen(false);
    setIsSubProduct3MenuOpen(false);
    setIsServicesMenuOpen(false);
  };

  const toggleSubProduct3Menu = () => {
    setIsSubProduct3MenuOpen(!isSubProduct3MenuOpen);
    setIsSubProduct1MenuOpen(false);
    setIsSubProduct2MenuOpen(false);
    setIsServicesMenuOpen(false);
  };

  const toggleServicesMenu = () => {
    setIsServicesMenuOpen(!isServicesMenuOpen);
    setIsSubProduct1MenuOpen(false);
    setIsSubProduct2MenuOpen(false);
    setIsSubProduct3MenuOpen(false);
    setIsProductsMenuOpen(false);
  };

  const handleNavbarVisibility = () => {
    setNavbarVisible(!isNavbarVisible);
  };

  return (
    <div
      className={`${styles.navbar} ${isMenuOpen ? styles.open : ''} ${
        isNavbarVisible ? styles.visible : ''
      }`}
      onMouseEnter={handleNavbarVisibility}
    >
      <div className={styles.logo}>
        <Link href='/'>
          <Image src="/logo-transparent.png" alt="logo" height={100} width={100} />
        </Link>
      </div>

      <div className={`${styles.navLinks} ${isMenuOpen ? styles.open : ''}`}>
        <Link href="/" style={{ fontWeight: '500' }}>
          Home
        </Link>
        <Link href="/about" style={{ fontWeight: '500' }}>
          About
        </Link>
        <Link href="/onlineHearingTest" style={{ fontWeight: '500'}}>
          Online Hearing Test
          <p style={{fontSize: '10px', color:'orange'}}>Quick Test!!</p>
        </Link>
        <div className={styles.dropdown}>
          <span
            className={styles.dropbtn}
            style={{ cursor: 'pointer', fontWeight: 500 }}
            onClick={toggleServicesMenu}
          >
            Services &#9662;
          </span>
          {isServicesMenuOpen && (
            <div className={styles.dropdownContent}>
              <Link href="../services/AllServices" className={styles.dropdownContentLinks}>All Services</Link>
              <Link href="../services/HearingTest" className={styles.dropdownContentLinks}>Hearing Test Services</Link>
              <Link href="../services/SpeechTherapy" className={styles.dropdownContentLinks}>Speech Therapy Services</Link>
              <Link href="../services/Service-3" className={styles.dropdownContentLinks}>Service - 3</Link>
            </div>
          )}
        </div>
        <Link href="/blog" style={{ fontWeight: '500' }}>
          Blog
        </Link>
        <div className={styles.dropdown}>
          <span
            className={styles.dropbtn}
            style={{ cursor: 'pointer', color: 'black', fontWeight: 500  }}
            onClick={toggleProductsMenu}
          >
            Hearing Aids &#9662;
          </span>
          {isProductsMenuOpen && (
            <div className={styles.dropdownContent}>
              <div className={styles.subDropdown} onClick={toggleSubProduct1Menu}>
                <span>Hearing Aids Types &#9662;</span>
                {isSubProduct1MenuOpen && (
                  <div className={styles.subDropdownContent}>
                    <Link href="/products/HearingAidsTypes/BTEHearingAids" className={styles.subDropdownContentLinks}>BTE Hearing Aids</Link>
                    <Link href="/products/CICHearingAids" className={styles.subDropdownContentLinks}>CIC Hearing Aids</Link>
                    <Link href="/products/ITCHearingAids" className={styles.subDropdownContentLinks}>ITC Hearing Aids</Link>
                    <Link href="/products/IICHearingAids" className={styles.subDropdownContentLinks}>IIC Hearing Aids</Link>
                    <Link href="/products/RICHearingAids" className={styles.subDropdownContentLinks}>RIC Hearing Aids</Link>
                    <Link href="/products/RechargeableHearingAids" className={styles.subDropdownContentLinks}>Rechargeable Hearing Aids</Link>
                    <Link href="/products/AnalogHearingAids" className={styles.subDropdownContentLinks}>Analog Hearing Aids</Link>
                    <Link href="/products/WirelessHearingAids" className={styles.subDropdownContentLinks}>Wireless Hearing Aids</Link>
                    <Link href="/products/BluetoothHearingAids" className={styles.subDropdownContentLinks}>Bluetooth Hearing Aids </Link>
                    <Link href="/products/MicroincanalHearingAids" className={styles.subDropdownContentLinks}>Micro in Canal Hearing Aids </Link>
                    <Link href="/products/PocketHearingAids" className={styles.subDropdownContentLinks}>Pocket Hearing Aids </Link>
                  </div>
                )}
              </div>
              <div className={styles.subDropdown} onClick={toggleSubProduct2Menu}>
                <span>Hearing Aids Accessories &#9662;</span>
                {isSubProduct2MenuOpen && (
                  <div className={styles.subDropdownContent}>
                    <Link href="/products/HearingAidsBatteries" className={styles.subDropdownContentLinks}>Hearing Aids Batteries</Link>
                    <Link href="/products/HearingAidFitting" className={styles.subDropdownContentLinks}>Hearing Aid Fitting</Link>
                    <Link href="/products/HearingAidAccessories-3" className={styles.subDropdownContentLinks}>Hearing Aid Accessories-3</Link>
                  </div>
                )}
              </div>
              <div className={styles.subDropdown} onClick={toggleSubProduct3Menu}>
                <span>Hearing Aids Models &#9662;</span>
                {isSubProduct3MenuOpen && (
                  <div className={styles.subDropdownContent}>
                    <Link href="/products/Model-1" className={styles.subDropdownContentLinks}>Model - 1</Link>
                    <Link href="/products/Model-2" className={styles.subDropdownContentLinks}>Model - 2</Link>
                    <Link href="/products/Model-3" className={styles.subDropdownContentLinks}>Model - 3</Link>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
        <Link href="/contact">
          <button type="button" className={styles.NavButton}>
            Contact Us
          </button>
        </Link>
      </div>

      <div className={`${styles.socialLinks} ${isMenuOpen ? styles.open : ''}`}>
        <Link href="/contact">
          <button type="button" className={styles.NavButton2}>
            Contact Us
          </button>
        </Link>
      </div>

      <div className={styles.hamburger} onClick={toggleMenu}>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </div>
    </div>
  );
};

export default Navbar;

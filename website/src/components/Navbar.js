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
  };

  const toggleSubProduct1Menu = () => {
    setIsSubProduct1MenuOpen(!isSubProduct1MenuOpen);
  };

  const toggleSubProduct2Menu = () => {
    setIsSubProduct2MenuOpen(!isSubProduct2MenuOpen);
  };

  const toggleSubProduct3Menu = () => {
    setIsSubProduct3MenuOpen(!isSubProduct3MenuOpen);
  };

  const toggleServicesMenu = () => {
    setIsServicesMenuOpen(!isServicesMenuOpen);
  };

  const handleNavbarVisibility = () => {
    setNavbarVisible(!isNavbarVisible);
  };

  return (
    <div
      className={`${styles.navbar} ${isMenuOpen ? styles.open : ''} ${
        isNavbarVisible ? styles.visible : ''
      }`}
      onMouseEnter={() => handleNavbarVisibility()}
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
              <Link href="/services/service1" className={styles.dropdownContentLinks}>All Services</Link>
              <Link href="/services/service2" className={styles.dropdownContentLinks}>Hearing Test Services</Link>
              <Link href="/services/service3" className={styles.dropdownContentLinks}>Speech Therapy Services</Link>
              <Link href="/services/service3" className={styles.dropdownContentLinks}>Service - 3</Link>
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
                    <Link href="/products/subproduct1/item1" className={styles.subDropdownContentLinks}>BTE Hearing Aids</Link>
                    <Link href="/products/subproduct1/item2" className={styles.subDropdownContentLinks}>CIC Hearing Aids</Link>
                    <Link href="/products/subproduct1/item3" className={styles.subDropdownContentLinks}>Hearing Aids Types - 3</Link>
                  </div>
                )}
              </div>
              <div className={styles.subDropdown} onClick={toggleSubProduct2Menu}>
                <span>Hearing Aids Accessories &#9662;</span>
                {isSubProduct2MenuOpen && (
                  <div className={styles.subDropdownContent}>
                    <Link href="/products/subproduct2/item1" className={styles.subDropdownContentLinks}>Hearing Aids Batteries</Link>
                    <Link href="/products/subproduct2/item2" className={styles.subDropdownContentLinks}>Hearing Aid Fitting</Link>
                    <Link href="/products/subproduct2/item3" className={styles.subDropdownContentLinks}>Hearing Aid Accessories-3</Link>
                  </div>
                )}
              </div>
              <div className={styles.subDropdown} onClick={toggleSubProduct3Menu}>
                <span>Hearing Aids Models &#9662;</span>
                {isSubProduct3MenuOpen && (
                  <div className={styles.subDropdownContent}>
                    <Link href="/products/subproduct3/item1" className={styles.subDropdownContentLinks}>Model - 1</Link>
                    <Link href="/products/subproduct3/item2" className={styles.subDropdownContentLinks}>Model - 2</Link>
                    <Link href="/products/subproduct3/item3" className={styles.subDropdownContentLinks}>Model - 3</Link>
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

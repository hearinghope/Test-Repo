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
        {/* <Link href="/onlineHearingTest" style={{ fontWeight: '500'}}>
          Online Hearing Test
          <p style={{fontSize: '10px', color:'orange'}}>Quick Test!!</p>
        </Link> */}
        <div className={styles.dropdown}>
          <span
            className={styles.dropbtn}
            style={{ cursor: 'pointer', fontWeight: 500 }}
            onClick={toggleServicesMenu}
          >
            <Link href="/services">
            Services &#9662;
            </Link>
          </span>
          {isServicesMenuOpen && (
            <div className={styles.dropdownContent}>
              <Link href="../../services/HearingTest" className={styles.dropdownContentLinks}>Hearing Test Services</Link>
              <Link href="../../services/SpeechTherapy" className={styles.dropdownContentLinks}>Speech Therapy Services</Link>
              {/* <Link href="../../services/Audiologist" className={styles.dropdownContentLinks}>Audiologist</Link> */}
              <Link href="../../services/HearingCare" className={styles.dropdownContentLinks}>Hearing Care</Link>
              <Link href="../../services/HearingAidCentre" className={styles.dropdownContentLinks}>Hearing Aid Centre</Link>
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
                    <Link href="/products/HearingAidsTypes/CICHearingAids" className={styles.subDropdownContentLinks}>CIC Hearing Aids</Link>
                    <Link href="/products/HearingAidsTypes/ITCHearingAids" className={styles.subDropdownContentLinks}>ITC Hearing Aids</Link>
                    <Link href="/products/HearingAidsTypes/IICHearingAids" className={styles.subDropdownContentLinks}>IIC Hearing Aids</Link>
                    <Link href="/products/HearingAidsTypes/RICHearingAids" className={styles.subDropdownContentLinks}>RIC Hearing Aids</Link>
                    <Link href="/products/HearingAidsTypes/RechargeableHearingAids" className={styles.subDropdownContentLinks}>Rechargeable Hearing Aids</Link>
                    <Link href="/products/HearingAidsTypes/AnalogHearingAids" className={styles.subDropdownContentLinks}>Analog Hearing Aids</Link>
                    <Link href="/products/HearingAidsTypes/WirelessHearingAids" className={styles.subDropdownContentLinks}>Wireless Hearing Aids</Link>
                    <Link href="/products/HearingAidsTypes/BluetoothHearingAids" className={styles.subDropdownContentLinks}>Bluetooth Hearing Aids </Link>
                    <Link href="/products/HearingAidsTypes/MicroincanalHearingAids" className={styles.subDropdownContentLinks}>Micro in Canal Hearing Aids </Link>
                    <Link href="/products/HearingAidsTypes/PocketHearingAids" className={styles.subDropdownContentLinks}>Pocket Hearing Aids </Link>
                  </div>
                )}
              </div>
              {/* <div className={styles.subDropdown} onClick={toggleSubProduct2Menu}>
                <span>Hearing Aids Accessories &#9662;</span>
                {isSubProduct2MenuOpen && (
                  <div className={styles.subDropdownContent}>
                    <Link href="/products/HearingAidsBatteries" className={styles.subDropdownContentLinks}>Hearing Aids Batteries</Link>
                    <Link href="/products/HearingAidFitting" className={styles.subDropdownContentLinks}>Hearing Aid Fitting</Link>
                    <Link href="/products/HearingAidAccessories-3" className={styles.subDropdownContentLinks}>Hearing Aid Accessories-3</Link>
                  </div>
                )}
              </div> */}
              <div className={styles.subDropdown} onClick={toggleSubProduct3Menu}>
                <span>Hearing Aids Models &#9662;</span>
                {isSubProduct3MenuOpen && (
                  <div className={styles.subDropdownContent}>
                    <Link href="/products/HearingAidModels/BTEFastP" className={styles.subDropdownContentLinks}>Signia BTE Fast P</Link>
                    <Link href="/products/HearingAidModels/BTEFunP" className={styles.subDropdownContentLinks}>Signia BTE Fun P</Link>
                    <Link href="/products/HearingAidModels/BTEFunSP" className={styles.subDropdownContentLinks}>Signia BTE Fun SP</Link>
                    <Link href="/products/HearingAidModels/Digital8Channel" className={styles.subDropdownContentLinks}>Signia Digital - 8 channel</Link>
                    <Link href="/products/HearingAidModels/BTEPromptP" className={styles.subDropdownContentLinks}>Signia BTE prompt P</Link>
                    <Link href="/products/HearingAidModels/BTEPromptSP" className={styles.subDropdownContentLinks}>Signia BTE Prompt SP</Link>
                    <Link href="/products/HearingAidModels/CICPromptCustom" className={styles.subDropdownContentLinks}>Signia CIC prompt Custom</Link>
                    <Link href="/products/HearingAidModels/Digital12Channel" className={styles.subDropdownContentLinks}>Signia Digital - 12 channel</Link>
                    <Link href="/products/HearingAidModels/BTEIntuis40PSP" className={styles.subDropdownContentLinks}>Signia BTE INTUIS 4.0 P/ SP</Link>
                    <Link href="/products/HearingAidModels/Digital16Channel" className={styles.subDropdownContentLinks}>Signia Digital - 16 channel</Link>
                    <Link href="/products/HearingAidModels/BTEIntuis41PSP" className={styles.subDropdownContentLinks}>Signia BTE INTUIS 4.1 P/SP</Link>
                    <Link href="/products/HearingAidModels/CICInsio1PXCustom" className={styles.subDropdownContentLinks}>Signia Cic Insio 1Px Custom</Link>
                    <Link href="/products/HearingAidModels/RIC16Channel" className={styles.subDropdownContentLinks}>Signia RIC - 16 channel</Link>
                    <Link href="/products/HearingAidModels/RICPure1PX" className={styles.subDropdownContentLinks}>Signia RIC Pure 1Px</Link>
                    <Link href="/products/HearingAidModels/RICPure1X" className={styles.subDropdownContentLinks}>Signia RIC pure 1X</Link>
                    <Link href="/products/HearingAidModels/RICPure1AX" className={styles.subDropdownContentLinks}>Signia Ric pure 1AX</Link>
                    <Link href="/products/HearingAidModels/KITStyletto1AX16Channel" className={styles.subDropdownContentLinks}>Signia KIT Styletto 1AX- 16 channel</Link>
                    <Link href="/products/HearingAidModels/PureCharge&Go1AX16Channel" className={styles.subDropdownContentLinks}>Pure charge & Go 1AX- 16 channel</Link>
                    <Link href="/products/HearingAidModels/Silk1X16Channel" className={styles.subDropdownContentLinks}>Signia Silk 1X- 16 channel</Link>
                    <Link href="/products/HearingAidModels/KitActive16Channel" className={styles.subDropdownContentLinks}>Signia Kit Active  - 16 channel</Link>
                   
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

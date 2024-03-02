
import React, { useState } from 'react';
import Link from 'next/link'; // Import the Link component
import Image from 'next/image'; // Import the Image component
import styles from './styles/navbar.module.css';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isNavbarVisible, setNavbarVisible] = useState(true);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  

  const [isProductsMenuOpen, setIsProductsMenuOpen] = useState(false);
  const [isSubProduct1MenuOpen, setIsSubProduct1MenuOpen] = useState(false);
  const [isSubProduct2MenuOpen, setIsSubProduct2MenuOpen] = useState(false);
  const [isSubProduct3MenuOpen, setIsSubProduct3MenuOpen] = useState(false);

  const toggleProductsMenu = () => {
    setIsProductsMenuOpen(!isProductsMenuOpen);
   // setIsServicesMenuOpen(false); // Close services menu
  };

  const toggleSubProduct1Menu = () => {
    setIsSubProduct1MenuOpen(!isSubProduct1MenuOpen);
    setIsSubProduct2MenuOpen(false); // Close subproduct2 menu
    setIsSubProduct3MenuOpen(false); // Close subproduct3 menu
  };

  const toggleSubProduct2Menu = () => {
    setIsSubProduct2MenuOpen(!isSubProduct2MenuOpen);
    setIsSubProduct1MenuOpen(false); // Close subproduct1 menu
    setIsSubProduct3MenuOpen(false); // Close subproduct3 menu
  };

  const toggleSubProduct3Menu = () => {
    setIsSubProduct3MenuOpen(!isSubProduct3MenuOpen);
    setIsSubProduct2MenuOpen(false); // Close subproduct1 menu
    setIsSubProduct1MenuOpen(false); // Close subproduct1 menu
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
        <div className={styles.dropdown} onMouseEnter={toggleMenu} onMouseLeave={toggleMenu}>
          <span className={styles.dropbtn} style={{ cursor: 'pointer', fontWeight: 500 }}>
            <Link href="/service" style={{ fontWeight: '500' }}>Services &#9662;</Link>
          </span>
          {isMenuOpen && (
            <div className={styles.dropdownContent} style={{ display: 'block', position: 'absolute', backgroundColor: '#f9f9f9', boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)', zIndex: 1, padding: '10px', borderRadius: '5px' }}>
              <Link href="/services/service1" style={{ display: 'block', padding: '5px 0', fontWeight: '500' }}onMouseEnter={(e) => e.target.style.color = 'orange'} onMouseLeave={(e) => e.target.style.color = 'black'}>All Services </Link>
              <Link href="/services/service2" style={{ display: 'block', padding: '5px 0', fontWeight: '500' }}onMouseEnter={(e) => e.target.style.color = 'orange'} onMouseLeave={(e) => e.target.style.color = 'black'}>Hearing Test Services</Link>
              <Link href="/services/service3" style={{ display: 'block', padding: '5px 0', fontWeight: '500' }}onMouseEnter={(e) => e.target.style.color = 'orange'} onMouseLeave={(e) => e.target.style.color = 'black'}>Speech Therapy Services</Link>
              <Link href="/services/service3" style={{ display: 'block', padding: '5px 0', fontWeight: '500' }}onMouseEnter={(e) => e.target.style.color = 'orange'} onMouseLeave={(e) => e.target.style.color = 'black'}>Service - 3</Link>
            </div>
          )}
        </div>
        <Link href="/blog" style={{ fontWeight: '500' }}>
          Blog
        </Link>   
        <div style={{ position: 'relative', borderRadius: '10px' }} onMouseEnter={toggleProductsMenu}>
          <span style={{ cursor: 'pointer', marginRight: '20px', fontWeight: 'bold', color: 'black' }}>
            <Link href="/products" style={{ fontWeight: '500' }}>Hearing Aids &#9662;
            </Link>
          </span>
          {isProductsMenuOpen && (
            <div style={{ position: 'absolute', top: '100%', left: 0, background: 'white', padding: '10px', minWidth: '200px', borderRadius: '10px' }}>
              
              <div style={{ position: 'relative', display: 'inline-block', marginRight: '10px' }} onMouseEnter={toggleSubProduct1Menu} onMouseLeave={toggleSubProduct1Menu}>
                <span style={{ cursor: 'pointer', fontWeight: '500', color: 'black', display: 'block' }}>
                  Hearing Aids Types &#9662;
                </span>
                {isSubProduct1MenuOpen && (
                  <div style={{ position: 'absolute', top: '0', left: '100%', background: 'white', padding: '10px', minWidth: '250px', borderRadius: '10px'  }}>
                    <Link href="/products/subproduct1/item1" style={{ display: 'block', marginBottom: '5px', color: 'black', textDecoration: 'none', fontWeight: '500' }} onMouseEnter={(e) => e.target.style.color = 'orange'} onMouseLeave={(e) => e.target.style.color = 'black'}>BTE Hearing Aids</Link>
                    <Link href="/products/subproduct1/item2" style={{ display: 'block', marginBottom: '5px', color: 'black', textDecoration: 'none', fontWeight: '500' }} onMouseEnter={(e) => e.target.style.color = 'orange'} onMouseLeave={(e) => e.target.style.color = 'black'}>CIC Hearing Aids</Link>
                    <Link href="/products/subproduct1/item3" style={{ display: 'block', color: 'black', textDecoration: 'none', fontWeight: '500' }} onMouseEnter={(e) => e.target.style.color = 'orange'} onMouseLeave={(e) => e.target.style.color = 'black'}>Hearing Aids Types - 3</Link>
                  </div>
                )}
              </div>
              
              <div style={{ position: 'relative', display: 'inline-block' }} onMouseEnter={toggleSubProduct2Menu} onMouseLeave={toggleSubProduct2Menu}>
                <span style={{ cursor: 'pointer', fontWeight: '500', color: 'black', display: 'block' , marginTop: '5px' }}>
                  Hearing Aids Accessories &#9662;
                </span>
                {isSubProduct2MenuOpen && (
                  <div style={{ position: 'absolute', top: '0', left: '100%', background: 'white', padding: '10px', minWidth: '150px', borderRadius: '10px' }}>
                    <Link href="/products/subproduct2/item1" style={{ display: 'block', marginBottom: '5px', color: 'black', textDecoration: 'none', fontWeight: '500' }} onMouseEnter={(e) => e.target.style.color = 'orange'} onMouseLeave={(e) => e.target.style.color = 'black'}>Hearing Aids Batteries</Link>
                    <Link href="/products/subproduct2/item2" style={{ display: 'block', marginBottom: '5px', color: 'black', textDecoration: 'none', fontWeight: '500' }} onMouseEnter={(e) => e.target.style.color = 'orange'} onMouseLeave={(e) => e.target.style.color = 'black'}>Hearing Aid Fitting</Link>
                    <Link href="/products/subproduct2/item3" style={{ display: 'block', color: 'black', textDecoration: 'none', fontWeight: '500' }} onMouseEnter={(e) => e.target.style.color = 'orange'} onMouseLeave={(e) => e.target.style.color = 'black'}>Hearing Aid Accessories-3</Link>
                  </div>
                )}
              </div>
              <div style={{ position: 'relative', display: 'inline-block' }} onMouseEnter={toggleSubProduct3Menu} onMouseLeave={toggleSubProduct2Menu}>
                <span style={{ cursor: 'pointer', fontWeight: '500', color: 'black', display: 'block' , marginTop: '5px' }}>
                  Hearing Aids Models &#9662;
                </span>
                {isSubProduct3MenuOpen && (
                  <div style={{ position: 'absolute', top: '0', left: '100%', background: 'white', padding: '10px', minWidth: '150px', borderRadius: '10px' }}>
                    <Link href="/products/subproduct2/item1" style={{ display: 'block', marginBottom: '5px', color: 'black', textDecoration: 'none', fontWeight: '500' }} onMouseEnter={(e) => e.target.style.color = 'orange'} onMouseLeave={(e) => e.target.style.color = 'black'}>Model - 1</Link>
                    <Link href="/products/subproduct2/item2" style={{ display: 'block', marginBottom: '5px', color: 'black', textDecoration: 'none', fontWeight: '500' }} onMouseEnter={(e) => e.target.style.color = 'orange'} onMouseLeave={(e) => e.target.style.color = 'black'}>Model - 2</Link>
                    <Link href="/products/subproduct2/item3" style={{ display: 'block', color: 'black', textDecoration: 'none', fontWeight: '500' }} onMouseEnter={(e) => e.target.style.color = 'orange'} onMouseLeave={(e) => e.target.style.color = 'black'}>Model - 3</Link>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
        {/* <Link href="/products" style={{ fontWeight: '500' }}>
          Hearing Aids
        </Link>  */}
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

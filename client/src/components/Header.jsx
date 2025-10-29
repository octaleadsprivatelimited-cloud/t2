import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaBars, FaTimes, FaChevronDown, FaEnvelope, FaPhone } from 'react-icons/fa';

const HeaderContainer = styled(motion.header)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: #1e3a8a;
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    transition: none;
  }
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;

  @media (max-width: 768px) {
    padding: 0 14px;
    height: 60px;
  }
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  font-size: 24px;
  font-weight: 800;
  color: #ffffff;
  transition: all 0.3s ease;

  img {
    height: 64px;
    width: auto;
    object-fit: contain;
  }

  &:hover {
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    font-size: 20px;
    
    img {
      height: 40px;
      -webkit-user-drag: none;
      user-select: none;
    }

    /* Disable hover lift on mobile */
    &:hover {
      transform: none;
    }

    /* Disable transitions/hover effects on mobile to prevent jitter */
    transition: none;
    -webkit-tap-highlight-color: transparent;
  }
`;

const NavMenu = styled(motion.nav)`
  display: flex;
  align-items: center;
  gap: 28px;
  margin-left: auto;
  margin-right: 20px;

  @media (max-width: 968px) {
    position: fixed;
    top: 60px;
    left: 0;
    right: 0;
    bottom: auto;
    height: auto;
    width: 100vw;
    background: #ffffff;
    backdrop-filter: none;
    flex-direction: column;
    align-items: flex-start;
    padding: 10px 14px 12px;
    gap: 8px;
    transform: translateY(-110%);
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    transition: transform 0.24s ease, opacity 0.2s ease, visibility 0.2s ease;
    overflow-y: auto;
    overflow-x: hidden;
    z-index: 999;
    margin-left: 0;
    margin-right: 0;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
    box-shadow: 0 10px 24px rgba(0,0,0,0.08);
    border-bottom: 1px solid #e5e7eb;

    &.active {
      transform: translateY(0);
      opacity: 1;
      visibility: visible;
      pointer-events: auto;
    }
  }
`;

const NavActions = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 968px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  font-family: 'Helvetica Neue', Arial, sans-serif;
  font-weight: 500;
  font-size: 15px;
  position: relative;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 5px;

  &:hover {
    color: #ffffff;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: #ffffff;
    transition: width 0.2s ease;
  }

  &:hover::after {
    width: 100%;
  }

  svg {
    transition: transform 0.3s ease;
  }

  @media (max-width: 968px) {
    color: #0f172a;
    font-size: 13px;
    padding: 8px 0;
    width: 100%;
    justify-content: space-between;
    border-bottom: none;

    &:hover {
      color: #1e3a8a;
    }

    &::after {
      display: none;
    }
  }
`;

const CompanyDropdown = styled(motion.div)`
  position: absolute;
  top: calc(100% + 8px);
  left: 50%;
  transform: translateX(-50%);
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  opacity: ${props => props.$open ? 1 : 0};
  visibility: ${props => props.$open ? 'visible' : 'hidden'};
  pointer-events: ${props => props.$open ? 'auto' : 'none'};
  transition: all 0.2s ease;
  z-index: 1001;
  min-width: 240px;
  border: 1px solid rgba(0, 0, 0, 0.05);

  @media (max-width: 968px) {
    position: static;
    background: #ffffff;
    border: 1px solid #e5e7eb;
    box-shadow: 0 8px 24px rgba(0,0,0,0.08);
    min-width: auto;
    opacity: 1;
    visibility: visible;
    transform: none;
    pointer-events: auto;
    overflow: hidden;
    border-radius: 12px;
    margin-top: 8px;
    max-height: ${props => props.$open ? '260px' : '0'};
    transition: max-height 0.25s ease;
  }
`;

const Dropdown = styled.div`
  position: relative;

  @media (min-width: 969px) {
    &:hover ${CompanyDropdown} {
      opacity: 1;
      visibility: visible;
      pointer-events: auto;
    }
  }

  @media (max-width: 968px) {
    width: 100%;
  }

  ${NavLink} svg {
    ${props => props.$open ? 'transform: rotate(180deg);' : ''}
  }
`;

const CompanyList = styled.div`
  padding: 8px 0;
  display: flex;
  flex-direction: column;

  @media (max-width: 968px) {
    padding: 0 6px;
    background: transparent;
    border-radius: 8px;
    margin-top: 8px;
  }
`;

const CompanyItem = styled(Link)`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  text-decoration: none;
  transition: all 0.15s ease;
  color: #1e293b;
  font-size: 0.95rem;
  font-weight: 500;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 3px;
    background: #1e3a8a;
    transform: scaleY(0);
    transition: transform 0.15s ease;
  }

  &:hover {
    background: #f8fafc;
    color: #1e3a8a;
  }

  &:hover::before {
    transform: scaleY(1);
  }

  @media (max-width: 968px) {
    color: #0f172a;
    padding: 8px 6px;
    border-radius: 6px;
    border: none;
    background: transparent;
    margin-bottom: 0;

    &::before {
      display: none;
    }

    &:hover {
      background: #f8fafc;
      color: #1e3a8a;
    }

    &:active {
      background: #eff6ff;
    }
  }
`;

const CompanyItemContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1;
`;

const CompanyItemTitle = styled.div`
  font-size: 0.95rem;
  font-weight: 500;
  color: inherit;
  line-height: 1.3;
`;

const CompanyItemDesc = styled.div`
  font-size: 0.8rem;
  color: #64748b;
  line-height: 1.3;

  ${CompanyItem}:hover & {
    color: #94a3b8;
  }

  @media (max-width: 968px) {
    display: none;
  }
`;

const CTAButton = styled(Link)`
  background: #ffffff;
  color: #1e3a8a;
  padding: 10px 24px;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 600;
  font-size: 14px;
  transition: all 0.2s ease;
  letter-spacing: 0.3px;
  white-space: nowrap;
  font-family: 'Helvetica Neue', Arial, sans-serif;

  &:hover {
    background: #f8f9fa;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 968px) {
    padding: 10px 20px;
    font-size: 13px;
  }
`;


const MobileContact = styled.div`
  display: none;
  @media (max-width: 968px) {
    display: block;
    width: 100%;
    padding: 12px;
    background: #f9fafb;
    border: 1px solid #e5e7eb;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.04);
    margin-top: 6px;
  }
`;

const ContactRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const ContactActions = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
`;

const ContactButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 12px;
  border-radius: 10px;
  text-decoration: none;
  font-size: 13px;
  font-weight: 600;
  border: 1px solid #e5e7eb;
  background: #f8fafc;
  color: #0f172a;
  box-shadow: 0 1px 2px rgba(0,0,0,0.04);
  transition: background 0.2s ease, transform 0.1s ease;

  &:hover {
    background: #eff6ff;
  }

  &:active {
    transform: translateY(1px);
  }
`;

const ContactDivider = styled.div`
  height: 1px;
  width: 100%;
  background: #e5e7eb;
  margin: 8px 0 6px;
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: #ffffff;
  font-size: 24px;
  cursor: pointer;
  padding: 10px;
  z-index: 1002;

  @media (max-width: 968px) {
    display: block;
    color: #ffffff;
  }
`;

// Dim background when mobile menu is open
const MobileOverlay = styled.div`
  display: none;
  @media (max-width: 968px) {
    display: block;
    position: fixed;
    top: 60px;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.2);
    backdrop-filter: none;
    opacity: ${props => props.$open ? 1 : 0};
    visibility: ${props => props.$open ? 'visible' : 'hidden'};
    pointer-events: ${props => props.$open ? 'auto' : 'none'};
    transition: opacity 0.2s ease, visibility 0.2s ease;
    z-index: 998;
  }
`;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setActiveMenu('');
  };

  return (
    <HeaderContainer
      $scrolled={isScrolled}
    >
        <NavContainer>
          <Logo to="/">
            <img src="/insurtech/top_logo.png" alt="Trans Asia Tech Logo" />
          </Logo>

          <NavMenu className={isMenuOpen ? 'active' : ''}>
          <NavLink to="/" onClick={closeMenu}>Home</NavLink>
          <NavLink to="/insurtech" onClick={closeMenu}>Insurtech</NavLink>
          <NavLink to="/products" onClick={closeMenu}>Products</NavLink>
          <NavLink to="/services" onClick={closeMenu}>Services</NavLink>
          <NavLink to="/consulting" onClick={closeMenu}>Consulting</NavLink>

          <Dropdown 
            $open={activeMenu === 'company'}
            onMouseEnter={() => window.innerWidth > 968 && setActiveMenu('company')}
            onMouseLeave={() => window.innerWidth > 968 && setActiveMenu('')}
          >
            <NavLink 
              to="#" 
              onClick={(e) => { 
                e.preventDefault(); 
                setActiveMenu(activeMenu === 'company' ? '' : 'company'); 
              }}
            >
              Company
              <FaChevronDown size={12} style={{ transform: activeMenu === 'company' ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }} />
            </NavLink>
            <CompanyDropdown $open={activeMenu === 'company'}>
              <CompanyList>
                <CompanyItem to="/press" onClick={closeMenu}>
                  <CompanyItemContent>
                    <CompanyItemTitle>Media</CompanyItemTitle>
                    <CompanyItemDesc>Press releases & news</CompanyItemDesc>
                  </CompanyItemContent>
                </CompanyItem>
                <CompanyItem to="/gallery" onClick={closeMenu}>
                  <CompanyItemContent>
                    <CompanyItemTitle>Event Gallery</CompanyItemTitle>
                    <CompanyItemDesc>Photos & highlights</CompanyItemDesc>
                  </CompanyItemContent>
                </CompanyItem>
                <CompanyItem to="/about" onClick={closeMenu}>
                  <CompanyItemContent>
                    <CompanyItemTitle>Our Story</CompanyItemTitle>
                    <CompanyItemDesc>Company history</CompanyItemDesc>
                  </CompanyItemContent>
                </CompanyItem>
                <CompanyItem to="/team" onClick={closeMenu}>
                  <CompanyItemContent>
                    <CompanyItemTitle>Team</CompanyItemTitle>
                    <CompanyItemDesc>Meet our experts</CompanyItemDesc>
                  </CompanyItemContent>
                </CompanyItem>
                <CompanyItem to="/insights" onClick={closeMenu}>
                  <CompanyItemContent>
                    <CompanyItemTitle>Articles/Blogs</CompanyItemTitle>
                    <CompanyItemDesc>Latest insights</CompanyItemDesc>
                  </CompanyItemContent>
                </CompanyItem>
              </CompanyList>
            </CompanyDropdown>
          </Dropdown>

          <MobileContact>
            <ContactRow>
              <div style={{ fontSize: '13px', fontWeight: 700, color: '#0f172a', padding: '0 2px' }}>
                Contact us
              </div>
              <div style={{ fontSize: '12px', color: '#64748b', padding: '0 2px 4px' }}>
                Have questions? Reach out anytime.
              </div>
              <ContactActions>
                <ContactButton href="mailto:info@transasiatec.com" aria-label="Email info@transasiatec.com">
                  <FaEnvelope /> info@transasiatec.com
                </ContactButton>
                <ContactButton href="tel:+914448568436" aria-label="Call +91 044 4856 8436">
                  <FaPhone /> +91 044 4856 8436
                </ContactButton>
              </ContactActions>
            </ContactRow>
          </MobileContact>
        </NavMenu>

        <NavActions>
          <CTAButton to="/contact" onClick={closeMenu}>
            Contact
          </CTAButton>
        </NavActions>

        <MobileMenuButton onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </MobileMenuButton>
      </NavContainer>

        {/* Overlay to close menu when tapping outside on mobile */}
        <MobileOverlay $open={isMenuOpen} onClick={closeMenu} />
    </HeaderContainer>
  );
};

export default Header;

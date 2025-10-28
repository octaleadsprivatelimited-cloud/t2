import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaLinkedin, FaFacebook, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt, FaChevronDown } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background: url('/insurtech/hero/footer.svg') center top/cover no-repeat;
  color: #ffffff;
  position: relative;
  overflow: hidden;
  padding-top: 4%;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }
`;

const Container = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 40px;
  position: relative;
  z-index: 3;

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;






const FooterMain = styled.div`
  padding: 30px 0 20px 0;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
  gap: 35px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    padding: 25px 0 15px 0;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 0;
    padding: 15px 0 10px 0;
  }
`;

const FooterColumn = styled.div`
  @media (max-width: 768px) {
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    
    &:last-child {
      border-bottom: none;
    }
  }
`;

const MobileDropdownHeader = styled.div`
  display: none;
  
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
    cursor: pointer;
    user-select: none;
  }
`;

const MobileDropdownTitle = styled.h4`
  font-size: 1rem;
  font-weight: 600;
  color: #ffffff;
  margin: 0;
`;

const MobileDropdownIcon = styled.div`
  color: #ffffff;
  font-size: 0.9rem;
  transition: transform 0.3s ease;
  
  ${props => props.isOpen && `
    transform: rotate(180deg);
  `}
`;

const MobileDropdownContent = styled.div`
  @media (max-width: 768px) {
    max-height: ${props => props.isOpen ? '500px' : '0'};
    overflow: hidden;
    transition: max-height 0.3s ease;
    padding: ${props => props.isOpen ? '0 0 8px 0' : '0'};
  }
`;

const CompanyInfo = styled.div``;

const Logo = styled.img`
  height: 60px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    height: 50px;
  }
`;

const CompanyDescription = styled.p`
  font-size: 0.9rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 22px;
  max-width: 380px;
`;

const ContactInfo = styled.div`
  margin-bottom: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 15px;
  }
`;

const AddressSection = styled.div`
  padding: 20px;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);

  @media (max-width: 768px) {
    padding: 16px;
  }
`;

const ChennaiOffice = styled(AddressSection)``;

const HyderabadOffice = styled(AddressSection)``;

const AddressTitle = styled.h5`
  font-size: 1rem;
  font-weight: 600;
  color: #ffffff;
  margin: 0 0 12px 0;

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
`;

const ContactItem = styled.div`
  margin-bottom: 10px;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.6;

  &:last-child {
    margin-bottom: 0;
  }

  span {
    display: block;
  }

  a {
    color: rgba(255, 255, 255, 0.9);
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #10b981;
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 10px;
`;

const SocialLink = styled.a`
  width: 36px;
  height: 36px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-size: 1.1rem;
  transition: all 0.3s ease;

  &:hover {
    background: #10b981;
    border-color: #10b981;
    color: #ffffff;
    transform: translateY(-3px);
  }
`;

const CertificationImage = styled.img`
  width: 100%;
  max-width: 180px;
  height: 100px;
  margin-top: 20px;
  opacity: 0.85;
  transition: all 0.3s ease;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  object-fit: cover;
  object-position: center;

  &:hover {
    opacity: 1;
    transform: translateY(-3px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    max-width: 120px;
    height: 60px;
    margin-top: 10px;
    object-fit: contain;
  }
`;

const DoubleColumnWrapper = styled.div`
  grid-column: span 2;
  
  @media (max-width: 1024px) {
    grid-column: span 1;
  }

  @media (max-width: 768px) {
    .desktop-images {
      display: none;
    }
  }
`;

const ColumnsRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 0;
    margin-bottom: 0;
    margin-top: 0;
  }
`;

const SpanningImage = styled.img`
  width: 100%;
  max-width: 100%;
  height: auto;
  margin-top: 20px;
  opacity: 0.85;
  transition: all 0.3s ease;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  object-fit: contain;

  &:hover {
    opacity: 1;
    transform: translateY(-3px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    max-width: 120px;
    height: 60px;
    margin-top: 10px;
    object-fit: contain;
  }
`;

const ImagesRow = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-direction: row;
    gap: 10px;
    justify-content: center;
    margin: 15px 0;
  }

  &.mobile-only {
    display: none;
    
    @media (max-width: 768px) {
      display: flex;
    }
  }
`;


const LinkList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FooterLink = styled(Link)`
  display: block;
  color: rgba(255, 255, 255, 0.95);
  text-decoration: none;
  font-size: 0.9rem;
  padding: 5px 0;
  transition: all 0.3s ease;
  line-height: 1.4;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);

  &:hover {
    color: #10b981;
    padding-left: 6px;
  }

  @media (max-width: 768px) {
    font-size: 0.85rem;
    padding: 3px 0;
  }
`;

const FooterBottom = styled.div`
  padding: 25px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.15);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 15px 0;
    gap: 12px;
  }
`;

const Copyright = styled.p`
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
`;

const LegalLinks = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const LegalLink = styled(Link)`
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #10b981;
  }
`;

const Footer = () => {
  const [openDropdowns, setOpenDropdowns] = useState({});

  const toggleDropdown = (section) => {
    setOpenDropdowns(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <FooterContainer>
      <Container>

        <FooterMain>
          <FooterColumn>
            <CompanyInfo>
              <Logo src="/insurtech/top_logo.png" alt="Trans Asia Tech" />
              <CompanyDescription>
                Leading provider of cybersecurity solutions and risk management services. We help organizations protect their digital assets and navigate the complex landscape of cyber threats.
              </CompanyDescription>
              <ContactInfo>
                <ContactItem>
                  <FaEnvelope />
                  <a href="mailto:info@transasiatech.com">info@transasiatech.com</a>
                </ContactItem>
                <ContactItem>
                  <FaPhone />
                  <a href="tel:+911234567890">+91 123 456 7890</a>
                </ContactItem>
              </ContactInfo>
              <SocialLinks>
                <SocialLink 
                  href="https://www.linkedin.com/company/transasia-softtech/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </SocialLink>
                <SocialLink 
                  href="https://www.facebook.com/p/TransAsia-SoftTech-100069516170641/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Facebook"
                >
                  <FaFacebook />
                </SocialLink>
                <SocialLink 
                  href="https://www.instagram.com/transasia/?hl=en" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Instagram"
                >
                  <FaInstagram />
              </SocialLink>
            </SocialLinks>
          </CompanyInfo>
          </FooterColumn>

          <FooterColumn>
            <MobileDropdownHeader onClick={() => toggleDropdown('solutions')}>
              <MobileDropdownTitle>Solutions</MobileDropdownTitle>
              <MobileDropdownIcon isOpen={openDropdowns.solutions}>
                <FaChevronDown />
              </MobileDropdownIcon>
            </MobileDropdownHeader>
            <MobileDropdownContent isOpen={openDropdowns.solutions}>
              <LinkList>
                <li><FooterLink to="/insurtech">Insurtech</FooterLink></li>
                <li><FooterLink to="/products">Cybersecurity Products</FooterLink></li>
                <li><FooterLink to="/services">Cybersecurity Services</FooterLink></li>
                <li><FooterLink to="/consulting">Consulting</FooterLink></li>
              </LinkList>
            </MobileDropdownContent>
          </FooterColumn>

          <DoubleColumnWrapper>
            <ColumnsRow>
              <FooterColumn>
                <MobileDropdownHeader onClick={() => toggleDropdown('company')}>
                  <MobileDropdownTitle>Company</MobileDropdownTitle>
                  <MobileDropdownIcon isOpen={openDropdowns.company}>
                    <FaChevronDown />
                  </MobileDropdownIcon>
                </MobileDropdownHeader>
                <MobileDropdownContent isOpen={openDropdowns.company}>
                  <LinkList>
                    <li><FooterLink to="/about">About Us</FooterLink></li>
                    <li><FooterLink to="/team">Our Team</FooterLink></li>
                    <li><FooterLink to="/careers">Careers</FooterLink></li>
                    <li><FooterLink to="/press">Press Release</FooterLink></li>
                  </LinkList>
                </MobileDropdownContent>
              </FooterColumn>

              <FooterColumn>
                <MobileDropdownHeader onClick={() => toggleDropdown('resources')}>
                  <MobileDropdownTitle>Resources</MobileDropdownTitle>
                  <MobileDropdownIcon isOpen={openDropdowns.resources}>
                    <FaChevronDown />
                  </MobileDropdownIcon>
                </MobileDropdownHeader>
                <MobileDropdownContent isOpen={openDropdowns.resources}>
                  <LinkList>
                    <li><FooterLink to="/blog">Blog</FooterLink></li>
                    <li><FooterLink to="/insights">Insights</FooterLink></li>
                    <li><FooterLink to="/gallery">Gallery</FooterLink></li>
                    <li><FooterLink to="/contact">Contact Us</FooterLink></li>
                  </LinkList>
                </MobileDropdownContent>
              </FooterColumn>
            </ColumnsRow>
            
            <ContactInfo>
              <ChennaiOffice>
                <AddressTitle>Chennai Office</AddressTitle>
                <ContactItem>
                  <span>93, 49 Harrington Road, Chennai, Tamil Nadu 600030</span>
                </ContactItem>
              </ChennaiOffice>

              <HyderabadOffice>
                <AddressTitle>Hyderabad Office</AddressTitle>
                <ContactItem>
                  <span>T-hub Phase-2, Hyderabad, Telangana 500081</span>
                </ContactItem>
              </HyderabadOffice>
            </ContactInfo>
            
          </DoubleColumnWrapper>

          <FooterColumn>
            <MobileDropdownHeader onClick={() => toggleDropdown('quicklinks')}>
              <MobileDropdownTitle>Quick Links</MobileDropdownTitle>
              <MobileDropdownIcon isOpen={openDropdowns.quicklinks}>
                <FaChevronDown />
              </MobileDropdownIcon>
            </MobileDropdownHeader>
            <MobileDropdownContent isOpen={openDropdowns.quicklinks}>
              <LinkList>
                <li><FooterLink to="/support/legal/privacy">Privacy Policy</FooterLink></li>
                <li><FooterLink to="/support/legal/terms">Terms of Service</FooterLink></li>
                <li><FooterLink to="/contact">Support</FooterLink></li>
                <li><FooterLink to="/blog">Blog</FooterLink></li>
              </LinkList>
            </MobileDropdownContent>
          </FooterColumn>
        </FooterMain>

        <FooterBottom>
          <Copyright>© 2025 Trans Asia Tech. All rights reserved.</Copyright>
          <LegalLinks>
            <LegalLink to="/support/legal/privacy">Privacy Policy</LegalLink>
            <LegalLink to="/support/legal/terms">Terms of Service</LegalLink>
            <LegalLink to="/contact">Contact</LegalLink>
          </LegalLinks>
        </FooterBottom>
      </Container>
    </FooterContainer>
  );
};

export default Footer;

import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  FaUserShield, FaHandshake, FaArrowRight, FaLock, FaGraduationCap, FaClipboardCheck, FaShieldAlt, FaNetworkWired, FaBars, FaTimes
} from 'react-icons/fa';

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
`;

const pulse = keyframes`
  0%, 100% { opacity: 0.5; }
  50% { opacity: 0.8; }
`;

const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const PageContainer = styled.div`
  min-height: 100vh;
  padding-top: 0;
  background: #ffffff;
  overflow-x: hidden;
`;

const HeroSection = styled.section`
  min-height: 90vh;
  display: flex;
  align-items: center;
  background: #ffffff;
  padding: 140px 0 100px;
  position: relative;
  overflow: hidden;

  /* Cybersecurity grid pattern */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: 
      linear-gradient(rgba(30, 58, 138, 0.12) 1px, transparent 1px),
      linear-gradient(90deg, rgba(30, 58, 138, 0.12) 1px, transparent 1px);
    background-size: 50px 50px;
    z-index: 0;
  }

  @media (max-width: 768px) {
    min-height: 75vh;
    padding: 120px 0 80px;
  }
`;

const SecurityIcon = styled.div`
  position: absolute;
  font-size: ${props => props.size || '3rem'};
  color: rgba(30, 58, 138, 0.25);
  animation: ${float} ${props => props.duration || '6s'} ease-in-out infinite;
  animation-delay: ${props => props.delay || '0s'};
  z-index: 0;
  
  &:nth-of-type(1) {
    top: 15%;
    right: 10%;
  }
  
  &:nth-of-type(2) {
    top: 60%;
    right: 5%;
  }
  
  &:nth-of-type(3) {
    top: 30%;
    right: 20%;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const AccentLine = styled.div`
  position: absolute;
  right: 0;
  top: 20%;
  width: 2px;
  height: 200px;
  background: linear-gradient(180deg, transparent 0%, rgba(30, 58, 138, 0.4) 50%, transparent 100%);
  animation: ${pulse} 3s ease-in-out infinite;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const HeroContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 80px;
  width: 100%;
  position: relative;
  z-index: 1;

  @media (max-width: 1024px) {
    padding: 0 60px;
  }

  @media (max-width: 768px) {
    padding: 0 30px;
  }
`;

const HeroTitle = styled(motion.h1)`
  font-size: 4.5rem;
  font-weight: 400;
  color: #1e3a8a;
  line-height: 1.15;
  margin-bottom: 32px;
  letter-spacing: -1px;
  font-family: 'Helvetica Neue', Arial, sans-serif;
  max-width: 900px;

  @media (max-width: 1200px) {
    font-size: 3.8rem;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 24px;
  }
`;

const HeroDescription = styled(motion.p)`
  font-size: 1.35rem;
  color: #495057;
  line-height: 1.7;
  margin-bottom: 48px;
  font-weight: 300;
  font-family: 'Helvetica Neue', Arial, sans-serif;
  max-width: 800px;

  @media (max-width: 768px) {
    font-size: 1.15rem;
    margin-bottom: 40px;
  }
`;


const ServicesSection = styled.section`
  padding: 120px 40px;
  background: white;
  position: relative;
`;

const SectionHeader = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto 80px;
`;

const SectionBadge = styled(motion.span)`
  display: inline-block;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 8px 20px;
  border-radius: 50px;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 20px;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 3.5rem;
  font-weight: 400;
  color: #1a202c;
  margin-bottom: 20px;
  letter-spacing: -1px;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const SectionSubtitle = styled(motion.p)`
  font-size: 1.2rem;
  color: #64748b;
  line-height: 1.8;
`;

const ServicesLayout = styled.div`
  display: flex;
  gap: 32px;
  max-width: 1400px;
  margin: 0 auto;
  align-items: flex-start;

  @media (max-width: 968px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const Sidebar = styled.div`
  flex: 0 0 280px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 0;
  background: transparent;

  @media (max-width: 968px) {
    flex: 1;
    width: 100%;
  }
`;

const ServiceItem = styled(motion.button)`
  background: ${props => props.$active 
    ? 'linear-gradient(135deg, #2563eb 0%, #1e40af 100%)' 
    : 'transparent'};
  color: ${props => props.$active ? 'white' : '#64748b'};
  border: none;
  border-radius: 12px;
  padding: 14px 18px;
  text-align: left;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 0.9rem;
  font-weight: 500;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: ${props => props.$active ? '3px' : '0'};
    height: 20px;
    background: linear-gradient(180deg, #3b82f6 0%, #2563eb 100%);
    border-radius: 0 3px 3px 0;
    transition: width 0.3s ease;
  }

  &:hover {
    background: ${props => props.$active 
      ? 'linear-gradient(135deg, #2563eb 0%, #1e40af 100%)' 
      : 'rgba(37, 99, 235, 0.08)'};
    color: ${props => props.$active ? 'white' : '#2563eb'};
    transform: translateX(2px);
  }

  @media (max-width: 968px) {
    padding: 12px 16px;
    font-size: 0.85rem;
  }
`;

const ServiceIcon = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: ${props => props.$active 
    ? 'rgba(255, 255, 255, 0.2)' 
    : 'rgba(37, 99, 235, 0.1)'};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  color: ${props => props.$active ? 'white' : '#2563eb'};
  flex-shrink: 0;
  transition: all 0.3s ease;
`;

const ServiceTitle = styled.span`
  flex: 1;
  letter-spacing: -0.1px;
`;

const ContentArea = styled(motion.div)`
  flex: 1;
  background: white;
  border-radius: 20px;
  padding: 28px 32px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05), 0 20px 60px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(0, 0, 0, 0.06);
  min-height: auto;
  position: relative;
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  @media (max-width: 968px) {
    padding: 24px 20px;
  }
`;

const ContentIcon = styled.div`
  display: none;
`;

const ContentTitle = styled.h3`
  font-size: 1.875rem;
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 12px;
  letter-spacing: -0.5px;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 1.625rem;
  }
`;

const ContentDescription = styled.p`
  font-size: 0.95rem;
  color: #64748b;
  line-height: 1.7;
  margin-bottom: 32px;
  font-weight: 400;
  max-width: 90%;
`;

const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 8px;
`;

const FeatureItem = styled(motion.li)`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 16px;
  background: #f8fafc;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.04);
  transition: all 0.2s ease;
  position: relative;

  &:hover {
    background: #ffffff;
    transform: translateX(2px);
    box-shadow: 0 2px 8px rgba(37, 99, 235, 0.1);
    border-color: rgba(37, 99, 235, 0.2);
  }
`;

const FeatureIcon = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 6px;
  background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 0.75rem;
  font-weight: 700;
  flex-shrink: 0;
`;

const FeatureText = styled.span`
  font-size: 0.9rem;
  color: #475569;
  line-height: 1.6;
  flex: 1;
  font-weight: 400;
`;

const MobileMenuButton = styled.button`
  display: none;
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 1000;
  background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%);
  color: white;
  border: none;
  border-radius: 12px;
  padding: 12px 16px;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.4);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(37, 99, 235, 0.5);
  }

  @media (max-width: 968px) {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;

const MobileOverlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
  backdrop-filter: blur(4px);
  display: none;

  @media (max-width: 968px) {
    display: ${props => props.$open ? 'block' : 'none'};
  }
`;

const MobileSidebar = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 320px;
  background: white;
  z-index: 1000;
  padding: 80px 20px 20px;
  overflow-y: auto;
  box-shadow: 4px 0 24px rgba(0, 0, 0, 0.1);
  display: none;

  @media (max-width: 968px) {
    display: block;
  }
`;

const MobileCloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: #f8f9fa;
  border: none;
  border-radius: 8px;
  padding: 8px;
  font-size: 1.2rem;
  color: #495057;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BentoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 24px;
  max-width: 1400px;
  margin: 0 auto;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
  }
`;

const BentoCard = styled(motion.div)`
  background: ${props => props.$gradient || 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'};
  border-radius: 32px;
  padding: 50px;
  position: relative;
  overflow: hidden;
  grid-column: ${props => props.$span || 'span 6'};
  min-height: ${props => props.$height || '400px'};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 30px 80px rgba(0, 0, 0, 0.15);
  }

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  &:hover::before {
    opacity: 1;
  }

  @media (max-width: 968px) {
    grid-column: span 1;
    min-height: 350px;
    padding: 40px;
  }
`;

const BentoIcon = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  color: white;
  margin-bottom: 30px;
`;

const BentoTitle = styled.h3`
  font-size: 2rem;
  font-weight: 400;
  color: white;
  margin-bottom: 16px;
  letter-spacing: -1px;
`;

const BentoDescription = styled.p`
  font-size: 1.05rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.7;
  margin-bottom: 30px;
`;

const BentoList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const BentoListItem = styled.li`
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.85);
  padding: 12px 0;
  padding-left: 28px;
  position: relative;
  line-height: 1.6;

  &::before {
    content: '✓';
    position: absolute;
    left: 0;
    color: white;
    font-weight: 700;
    font-size: 1.1rem;
  }
`;


const TestimonialsSection = styled.section`
  padding: 120px 40px;
  background: #1a202c;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 50%, rgba(102, 126, 234, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 50%, rgba(118, 75, 162, 0.1) 0%, transparent 50%);
  }
`;

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  max-width: 1400px;
  margin: 60px auto 0;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
  }
`;

const TestimonialCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  padding: 40px;
  position: relative;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.08);
    transform: translateY(-5px);
  }
`;

const TestimonialQuote = styled.p`
  font-size: 1.05rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.8;
  margin-bottom: 30px;
  font-style: italic;
`;

const TestimonialAuthor = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const AuthorAvatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 700;
  font-size: 1.2rem;
`;

const AuthorInfo = styled.div``;

const AuthorName = styled.div`
  font-size: 1rem;
  font-weight: 700;
  color: white;
  margin-bottom: 4px;
`;

const AuthorRole = styled.div`
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.6);
`;


const Consulting = () => {
  const [selectedService, setSelectedService] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const services = [
    {
      icon: <FaUserShield />,
      title: 'Consulting',
      description: 'Strategic cybersecurity consulting services tailored to your business needs. Expert guidance on security posture, compliance, and risk management.',
      gradient: 'linear-gradient(135deg, #1e3a8a 0%, #1e3a8a 100%)',
      span: 'span 6',
      height: '500px',
      items: [
        'Security Architecture Review',
        'Compliance Strategy Development',
        'Risk Assessment & Analysis',
        'Security Program Development',
        'Executive Advisory Services'
      ]
    },
    {
      icon: <FaLock />,
      title: 'Anti-Ransomware',
      description: 'Specialized ransomware readiness assessment and defense strategies. Protect your organization from devastating ransomware attacks with proactive measures.',
      gradient: 'linear-gradient(135deg, #2563eb 0%, #1e40af 100%)',
      span: 'span 6',
      height: '500px',
      items: [
        'Ransomware Risk Assessment',
        'Attack Simulation & Testing',
        'Backup & Recovery Planning',
        'Incident Response Preparation',
        'Employee Awareness Training'
      ]
    },
    {
      icon: <FaGraduationCap />,
      title: 'Training',
      description: 'Comprehensive cybersecurity training programs for all skill levels. Transform your team into security champions with hands-on, practical training.',
      gradient: 'linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%)',
      span: 'span 6',
      height: '500px',
      items: [
        'Security Awareness Training',
        'Phishing Simulation Campaigns',
        'Technical Security Training',
        'Compliance Training Programs',
        'Custom Training Development'
      ]
    },
    {
      icon: <FaClipboardCheck />,
      title: 'GRC',
      description: 'Governance, Risk, and Compliance solutions to streamline your security operations. Automate compliance, manage risks, and improve governance.',
      gradient: 'linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)',
      span: 'span 6',
      height: '500px',
      items: [
        'Compliance Management',
        'Policy & Procedure Development',
        'Vendor Risk Management',
        'Audit Support & Reporting',
        'GRC Platform Implementation'
      ]
    },
    {
      icon: <FaHandshake />,
      title: 'Risk Transfer',
      description: 'Cyber insurance advisory and risk transfer strategies. Optimize coverage and protect your organization from financial impacts of cyber incidents.',
      gradient: 'linear-gradient(135deg, #1e3a8a 0%, #1e3a8a 100%)',
      span: 'span 12',
      height: '450px',
      items: [
        'Cyber Insurance Policy Review',
        'Coverage Gap Analysis',
        'Risk Quantification for Insurance',
        'Claims Support & Management',
        'Insurance Broker Coordination'
      ]
    }
  ];


  const testimonials = [
    { quote: "TransAsia's ESG consulting transformed our sustainability reporting. Their expertise in BRSR compliance is unmatched.", author: 'Rajesh Kumar', role: 'CSO, Global Finance Corp', initial: 'R' },
    { quote: "The cyber forensics team's rapid response saved us millions. Their ransomware negotiation skills are exceptional.", author: 'Priya Patel', role: 'CISO, TechVentures Inc', initial: 'P' },
    { quote: "Outstanding ERM framework implementation. They identified risks we never considered and provided actionable solutions.", author: 'Amit Sharma', role: 'CEO, Innovation Labs', initial: 'A' }
  ];

  return (
    <PageContainer>
      <Helmet>
        <title>Consulting Services | TransAsia</title>
        <meta name="description" content="Expert consulting in ESG, ERM, Cyber Insurance, and Cyber Forensics" />
      </Helmet>

      <HeroSection>
        {/* Cybersecurity Background Elements */}
        <SecurityIcon size="5rem" duration="8s" delay="0s">
          <FaShieldAlt />
        </SecurityIcon>
        <SecurityIcon size="4rem" duration="7s" delay="1s">
          <FaLock />
        </SecurityIcon>
        <SecurityIcon size="3.5rem" duration="9s" delay="2s">
          <FaNetworkWired />
        </SecurityIcon>
        <AccentLine />
        
        <HeroContent>
          <HeroTitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Transform Risk Into Strategic Advantage
          </HeroTitle>
          <HeroDescription
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Expert consulting across ESG, Enterprise Risk Management, Cyber Insurance, 
            and Incident Response. Protect your business and accelerate growth with proven strategies.
          </HeroDescription>
        </HeroContent>
      </HeroSection>

      <ServicesSection>
        <SectionHeader>
          <SectionBadge
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Services
          </SectionBadge>
          <SectionTitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Comprehensive Solutions
          </SectionTitle>
          <SectionSubtitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            From ESG evaluation to cyber forensics, we provide end-to-end consulting services tailored to your needs
          </SectionSubtitle>
        </SectionHeader>

        <MobileMenuButton onClick={() => setMobileMenuOpen(true)}>
          <FaBars /> Menu
        </MobileMenuButton>

        <MobileOverlay 
          $open={mobileMenuOpen}
          onClick={() => setMobileMenuOpen(false)}
          initial={{ opacity: 0 }}
          animate={{ opacity: mobileMenuOpen ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        />

        <MobileSidebar
          initial={{ x: -320 }}
          animate={{ x: mobileMenuOpen ? 0 : -320 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        >
          <MobileCloseButton onClick={() => setMobileMenuOpen(false)}>
            <FaTimes />
          </MobileCloseButton>
          {services.map((service, index) => (
            <ServiceItem
              key={index}
              $active={selectedService === index}
              onClick={() => {
                setSelectedService(index);
                setMobileMenuOpen(false);
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <ServiceIcon $active={selectedService === index}>
                {service.icon}
              </ServiceIcon>
              <ServiceTitle>{service.title}</ServiceTitle>
            </ServiceItem>
          ))}
        </MobileSidebar>

        <ServicesLayout>
          <Sidebar>
            {services.map((service, index) => (
              <ServiceItem
                key={index}
                $active={selectedService === index}
                onClick={() => setSelectedService(index)}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <ServiceIcon $active={selectedService === index}>
                  {service.icon}
                </ServiceIcon>
                <ServiceTitle>{service.title}</ServiceTitle>
              </ServiceItem>
            ))}
          </Sidebar>

          <ContentArea
            key={selectedService}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <ContentTitle>{services[selectedService].title}</ContentTitle>
            <ContentDescription>{services[selectedService].description}</ContentDescription>
            <FeaturesList>
              {services[selectedService].items.map((item, index) => (
                <FeatureItem
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <FeatureIcon>✓</FeatureIcon>
                  <FeatureText>{item}</FeatureText>
                </FeatureItem>
              ))}
            </FeaturesList>
          </ContentArea>
        </ServicesLayout>
      </ServicesSection>


      <TestimonialsSection>
        <SectionHeader>
          <SectionBadge
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ background: 'rgba(255, 255, 255, 0.2)' }}
          >
            Testimonials
          </SectionBadge>
          <SectionTitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            style={{ color: 'white' }}
          >
            What Our Clients Say
          </SectionTitle>
        </SectionHeader>

        <TestimonialsGrid>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <TestimonialQuote>"{testimonial.quote}"</TestimonialQuote>
              <TestimonialAuthor>
                <AuthorAvatar>{testimonial.initial}</AuthorAvatar>
                <AuthorInfo>
                  <AuthorName>{testimonial.author}</AuthorName>
                  <AuthorRole>{testimonial.role}</AuthorRole>
                </AuthorInfo>
              </TestimonialAuthor>
            </TestimonialCard>
          ))}
        </TestimonialsGrid>
      </TestimonialsSection>

    </PageContainer>
  );
};

export default Consulting;



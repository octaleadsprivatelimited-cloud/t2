import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  FaServer, FaShieldAlt, FaBug, FaSearch, FaNetworkWired, FaUserLock, FaEye, FaBars, FaTimes
} from 'react-icons/fa';

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
`;

const pulse = keyframes`
  0%, 100% { opacity: 0.5; }
  50% { opacity: 0.8; }
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

const ContentSection = styled.section`
  padding: 120px 40px;
  background: white;
  position: relative;
  min-height: 100vh;
`;

const ContentContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 40px;
  
  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const Sidebar = styled.div`
  background: #f8fafc;
  border-radius: 16px;
  padding: 30px;
  height: fit-content;
  position: sticky;
  top: 120px;
  
  @media (max-width: 968px) {
    position: relative;
    top: 0;
    margin-bottom: 20px;
  }
`;

const SidebarTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #1e3a8a;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 2px solid #e2e8f0;
`;

const SidebarList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const SidebarItem = styled.li`
  margin-bottom: 8px;
`;

const SidebarButton = styled.button`
  width: 100%;
  padding: 12px 16px;
  background: ${props => props.$active ? '#1e3a8a' : 'transparent'};
  color: ${props => props.$active ? 'white' : '#64748b'};
  border: 1px solid ${props => props.$active ? '#1e3a8a' : '#e2e8f0'};
  border-radius: 8px;
  font-size: 0.95rem;
  font-weight: 500;
  text-align: left;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${props => props.$active ? '#1e3a8a' : '#f1f5f9'};
    border-color: #1e3a8a;
  }
`;

const ContentArea = styled.div`
  background: white;
  border-radius: 16px;
  padding: 40px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  border: 1px solid #e2e8f0;
`;

const ContentTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 600;
  color: #1e3a8a;
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ContentDescription = styled.p`
  font-size: 1.1rem;
  color: #64748b;
  line-height: 1.7;
  margin-bottom: 30px;
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 30px;
`;

const FeatureCard = styled.div`
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 24px;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  }
`;

const FeatureTitle = styled.h4`
  font-size: 1.2rem;
  font-weight: 600;
  color: #1e3a8a;
  margin-bottom: 12px;
`;

const FeatureDescription = styled.p`
  font-size: 0.95rem;
  color: #64748b;
  line-height: 1.6;
`;

const MobileMenuButton = styled.button`
  display: none;
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 1000;
  background: #1e3a8a;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 12px;
  font-size: 1.2rem;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  
  @media (max-width: 968px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const MobileOverlay = styled.div`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
  
  @media (max-width: 968px) {
    display: ${props => props.$show ? 'block' : 'none'};
  }
`;

const MobileSidebar = styled.div`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 280px;
  background: white;
  z-index: 1000;
  padding: 20px;
  overflow-y: auto;
  transform: ${props => props.$show ? 'translateX(0)' : 'translateX(-100%)'};
  transition: transform 0.3s ease;
  
  @media (max-width: 968px) {
    display: block;
  }
`;

const MobileCloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #64748b;
  cursor: pointer;
  margin-bottom: 20px;
  padding: 8px;
`;

const ServicesTest = () => {
  const [selectedService, setSelectedService] = useState('Infrastructure Security');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const serviceData = {
    'Infrastructure Security': {
      title: 'Infrastructure Security',
      description: 'Comprehensive security services for your IT infrastructure. Protect your servers, networks, and critical systems from cyber threats with our expert team.',
      features: [
        {
          title: 'Server Hardening',
          description: 'Secure your servers with industry best practices and configuration management.'
        },
        {
          title: 'Network Segmentation',
          description: 'Implement network isolation to limit lateral movement of threats.'
        },
        {
          title: 'Firewall Configuration',
          description: 'Optimize firewall rules and policies for maximum security.'
        },
        {
          title: 'Intrusion Detection',
          description: 'Deploy advanced IDS/IPS systems to detect and prevent attacks.'
        },
        {
          title: 'Security Monitoring',
          description: '24/7 monitoring of your infrastructure for security events.'
        }
      ]
    },
    'Penetration Testing': {
      title: 'Penetration Testing',
      description: 'Proactive security testing to identify vulnerabilities before attackers do. Our certified ethical hackers simulate real-world attacks to strengthen your defenses.',
      features: [
        {
          title: 'Web Application Testing',
          description: 'Comprehensive testing of web applications for OWASP Top 10 vulnerabilities.'
        },
        {
          title: 'Network Penetration Testing',
          description: 'Assess network security from both internal and external perspectives.'
        },
        {
          title: 'Mobile App Security Testing',
          description: 'Security assessment of iOS and Android applications.'
        },
        {
          title: 'Wireless Security Assessment',
          description: 'Evaluate wireless network security and configuration.'
        },
        {
          title: 'Social Engineering Testing',
          description: 'Test human factors and security awareness through simulated attacks.'
        }
      ]
    },
    'Vulnerability Assessment': {
      title: 'Vulnerability Assessment',
      description: 'Identify and prioritize security vulnerabilities in your systems. Get detailed reports with actionable remediation steps and ongoing support.',
      features: [
        {
          title: 'Automated Vulnerability Scanning',
          description: 'Comprehensive scanning using industry-leading tools and techniques.'
        },
        {
          title: 'Manual Security Testing',
          description: 'Expert manual testing to find complex vulnerabilities.'
        },
        {
          title: 'Risk Prioritization',
          description: 'Risk-based prioritization of vulnerabilities for efficient remediation.'
        },
        {
          title: 'Remediation Guidance',
          description: 'Detailed guidance and support for vulnerability remediation.'
        },
        {
          title: 'Re-assessment Services',
          description: 'Follow-up assessments to verify remediation effectiveness.'
        }
      ]
    },
    'Security Monitoring': {
      title: 'Security Monitoring',
      description: '24/7 security monitoring and incident response. Detect threats early and respond quickly to minimize impact with our SOC team.',
      features: [
        {
          title: 'SIEM Implementation',
          description: 'Deploy and configure Security Information and Event Management systems.'
        },
        {
          title: 'Log Monitoring',
          description: 'Comprehensive monitoring of security logs and events.'
        },
        {
          title: 'Threat Detection',
          description: 'Advanced threat detection using machine learning and behavioral analysis.'
        },
        {
          title: 'Incident Response',
          description: 'Rapid response to security incidents with expert guidance.'
        },
        {
          title: 'Security Analytics',
          description: 'Advanced analytics to identify patterns and potential threats.'
        }
      ]
    },
    'Identity & Access Management': {
      title: 'Identity & Access Management',
      description: 'Secure identity and access management solutions. Control who has access to what, when, and from where with comprehensive IAM strategies.',
      features: [
        {
          title: 'IAM Strategy & Design',
          description: 'Comprehensive IAM strategy development and architecture design.'
        },
        {
          title: 'Multi-Factor Authentication',
          description: 'Implement MFA solutions to enhance authentication security.'
        },
        {
          title: 'Single Sign-On (SSO)',
          description: 'Deploy SSO solutions for seamless and secure access.'
        },
        {
          title: 'Privileged Access Management',
          description: 'Secure management of privileged accounts and access.'
        },
        {
          title: 'Identity Governance',
          description: 'Implement identity governance and compliance frameworks.'
        }
      ]
    }
  };

  const serviceTitles = Object.keys(serviceData);

  const handleServiceSelect = (service) => {
    setSelectedService(service);
    setMobileMenuOpen(false);
  };

  return (
    <PageContainer>
      <Helmet>
        <title>Security Services | TransAsia</title>
        <meta name="description" content="Comprehensive cybersecurity services for your business" />
      </Helmet>

      <HeroSection>
        {/* Cybersecurity Background Elements */}
        <SecurityIcon size="5rem" duration="8s" delay="0s">
          <FaShieldAlt />
        </SecurityIcon>
        <SecurityIcon size="4rem" duration="7s" delay="1s">
          <FaNetworkWired />
        </SecurityIcon>
        <SecurityIcon size="3.5rem" duration="9s" delay="2s">
          <FaSearch />
        </SecurityIcon>
        <AccentLine />
        
        <HeroContent>
          <HeroTitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Comprehensive Security Services
          </HeroTitle>
          <HeroDescription
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            From penetration testing to 24/7 monitoring, we provide end-to-end security services 
            to protect your business from evolving cyber threats.
          </HeroDescription>
        </HeroContent>
      </HeroSection>

      <ContentSection>
        <MobileMenuButton onClick={() => setMobileMenuOpen(true)}>
          <FaBars />
        </MobileMenuButton>

        <MobileOverlay $show={mobileMenuOpen} onClick={() => setMobileMenuOpen(false)} />

        <MobileSidebar $show={mobileMenuOpen}>
          <MobileCloseButton onClick={() => setMobileMenuOpen(false)}>
            <FaTimes />
          </MobileCloseButton>
          <SidebarTitle>Services</SidebarTitle>
          <SidebarList>
            {serviceTitles.map((title) => (
              <SidebarItem key={title}>
                <SidebarButton
                  $active={selectedService === title}
                  onClick={() => handleServiceSelect(title)}
                >
                  {title}
                </SidebarButton>
              </SidebarItem>
            ))}
          </SidebarList>
        </MobileSidebar>

        <ContentContainer>
          <Sidebar>
            <SidebarTitle>Services</SidebarTitle>
            <SidebarList>
              {serviceTitles.map((title) => (
                <SidebarItem key={title}>
                  <SidebarButton
                    $active={selectedService === title}
                    onClick={() => handleServiceSelect(title)}
                  >
                    {title}
                  </SidebarButton>
                </SidebarItem>
              ))}
            </SidebarList>
          </Sidebar>

          <ContentArea>
            <ContentTitle>{serviceData[selectedService].title}</ContentTitle>
            <ContentDescription>{serviceData[selectedService].description}</ContentDescription>
            
            <FeatureGrid>
              {serviceData[selectedService].features.map((feature, index) => (
                <FeatureCard key={index}>
                  <FeatureTitle>{feature.title}</FeatureTitle>
                  <FeatureDescription>{feature.description}</FeatureDescription>
                </FeatureCard>
              ))}
            </FeatureGrid>
          </ContentArea>
        </ContentContainer>
      </ContentSection>
    </PageContainer>
  );
};

export default ServicesTest;

import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  FaServer, FaShieldAlt, FaBug, FaSearch, FaNetworkWired, FaUserLock, FaEye
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

const ServicesTest = () => {
  const services = [
    {
      icon: <FaServer />,
      title: 'Infrastructure Security',
      description: 'Comprehensive security services for your IT infrastructure. Protect your servers, networks, and critical systems from cyber threats.',
      gradient: 'linear-gradient(135deg, #1e3a8a 0%, #1e3a8a 100%)',
      span: 'span 6',
      height: '500px',
      items: [
        'Server Hardening',
        'Network Segmentation',
        'Firewall Configuration',
        'Intrusion Detection',
        'Security Monitoring'
      ]
    },
    {
      icon: <FaBug />,
      title: 'Penetration Testing',
      description: 'Proactive security testing to identify vulnerabilities before attackers do. Comprehensive penetration testing services to strengthen your defenses.',
      gradient: 'linear-gradient(135deg, #2563eb 0%, #1e40af 100%)',
      span: 'span 6',
      height: '500px',
      items: [
        'Web Application Testing',
        'Network Penetration Testing',
        'Mobile App Security Testing',
        'Wireless Security Assessment',
        'Social Engineering Testing'
      ]
    },
    {
      icon: <FaSearch />,
      title: 'Vulnerability Assessment',
      description: 'Identify and prioritize security vulnerabilities in your systems. Get detailed reports with actionable remediation steps.',
      gradient: 'linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%)',
      span: 'span 6',
      height: '500px',
      items: [
        'Automated Vulnerability Scanning',
        'Manual Security Testing',
        'Risk Prioritization',
        'Remediation Guidance',
        'Re-assessment Services'
      ]
    },
    {
      icon: <FaEye />,
      title: 'Security Monitoring',
      description: '24/7 security monitoring and incident response. Detect threats early and respond quickly to minimize impact.',
      gradient: 'linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)',
      span: 'span 6',
      height: '500px',
      items: [
        'SIEM Implementation',
        'Log Monitoring',
        'Threat Detection',
        'Incident Response',
        'Security Analytics'
      ]
    },
    {
      icon: <FaUserLock />,
      title: 'Identity & Access Management',
      description: 'Secure identity and access management solutions. Control who has access to what, when, and from where.',
      gradient: 'linear-gradient(135deg, #1e3a8a 0%, #1e3a8a 100%)',
      span: 'span 12',
      height: '450px',
      items: [
        'IAM Strategy & Design',
        'Multi-Factor Authentication',
        'Single Sign-On (SSO)',
        'Privileged Access Management',
        'Identity Governance'
      ]
    }
  ];

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
            Security Solutions
          </SectionTitle>
          <SectionSubtitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Tailored security services to meet your specific needs and compliance requirements
          </SectionSubtitle>
        </SectionHeader>

        <BentoGrid>
          {services.map((service, index) => (
            <BentoCard
              key={index}
              $gradient={service.gradient}
              $span={service.span}
              $height={service.height}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div>
                <BentoIcon>{service.icon}</BentoIcon>
                <BentoTitle>{service.title}</BentoTitle>
                <BentoDescription>{service.description}</BentoDescription>
              </div>
              <BentoList>
                {service.items.map((item, i) => (
                  <BentoListItem key={i}>{item}</BentoListItem>
                ))}
              </BentoList>
            </BentoCard>
          ))}
        </BentoGrid>
      </ServicesSection>
    </PageContainer>
  );
};

export default ServicesTest;

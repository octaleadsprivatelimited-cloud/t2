import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaChevronDown, FaRocket, FaLeaf, FaSearch, FaSun, FaBolt, FaNetworkWired, FaBars, FaTimes
} from 'react-icons/fa';

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


  &::after {
    content: '';
    position: absolute;
    width: 200%;
    height: 200%;
    top: -50%;
    left: -50%;
    background: 
      radial-gradient(circle at 20% 50%, rgba(30, 58, 138, 0.15) 0%, transparent 50%),
      radial-gradient(circle at 80% 50%, rgba(30, 64, 175, 0.1) 0%, transparent 50%);
    animation: ${rotate} 30s linear infinite;
    z-index: 2;
    pointer-events: none;
  }

  @media (max-width: 768px) {
    min-height: 80vh;
    padding: 150px 20px 80px;
  }

  @media (max-width: 480px) {
    min-height: 70vh;
    padding: 120px 20px 60px;
  }
`;

const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 2;
`;

const HeroTitle = styled(motion.h1)`
  font-size: 4rem;
  font-weight: 700;
  color: #1e3a8a;
  margin-bottom: 24px;
  line-height: 1.2;
  letter-spacing: -1px;

  span {
    display: block;
    font-weight: 300;
    font-size: 3.5rem;
    background: linear-gradient(135deg, #1e3a8a 0%, #93c5fd 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-top: 8px;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
    
    span {
      font-size: 2.2rem;
    }
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 1.3rem;
  color: #64748b;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.7;
`;

const FAQSection = styled.section`
  padding: 0 40px 120px 40px;
  background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);

  @media (max-width: 768px) {
    padding: 0 20px 80px 20px;
  }
`;

const SectionTitle = styled(motion.h2)`
  font-size: 3rem;
  font-weight: 400;
  text-align: center;
  color: #1e3a8a;
  margin-bottom: 20px;
  letter-spacing: -1px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SectionSubtitle = styled(motion.p)`
  font-size: 1.2rem;
  color: #64748b;
  text-align: center;
  max-width: 700px;
  margin: 0 auto 80px;
  line-height: 1.7;
`;

const FAQContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FAQItem = styled(motion.div)`
  background: white;
  border-radius: 24px;
  overflow: hidden;
  border: 2px solid ${props => props.$isOpen ? '#1e3a8a' : 'rgba(0, 0, 0, 0.05)'};
  box-shadow: ${props => props.$isOpen ? '0 20px 60px rgba(30, 64, 175, 0.15)' : '0 4px 20px rgba(0, 0, 0, 0.06)'};
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    box-shadow: 0 12px 40px rgba(30, 64, 175, 0.12);
  }
`;

const FAQHeader = styled.div`
  padding: 32px 40px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 24px;
  background: ${props => props.$isOpen ? 'linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%)' : 'white'};
  transition: all 0.3s ease;
  border-bottom: ${props => props.$isOpen ? 'none' : '1px solid rgba(0, 0, 0, 0.1)'};

  &:hover {
    background: ${props => props.$isOpen ? 'linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%)' : 'rgba(30, 58, 138, 0.05)'};
  }

  @media (max-width: 768px) {
    padding: 24px 20px;
    gap: 16px;
  }
`;

const FAQIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 16px;
  background: ${props => props.$isOpen ? 'rgba(255, 255, 255, 0.2)' : props.$gradient};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  color: ${props => props.$isOpen ? 'white' : 'white'};
  flex-shrink: 0;
  box-shadow: 0 4px 16px ${props => props.$isOpen ? 'rgba(255, 255, 255, 0.3)' : 'rgba(30, 58, 138, 0.3)'};

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    font-size: 1.5rem;
  }
`;

const FAQTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
  color: ${props => props.$isOpen ? 'white' : '#1e3a8a'};
  flex: 1;
  transition: color 0.3s ease;
  text-shadow: ${props => props.$isOpen ? 'none' : '0 1px 2px rgba(0, 0, 0, 0.1)'};

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const FAQChevron = styled(motion.div)`
  font-size: 1.5rem;
  color: ${props => props.$isOpen ? 'white' : '#1e3a8a'};
  transition: color 0.3s ease;
`;

const FAQContent = styled(motion.div)`
  padding: 0 40px 40px;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 0 20px 24px;
  }
`;

const FAQDescription = styled.p`
  font-size: 1.15rem;
  color: #64748b;
  line-height: 1.8;
  margin-bottom: 30px;
  font-weight: 500;
`;


const Highlight = styled.div`
  background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);
  border: 2px solid rgba(30, 58, 138, 0.2);
  border-radius: 16px;
  padding: 24px;
  margin: 24px 0;
  font-size: 1.05rem;
  color: #1e3a8a;
  line-height: 1.7;
  font-style: italic;
  text-align: center;
  font-weight: 600;
`;

const CTAButton = styled(motion.button)`
  background: linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%);
  color: white;
  border: none;
  padding: 16px 40px;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 12px;
  box-shadow: 0 8px 24px rgba(30, 58, 138, 0.3);
  margin-top: 20px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 32px rgba(30, 58, 138, 0.4);
  }
`;


const ProductsLayout = styled.div`
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

const ProductItem = styled(motion.button)`
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

const ProductIcon = styled.div`
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

const ProductTitleText = styled.span`
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

const ContentTitle = styled.h3`
  font-size: 1.625rem;
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 12px;
  letter-spacing: -0.5px;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  line-height: 1.3;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const ContentDescription = styled.p`
  font-size: 0.95rem;
  color: #64748b;
  line-height: 1.6;
  margin-bottom: 16px;
  font-weight: 400;
  max-width: 95%;
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

const CyberSecurityProducts = () => {
  const [selectedProduct, setSelectedProduct] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const products = [
    {
      id: 'sunshine',
      icon: <FaSun />,
      title: 'Sunshine',
      gradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
      description: 'Comprehensive security awareness and training platform. Sunshine illuminates your organization\'s security culture through engaging training modules, phishing simulations, and continuous security education programs.',
      features: [
        'Interactive Security Training Modules',
        'Phishing Simulation Campaigns',
        'Compliance Training & Certification',
        'Real-time Progress Tracking & Analytics'
      ],
      highlight: 'Transform your employees from security risks to security champions with gamified learning',
      cta: 'Brighten your security posture with Sunshine!'
    },
    {
      id: 'transgrc',
      icon: <FaLeaf />,
      title: 'TransGRC',
      gradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
      description: 'TransGRC: Your All-in-One Compliance Dashboard. Ensure peace of mind with TransGRC, a comprehensive compliance management solution designed to streamline your security posture. Automate tasks, centralize data, and gain complete visibility into your compliance efforts, all within a user-friendly platform.',
      features: [
        'Effortless Compliance Management',
        'Complete Control Over Your Compliance Program',
        'Simplified Policy Creation',
        'Vendor Management Made Easy'
      ],
      esgFeatures: [
        'Generate comprehensive reports aligned with SEBI BRSR',
        'Track ESG compliance across locations for informed decision',
        'Foster transparency and communication with stakeholders',
        'Capture data across locations to continuously track ESG compliance at Head Office and Plants',
        'Supply chain data capture and reporting',
        'Sustainability suggestions through AI'
      ],
      highlight: 'Multi Tenant solution with Dashboard, compliance status, HO & Plant grouping, supply chain interlinkage and Auditors feedback. Editable Report with Visualization',
      cta: 'Sign up today and be among the first to revolutionize your Compliance approach!'
    },
    {
      id: 'vrma',
      icon: <FaNetworkWired />,
      title: 'VRMA',
      gradient: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)',
      description: 'V.R.M.A: Streamline Your Vulnerability Remediation. Conquer your Vulnerability Remediation backlog with V.R.M.A! This powerful Vulnerability Remediation Management Application, empowers you to streamline the entire remediation process, saving you time, resources, and stress.',
      subtitle: 'V.R.M.A offers a robust feature set built to simplify vulnerability management and expedite remediation.',
      features: [
        'Centralize Vulnerability Data',
        'Prioritize Threats Effectively',
        'Track Remediation Progress',
        'Collaborate Seamlessly',
        'Generate Comprehensive Reports'
      ],
      benefits: [
        'Reduced Risk',
        'Improved Efficiency',
        'Enhanced Visibility',
        'Simplified Compliance',
        'Reduce Overall Cost'
      ],
      highlight: 'V.R.M.A: Take Control of Your Vulnerability Remediation Today!',
      cta: 'Ready to transform your vulnerability remediation process? V.R.M.A offers a powerful and user-friendly solution that simplifies every step. Contact TransAsia Soft Tech Pvt. Ltd today to learn more and request a demo!'
    },
    {
      id: 'huntercat',
      icon: <FaSearch />,
      title: 'HunterCat',
      gradient: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
      description: 'Huntercat: Your Powerful Web Application Vulnerability Management Solution. Say goodbye to complex vulnerability management! Huntercat, designed by TransAsia Soft Tech Pvt. Ltd, is a comprehensive solution that simplifies and streamlines the entire web application vulnerability management lifecycle.',
      subtitle: 'Huntercat offers a powerful feature set designed to empower your security team and reduce your overall risk profile.',
      features: [
        'Effortless Asset Discovery',
        'In-depth Vulnerability Scanning and Assessment',
        'Unified Attack Surface Management',
        'Enhanced Security Observability',
        'Streamlined Vulnerability Reporting and Remediation',
        'Compliance Made Easy',
        'Security Audits Simplified',
        'Industry-Specific Security Solutions'
      ],
      benefits: [
        'Reduced Risk',
        'Improved Efficiency',
        'Cost Savings',
        'Enhanced Compliance',
        'Peace of Mind'
      ],
      highlight: 'Comprehensive web application vulnerability management with automated scanning and remediation',
      cta: 'Sign up today and be among the first to revolutionize your Compliance approach!'
    },
    {
      id: 'blacknet',
      icon: <FaBolt />,
      title: 'BlackNet',
      gradient: 'linear-gradient(135deg, #1e1e1e 0%, #000000 100%)',
      description: 'BlackNet: Advanced Dark Web Monitoring and Threat Intelligence Platform. BlackNet provides comprehensive monitoring of the deep and dark web to identify data breaches, stolen credentials, and emerging threats targeting your organization. Stay ahead of cyber criminals with real-time alerts and actionable intelligence.',
      subtitle: 'BlackNet empowers organizations with proactive threat intelligence from the hidden corners of the internet.',
      features: [
        'Continuous Dark Web Monitoring',
        'Real-time Breach Notifications',
        'Stolen Credential Detection',
        'Threat Actor Tracking',
        'Compromised Asset Discovery',
        'Intelligence Reporting & Analytics',
        'Automated Alert System',
        'Integration with Security Tools'
      ],
      benefits: [
        'Early Breach Detection',
        'Proactive Threat Prevention',
        'Reduced Incident Response Time',
        'Enhanced Security Posture',
        'Regulatory Compliance Support'
      ],
      highlight: 'BlackNet scours the dark web 24/7 to identify and alert you about threats before they impact your organization',
      cta: 'Protect your organization with BlackNet\'s advanced threat intelligence. Contact us today for a comprehensive demo!'
    }
  ];

  const renderProductContent = (product) => {
    return (
      <>
        <ContentDescription>{product.description}</ContentDescription>

        {product.features && (
          <>
            <h4 style={{ fontSize: '1.1rem', fontWeight: '600', color: '#1e3a8a', marginBottom: '16px', marginTop: '24px' }}>
              Key Features:
            </h4>
            <FeaturesList>
              {product.features.map((feature, idx) => (
                <FeatureItem
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <FeatureIcon>✓</FeatureIcon>
                  <FeatureText>{feature}</FeatureText>
                </FeatureItem>
              ))}
            </FeaturesList>
          </>
        )}

        {product.benefits && (
          <>
            <h4 style={{ fontSize: '1.1rem', fontWeight: '600', color: '#1e3a8a', marginBottom: '16px', marginTop: '24px' }}>
              Benefits:
            </h4>
            <FeaturesList>
              {product.benefits.map((benefit, idx) => (
                <FeatureItem
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <FeatureIcon>✓</FeatureIcon>
                  <FeatureText>{benefit}</FeatureText>
                </FeatureItem>
              ))}
            </FeaturesList>
          </>
        )}

        {product.esgFeatures && product.id === 'transgrc' && (
          <>
            <h4 style={{ fontSize: '1.1rem', fontWeight: '600', color: '#1e3a8a', marginBottom: '16px', marginTop: '24px' }}>
              ESG Key Features:
            </h4>
            <FeaturesList>
              {product.esgFeatures.map((feature, idx) => (
                <FeatureItem
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <FeatureIcon>✓</FeatureIcon>
                  <FeatureText>{feature}</FeatureText>
                </FeatureItem>
              ))}
            </FeaturesList>
          </>
        )}

        {product.highlight && (
          <p style={{ fontSize: '1rem', color: '#1e3a8a', lineHeight: '1.6', marginTop: '24px', fontWeight: '500', fontStyle: 'italic' }}>
            {product.highlight}
          </p>
        )}
      </>
    );
  };

  return (
    <PageContainer>
      <Helmet>
        <title>Cybersecurity Products | TransAsia</title>
        <meta name="description" content="Advanced cybersecurity products for enterprise protection" />
      </Helmet>

      <HeroSection>
        <HeroContent>
          <HeroTitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Cybersecurity Products
            <span>Enterprise-Grade Protection</span>
          </HeroTitle>
          <HeroSubtitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Comprehensive suite of security solutions designed to protect, detect, and respond to modern cyber threats
          </HeroSubtitle>
        </HeroContent>
      </HeroSection>

      <FAQSection>
        <SectionTitle
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Our Products
        </SectionTitle>
        <SectionSubtitle
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Explore our cutting-edge cybersecurity solutions
        </SectionSubtitle>

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
          {products.map((product, index) => (
            <ProductItem
              key={product.id}
              $active={selectedProduct === index}
              onClick={() => {
                setSelectedProduct(index);
                setMobileMenuOpen(false);
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <ProductIcon $active={selectedProduct === index}>
                {product.icon}
              </ProductIcon>
              <ProductTitleText>{product.title}</ProductTitleText>
            </ProductItem>
          ))}
        </MobileSidebar>

        <ProductsLayout>
          <Sidebar>
            {products.map((product, index) => (
              <ProductItem
                key={product.id}
                $active={selectedProduct === index}
                onClick={() => setSelectedProduct(index)}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <ProductIcon $active={selectedProduct === index}>
                  {product.icon}
                </ProductIcon>
                <ProductTitleText>{product.title}</ProductTitleText>
              </ProductItem>
            ))}
          </Sidebar>

          <ContentArea
            key={selectedProduct}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <ContentTitle>{products[selectedProduct].title}</ContentTitle>
            {renderProductContent(products[selectedProduct])}
          </ContentArea>
        </ProductsLayout>
      </FAQSection>
    </PageContainer>
  );
};

export default CyberSecurityProducts;

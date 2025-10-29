import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaUserShield, FaRocket, FaLaptopCode, FaServer, FaSearch, FaCheckCircle, FaArrowRight, FaShieldAlt, FaLock, FaNetworkWired, FaBars, FaTimes
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

const HeroTitle = styled.h1`
  font-size: 4.5rem;
  font-weight: 400;
  color: #1e3a8a;
  margin-bottom: 32px;
  letter-spacing: -1px;
  font-family: 'Helvetica Neue', Arial, sans-serif;
  line-height: 1.15;
  max-width: 900px;

  @media (max-width: 1200px) {
    font-size: 3.8rem;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 24px;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.35rem;
  color: #495057;
  max-width: 800px;
  margin-bottom: 48px;
  line-height: 1.7;
  font-weight: 300;
  font-family: 'Helvetica Neue', Arial, sans-serif;

  @media (max-width: 768px) {
    font-size: 1.15rem;
    margin-bottom: 40px;
  }
`;

const TabsContainer = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 60px 40px 100px;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  border-radius: 24px;
  margin-top: -50px;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    padding: 40px 20px 80px;
  }
`;

const TabsHeader = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 50px;
  background: rgba(255, 255, 255, 0.05);
  padding: 8px;
  border-radius: 16px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  overflow-x: auto;

  &::-webkit-scrollbar {
    height: 6px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(30, 58, 138, 0.5);
    border-radius: 3px;
  }

  @media (max-width: 768px) {
    gap: 12px;
    padding: 6px;
  }
`;

const Tab = styled.button`
  flex: 1;
  min-width: fit-content;
  padding: 20px 32px;
  background: ${props => props.active 
    ? 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%)' 
    : 'transparent'};
  border: none;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: ${props => props.active ? '700' : '600'};
  color: ${props => props.active ? '#ffffff' : 'rgba(255, 255, 255, 0.7)'};
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  box-shadow: ${props => props.active 
    ? '0 8px 20px rgba(30, 58, 138, 0.4)' 
    : 'none'};

  &:hover {
    color: #ffffff;
    background: ${props => props.active 
      ? 'linear-gradient(135deg, #1e40af 0%, #2563eb 100%)' 
      : 'rgba(30, 58, 138, 0.3)'};
    transform: translateY(-2px);
  }

  svg {
    font-size: 1.2rem;
  }

  @media (max-width: 768px) {
    padding: 16px 24px;
    font-size: 0.95rem;
  }
`;

const TabContent = styled(motion.div)`
  background: white;
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05), 0 20px 60px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(0, 0, 0, 0.06);

  @media (max-width: 768px) {
    padding: 30px 20px;
    border-radius: 16px;
  }
`;

const ContentHeader = styled.div`
  text-align: center;
  margin-bottom: 60px;
`;

const ContentIcon = styled.div`
  width: 100px;
  height: 100px;
  margin: 0 auto 30px;
  border-radius: 24px;
  background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  color: white;
  box-shadow: 0 16px 40px rgba(30, 58, 138, 0.4);
  animation: ${float} 6s ease-in-out infinite;

  @media (max-width: 768px) {
    width: 85px;
    height: 85px;
    font-size: 2.5rem;
  }
`;

const ContentTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 20px;
  letter-spacing: -1px;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ContentDescription = styled.p`
  font-size: 1.1rem;
  color: #64748b;
  line-height: 1.8;
  max-width: 900px;
  margin: 0 auto;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Section = styled.section`
  margin-bottom: 60px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const SectionHeader = styled.div`
  margin-bottom: 40px;
`;

const SectionTitle = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 12px;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;

  @media (max-width: 768px) {
    font-size: 1.7rem;
  }
`;

const SectionSubtitle = styled.p`
  font-size: 1.05rem;
  color: #64748b;
  margin-top: 8px;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const MethodologyGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const MethodologyCard = styled(motion.div)`
  padding: 30px 28px;
  background: #f8fafc;
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: 16px;
  transition: all 0.3s ease;

  &:hover {
    background: #ffffff;
    border-color: rgba(37, 99, 235, 0.2);
    box-shadow: 0 8px 24px rgba(37, 99, 235, 0.1);
    transform: translateY(-4px);
  }
`;

const CardNumber = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  font-weight: 700;
  color: white;
  margin-bottom: 20px;
  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.2);
`;

const CardTitle = styled.h4`
  font-size: 1.2rem;
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 12px;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const CardDescription = styled.p`
  font-size: 0.95rem;
  color: #64748b;
  line-height: 1.7;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const BenefitsSection = styled.div`
  background: rgba(30, 58, 138, 0.15);
  border: 1px solid rgba(30, 58, 138, 0.3);
  border-radius: 20px;
  padding: 50px 40px;
  margin-top: 60px;
  backdrop-filter: blur(10px);

  @media (max-width: 768px) {
    padding: 40px 25px;
  }
`;

const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  margin-top: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const BenefitCard = styled(motion.div)`
  display: flex;
  align-items: flex-start;
  gap: 18px;
  padding: 28px;
  background: #f8fafc;
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: 16px;
  transition: all 0.3s ease;

  &:hover {
    background: #ffffff;
    border-color: rgba(37, 99, 235, 0.2);
    box-shadow: 0 8px 24px rgba(37, 99, 235, 0.1);
    transform: translateY(-4px);
  }
`;

const BenefitIcon = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: white;
  font-size: 1.3rem;
  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.2);
`;

const BenefitText = styled.div`
  flex: 1;
`;

const BenefitTitle = styled.h5`
  font-size: 1.1rem;
  font-weight: 700;
  color: #0f172a;
  margin: 0 0 6px 0;
  line-height: 1.4;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;

  @media (max-width: 768px) {
    font-size: 1.05rem;
  }
`;

const BenefitDescription = styled.p`
  font-size: 0.9rem;
  color: #64748b;
  margin: 0;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
`;

const CTASection = styled.div`
  margin-top: 60px;
  padding: 50px 40px;
  background: linear-gradient(135deg, rgba(30, 58, 138, 0.9) 0%, rgba(30, 64, 175, 0.9) 100%), 
              url('/insurtech/hero/women_cyber.webp');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 16px 40px rgba(30, 58, 138, 0.3);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.08) 0%, transparent 70%);
  }

  @media (max-width: 768px) {
    padding: 40px 30px;
  }
`;

const CTAContent = styled.div`
  position: relative;
  z-index: 1;
`;

const CTATitle = styled.h3`
  font-size: 2.2rem;
  font-weight: 700;
  color: white;
  margin-bottom: 16px;
  font-family: 'Helvetica Neue', Arial, sans-serif;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const CTAText = styled.p`
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.95);
  margin-bottom: 30px;
  line-height: 1.7;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const CTAButton = styled.button`
  padding: 16px 40px;
  background: white;
  color: #1e3a8a;
  border: none;
  border-radius: 10px;
  font-size: 1.05rem;
  font-weight: 700;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 12px;
  transition: all 0.3s ease;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
    background: #f8f9fa;
  }

  svg {
    transition: transform 0.3s ease;
  }

  &:hover svg:last-child {
    transform: translateX(4px);
  }

  @media (max-width: 768px) {
    padding: 14px 32px;
    font-size: 1rem;
  }
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

const ServiceTitleText = styled.span`
  flex: 1;
  letter-spacing: -0.1px;
`;

const ContentAreaWrapper = styled(motion.div)`
  flex: 1;
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

const CyberSecurityServices = () => {
  const [activeTab, setActiveTab] = useState('red-team');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const services = [
    {
      id: 'red-team',
      icon: <FaUserShield />,
      title: 'Red-team',
      fullTitle: 'Red Team Assessment',
      description: 'Red teaming is a security assessment methodology where a team acts like an adversary, attempting to bypass your defenses and achieve specific objectives. Unlike penetration testing that focuses on vulnerabilities, red teaming mimics the tactics, techniques, and procedures (TTPs) of real-world attackers. This approach provides a more holistic view of your security posture, identifying not just exploitable vulnerabilities but also weaknesses in detection, response, and recovery capabilities.',
      methodology: {
        title: 'Red Teaming Methodology with MITRE ATT&CK Framework',
        subtitle: 'A red team assessment using MITRE ATT&CK typically follows these stages:',
        items: [
          { title: 'Planning and Scoping', desc: 'Define objectives, rules of engagement, and success criteria for the assessment' },
          { title: 'Reconnaissance and Initial Compromise', desc: 'Gather intelligence and establish initial access to the target environment' },
          { title: 'Lateral Movement', desc: 'Navigate through the network to reach high-value targets and test detection capabilities' },
          { title: 'Installation of Tools and C2', desc: 'Deploy persistence mechanisms and establish command and control channels' },
          { title: 'Actions on Objectives', desc: 'Execute mission goals such as data exfiltration or system compromise' }
        ]
      },
      benefits: [
        { title: 'Get a Real Attacker View', desc: 'Experience how actual adversaries would approach your systems' },
        { title: 'Improved Security Posture', desc: 'Identify and fix weaknesses before real attackers exploit them' },
        { title: 'Enhanced Threat Detection', desc: 'Test and improve your security monitoring and response capabilities' },
        { title: 'Proactive Risk Management', desc: 'Stay ahead of threats with actionable intelligence and recommendations' }
      ]
    },
    {
      id: 'app-security',
      icon: <FaLaptopCode />,
      title: 'App-Sec',
      fullTitle: 'Application Security Assessment',
      description: 'An Application Security Assessment (ASA) is a systematic process of identifying, evaluating, and documenting vulnerabilities in software applications. It plays a crucial role in protecting applications from cyberattacks and data breaches. This assessment uses the Open Web Application Security Project (OWASP) Testing Guide methodology to ensure comprehensive coverage of potential security issues.',
      methodology: {
        title: 'OWASP 2023 Methodology',
        subtitle: 'Phases of an OWASP-based Application Security Assessment:',
        items: [
          { title: 'Preparation', desc: 'Define scope, gather requirements, and establish testing parameters' },
          { title: 'Information Gathering', desc: 'Collect data about the application architecture, technologies, and potential entry points' },
          { title: 'Threat Modeling', desc: 'Identify potential threats and attack vectors specific to the application' },
          { title: 'Vulnerability Scanning', desc: 'Use automated tools to discover common security weaknesses' },
          { title: 'Manual Penetration Testing', desc: 'Perform hands-on testing to validate and exploit vulnerabilities' },
          { title: 'Reporting', desc: 'Document findings with risk ratings and detailed remediation recommendations' }
        ]
      },
      benefits: [
        { title: 'Structured Approach', desc: 'Follow industry-standard methodology for comprehensive testing' },
        { title: 'Focus on Threats', desc: 'Prioritize real-world attack vectors that matter most' },
        { title: 'Flexibility', desc: 'Adapt methodology to fit your specific application needs' },
        { title: 'Community Resources', desc: 'Leverage global security community knowledge and tools' }
      ]
    },
    {
      id: 'infrastructure',
      icon: <FaServer />,
      title: 'Infra VAPT',
      fullTitle: 'Infrastructure Vulnerability Assessment & Penetration Testing',
      description: 'An Infrastructure Security Assessment (ISA) is a comprehensive evaluation of an organization\'s IT infrastructure to identify vulnerabilities, security misconfigurations, and potential attack vectors. It plays a crucial role in safeguarding critical systems and data from cyber threats. This assessment draws upon methodologies from frameworks like NIST and penetration testing to provide a robust security posture.',
      methodology: {
        title: 'NIST Framework Methodology',
        subtitle: 'Following a structured approach ensures a thorough and effective ISA aligned with NIST SP 800-30:',
        items: [
          { title: 'Planning and Scoping', desc: 'Identify high-risk assets and prioritize them for comprehensive testing' },
          { title: 'Information Gathering', desc: 'Collect data about network topology, systems, and existing security controls' },
          { title: 'Vulnerability Scanning', desc: 'Identify misconfigurations and vulnerabilities across the entire infrastructure' },
          { title: 'Data Analysis and Reporting', desc: 'Evaluate findings and assess potential impact on the organization' },
          { title: 'Remediation and Follow-up', desc: 'Provide actionable recommendations and ongoing support' }
        ]
      },
      benefits: [
        { title: 'Improved Security Posture', desc: 'Strengthen defenses across your entire IT infrastructure' },
        { title: 'Regulatory Compliance', desc: 'Meet industry standards and regulatory requirements' },
        { title: 'Proactive Risk Management', desc: 'Identify and address risks before they become incidents' },
        { title: 'Enhanced Decision-making', desc: 'Make informed security investments based on real data' }
      ]
    },
    {
      id: 'cyber-forensic',
      icon: <FaSearch />,
      title: 'Forensics',
      fullTitle: 'Cyber Forensic Assessment',
      description: 'A Cyber forensic assessment is a systematic investigation conducted to identify, collect, analyze, and preserve digital evidence in the aftermath of a cyber security incident. This process is crucial for legal proceedings, determining the root cause of the incident, and implementing effective mitigation strategies. The National Institute of Standards and Technology (NIST) CyberSecurity Framework provides a methodology that can be effectively applied to cyber forensic assessments.',
      methodology: {
        title: 'NIST Framework Core Functions',
        subtitle: 'The NIST Cybersecurity Framework outlines five core functions:',
        items: [
          { title: 'Identify', desc: 'Develop understanding of systems, assets, data, and capabilities to manage cybersecurity risk' },
          { title: 'Protect', desc: 'Implement appropriate safeguards to ensure delivery of critical services' },
          { title: 'Detect', desc: 'Develop and implement activities to identify cybersecurity events in a timely manner' },
          { title: 'Respond', desc: 'Take action regarding a detected cybersecurity incident to minimize impact' },
          { title: 'Recover', desc: 'Maintain resilience plans and restore capabilities impaired during incidents' }
        ]
      },
      benefits: [
        { title: 'Structured Approach', desc: 'Follow proven framework for incident investigation' },
        { title: 'Focus on Threats', desc: 'Concentrate on actual security events and their impact' },
        { title: 'Flexibility', desc: 'Adapt methodology to different types of incidents' },
        { title: 'Community Resources', desc: 'Leverage industry best practices and tools' }
      ]
    }
  ];

  const currentService = services.find(s => s.id === activeTab);

  return (
    <PageContainer>
      <Helmet>
        <title>Cybersecurity Services - TransAsia Soft Tech</title>
        <meta name="description" content="Comprehensive cybersecurity assessment and training services including Red Team, Application Security, Infrastructure Security, and more." />
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
          <HeroTitle>Cybersecurity Services</HeroTitle>
          <HeroSubtitle>
            Comprehensive security assessments and training programs designed to protect your organization from evolving cyber threats
          </HeroSubtitle>
        </HeroContent>
      </HeroSection>

      <ServicesLayout>

        <ContentAreaWrapper>
          <AnimatePresence mode="wait">
            {currentService && (
              <TabContent
                key={currentService.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
              <ContentHeader>
                <ContentIcon>{currentService.icon}</ContentIcon>
                <ContentTitle>{currentService.fullTitle}</ContentTitle>
                <ContentDescription>{currentService.description}</ContentDescription>
              </ContentHeader>

              <Section>
                <SectionHeader>
                  <SectionTitle>{currentService.methodology.title}</SectionTitle>
                  <SectionSubtitle>{currentService.methodology.subtitle}</SectionSubtitle>
                </SectionHeader>
                <MethodologyGrid>
                  {currentService.methodology.items.map((item, idx) => (
                    <MethodologyCard
                      key={idx}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.08 }}
                    >
                      <CardNumber>{idx + 1}</CardNumber>
                      <CardTitle>{item.title}</CardTitle>
                      <CardDescription>{item.desc}</CardDescription>
                    </MethodologyCard>
                  ))}
                </MethodologyGrid>
              </Section>

              <BenefitsSection>
                <SectionTitle>Key Benefits</SectionTitle>
                <BenefitsGrid>
                  {currentService.benefits.map((benefit, idx) => (
                    <BenefitCard
                      key={idx}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      <BenefitIcon>
                        <FaCheckCircle />
                      </BenefitIcon>
                      <BenefitText>
                        <BenefitTitle>{benefit.title}</BenefitTitle>
                        <BenefitDescription>{benefit.desc}</BenefitDescription>
                      </BenefitText>
                    </BenefitCard>
                  ))}
                </BenefitsGrid>
              </BenefitsSection>

              <CTASection>
                <CTAContent>
                  <CTATitle>Ready to Get Started?</CTATitle>
                  <CTAText>
                    Contact us today for a free consultation and learn how we can help secure your organization with our {currentService.fullTitle} service.
                  </CTAText>
                  <CTAButton>
                    <FaRocket /> Request Assessment <FaArrowRight />
                  </CTAButton>
                </CTAContent>
              </CTASection>
            </TabContent>
          )}
        </AnimatePresence>
        </ContentAreaWrapper>
      </ServicesLayout>
    </PageContainer>
  );
};

export default CyberSecurityServices;



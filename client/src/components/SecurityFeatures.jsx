import React from 'react';
import styled from 'styled-components';
import { 
  FaShieldAlt, 
  FaLock, 
  FaUserShield, 
  FaServer,
  FaChartLine,
  FaExclamationTriangle,
  FaCheckCircle,
  FaCloudUploadAlt
} from 'react-icons/fa';

const FeaturesContainer = styled.section`
  padding: 24px 0 80px 0;
  background: url('/insurtech/hero/hero_1.webp') center/cover no-repeat;
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  margin: -20px 0;
  padding: 40px 0 100px 0;

  /* Create seamless continuation effect */
  &::before {
    content: '';
    position: absolute;
    top: -50px;
    left: -50px;
    right: -50px;
    bottom: -50px;
    background: url('/insurtech/hero/hero_1.webp') center/cover no-repeat;
    z-index: -1;
  }

  /* Add subtle gradient overlay for better text readability */
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
    z-index: 0;
  }

  @media (max-width: 768px) {
    padding: 30px 0 80px 0;
    margin: -10px 0;
  }
`;


const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 60px;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #1e3a8a;
  margin-bottom: 12px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.1rem;
  color: #6c757d;
  max-width: 700px;
  margin: 0 auto;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  margin-bottom: 60px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 25px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const FeatureCard = styled.div`
  background: ${props => {
    const blueCards = [0, 2, 5, 7]; // CRO Platform, GRC, Vulnerability Assessment, Risk Transfer
    return blueCards.includes(props.index) ? '#1e3a8a' : '#ffffff';
  }};
  color: ${props => {
    const blueCards = [0, 2, 5, 7];
    return blueCards.includes(props.index) ? '#ffffff' : '#212529';
  }};
  border-radius: 12px;
  padding: 35px 25px;
  border: 1px solid ${props => {
    const blueCards = [0, 2, 5, 7];
    return blueCards.includes(props.index) ? '#1e3a8a' : '#e5e7eb';
  }};
  transition: all 0.3s ease;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 24px rgba(30, 58, 138, 0.15);
    border-color: #1e3a8a;
  }

  @media (max-width: 768px) {
    padding: 30px 20px;
  }
`;

const IconWrapper = styled.div`
  width: 70px;
  height: 70px;
  margin: 0 auto 20px;
  border-radius: 50%;
  background: ${props => {
    const blueCards = [0, 2, 5, 7];
    return blueCards.includes(props.index) ? 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)' : 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%)';
  }};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: ${props => {
    const blueCards = [0, 2, 5, 7];
    return blueCards.includes(props.index) ? '#1e3a8a' : 'white';
  }};
  transition: all 0.3s ease;

  ${FeatureCard}:hover & {
    transform: scale(1.1) rotate(5deg);
    box-shadow: 0 8px 20px rgba(30, 58, 138, 0.3);
  }
`;

const FeatureTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: ${props => {
    const blueCards = [0, 2, 5, 7];
    return blueCards.includes(props.index) ? '#ffffff' : '#212529';
  }};
  margin-bottom: 12px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const FeatureDescription = styled.p`
  font-size: 0.95rem;
  color: ${props => {
    const blueCards = [0, 2, 5, 7];
    return blueCards.includes(props.index) ? 'rgba(255, 255, 255, 0.9)' : '#6c757d';
  }};
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const ThreatProtectionSection = styled.div`
  background: linear-gradient(135deg, rgba(30, 58, 138, 0.65) 0%, rgba(30, 64, 175, 0.65) 100%), url('/insurtech/hero/women_cyber.webp');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 16px;
  padding: 50px 40px;
  color: white;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 40px 30px;
  }
`;

const ThreatContent = styled.div`
  position: relative;
  z-index: 1;
  text-align: center;
`;

const ThreatTitle = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 16px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

const ThreatDescription = styled.p`
  font-size: 1.1rem;
  margin-bottom: 20px;
  opacity: 0.95;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 15px;
  }
`;

const ThreatHighlight = styled.p`
  font-size: 1.2rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 40px;
  opacity: 1;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  letter-spacing: 0.5px;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 30px;
  }
`;

const ThreatGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  max-width: 900px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const ThreatItem = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  padding: 30px 20px;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.15);
    transform: translateY(-5px);
  }
`;

const ThreatIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 15px;
  color: #ffffff;
`;

const ThreatLabel = styled.div`
  font-size: 1rem;
  font-weight: 600;
  color: #ffffff;

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
`;

const ThreatValue = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: #ffffff;
  margin-top: 8px;

  @media (max-width: 768px) {
    font-size: 1.7rem;
  }
`;


const SecurityFeatures = () => {
  const features = [
    {
      icon: <FaShieldAlt />,
      title: 'CRO Platform',
      description: 'Cyber Risk Quantification prevention for informed decision making'
    },
    {
      icon: <FaLock />,
      title: 'vCISO',
      description: 'Virtual CISO leadership and guidance'
    },
    {
      icon: <FaUserShield />,
      title: 'GRC',
      description: 'Governance, Risk & Compliance frameworks'
    },
    {
      icon: <FaServer />,
      title: 'OT Security',
      description: 'Protecting Operational Technology environments'
    },
    {
      icon: <FaChartLine />,
      title: 'Risk Management',
      description: 'Identify assess, and mitigate cyber risks'
    },
    {
      icon: <FaExclamationTriangle />,
      title: 'Vulnerability Assessment',
      description: 'Identify assess, and mitigate cyber risks'
    },
    {
      icon: <FaCheckCircle />,
      title: 'Compliance',
      description: 'Cyber insapllance with industry prizentorns'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Risk Transfer',
      description: 'Cyber insurance and financial proteciall'
    }
  ];

  const threats = [
    {
      icon: <FaShieldAlt />,
      label: 'Threats Blocked',
      value: '10M+'
    },
    {
      icon: <FaExclamationTriangle />,
      label: 'Security Incidents',
      value: '0'
    },
    {
      icon: <FaCheckCircle />,
      label: 'Uptime',
      value: '99.9%'
    }
  ];

  return (
    <FeaturesContainer>
      <Container>
        <SectionHeader>
          <Title>Comprehensive Cybersecurity Solutions</Title>
          <Subtitle>
            Enterprise-grade security features designed to protect your business from evolving cyber threats
          </Subtitle>
        </SectionHeader>

        <FeaturesGrid>
          {features.map((feature, index) => (
            <FeatureCard key={index} index={index}>
              <IconWrapper index={index}>
                {feature.icon}
              </IconWrapper>
              <FeatureTitle index={index}>{feature.title}</FeatureTitle>
              <FeatureDescription index={index}>{feature.description}</FeatureDescription>
            </FeatureCard>
          ))}
        </FeaturesGrid>

        <ThreatProtectionSection>
          <ThreatContent>
            <ThreatTitle>Real-Time Threat Intelligence</ThreatTitle>
            <ThreatDescription>
              Our advanced security platform continuously monitors and protects your infrastructure against cyber threats
            </ThreatDescription>
            <ThreatHighlight>
              Optimized risk transfer solutions
            </ThreatHighlight>

            <ThreatGrid>
              {threats.map((threat, index) => (
                <ThreatItem key={index}>
                  <ThreatIcon>{threat.icon}</ThreatIcon>
                  <ThreatLabel>{threat.label}</ThreatLabel>
                  <ThreatValue>{threat.value}</ThreatValue>
                </ThreatItem>
              ))}
            </ThreatGrid>
          </ThreatContent>
        </ThreatProtectionSection>
      </Container>
    </FeaturesContainer>
  );
};

export default SecurityFeatures;


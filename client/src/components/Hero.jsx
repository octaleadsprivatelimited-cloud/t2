import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaArrowRight, FaShieldAlt, FaLock, FaNetworkWired } from 'react-icons/fa';

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
`;

const pulse = keyframes`
  0%, 100% { opacity: 0.5; }
  50% { opacity: 0.8; }
`;


const HeroContainer = styled.section`
  min-height: 90vh;
  display: flex;
  align-items: center;
  background: url('/insurtech/hero/hero-main.webp') center/cover no-repeat;
  padding: 140px 0 100px;
  position: relative;
  overflow: hidden;
  margin: -20px 0;
  padding: 160px 0 120px;

  /* Create seamless continuation effect */
  &::before {
    content: '';
    position: absolute;
    top: -50px;
    left: -50px;
    right: -50px;
    bottom: -50px;
    background: url('/insurtech/hero/hero-main.webp') center/cover no-repeat;
    z-index: -1;
  }

  /* Add subtle overlay for better text readability */
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.1) 100%);
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

const CybercatImage = styled.img`
  position: absolute;
  width: ${props => props.size || '300px'};
  height: auto;
  opacity: 0.6;
  z-index: 1;
  top: 65%;
  right: 5%;
  transform: translateY(-50%);
  
  @media (max-width: 1024px) {
    width: 250px;
    right: 3%;
    top: 70%;
  }
  
  @media (max-width: 768px) {
    width: 200px;
    opacity: 0.5;
    position: relative !important;
    top: auto !important;
    right: auto !important;
    transform: none !important;
    display: block;
    margin: 30px auto 0 auto;
  }
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 80px;
  width: 100%;

  @media (max-width: 1024px) {
    padding: 0 60px;
  }

  @media (max-width: 768px) {
    padding: 0 30px;
  }
`;

const HeroContent = styled.div`
  max-width: 900px;
  position: relative;
  z-index: 2;
`;

const Title = styled.h1`
  font-size: 4.5rem;
  font-weight: 400;
  line-height: 1.15;
  color: #ffffff !important;
  -webkit-text-fill-color: #ffffff !important;
  background: none !important;
  -webkit-background-clip: unset !important;
  background-clip: unset !important;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
  margin-bottom: 32px;
  font-family: 'Helvetica Neue', Arial, sans-serif;
  letter-spacing: -1px;

  @media (max-width: 1200px) {
    font-size: 3.8rem;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 24px;
  }
`;

const Description = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  color: #1e3a8a;
  margin-bottom: 48px;
  max-width: 800px;
  font-weight: 400;
  background: rgba(255, 255, 255, 0.95);
  padding: 32px 40px;
  border-radius: 12px;
  border: 1px solid rgba(30, 58, 138, 0.1);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(20px);

  @media (max-width: 768px) {
    font-size: 1.15rem;
    margin-bottom: 40px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 80px;

  @media (max-width: 768px) {
    gap: 12px;
    justify-content: center;
  }
`;

const PrimaryButton = styled.button`
  padding: 16px 32px;
  background: linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%);
  color: #ffffff;
  border: 2px solid #ffffff;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  transition: all 0.3s ease;
  font-family: 'Helvetica Neue', Arial, sans-serif;
  letter-spacing: 0.3px;
  box-shadow: 0 4px 12px rgba(30, 58, 138, 0.4);

  &:hover {
    background: #1e40af;
  }

  &:active {
    transform: translateY(1px);
  }

  @media (max-width: 768px) {
    padding: 14px 24px;
    font-size: 0.9rem;
  }
`;

const SecondaryButton = styled.button`
  padding: 16px 32px;
  background: rgba(255, 255, 255, 0.9);
  color: #1e3a8a;
  border: 2px solid #1e3a8a;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: 'Helvetica Neue', Arial, sans-serif;
  letter-spacing: 0.3px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);

  &:hover {
    background: #1e3a8a;
    color: #ffffff;
  }

  &:active {
    transform: translateY(1px);
  }

  @media (max-width: 768px) {
    padding: 14px 24px;
    font-size: 0.9rem;
  }
`;

const StatsContainer = styled.div`
  display: flex;
  gap: 80px;
  padding-top: 40px;
  border-top: 1px solid #dee2e6;

  @media (max-width: 768px) {
    gap: 20px;
    justify-content: space-between;
    flex-wrap: nowrap;
    overflow-x: auto;
  }
`;

const StatItem = styled.div`
  text-align: left;
  
  @media (max-width: 768px) {
    text-align: center;
    flex-shrink: 0;
  }
`;

const StatNumber = styled.div`
  font-size: 3.5rem;
  font-weight: 300;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
  margin-bottom: 8px;
  line-height: 1;
  font-family: 'Helvetica Neue', Arial, sans-serif;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const StatLabel = styled.div`
  font-size: 1rem;
  color: #6c757d;
  font-weight: 400;
  letter-spacing: 0.3px;
  
  @media (max-width: 768px) {
    font-size: 0.75rem;
  }
`;

const Hero = () => {
  return (
    <HeroContainer>
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
      
      <Container>
        <HeroContent>
          <Title>
            Quantifying Cyber Risk for the Board of Directors
          </Title>
          
          <Description>
            World Leaders in Cyber Risk Quantification providing a Robust Risk Management Framework Executive Dashboard - Justifying Cyber Spend
          </Description>

          <ButtonGroup>
            <PrimaryButton>
              Get Started <FaArrowRight />
            </PrimaryButton>
          </ButtonGroup>

          {/* Cybercat Floating Image */}
          <CybercatImage 
            src="/insurtech/cer/cybercat.webp" 
            alt="Cybercat" 
            size="400px"
            loading="eager"
            decoding="async"
            fetchpriority="high"
            duration="10s" 
            delay="0.5s"
          />

          <StatsContainer>
            <StatItem>
              <StatNumber>19+</StatNumber>
              <StatLabel>Cyber Experts</StatLabel>
            </StatItem>
            <StatItem>
              <StatNumber>125+</StatNumber>
              <StatLabel>Years Experience</StatLabel>
            </StatItem>
            <StatItem>
              <StatNumber>99.9%</StatNumber>
              <StatLabel>Protection Rate</StatLabel>
            </StatItem>
          </StatsContainer>
        </HeroContent>
      </Container>
    </HeroContainer>
  );
};

export default Hero;

import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaGlobe, FaUsers, FaAward, FaRocket, FaCheckCircle, FaChartLine, FaLock, FaSearch, FaCog, FaEye, FaBullseye, FaNetworkWired } from 'react-icons/fa';

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
  min-height: 60vh;
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #4facfe 75%, #00f2fe 100%);
  padding: 100px 0 60px;
  position: relative;
  overflow: hidden;

  /* Animated gradient overlay */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(30, 58, 138, 0.1) 0%, rgba(37, 99, 235, 0.1) 100%);
    z-index: 0;
  }

  /* Cybersecurity grid pattern */
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background-image: 
      linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
    background-size: 50px 50px;
    z-index: 0;
  }

  @media (max-width: 768px) {
    min-height: 50vh;
    padding: 80px 0 50px;
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

const Title = styled.h1`
  font-size: 4.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, #ffffff 0%, #f0f0f0 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 32px;
  font-family: 'Helvetica Neue', Arial, sans-serif;
  letter-spacing: -1px;
  line-height: 1.15;
  max-width: 900px;
  text-shadow: 0 4px 20px rgba(255, 255, 255, 0.3);
  position: relative;
  z-index: 1;

  @media (max-width: 1200px) {
    font-size: 3.8rem;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 24px;
  }
`;

const Subtitle = styled.p`
  font-size: 1.35rem;
  color: rgba(255, 255, 255, 0.95);
  line-height: 1.7;
  max-width: 800px;
  position: relative;
  z-index: 1;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  margin-bottom: 48px;
  font-weight: 300;
  font-family: 'Helvetica Neue', Arial, sans-serif;

  @media (max-width: 768px) {
    font-size: 1.15rem;
    margin-bottom: 40px;
  }
`;

const Section = styled.section`
  padding: 0 40px 80px 40px;
  max-width: 1200px;
  margin: 0 auto;

  &:first-of-type {
    padding-top: 0;
  }

  @media (max-width: 768px) {
    padding: 0 20px 60px 20px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 16px;
  color: #1e3a8a;
  font-family: 'Helvetica Neue', Arial, sans-serif;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SectionSubtitle = styled.p`
  font-size: 1.1rem;
  color: #6c757d;
  text-align: center;
  margin-bottom: 60px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 40px;
  }
`;

const StorySection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  margin-bottom: 80px;
  padding: 50px;
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
  border-radius: 24px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 40px;
    padding: 40px 30px;
  }
`;

const StoryImage = styled.div`
  width: 100%;
  height: 400px;
  border-radius: 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 12px 32px rgba(102, 126, 234, 0.4);
  position: relative;
  overflow: hidden;
  padding: 40px;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.2) 0%, transparent 70%);
  }

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    position: relative;
    z-index: 1;
    filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2));
  }

  @media (max-width: 768px) {
    height: 300px;
    padding: 30px;
  }
`;

const StoryContent = styled.div``;

const StoryTitle = styled.h3`
  font-size: 2.2rem;
  font-weight: 700;
  color: #1e3a8a;
  margin-bottom: 24px;
  font-family: 'Helvetica Neue', Arial, sans-serif;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const StoryText = styled.p`
  font-size: 1.05rem;
  color: #495057;
  line-height: 1.8;
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  margin: 60px 0 80px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 25px;
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const StatCard = styled(motion.div)`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  padding: 40px 30px;
  border-radius: 20px;
  box-shadow: 0 8px 24px rgba(102, 126, 234, 0.3);
  text-align: center;
  transition: all 0.3s ease;
  color: white;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, transparent 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 16px 40px rgba(102, 126, 234, 0.4);

    &::before {
      opacity: 1;
    }
  }

  &:nth-child(1) {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  }

  &:nth-child(2) {
    background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  }

  &:nth-child(3) {
    background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  }

  &:nth-child(4) {
    background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
  }

  @media (max-width: 768px) {
    padding: 35px 25px;
  }
`;

const StatIcon = styled.div`
  font-size: 3rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 20px;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const StatNumber = styled.div`
  font-size: 2.8rem;
  font-weight: 700;
  color: white;
  margin-bottom: 12px;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    font-size: 2.4rem;
  }
`;

const StatLabel = styled.div`
  font-size: 1.05rem;
  color: rgba(255, 255, 255, 0.95);
  font-weight: 600;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const MissionVisionGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  margin-bottom: 80px;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

const MissionCard = styled(motion.div)`
  background: #ffffff;
  border: 2px solid #e9ecef;
  padding: 50px 40px;
  border-radius: 20px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
  border-top: 5px solid #1e3a8a;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 16px 40px rgba(30, 58, 138, 0.15);
  }

  @media (max-width: 768px) {
    padding: 40px 30px;
  }
`;

const CardIcon = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 16px;
  background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: white;
  margin-bottom: 24px;
  box-shadow: 0 8px 20px rgba(30, 58, 138, 0.25);

  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
    font-size: 1.7rem;
  }
`;

const CardTitle = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  color: #1e3a8a;
  margin-bottom: 20px;
  font-family: 'Helvetica Neue', Arial, sans-serif;

  @media (max-width: 768px) {
    font-size: 1.7rem;
  }
`;

const CardText = styled.p`
  font-size: 1.05rem;
  color: #495057;
  line-height: 1.8;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 25px;
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const ValueCard = styled(motion.div)`
  background: #ffffff;
  border: 2px solid #e9ecef;
  padding: 35px 30px;
  border-radius: 16px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;
  text-align: center;

  &:hover {
    transform: translateY(-6px);
    border-color: #1e3a8a;
    box-shadow: 0 12px 32px rgba(30, 58, 138, 0.15);
  }

  @media (max-width: 768px) {
    padding: 30px 25px;
  }
`;

const ValueIcon = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: rgba(30, 58, 138, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: #1e3a8a;
  margin: 0 auto 20px;
  transition: all 0.3s ease;

  ${ValueCard}:hover & {
    background: #1e3a8a;
    color: #ffffff;
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
    font-size: 1.7rem;
  }
`;

const ValueTitle = styled.h4`
  font-size: 1.2rem;
  font-weight: 700;
  color: #212529;
  margin-bottom: 12px;
  line-height: 1.4;
  font-family: 'Helvetica Neue', Arial, sans-serif;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const ValueDescription = styled.p`
  font-size: 0.95rem;
  color: #6c757d;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const TimelineSection = styled.div`
  position: relative;
  padding: 40px 0;
  
  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 3px;
    background: linear-gradient(to bottom, #1e3a8a 0%, #1e40af 100%);
    transform: translateX(-50%);

    @media (max-width: 768px) {
      left: 20px;
    }
  }
`;

const TimelineItem = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  margin-bottom: 60px;
  position: relative;

  &:nth-child(even) {
    direction: rtl;
    
    & > * {
      direction: ltr;
    }
  }

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding-left: 60px;
    direction: ltr !important;
  }
`;

const TimelineDot = styled.div`
  position: absolute;
  left: 50%;
  top: 0;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #1e3a8a;
  transform: translateX(-50%);
  z-index: 1;
  box-shadow: 0 0 0 5px #ffffff, 0 0 0 8px #1e3a8a;

  @media (max-width: 768px) {
    left: 20px;
  }
`;

const TimelineContent = styled.div`
  background: #ffffff;
  border: 2px solid #e9ecef;
  padding: 35px 30px;
  border-radius: 16px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;

  &:hover {
    border-color: #1e3a8a;
    box-shadow: 0 12px 32px rgba(30, 58, 138, 0.15);
    transform: translateY(-4px);
  }

  @media (max-width: 768px) {
    padding: 30px 25px;
  }
`;

const TimelineYear = styled.div`
  display: inline-block;
  font-size: 1.1rem;
  font-weight: 700;
  color: #ffffff;
  background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%);
  padding: 8px 20px;
  border-radius: 20px;
  margin-bottom: 16px;
  box-shadow: 0 4px 12px rgba(30, 58, 138, 0.25);
`;

const TimelineTitle = styled.h4`
  font-size: 1.4rem;
  font-weight: 700;
  color: #212529;
  margin-bottom: 12px;
  font-family: 'Helvetica Neue', Arial, sans-serif;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const TimelineText = styled.p`
  font-size: 1rem;
  color: #6c757d;
  line-height: 1.7;

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
`;

const WhyUsSection = styled.div`
  background: linear-gradient(135deg, #e7f1ff 0%, #f0f7ff 100%);
  padding: 60px 50px;
  border-radius: 24px;
  margin-bottom: 80px;

  @media (max-width: 768px) {
    padding: 40px 30px;
  }
`;

const WhyUsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-top: 40px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 25px;
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const WhyUsCard = styled(motion.div)`
  background: #ffffff;
  border: 2px solid #dbeafe;
  padding: 30px 25px;
  border-radius: 16px;
  text-align: center;
  transition: all 0.3s ease;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);

  &:hover {
    transform: translateY(-6px);
    border-color: #1e3a8a;
    box-shadow: 0 12px 28px rgba(30, 58, 138, 0.15);
  }
`;

const WhyUsIcon = styled.div`
  width: 65px;
  height: 65px;
  border-radius: 50%;
  background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  color: white;
  margin: 0 auto 18px;
  box-shadow: 0 6px 16px rgba(30, 58, 138, 0.25);

  @media (max-width: 768px) {
    width: 55px;
    height: 55px;
    font-size: 1.5rem;
  }
`;

const WhyUsTitle = styled.h4`
  font-size: 1.1rem;
  font-weight: 700;
  color: #212529;
  line-height: 1.4;
  font-family: 'Helvetica Neue', Arial, sans-serif;

  @media (max-width: 768px) {
    font-size: 1.05rem;
  }
`;

const About = () => {
  const stats = [
    { icon: <FaUsers />, number: '19+', label: 'Cyber Experts' },
    { icon: <FaGlobe />, number: '4', label: 'Countries' },
    { icon: <FaShieldAlt />, number: '125+', label: 'Years Experience' },
    { icon: <FaAward />, number: '99.9%', label: 'Protection Rate' }
  ];

  const values = [
    {
      icon: <FaShieldAlt />,
      title: 'Security First',
      description: 'We prioritize security in everything we do, ensuring our clients\' data and systems are always protected'
    },
    {
      icon: <FaRocket />,
      title: 'Innovation',
      description: 'Continuously pushing boundaries with cutting-edge technology and creative solutions'
    },
    {
      icon: <FaUsers />,
      title: 'Customer Success',
      description: 'Our clients\' success is our success. We go above and beyond to deliver exceptional results'
    },
    {
      icon: <FaCheckCircle />,
      title: 'Integrity',
      description: 'Operating with transparency, honesty, and ethical practices in all our business dealings'
    },
    {
      icon: <FaChartLine />,
      title: 'Excellence',
      description: 'Committed to delivering the highest quality services and maintaining industry-leading standards'
    },
    {
      icon: <FaGlobe />,
      title: 'Global Impact',
      description: 'Making the digital world safer for businesses and individuals across the globe'
    }
  ];

  const whyUs = [
    { icon: <FaBullseye />, title: 'Unified Dashboard of Entire Business Risk' },
    { icon: <FaCheckCircle />, title: 'Complete Control of Vulnerability Lifecycle' },
    { icon: <FaLock />, title: 'Advanced Algorithm to prevent Zero-Day Ransomware Attack' },
    { icon: <FaSearch />, title: 'Find Organizations List Posture from Industrial Data Leaks' },
    { icon: <FaCog />, title: 'Process Oriented & Consistent Quality' },
    { icon: <FaEye />, title: '360 degree of Risk from Hackers point of View' }
  ];

  const timeline = [
    {
      year: '2015',
      title: 'Company Founded',
      description: 'TransAsia Technologies was established with a vision to revolutionize cybersecurity in the Asia-Pacific region'
    },
    {
      year: '2017',
      title: 'First Major Client',
      description: 'Secured partnership with Fortune 500 financial institution, marking our entry into enterprise security'
    },
    {
      year: '2019',
      title: 'Regional Expansion',
      description: 'Opened offices across India, Bangladesh, UAE, and Sri Lanka to better serve our growing client base'
    },
    {
      year: '2021',
      title: 'AI Platform Launch',
      description: 'Launched our revolutionary AI-powered threat detection platform, setting new industry standards'
    },
    {
      year: '2023',
      title: 'ISO 27001 Certified',
      description: 'Achieved ISO 27001 and SOC 2 Type II certifications, demonstrating our commitment to security excellence'
    },
    {
      year: '2025',
      title: 'Industry Leader',
      description: 'Named Cybersecurity Company of the Year, serving enterprises across multiple industries'
    }
  ];

  return (
    <PageContainer>
      <Helmet>
        <title>About Us - TransAsia Soft Tech</title>
        <meta name="description" content="Learn about TransAsia's journey, mission, vision, and commitment to cybersecurity excellence" />
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
          <Title>About TransAsia</Title>
          <Subtitle>
            Leading cybersecurity innovator protecting businesses with cutting-edge technology and expert services since 2015
          </Subtitle>
        </HeroContent>
      </HeroSection>

      {/* Our Story */}
      <Section>
        <StorySection>
          <StoryImage>
            <img src="/insurtech/top_logo.png" alt="TransAsia Tech Logo" />
          </StoryImage>
          <StoryContent>
            <StoryTitle>Our Story</StoryTitle>
            <StoryText>
              TransAsia Soft Tech Provides Intelligent systems that address untapped areas of Management Risk 
              and also assist institutions to adapt with changing trends in technology to stay ahead of competition 
              thus enabling them to meet customer needs to derive higher business volumes and profitability and 
              focus on their core business services.
            </StoryText>
            <StoryText>
              Core system is specifically designed by industry experts with 125 years of collective experience 
              in risk finance, insurance process and Cybercat. Academically researched robust modelling to assess 
              and price cyber risks which are dynamic in nature considering global cyber incidents.
            </StoryText>
          </StoryContent>
        </StorySection>

        {/* Stats */}
        <StatsGrid>
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <StatIcon>{stat.icon}</StatIcon>
              <StatNumber>{stat.number}</StatNumber>
              <StatLabel>{stat.label}</StatLabel>
            </StatCard>
          ))}
        </StatsGrid>

        {/* Why Us */}
        <SectionTitle>Why Choose Us?</SectionTitle>
        <SectionSubtitle>
          What sets us apart in the cybersecurity landscape
        </SectionSubtitle>
        <WhyUsSection>
          <WhyUsGrid>
            {whyUs.map((item, index) => (
              <WhyUsCard
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
              >
                <WhyUsIcon>{item.icon}</WhyUsIcon>
                <WhyUsTitle>{item.title}</WhyUsTitle>
              </WhyUsCard>
            ))}
          </WhyUsGrid>
        </WhyUsSection>

        {/* Mission & Vision */}
        <SectionTitle>Mission & Vision</SectionTitle>
        <SectionSubtitle>
          Guiding principles that drive our commitment to cybersecurity excellence
        </SectionSubtitle>
        <MissionVisionGrid>
          <MissionCard
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <CardIcon><FaBullseye /></CardIcon>
            <CardTitle>Our Vision</CardTitle>
            <CardText>
              To be the leader in building a Secure and Resilient future for organizations by:<br/><br/>
              • Empowering organizations to thrive through unwavering security<br/>
              • Building a future where resilient security drives organizational growth<br/>
              • Securing business success through innovative and cyber resilient solutions
            </CardText>
          </MissionCard>
          <MissionCard
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <CardIcon><FaRocket /></CardIcon>
            <CardTitle>Our Mission</CardTitle>
            <CardText>
              At TransAsia Soft Tech Pvt. Ltd, our mission is to:<br/><br/>
              • Quantifying Cyber exposures to enable Boards in making balance sheets resilient to Cyber Risks<br/>
              • Empowering businesses to achieve their full potential through proactive vulnerability management<br/>
              • Transforming security into a strategic asset for businesses, driving growth and resilience
            </CardText>
          </MissionCard>
        </MissionVisionGrid>

        {/* Values */}
        <SectionTitle>Our Core Values</SectionTitle>
        <SectionSubtitle>
          The principles that guide our actions and define who we are
        </SectionSubtitle>
        <ValuesGrid>
          {values.map((value, index) => (
            <ValueCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
            >
              <ValueIcon>{value.icon}</ValueIcon>
              <ValueTitle>{value.title}</ValueTitle>
              <ValueDescription>{value.description}</ValueDescription>
            </ValueCard>
          ))}
        </ValuesGrid>
      </Section>

      {/* Timeline */}
      <Section>
        <SectionTitle>Our Journey</SectionTitle>
        <SectionSubtitle>
          Key milestones in our evolution as a cybersecurity leader
        </SectionSubtitle>
        <TimelineSection>
          {timeline.map((item, index) => (
            <TimelineItem
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <TimelineDot />
              <div></div>
              <TimelineContent>
                <TimelineYear>{item.year}</TimelineYear>
                <TimelineTitle>{item.title}</TimelineTitle>
                <TimelineText>{item.description}</TimelineText>
              </TimelineContent>
            </TimelineItem>
          ))}
        </TimelineSection>
      </Section>
    </PageContainer>
  );
};

export default About;



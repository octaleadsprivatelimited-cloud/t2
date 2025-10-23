import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaUniversity, 
  FaTruck, 
  FaLaptop, 
  FaGamepad, 
  FaCogs, 
  FaPlane, 
  FaBuilding, 
  FaFlask, 
  FaOilCan, 
  FaBroadcastTower 
} from 'react-icons/fa';

const PresenceContainer = styled.section`
  padding: 80px 0;
  background: linear-gradient(135deg, rgba(240, 247, 255, 0.75) 0%, rgba(255, 255, 255, 0.75) 100%), url('/insurtech/hero/industries_globle.webp');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(255, 255, 255, 0.3);
    z-index: 0;
  }

  @media (max-width: 768px) {
    padding: 50px 0;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 50px;
`;

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  font-weight: 700;
  color: #1e3a8a;
  margin-bottom: 12px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 1.1rem;
  color: #6c757d;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const IndustryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 30px;
  max-width: 1100px;
  margin: 0 auto;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 968px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }

  @media (max-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
`;

const IndustryCard = styled(motion.div)`
  background: #f8f9fa;
  border-radius: 12px;
  padding: 30px 20px;
  border: 1px solid #e9ecef;
  transition: all 0.3s ease;
  text-align: center;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  &:hover {
    background: #ffffff;
    transform: translateY(-4px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
    border-color: #1e3a8a;
  }

  @media (max-width: 768px) {
    padding: 24px 16px;
    gap: 12px;
  }
`;

const IconContainer = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: #1e3a8a;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: white;
  transition: all 0.3s ease;

  ${IndustryCard}:hover & {
    transform: scale(1.1);
    background: #1e40af;
  }

  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
    font-size: 1.7rem;
  }
`;

const IndustryName = styled.h3`
  font-size: 0.95rem;
  font-weight: 600;
  color: #212529;
  margin: 0;
  line-height: 1.3;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
`;

const IndustrialPresence = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const industries = [
    { name: 'BFSI', icon: <FaUniversity /> },
    { name: 'LOGISTICS', icon: <FaTruck /> },
    { name: 'TECHNOLOGY', icon: <FaLaptop /> },
    { name: 'GAMING', icon: <FaGamepad /> },
    { name: 'MANUFACTURING', icon: <FaCogs /> },
    { name: 'AVIATION', icon: <FaPlane /> },
    { name: 'REALTY & INFRA', icon: <FaBuilding /> },
    { name: 'PETROCHEMICAL', icon: <FaFlask /> },
    { name: 'OIL & GAS', icon: <FaOilCan /> },
    { name: 'TELECOM', icon: <FaBroadcastTower /> },
  ];

  return (
    <PresenceContainer ref={ref}>
      <Container>
        <SectionHeader>
          <Title
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Our Industrial Presence
          </Title>
          <Subtitle
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Serving diverse industries with cutting-edge solutions
          </Subtitle>
        </SectionHeader>

        <IndustryGrid>
          {industries.map((industry, index) => (
            <IndustryCard
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <IconContainer>
                {industry.icon}
              </IconContainer>
              <IndustryName>{industry.name}</IndustryName>
            </IndustryCard>
          ))}
        </IndustryGrid>
      </Container>
    </PresenceContainer>
  );
};

export default IndustrialPresence;

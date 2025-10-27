import React from 'react';
import styled from 'styled-components';

const GeographiesContainer = styled.section`
  padding: 100px 0;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.75) 0%, rgba(248, 249, 250, 0.75) 100%), url('/insurtech/hero/worldmap.webp');
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
    padding: 60px 0;
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
  margin-bottom: 60px;
`;

const Title = styled.h2`
  font-size: 2.8rem;
  font-weight: 700;
  color: #1e3a8a;
  margin-bottom: 16px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 768px) {
    font-size: 1.8rem;
    white-space: nowrap;
    overflow: visible;
    text-overflow: unset;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
    white-space: nowrap;
    overflow: visible;
    text-overflow: unset;
  }

  @media (max-width: 360px) {
    font-size: 1.3rem;
    white-space: nowrap;
  }
`;

const Subtitle = styled.p`
  font-size: 1.15rem;
  color: #6c757d;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const GeographyGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  max-width: 1400px;
  margin: 0 auto;

  @media (max-width: 1200px) {
    gap: 15px;
  }

  @media (max-width: 968px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(5, 1fr);
    gap: 8px;
  }

  @media (max-width: 480px) {
    gap: 6px;
  }
`;

const GeographyCard = styled.div`
  background: #ffffff;
  border-radius: 16px;
  padding: 0;
  border: 2px solid #e9ecef;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  cursor: pointer;
  position: relative;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);

  &:hover {
    transform: translateY(-12px) scale(1.02);
    box-shadow: 0 20px 40px rgba(30, 58, 138, 0.2);
    border-color: #1e3a8a;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #1e3a8a 0%, #1e40af 100%);
    transform: scaleX(0);
    transition: transform 0.4s ease;
  }

  &:hover::after {
    transform: scaleX(1);
  }

  @media (max-width: 768px) {
    flex: 0 0 100px;
    max-width: 100px;
  }

  @media (max-width: 480px) {
    flex: 0 0 80px;
    max-width: 80px;
  }
`;

const FlagContainer = styled.div`
  width: 100%;
  height: 150px;
  overflow: hidden;
  position: relative;
  background: linear-gradient(135deg, #f0f7ff 0%, #ffffff 100%);
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: block;
    transition: transform 0.4s ease;
    padding: 8px;
  }

  ${GeographyCard}:hover img {
    transform: scale(1.05);
  }

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(to bottom, transparent 0%, rgba(30, 58, 138, 0.05) 100%);
    z-index: 1;
  }

  @media (max-width: 1200px) {
    height: 130px;
  }

  @media (max-width: 768px) {
    height: 60px;
    
    img {
      padding: 4px;
    }
  }

  @media (max-width: 480px) {
    height: 50px;
    
    img {
      padding: 3px;
    }
  }
`;

const CountryInfo = styled.div`
  padding: 16px 12px;
  text-align: center;
  background: #ffffff;

  @media (max-width: 1200px) {
    padding: 14px 10px;
  }

  @media (max-width: 768px) {
    padding: 6px 2px;
  }

  @media (max-width: 480px) {
    padding: 4px 1px;
  }
`;

const CountryName = styled.h3`
  font-size: 1.1rem;
  font-weight: 700;
  color: #1e3a8a;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
  transition: color 0.3s ease;

  ${GeographyCard}:hover & {
    color: #1e40af;
  }

  @media (max-width: 1200px) {
    font-size: 1rem;
  }

  @media (max-width: 768px) {
    font-size: 0.65rem;
  }

  @media (max-width: 480px) {
    font-size: 0.55rem;
  }
`;

const ComingSoonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  width: 100%;

  @media (max-width: 768px) {
    margin-top: 8px;
  }

  @media (max-width: 480px) {
    margin-top: 6px;
  }
`;

const ComingSoonSection = styled.div`
  text-align: center;
  padding: 6px 16px;
  background: linear-gradient(135deg, rgba(30, 58, 138, 0.05) 0%, rgba(30, 64, 175, 0.05) 100%);
  border-radius: 8px;
  border: 1px dashed rgba(30, 58, 138, 0.2);
  display: inline-block;

  @media (max-width: 768px) {
    padding: 5px 12px;
  }

  @media (max-width: 480px) {
    padding: 4px 10px;
  }
`;

const ComingSoonText = styled.p`
  font-size: 0.75rem;
  font-weight: 600;
  color: #1e3a8a;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
  line-height: 1.4;

  @media (max-width: 768px) {
    font-size: 0.7rem;
  }

  @media (max-width: 480px) {
    font-size: 0.65rem;
    line-height: 1.3;
  }
`;

const Geographies = () => {
  const geographies = [
    {
      name: 'India',
      flag: 'https://flagcdn.com/w640/in.png'
    },
    {
      name: 'Bangladesh',
      flag: 'https://flagcdn.com/w640/bd.png'
    },
    {
      name: 'UAE',
      flag: 'https://flagcdn.com/w640/ae.png'
    },
    {
      name: 'Sri Lanka',
      flag: 'https://flagcdn.com/w640/lk.png'
    },
    {
      name: 'KSA',
      flag: 'https://flagcdn.com/w640/sa.png'
    }
  ];

  return (
    <GeographiesContainer>
      <Container>
        <SectionHeader>
          <Title>
            Expanding Geographies
          </Title>
          <Subtitle>
            Our global presence continues to grow across key markets
          </Subtitle>
        </SectionHeader>

        <GeographyGrid>
          {geographies.map((geography, index) => (
            <GeographyCard key={index}>
              <FlagContainer>
                <img 
                  src={geography.flag} 
                  alt={`${geography.name} flag`}
                  loading="lazy"
                />
              </FlagContainer>
              <CountryInfo>
                <CountryName>{geography.name}</CountryName>
              </CountryInfo>
            </GeographyCard>
          ))}
        </GeographyGrid>

        <ComingSoonWrapper>
          <ComingSoonSection>
            <ComingSoonText>
              Coming Soon in South East Asia, NA & Europe
            </ComingSoonText>
          </ComingSoonSection>
        </ComingSoonWrapper>
      </Container>
    </GeographiesContainer>
  );
};

export default Geographies;

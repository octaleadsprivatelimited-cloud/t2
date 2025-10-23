import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { FaNewspaper, FaCalendar, FaArrowRight, FaShieldAlt, FaLock, FaNetworkWired } from 'react-icons/fa';

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
  background: url('/insurtech/hero/hero_1.webp') center/cover no-repeat;
  padding: 140px 0 100px;
  position: relative;
  overflow: hidden;

  /* Dark overlay for better text readability */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(30, 58, 138, 0.7);
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
  text-align: center;

  @media (max-width: 1024px) {
    padding: 0 60px;
  }

  @media (max-width: 768px) {
    padding: 0 30px;
  }
`;

const Title = styled.h1`
  font-size: 4.5rem;
  font-weight: 400;
  color: #ffffff;
  margin-bottom: 32px;
  font-family: 'Helvetica Neue', Arial, sans-serif;
  letter-spacing: -1px;
  line-height: 1.15;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);

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
  color: rgba(255, 255, 255, 0.9);
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.7;
  font-weight: 300;
  font-family: 'Helvetica Neue', Arial, sans-serif;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 1.15rem;
  }
`;

const Section = styled.section`
  padding: 80px 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const FilterSection = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-bottom: 60px;
  flex-wrap: wrap;
`;

const FilterButton = styled.button`
  padding: 12px 24px;
  border-radius: 24px;
  border: 2px solid ${props => props.active ? 'var(--primary-color)' : 'var(--border-color)'};
  background: ${props => props.active ? 'var(--primary-color)' : 'white'};
  color: ${props => props.active ? 'white' : 'var(--text-secondary)'};
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: var(--primary-color);
    background: ${props => props.active ? 'var(--primary-dark)' : 'var(--bg-tertiary)'};
  }
`;

const PressGrid = styled.div`
  display: grid;
  gap: 40px;
`;

const PressCard = styled(motion(Link))`
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 30px;
  text-decoration: none;
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(30, 64, 175, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 40px rgba(30, 64, 175, 0.2);
  }

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
  }
`;

const PressImage = styled.div`
  background: ${props => props.$hasImage ? '#f8f9fa' : 'var(--gradient-primary)'};
  min-height: ${props => props.$hasImage ? 'auto' : '250px'};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  color: white;
  padding: ${props => props.$hasImage ? '20px' : '0'};
  position: relative;

  img {
    width: 100%;
    height: auto;
    object-fit: contain;
    display: block;
  }

  @media (max-width: 968px) {
    min-height: ${props => props.$hasImage ? 'auto' : '200px'};
    padding: ${props => props.$hasImage ? '15px' : '0'};
  }
`;

const PressContent = styled.div`
  padding: 30px 30px 30px 0;

  @media (max-width: 968px) {
    padding: 30px;
  }
`;

const PressCategory = styled.span`
  display: inline-block;
  background: var(--bg-tertiary);
  color: var(--primary-color);
  padding: 6px 16px;
  border-radius: 16px;
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

const PressTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 12px;
  line-height: 1.3;
`;

const PressDate = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--text-muted);
  font-size: 0.95rem;
  margin-bottom: 16px;

  svg {
    color: var(--primary-color);
  }
`;

const PressExcerpt = styled.p`
  font-size: 1.05rem;
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 24px;
`;

const ReadMoreLink = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #1e3a8a;
  font-weight: 600;
  font-size: 1rem;
  margin-top: auto;
  transition: gap 0.3s ease;

  ${PressCard}:hover & {
    gap: 12px;
  }
`;

const MediaSection = styled.div`
  background: white;
  padding: 60px 40px;
  border-radius: 24px;
  box-shadow: 0 4px 20px rgba(30, 64, 175, 0.1);
  margin-top: 60px;
`;

const MediaTitle = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 40px;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const MediaGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
`;

const MediaCard = styled(motion.div)`
  text-align: center;
  padding: 30px;
  background: var(--bg-tertiary);
  border-radius: 16px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    background: white;
    box-shadow: 0 8px 24px rgba(30, 64, 175, 0.15);
  }
`;

const MediaLogo = styled.div`
  font-size: 2.5rem;
  font-weight: 400;
  color: var(--primary-color);
  margin-bottom: 16px;
`;

const MediaName = styled.h4`
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 8px;
`;

const MediaDescription = styled.p`
  font-size: 0.95rem;
  color: var(--text-secondary);
`;

const PressRelease = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const pressReleases = [
    {
      id: 1,
      category: 'Product Launch',
      title: 'TransAsia Launches Next-Gen AI-Powered Threat Detection Platform',
      date: 'October 5, 2025',
      excerpt: 'TransAsia Technologies unveils revolutionary AI-powered cybersecurity platform that reduces threat detection time by 90% and provides real-time protection against zero-day attacks.',
      filter: 'product'
    },
    {
      id: 2,
      category: 'Partnership',
      title: 'Strategic Partnership with Global Cloud Provider Announced',
      date: 'September 28, 2025',
      excerpt: 'TransAsia forms strategic alliance with leading cloud infrastructure provider to deliver integrated security solutions for enterprise customers across Asia-Pacific region.',
      filter: 'partnership',
      image: '/insurtech/cer/client_logo.webp'
    },
    {
      id: 3,
      category: 'Award',
      title: 'TransAsia Named "Cybersecurity Company of the Year" 2025',
      date: 'September 15, 2025',
      excerpt: 'Industry recognition for innovation in cybersecurity solutions and outstanding customer service. The award acknowledges our commitment to protecting businesses from evolving cyber threats.',
      filter: 'award',
      image: '/insurtech/cer/award.webp'
    },
    {
      id: 4,
      category: 'Company News',
      title: 'TransAsia Expands Operations with New Security Operations Center',
      date: 'August 30, 2025',
      excerpt: 'Opening of state-of-the-art 24/7 Security Operations Center in Singapore to support growing customer base and provide enhanced threat monitoring capabilities.',
      filter: 'company',
      image: '/insurtech/cer/footer_company.webp'
    },
    {
      id: 5,
      category: 'Research',
      title: 'Annual Cyber Threat Report 2025 Released',
      date: 'August 15, 2025',
      excerpt: 'Comprehensive analysis of global cyber threat landscape reveals 45% increase in ransomware attacks and emerging threats in cloud environments. Report includes actionable recommendations.',
      filter: 'research'
    },
    {
      id: 6,
      category: 'Product Launch',
      title: 'New Compliance Automation Suite for Financial Services',
      date: 'July 22, 2025',
      excerpt: 'TransAsia introduces specialized compliance automation platform designed for financial institutions, supporting ISO 27001, SOC 2, PCI DSS, and regional regulatory requirements.',
      filter: 'product'
    },
    {
      id: 7,
      category: 'Company News',
      title: 'TransAsia Achieves ISO 27001 and SOC 2 Type II Certification',
      date: 'July 10, 2025',
      excerpt: 'Successful completion of rigorous security audits demonstrates our commitment to maintaining the highest standards of information security and data protection.',
      filter: 'company',
      image: '/insurtech/cer/iso.webp'
    },
    {
      id: 8,
      category: 'Partnership',
      title: 'Collaboration with Leading Universities for Cybersecurity Research',
      date: 'June 28, 2025',
      excerpt: 'TransAsia establishes research partnerships with top universities to advance cybersecurity innovation and develop next-generation security professionals.',
      filter: 'partnership'
    }
  ];

  const mediaOutlets = [
    { name: 'TechCrunch', description: 'Featured in multiple articles' },
    { name: 'Forbes', description: 'Cybersecurity innovation coverage' },
    { name: 'Reuters', description: 'Business and technology news' },
    { name: 'Bloomberg', description: 'Financial and tech reporting' },
    { name: 'The Wall Street Journal', description: 'Enterprise technology coverage' },
    { name: 'CyberScoop', description: 'Cybersecurity industry news' }
  ];

  const filteredReleases = activeFilter === 'all' 
    ? pressReleases 
    : pressReleases.filter(release => release.filter === activeFilter);

  return (
    <PageContainer>
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
          <Title>Press & Media</Title>
          <Subtitle>
            Latest news, announcements, and media coverage from TransAsia Technologies
          </Subtitle>
        </HeroContent>
      </HeroSection>

      <Section>
        <FilterSection>
          <FilterButton 
            active={activeFilter === 'all'} 
            onClick={() => setActiveFilter('all')}
          >
            All News
          </FilterButton>
          <FilterButton 
            active={activeFilter === 'product'} 
            onClick={() => setActiveFilter('product')}
          >
            Product Launches
          </FilterButton>
          <FilterButton 
            active={activeFilter === 'partnership'} 
            onClick={() => setActiveFilter('partnership')}
          >
            Partnerships
          </FilterButton>
          <FilterButton 
            active={activeFilter === 'award'} 
            onClick={() => setActiveFilter('award')}
          >
            Awards
          </FilterButton>
          <FilterButton 
            active={activeFilter === 'company'} 
            onClick={() => setActiveFilter('company')}
          >
            Company News
          </FilterButton>
          <FilterButton 
            active={activeFilter === 'research'} 
            onClick={() => setActiveFilter('research')}
          >
            Research
          </FilterButton>
        </FilterSection>

        <PressGrid>
          {filteredReleases.map((release, index) => (
            <PressCard
              key={release.id}
              to={`/press/${release.id}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <PressImage $hasImage={release.image}>
                {release.image ? (
                  <img src={release.image} alt={release.title} />
                ) : (
                  <FaNewspaper />
                )}
              </PressImage>
              <PressContent>
                <PressCategory>{release.category}</PressCategory>
                <PressTitle>{release.title}</PressTitle>
                <PressDate>
                  <FaCalendar />
                  {release.date}
                </PressDate>
                <PressExcerpt>{release.excerpt}</PressExcerpt>
                <ReadMoreLink>
                  Read Full Release <FaArrowRight />
                </ReadMoreLink>
              </PressContent>
            </PressCard>
          ))}
        </PressGrid>

        <MediaSection>
          <MediaTitle>Featured In</MediaTitle>
          <MediaGrid>
            {mediaOutlets.map((outlet, index) => (
              <MediaCard
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <MediaLogo>{outlet.name.charAt(0)}</MediaLogo>
                <MediaName>{outlet.name}</MediaName>
                <MediaDescription>{outlet.description}</MediaDescription>
              </MediaCard>
            ))}
          </MediaGrid>
        </MediaSection>
      </Section>
    </PageContainer>
  );
};

export default PressRelease;



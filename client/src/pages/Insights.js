import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { FaCalendar, FaClock, FaArrowRight, FaSearch, FaShieldAlt, FaLock, FaNetworkWired } from 'react-icons/fa';

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
  background: url('/insurtech/hero/industries_globle.webp') center/cover no-repeat;
  padding: 140px 0 100px;
  position: relative;
  overflow: hidden;

  /* Dark overlay for better text readability */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.6);
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
  line-height: 1.7;
  max-width: 800px;
  margin: 0 auto;
  font-weight: 300;
  font-family: 'Helvetica Neue', Arial, sans-serif;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 1.15rem;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 80px 20px;
`;

const FilterSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 60px;
  gap: 20px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const SearchBar = styled.div`
  position: relative;
  flex: 1;
  max-width: 400px;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 14px 20px 14px 50px;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #1e3a8a;
    box-shadow: 0 0 0 3px rgba(30, 58, 138, 0.1);
  }
`;

const SearchIcon = styled(FaSearch)`
  position: absolute;
  left: 18px;
  top: 50%;
  transform: translateY(-50%);
  color: #64748b;
  font-size: 1.1rem;
`;

const FilterButtons = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;

const FilterButton = styled.button`
  padding: 12px 24px;
  background: ${props => props.active ? '#1e3a8a' : '#ffffff'};
  color: ${props => props.active ? '#ffffff' : '#475569'};
  border: 2px solid ${props => props.active ? '#1e3a8a' : '#e2e8f0'};
  border-radius: 12px;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.active ? '#2563eb' : '#f8fafc'};
    border-color: #1e3a8a;
  }
`;

const InsightsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const InsightCard = styled(motion(Link))`
  display: block;
  text-decoration: none;
  background: #ffffff;
  border: 2px solid #e2e8f0;
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-8px);
    border-color: #1e3a8a;
    box-shadow: 0 20px 40px rgba(30, 58, 138, 0.15);
  }
`;

const InsightImage = styled.div`
  width: 100%;
  height: 240px;
  background: ${props => props.bgImage 
    ? `linear-gradient(rgba(30, 58, 138, 0.7), rgba(30, 58, 138, 0.8)), url(${props.bgImage})`
    : 'linear-gradient(135deg, #1e3a8a 0%, #1e3a8a 100%)'};
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  color: white;
  position: relative;
  overflow: hidden;

  &::after {
    content: '${props => props.icon || ''}';
    position: absolute;
    font-size: 5rem;
    opacity: 0.3;
    bottom: -20px;
    right: -20px;
  }
`;

const InsightContent = styled.div`
  padding: 30px;
`;

const InsightMeta = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 16px;
  flex-wrap: wrap;
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.9rem;
  color: #64748b;

  svg {
    color: #1e3a8a;
  }
`;

const InsightCategory = styled.span`
  display: inline-block;
  padding: 6px 14px;
  background: rgba(30, 58, 138, 0.1);
  color: #1e3a8a;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 16px;
`;

const InsightTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 12px;
  line-height: 1.4;
`;

const InsightExcerpt = styled.p`
  font-size: 1rem;
  color: #64748b;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const ReadMoreLink = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #1e3a8a;
  font-weight: 600;
  font-size: 0.95rem;
  transition: gap 0.3s ease;

  ${InsightCard}:hover & {
    gap: 12px;
  }
`;

const Insights = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Cybersecurity', 'Risk Management', 'Compliance', 'Industry Trends', 'Case Studies'];

  const insights = [
    {
      id: 1,
      title: 'Quantifying Cyber Risk: A Board-Level Perspective',
      excerpt: 'Learn how to translate complex cyber threats into financial metrics that enable informed decision-making at the board level.',
      category: 'Risk Management',
      author: 'Trans Asia Team',
      date: 'Jan 15, 2025',
      readTime: '8 min read',
      icon: '📊',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80'
    },
    {
      id: 2,
      title: 'Zero-Day Ransomware: Advanced Detection Strategies',
      excerpt: 'Explore cutting-edge algorithms and techniques to prevent unknown ransomware threats before they impact your organization.',
      category: 'Cybersecurity',
      author: 'Security Research',
      date: 'Jan 10, 2025',
      readTime: '10 min read',
      icon: '🔒',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80'
    },
    {
      id: 3,
      title: 'Compliance Made Easy: Navigating Regulatory Frameworks',
      excerpt: 'A comprehensive guide to managing compliance requirements across multiple regulatory frameworks efficiently.',
      category: 'Compliance',
      author: 'Compliance Team',
      date: 'Jan 5, 2025',
      readTime: '12 min read',
      icon: '✅',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80'
    },
    {
      id: 4,
      title: 'The Future of Vulnerability Management',
      excerpt: 'Discover how AI and automation are transforming the vulnerability lifecycle from discovery to remediation.',
      category: 'Industry Trends',
      author: 'Innovation Lab',
      date: 'Dec 28, 2024',
      readTime: '7 min read',
      icon: '🚀',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80'
    },
    {
      id: 5,
      title: 'Case Study: Enterprise Risk Dashboard Implementation',
      excerpt: 'How a Fortune 500 company achieved unified visibility across their entire business risk landscape.',
      category: 'Case Studies',
      author: 'Client Success',
      date: 'Dec 20, 2024',
      readTime: '15 min read',
      icon: '📈',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80'
    },
    {
      id: 6,
      title: 'Deep Dark Web Monitoring: Protecting Your Data',
      excerpt: 'Understanding how to monitor and assess your organization\'s exposure from industry-wide data breaches and leaks.',
      category: 'Cybersecurity',
      author: 'Threat Intelligence',
      date: 'Dec 15, 2024',
      readTime: '9 min read',
      icon: '🕵️',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80'
    },
    {
      id: 7,
      title: 'Building a Cyber-Resilient Organization',
      excerpt: 'Strategic approaches to transforming security into a business enabler rather than just a cost center.',
      category: 'Risk Management',
      author: 'Strategy Team',
      date: 'Dec 10, 2024',
      readTime: '11 min read',
      icon: '🛡️',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80'
    },
    {
      id: 8,
      title: 'OT and IoT Security: Protecting Connected Systems',
      excerpt: 'Best practices for securing operational technology and IoT devices in modern enterprise environments.',
      category: 'Cybersecurity',
      author: 'OT Security',
      date: 'Dec 5, 2024',
      readTime: '10 min read',
      icon: '🌐',
      image: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=800&q=80'
    },
    {
      id: 9,
      title: '2025 Cybersecurity Trends: What to Expect',
      excerpt: 'Key trends and predictions shaping the cybersecurity landscape in the year ahead.',
      category: 'Industry Trends',
      author: 'Research Team',
      date: 'Dec 1, 2024',
      readTime: '13 min read',
      icon: '🔮',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80'
    }
  ];

  const filteredInsights = insights.filter(insight => {
    const matchesFilter = activeFilter === 'All' || insight.category === activeFilter;
    const matchesSearch = insight.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         insight.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <PageContainer>
      <Helmet>
        <title>Insights & Resources | Trans Asia Tech</title>
        <meta name="description" content="Explore the latest insights, articles, and resources on cybersecurity, risk management, compliance, and industry trends from Trans Asia Tech experts." />
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
          <Title>Insights & Resources</Title>
          <Subtitle>
            Stay informed with the latest cybersecurity insights, industry trends, and expert perspectives from Trans Asia Tech
          </Subtitle>
        </HeroContent>
      </HeroSection>

      <Container>
        <FilterSection>
          <SearchBar>
            <SearchIcon />
            <SearchInput
              type="text"
              placeholder="Search insights..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </SearchBar>
          <FilterButtons>
            {categories.map((category) => (
              <FilterButton
                key={category}
                active={activeFilter === category}
                onClick={() => setActiveFilter(category)}
              >
                {category}
              </FilterButton>
            ))}
          </FilterButtons>
        </FilterSection>

        <InsightsGrid>
          {filteredInsights.map((insight, index) => (
            <InsightCard
              key={insight.id}
              to={`/insights/${insight.id}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <InsightImage bgImage={insight.image} icon={insight.icon}>
                {insight.icon}
              </InsightImage>
              <InsightContent>
                <InsightCategory>{insight.category}</InsightCategory>
                <InsightTitle>{insight.title}</InsightTitle>
                <InsightExcerpt>{insight.excerpt}</InsightExcerpt>
                <InsightMeta>
                  <MetaItem>
                    <FaCalendar />
                    {insight.date}
                  </MetaItem>
                  <MetaItem>
                    <FaClock />
                    {insight.readTime}
                  </MetaItem>
                </InsightMeta>
                <ReadMoreLink>
                  Read More <FaArrowRight />
                </ReadMoreLink>
              </InsightContent>
            </InsightCard>
          ))}
        </InsightsGrid>
      </Container>
    </PageContainer>
  );
};

export default Insights;




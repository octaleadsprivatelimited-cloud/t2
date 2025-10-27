import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FaLinkedin, FaTwitter, FaEnvelope, FaQuoteLeft, FaAward, FaCode, FaShieldAlt, FaLock, FaNetworkWired, FaArrowRight } from 'react-icons/fa';

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
  background: url('/insurtech/hero/women_cyber.webp') center/cover no-repeat;
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
  max-width: 900px;
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
  margin-bottom: 48px;
  line-height: 1.7;
  font-weight: 300;
  font-family: 'Helvetica Neue', Arial, sans-serif;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 1.15rem;
    margin-bottom: 40px;
  }
`;

const HeroStats = styled.div`
  display: flex;
  gap: 80px;
  padding-top: 40px;
  border-top: 1px solid #dee2e6;

  @media (max-width: 768px) {
    gap: 40px;
    flex-wrap: wrap;
  }
`;

const HeroStat = styled.div`
  text-align: left;
`;

const StatNumber = styled.div`
  font-size: 3.5rem;
  font-weight: 300;
  color: #ffffff;
  margin-bottom: 8px;
  line-height: 1;
  font-family: 'Helvetica Neue', Arial, sans-serif;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 2.8rem;
  }
`;

const StatLabel = styled.div`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 400;
  letter-spacing: 0.3px;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
`;

const Section = styled.section`
  padding: 100px 40px;
  max-width: 1400px;
  margin: 0 auto;
  background: ${props => props.bg || 'transparent'};

  @media (max-width: 768px) {
    padding: 60px 20px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 20px;
  color: #1e3a8a;
  font-family: 'Helvetica Neue', Arial, sans-serif;
  letter-spacing: -1.5px;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const SectionSubtitle = styled.p`
  font-size: 1.2rem;
  color: #6c757d;
  text-align: center;
  margin-bottom: 70px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    font-size: 1.05rem;
    margin-bottom: 50px;
  }
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 35px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 25px;
  }
`;

const TeamCard = styled(motion.div)`
  background: white;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 2px solid transparent;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 24px;
    padding: 2px;
    background: linear-gradient(135deg, #1e3a8a, #1e40af);
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  &:hover::before {
    opacity: 1;
  }

  &:hover {
    transform: translateY(-12px) scale(1.02);
    box-shadow: 0 24px 48px rgba(30, 58, 138, 0.25);
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 350px;
  overflow: hidden;
  background: linear-gradient(135deg, #e7f1ff 0%, #f0f7ff 100%);

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100px;
    background: linear-gradient(to top, rgba(30, 58, 138, 0.7) 0%, transparent 100%);
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  ${TeamCard}:hover &::after {
    opacity: 1;
  }

  @media (max-width: 768px) {
    height: 300px;
  }
`;

const TeamImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);

  ${TeamCard}:hover & {
    transform: scale(1.15);
  }
`;

const TeamBadge = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  background: rgba(30, 58, 138, 0.95);
  backdrop-filter: blur(10px);
  color: white;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  gap: 6px;

  svg {
    font-size: 0.9rem;
  }
`;

const TeamContent = styled.div`
  padding: 32px 28px;
  text-align: center;
  position: relative;
`;

const TeamName = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #212529;
  margin-bottom: 8px;
  font-family: 'Helvetica Neue', Arial, sans-serif;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const TeamRole = styled.div`
  font-size: 1.05rem;
  color: #1e3a8a;
  font-weight: 600;
  margin-bottom: 16px;
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    position: absolute;
    bottom: -6px;
    left: 50%;
    transform: translateX(-50%);
    width: 40px;
    height: 2px;
    background: linear-gradient(90deg, #1e3a8a 0%, #1e40af 100%);
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const TeamBio = styled.p`
  font-size: 0.95rem;
  color: #6c757d;
  line-height: 1.7;
  margin-bottom: 24px;
  margin-top: 20px;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const TeamSocial = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
  padding-top: 20px;
  border-top: 1px solid #e9ecef;
`;

const SocialLink = styled.a`
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #1e3a8a;
  transition: all 0.3s ease;
  cursor: pointer;
  font-size: 1.1rem;

  &:hover {
    background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%);
    color: white;
    transform: translateY(-4px) rotate(5deg);
    box-shadow: 0 8px 20px rgba(30, 58, 138, 0.3);
  }
`;

const ViewProfileButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%);
  color: white;
  text-decoration: none;
  border-radius: 12px;
  font-weight: 600;
  font-size: 0.95rem;
  margin-top: 16px;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(30, 58, 138, 0.4);
    background: linear-gradient(135deg, #1e40af 0%, #2563eb 100%);
  }

  svg {
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateX(4px);
  }
`;

const QuoteSection = styled.div`
  background: linear-gradient(135deg, #e7f1ff 0%, #f0f7ff 100%);
  padding: 80px 50px;
  border-radius: 32px;
  margin: 80px auto;
  max-width: 1000px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(30, 58, 138, 0.05) 0%, transparent 70%);
  }

  @media (max-width: 768px) {
    padding: 60px 30px;
    margin: 60px 20px;
  }
`;

const QuoteIcon = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 20px;
  background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  color: white;
  margin: 0 auto 30px;
  box-shadow: 0 12px 32px rgba(30, 58, 138, 0.3);
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    width: 70px;
    height: 70px;
    font-size: 2rem;
  }
`;

const QuoteText = styled.p`
  font-size: 1.5rem;
  color: #1e3a8a;
  text-align: center;
  line-height: 1.8;
  font-weight: 500;
  font-style: italic;
  margin-bottom: 30px;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const QuoteAuthor = styled.div`
  text-align: center;
  font-size: 1.1rem;
  color: #495057;
  font-weight: 700;
  position: relative;
  z-index: 1;

  span {
    display: block;
    font-size: 0.95rem;
    color: #6c757d;
    font-weight: 600;
    margin-top: 8px;
  }
`;

const ExpertiseSection = styled.div`
  background: linear-gradient(135deg, #0a0e1a 0%, #1a1f2e 100%);
  padding: 100px 40px;
  margin-top: 0;

  @media (max-width: 768px) {
    padding: 60px 20px;
  }
`;

const ExpertiseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 35px;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 968px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 25px;
  }
`;

const ExpertiseCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 40px 32px;
  text-align: center;
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(30, 58, 138, 0.1) 0%, rgba(30, 64, 175, 0.1) 100%);
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  &:hover {
    transform: translateY(-8px);
    border-color: rgba(30, 58, 138, 0.5);
    box-shadow: 0 16px 40px rgba(30, 58, 138, 0.3);

    &::before {
      opacity: 1;
    }
  }
`;

const ExpertiseIcon = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 20px;
  background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  color: white;
  margin: 0 auto 24px;
  box-shadow: 0 12px 32px rgba(30, 58, 138, 0.4);
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    width: 70px;
    height: 70px;
    font-size: 2rem;
  }
`;

const ExpertiseTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 12px;
  font-family: 'Helvetica Neue', Arial, sans-serif;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const ExpertiseCount = styled.div`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 600;
  position: relative;
  z-index: 1;
`;

const Team = () => {
  const canvasRef = useRef(null);

  // Particle network animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = canvas.offsetHeight;

    const particles = [];
    const particleCount = 60;

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.opacity = Math.random() * 0.5 + 0.3;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        ctx.fillStyle = `rgba(59, 130, 246, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
        
        // Connect particles with lines
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 150) {
            ctx.strokeStyle = `rgba(59, 130, 246, ${0.2 * (1 - distance / 150)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      
      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = canvas.offsetHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const leadership = [
    {
      slug: 'ananth',
      name: 'Ananth',
      role: 'Leadership',
      bio: 'Visionary leader with expertise in cybersecurity strategy and risk management. Driving innovation and excellence across the organization.',
      image: '/insurtech/team/ananth.webp',
      badge: 'Founder',
      badgeIcon: <FaAward />,
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'ananth@transasia.com'
      }
    },
    {
      slug: 'coo',
      name: 'Chief Operating Officer',
      role: 'COO',
      bio: 'Operations excellence leader driving organizational growth and client success. Expert in scaling security service operations.',
      image: '/insurtech/team/coo.webp',
      badge: 'Executive',
      badgeIcon: <FaCode />,
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'coo@transasia.com'
      }
    }
  ];

  const expertise = [
    { icon: <FaShieldAlt />, title: 'Threat Detection', count: '10+ Specialists' },
    { icon: <FaCode />, title: 'Security Engineering', count: '8+ Engineers' },
    { icon: <FaAward />, title: 'Compliance Experts', count: '5+ Certified' }
  ];

  return (
    <PageContainer>
      <Helmet>
        <title>Our Team - TransAsia Soft Tech</title>
        <meta name="description" content="Meet the expert team behind TransAsia's cybersecurity solutions" />
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
          <Title>Meet Our Team</Title>
          <Subtitle>
            World-class cybersecurity experts with 125+ years of combined experience dedicated to protecting your business
          </Subtitle>
          <HeroStats>
            <HeroStat>
              <StatNumber>19+</StatNumber>
              <StatLabel>Experts</StatLabel>
            </HeroStat>
            <HeroStat>
              <StatNumber>125+</StatNumber>
              <StatLabel>Years Experience</StatLabel>
            </HeroStat>
            <HeroStat>
              <StatNumber>100%</StatNumber>
              <StatLabel>Dedicated</StatLabel>
            </HeroStat>
          </HeroStats>
        </HeroContent>
      </HeroSection>

      <Section>
        <SectionTitle>Leadership Team</SectionTitle>
        <SectionSubtitle>
          Experienced leaders driving innovation and excellence in cybersecurity
        </SectionSubtitle>
        <TeamGrid>
          {leadership.map((member, index) => (
            <TeamCard
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <ImageWrapper>
                <TeamImage src={member.image} alt={member.name} />
                <TeamBadge>
                  {member.badgeIcon}
                  {member.badge}
                </TeamBadge>
              </ImageWrapper>
              <TeamContent>
                <TeamName>{member.name}</TeamName>
                <TeamRole>{member.role}</TeamRole>
                <TeamBio>{member.bio}</TeamBio>
                <ViewProfileButton to={`/team/${member.slug}`}>
                  View Full Profile
                  <FaArrowRight />
                </ViewProfileButton>
                <TeamSocial>
                  <SocialLink href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                  </SocialLink>
                  <SocialLink href={member.social.twitter} target="_blank" rel="noopener noreferrer">
                    <FaTwitter />
                  </SocialLink>
                  <SocialLink href={`mailto:${member.social.email}`}>
                    <FaEnvelope />
                  </SocialLink>
                </TeamSocial>
              </TeamContent>
            </TeamCard>
          ))}
        </TeamGrid>

        <QuoteSection>
          <QuoteIcon>
            <FaQuoteLeft />
          </QuoteIcon>
          <QuoteText>
            "Our team's collective expertise and passion for cybersecurity excellence drives us to deliver unparalleled protection for our clients. Together, we're building a safer digital future."
          </QuoteText>
          <QuoteAuthor>
            TransAsia Leadership
            <span>Committed to Your Security</span>
          </QuoteAuthor>
        </QuoteSection>
      </Section>

      <ExpertiseSection>
        <SectionTitle style={{ color: '#ffffff' }}>Team Expertise</SectionTitle>
        <SectionSubtitle style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
          Specialized skills across critical cybersecurity domains
        </SectionSubtitle>
        <ExpertiseGrid>
          {expertise.map((item, index) => (
            <ExpertiseCard
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ExpertiseIcon>{item.icon}</ExpertiseIcon>
              <ExpertiseTitle>{item.title}</ExpertiseTitle>
              <ExpertiseCount>{item.count}</ExpertiseCount>
            </ExpertiseCard>
          ))}
        </ExpertiseGrid>
      </ExpertiseSection>
    </PageContainer>
  );
};

export default Team;



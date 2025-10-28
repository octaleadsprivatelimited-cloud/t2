import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaCalendar, FaMapMarkerAlt, FaShieldAlt, FaLock, FaNetworkWired } from 'react-icons/fa';

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
  background: #f8f9fa;
`;

const HeroSection = styled.section`
  min-height: 60vh;
  display: flex;
  align-items: center;
  background: #ffffff;
  padding: 100px 0 60px;
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
  font-weight: 400;
  color: #1e3a8a;
  margin-bottom: 32px;
  font-family: 'Helvetica Neue', Arial, sans-serif;
  letter-spacing: -1px;
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

const Subtitle = styled.p`
  font-size: 1.35rem;
  color: #495057;
  max-width: 800px;
  margin-bottom: 48px;
  font-weight: 300;
  line-height: 1.7;
  font-family: 'Helvetica Neue', Arial, sans-serif;

  @media (max-width: 768px) {
    font-size: 1.15rem;
    margin-bottom: 40px;
  }
`;

const Section = styled.section`
  padding: 80px 40px;
  max-width: 1400px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 60px 20px;
  }
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 50px;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #1e3a8a;
  margin-bottom: 12px;
  font-family: 'Helvetica Neue', Arial, sans-serif;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SectionSubtitle = styled.p`
  font-size: 1.1rem;
  color: #6c757d;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const GalleryCard = styled(motion.div)`
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid #e9ecef;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 16px 32px rgba(30, 58, 138, 0.15);
    border-color: #1e3a8a;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 280px;
  overflow: hidden;
  position: relative;
  background: #f8f9fa;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  ${GalleryCard}:hover img {
    transform: scale(1.1);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.3) 0%, transparent 50%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  ${GalleryCard}:hover &::after {
    opacity: 1;
  }

  @media (max-width: 768px) {
    height: 240px;
  }
`;

const GalleryContent = styled.div`
  padding: 24px;
`;

const GalleryInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 12px;
  font-size: 0.9rem;
  color: #6c757d;

  svg {
    color: #1e3a8a;
    font-size: 1rem;
  }

  @media (max-width: 768px) {
    font-size: 0.85rem;
    gap: 12px;
  }
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

const GalleryTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 700;
  color: #212529;
  margin-bottom: 8px;
  font-family: 'Helvetica Neue', Arial, sans-serif;
  line-height: 1.4;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const GalleryDescription = styled.p`
  font-size: 0.95rem;
  color: #6c757d;
  line-height: 1.6;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const Modal = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
  backdrop-filter: blur(10px);
`;

const ModalContent = styled(motion.div)`
  background: white;
  border-radius: 20px;
  max-width: 1000px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.3);
`;

const ModalClose = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: #1e3a8a;
  color: white;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  z-index: 10;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(30, 58, 138, 0.3);

  &:hover {
    background: #1e40af;
    transform: rotate(90deg) scale(1.1);
  }
`;

const ModalImage = styled.div`
  width: 100%;
  height: 500px;
  border-radius: 20px 20px 0 0;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    height: 350px;
  }
`;

const ModalBody = styled.div`
  padding: 40px;

  @media (max-width: 768px) {
    padding: 30px 25px;
  }
`;

const ModalTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: #1e3a8a;
  margin-bottom: 16px;
  font-family: 'Helvetica Neue', Arial, sans-serif;

  @media (max-width: 768px) {
    font-size: 1.7rem;
  }
`;

const ModalMeta = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 24px;
  flex-wrap: wrap;
  padding-bottom: 20px;
  border-bottom: 2px solid #e9ecef;
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.95rem;
  color: #6c757d;

  svg {
    color: #1e3a8a;
    font-size: 1.1rem;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const ModalDescription = styled.p`
  font-size: 1.05rem;
  color: #495057;
  line-height: 1.8;
  margin-bottom: 0;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const events = [
    {
      id: 1,
      image: '/insurtech/event/ASS_0001.webp',
      title: 'Annual Cybersecurity Conference 2024',
      description: 'Industry leaders gathered to discuss emerging threats and security solutions',
      date: 'March 2024',
      location: 'Mumbai, India'
    },
    {
      id: 2,
      image: '/insurtech/event/ASS_0002.webp',
      title: 'Security Training Workshop',
      description: 'Hands-on training session on advanced penetration testing techniques',
      date: 'April 2024',
      location: 'Bangalore, India'
    },
    {
      id: 3,
      image: '/insurtech/event/ASS_0003.webp',
      title: 'Client Engagement Summit',
      description: 'Strategic meeting with enterprise clients to review security initiatives',
      date: 'May 2024',
      location: 'Delhi, India'
    },
    {
      id: 4,
      image: '/insurtech/event/ASS_0004.webp',
      title: 'Cyber Risk Assessment Seminar',
      description: 'Executive seminar on quantifying cyber risks for board presentations',
      date: 'June 2024',
      location: 'Hyderabad, India'
    },
    {
      id: 5,
      image: '/insurtech/event/ASS_0005.webp',
      title: 'Team Building & Innovation Day',
      description: 'Internal event celebrating innovation and team achievements',
      date: 'July 2024',
      location: 'Pune, India'
    },
    {
      id: 6,
      image: '/insurtech/event/ASS_0006.webp',
      title: 'Industry Partnership Forum',
      description: 'Networking event with technology and security partners',
      date: 'August 2024',
      location: 'Chennai, India'
    },
    {
      id: 7,
      image: '/insurtech/event/ASS_0007.webp',
      title: 'Security Awareness Training',
      description: 'Educational program for organizations on cybersecurity best practices',
      date: 'September 2024',
      location: 'Kolkata, India'
    },
    {
      id: 8,
      image: '/insurtech/event/ASS_0008.webp',
      title: 'Product Launch Event',
      description: 'Unveiling of new cybersecurity platform and tools',
      date: 'October 2024',
      location: 'Mumbai, India'
    },
    {
      id: 9,
      image: '/insurtech/event/ASS_0009.webp',
      title: 'Thought Leadership Panel',
      description: 'Expert panel discussion on future of cybersecurity',
      date: 'November 2024',
      location: 'Bangalore, India'
    },
    {
      id: 10,
      image: '/insurtech/event/ASS_0010.webp',
      title: 'Regional Security Meetup',
      description: 'Local community event for security professionals',
      date: 'December 2024',
      location: 'Ahmedabad, India'
    },
    {
      id: 11,
      image: '/insurtech/event/ASS_0011.webp',
      title: 'International Collaboration Summit',
      description: 'Cross-border partnerships and knowledge exchange',
      date: 'January 2025',
      location: 'Dubai, UAE'
    },
    {
      id: 12,
      image: '/insurtech/event/ASS_0012.webp',
      title: 'Compliance & Governance Workshop',
      description: 'Training on regulatory compliance and governance frameworks',
      date: 'February 2025',
      location: 'Mumbai, India'
    },
    {
      id: 13,
      image: '/insurtech/event/ASS_0013.webp',
      title: 'Threat Intelligence Briefing',
      description: 'Quarterly threat landscape review and intelligence sharing',
      date: 'March 2025',
      location: 'Virtual Event'
    },
    {
      id: 14,
      image: '/insurtech/event/ASS_0014.webp',
      title: 'Security Innovation Showcase',
      description: 'Demonstration of cutting-edge security technologies',
      date: 'April 2025',
      location: 'Bangalore, India'
    },
    {
      id: 15,
      image: '/insurtech/event/ASS_0015.webp',
      title: 'Executive Leadership Conference',
      description: 'C-level executives discussing strategic security initiatives',
      date: 'May 2025',
      location: 'Delhi, India'
    },
    {
      id: 16,
      image: '/insurtech/event/ASS_0016.webp',
      title: 'Certification Achievement Ceremony',
      description: 'Celebrating team members achieving professional certifications',
      date: 'June 2025',
      location: 'Office Headquarters'
    },
    {
      id: 17,
      image: '/insurtech/event/ASS_0017.webp',
      title: 'Client Appreciation Event',
      description: 'Thank you event for valued clients and partners',
      date: 'July 2025',
      location: 'Mumbai, India'
    },
    {
      id: 18,
      image: '/insurtech/event/ASS_0018.webp',
      title: 'Industry Award Ceremony',
      description: 'Recognition at national cybersecurity awards',
      date: 'August 2025',
      location: 'New Delhi, India'
    },
    {
      id: 19,
      image: '/insurtech/event/ASS_0019.webp',
      title: 'Quarterly Town Hall Meeting',
      description: 'Company-wide update on achievements and future plans',
      date: 'September 2025',
      location: 'Office Headquarters'
    },
    {
      id: 20,
      image: '/insurtech/event/ASS_0020.webp',
      title: 'Technology Partnership Launch',
      description: 'Announcement of strategic technology partnerships',
      date: 'September 2025',
      location: 'Bangalore, India'
    },
    {
      id: 21,
      image: '/insurtech/event/ASS_0021.webp',
      title: 'Year-End Celebration',
      description: 'Celebrating achievements and milestones of the year',
      date: 'October 2025',
      location: 'Office Headquarters'
    }
  ];

  return (
    <PageContainer>
      <Helmet>
        <title>Event Gallery - TransAsia</title>
        <meta name="description" content="Explore our events, conferences, workshops, and team activities" />
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
          <Title>Event Gallery</Title>
          <Subtitle>
            Explore our journey through conferences, workshops, and memorable moments
          </Subtitle>
        </HeroContent>
      </HeroSection>

      <Section>
        <GalleryGrid>
          {events.map((event, index) => (
            <GalleryCard
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              onClick={() => setSelectedImage(event)}
              whileHover={{ scale: 1.02 }}
            >
              <ImageContainer>
                <img src={event.image} alt={event.title} loading="lazy" />
              </ImageContainer>
              <GalleryContent>
                <GalleryInfo>
                  <InfoItem>
                    <FaCalendar />
                    {event.date}
                  </InfoItem>
                  <InfoItem>
                    <FaMapMarkerAlt />
                    {event.location}
                  </InfoItem>
                </GalleryInfo>
                <GalleryTitle>{event.title}</GalleryTitle>
                <GalleryDescription>{event.description}</GalleryDescription>
              </GalleryContent>
            </GalleryCard>
          ))}
        </GalleryGrid>
      </Section>

      <AnimatePresence>
        {selectedImage && (
          <Modal
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <ModalContent
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <ModalClose onClick={() => setSelectedImage(null)}>
                <FaTimes />
              </ModalClose>
              <ModalImage>
                <img src={selectedImage.image} alt={selectedImage.title} />
              </ModalImage>
              <ModalBody>
                <ModalTitle>{selectedImage.title}</ModalTitle>
                <ModalMeta>
                  <MetaItem>
                    <FaCalendar />
                    {selectedImage.date}
                  </MetaItem>
                  <MetaItem>
                    <FaMapMarkerAlt />
                    {selectedImage.location}
                  </MetaItem>
                </ModalMeta>
                <ModalDescription>{selectedImage.description}</ModalDescription>
              </ModalBody>
            </ModalContent>
          </Modal>
        )}
      </AnimatePresence>
    </PageContainer>
  );
};

export default Gallery;



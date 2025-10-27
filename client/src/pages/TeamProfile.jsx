import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import { Helmet } from 'react-helmet-async';
import { 
  FaLinkedin, 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaGraduationCap,
  FaAward,
  FaCheckCircle,
  FaGlobe,
  FaVideo,
  FaQrcode,
  FaClock,
  FaUsers,
  FaArrowLeft,
  FaBriefcase,
  FaShieldAlt
} from 'react-icons/fa';

const PageContainer = styled.div`
  min-height: 100vh;
  background: #fafbfc;
`;

const Header = styled.header`
  background: linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%);
  padding: 20px 0;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const HeaderContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px;
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

const BackLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.8;
  }
`;

const ProfileHero = styled.section`
  background: linear-gradient(135deg, rgba(30, 58, 138, 0.95) 0%, rgba(37, 99, 235, 0.95) 100%),
              url('/insurtech/hero/hero_1.webp') center/cover no-repeat;
  padding: 60px 0;
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
    background: url('/insurtech/hero/hero_1.webp') center/cover no-repeat;
    opacity: 0.2;
    z-index: 0;
  }

  & > * {
    position: relative;
    z-index: 1;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px;

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

const ProfileGrid = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 40px;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 30px;
    text-align: center;
  }
`;

const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  border: 5px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    margin: 0 auto;
  }
`;

const ProfileInfo = styled.div``;

const Name = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  margin: 0 0 8px 0;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const JobTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 400;
  margin: 0 0 24px 0;
  opacity: 0.9;
`;

const ContactButtons = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const ContactButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 8px;
  color: white;
  text-decoration: none;
  font-size: 0.9rem;
  transition: all 0.3s;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }
`;

const ContentArea = styled.section`
  padding: 60px 0;
`;

const Section = styled.div`
  background: white;
  border-radius: 12px;
  padding: 40px;
  margin-bottom: 30px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

  @media (max-width: 768px) {
    padding: 30px 20px;
  }
`;

const SectionTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #1e3a8a;
  margin: 0 0 24px 0;
  display: flex;
  align-items: center;
  gap: 12px;

  svg {
    color: #2563eb;
  }
`;

const BioText = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #64748b;
  margin: 0 0 16px 0;
`;

const SpecText = styled.p`
  font-size: 1rem;
  color: #64748b;
  margin: 0;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 20px;
`;

const Card = styled.div`
  padding: 24px;
  background: #f8fafc;
  border-radius: 10px;
  border-left: 4px solid #2563eb;
`;

const CardTitle = styled.h4`
  font-size: 1rem;
  font-weight: 600;
  color: #1e3a8a;
  margin: 0 0 12px 0;
`;

const CardList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    padding: 8px 0;
    color: #64748b;
    font-size: 0.95rem;
    display: flex;
    align-items: center;
    gap: 10px;

    svg {
      color: #10b981;
      font-size: 0.8rem;
    }
  }
`;

const AchievementRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const AchievementBox = styled.div`
  padding: 30px;
  background: linear-gradient(135deg, #f0f7ff 0%, #ffffff 100%);
  border-radius: 10px;
  text-align: center;
  border: 1px solid #e0e7ff;
`;

const AchievementNumber = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: #2563eb;
  margin-bottom: 8px;
`;

const AchievementText = styled.p`
  font-size: 0.95rem;
  color: #64748b;
  margin: 0;
`;

const InfoRow = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-top: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const InfoBox = styled.div`
  display: flex;
  align-items: start;
  gap: 16px;
  padding: 20px;
  background: #f8fafc;
  border-radius: 10px;
`;

const InfoIcon = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 10px;
  background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  flex-shrink: 0;
`;

const InfoContent = styled.div`
  flex: 1;

  h4 {
    font-size: 0.875rem;
    font-weight: 600;
    color: #64748b;
    margin: 0 0 6px 0;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  p, a {
    font-size: 1rem;
    color: #1e3a8a;
    margin: 0;
    font-weight: 500;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;

const LanguageTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 8px;
`;

const LanguageTag = styled.span`
  padding: 6px 12px;
  background: #e0e7ff;
  color: #3730a3;
  border-radius: 6px;
  font-size: 0.85rem;
  font-weight: 500;
`;

const SocialSection = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 20px;
`;

const SocialButton = styled.a`
  width: 48px;
  height: 48px;
  border-radius: 10px;
  background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.25rem;
  text-decoration: none;
  transition: all 0.3s;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(37, 99, 235, 0.4);
  }
`;

const QRBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 24px;
  background: #f8fafc;
  border-radius: 10px;
  margin-top: 20px;
  max-width: 300px;
`;

const QRPlaceholder = styled.div`
  width: 140px;
  height: 140px;
  background: white;
  border: 2px dashed #cbd5e1;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #94a3b8;
  font-size: 2rem;
`;

const VideoBox = styled.div`
  margin-top: 20px;
  padding: 24px;
  background: #f8fafc;
  border-radius: 10px;
  text-align: center;
`;

const VideoPlaceholder = styled.div`
  width: 100%;
  max-width: 600px;
  height: 300px;
  background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  margin: 0 auto;
  gap: 12px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    transform: scale(1.02);
  }

  svg {
    font-size: 3rem;
  }
`;

const TeamProfile = () => {
  const { slug } = useParams();
  const [showVideo, setShowVideo] = useState(false);

  const teamMembers = {
    'ananth': {
      id: 'ananth',
      fullName: 'Ananth',
      jobTitle: 'Founder & CEO',
      department: 'Leadership',
      image: '/insurtech/team/ananth.webp',
      bio: 'Visionary leader with expertise in cybersecurity strategy and risk management. Driving innovation and excellence across the organization.',
      specialization: 'Strategic leadership, cybersecurity risk management, organizational growth',
      skills: [
        { category: 'Technical Skills', items: ['Risk Management', 'Strategic Planning', 'Cybersecurity Strategy', 'Business Development'] },
        { category: 'Responsibilities', items: ['Executive Leadership', 'Team Building', 'Client Relations', 'Innovation'] },
        { category: 'Certifications', items: ['CISSP', 'CISM', 'ISO 27001 Lead Auditor'] }
      ],
      achievements: [
        { number: '500+', text: 'Projects Completed' },
        { number: '15+', text: 'Years Experience' },
        { number: '100+', text: 'Team Members Led' }
      ],
      workRegion: 'Chennai, India',
      email: 'ananth@transasia.com',
      phone: '+91 123 456 7890',
      linkedin: 'https://linkedin.com/in/ananth',
      education: [
        'MBA in Business Administration',
        'B.Tech in Computer Science',
        'Executive Program in Cybersecurity'
      ],
      languages: ['English', 'Tamil', 'Hindi']
    },
    'coo': {
      id: 'coo',
      fullName: 'Chief Operating Officer',
      jobTitle: 'COO',
      department: 'Operations',
      image: '/insurtech/team/coo.webp',
      bio: 'Operations excellence leader driving organizational growth and client success. Expert in scaling security service operations and process optimization.',
      specialization: 'Operations management, process optimization, client success',
      skills: [
        { category: 'Technical Skills', items: ['Operations Management', 'Process Optimization', 'Client Success', 'Team Leadership'] },
        { category: 'Responsibilities', items: ['Operations Excellence', 'Client Relations', 'Service Delivery', 'Team Management'] },
        { category: 'Certifications', items: ['PMP', 'ITIL', 'Six Sigma Black Belt'] }
      ],
      achievements: [
        { number: '99%', text: 'Client Satisfaction' },
        { number: '10+', text: 'Years Operations Experience' },
        { number: '500+', text: 'Projects Delivered' }
      ],
      workRegion: 'Chennai, India',
      email: 'coo@transasia.com',
      phone: '+91 123 456 7893',
      linkedin: 'https://linkedin.com/in/coo',
      education: [
        'MBA in Operations Management',
        'B.Tech in Computer Science',
        'Advanced Project Management'
      ],
      languages: ['English', 'Tamil', 'Hindi']
    }
  };

  const member = teamMembers[slug];

  if (!member) {
    return (
      <PageContainer>
        <Container style={{ padding: '100px 40px', textAlign: 'center' }}>
          <h1>Team Member Not Found</h1>
          <Link to="/team">Back to Team</Link>
        </Container>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <Helmet>
        <title>{member.fullName} - {member.jobTitle} | TransAsia Tech</title>
        <meta name="description" content={member.bio} />
      </Helmet>

      <Header>
        <HeaderContainer>
          <BackLink to="/team">
            <FaArrowLeft />
            Back to Team
          </BackLink>
        </HeaderContainer>
      </Header>

      <ProfileHero>
        <Container>
          <ProfileGrid>
            <ProfileImage src={member.image} alt={member.fullName} />
            <ProfileInfo>
              <Name>{member.fullName}</Name>
              <JobTitle>{member.jobTitle}</JobTitle>
              <ContactButtons>
                <ContactButton href={`mailto:${member.email}`}>
                  <FaEnvelope /> Email
                </ContactButton>
                <ContactButton href={`tel:${member.phone}`}>
                  <FaPhone /> Call
                </ContactButton>
              </ContactButtons>
            </ProfileInfo>
          </ProfileGrid>
        </Container>
      </ProfileHero>

      <ContentArea>
        <Container>
          <Section>
            <SectionTitle>
              <FaBriefcase />
              About
            </SectionTitle>
            <BioText>{member.bio}</BioText>
            <SpecText>
              <strong>Specialization:</strong> {member.specialization}
            </SpecText>
          </Section>

          <Section>
            <SectionTitle>
              <FaShieldAlt />
              Skills & Competencies
            </SectionTitle>
            <Grid>
              {member.skills.map((skillGroup, index) => (
                <Card key={index}>
                  <CardTitle>{skillGroup.category}</CardTitle>
                  <CardList>
                    {skillGroup.items.map((item, idx) => (
                      <li key={idx}>
                        <FaCheckCircle />
                        {item}
                      </li>
                    ))}
                  </CardList>
                </Card>
              ))}
            </Grid>
          </Section>

          <Section>
            <SectionTitle>
              <FaAward />
              Achievements
            </SectionTitle>
            <AchievementRow>
              {member.achievements.map((achievement, index) => (
                <AchievementBox key={index}>
                  <AchievementNumber>{achievement.number}</AchievementNumber>
                  <AchievementText>{achievement.text}</AchievementText>
                </AchievementBox>
              ))}
            </AchievementRow>
          </Section>

          <Section>
            <SectionTitle>
              <FaMapMarkerAlt />
              Contact & Location
            </SectionTitle>
            <InfoRow>
              <InfoBox>
                <InfoIcon>
                  <FaMapMarkerAlt />
                </InfoIcon>
                <InfoContent>
                  <h4>Office Location</h4>
                  <p>{member.workRegion}</p>
                </InfoContent>
              </InfoBox>
              <InfoBox>
                <InfoIcon>
                  <FaEnvelope />
                </InfoIcon>
                <InfoContent>
                  <h4>Email</h4>
                  <a href={`mailto:${member.email}`}>{member.email}</a>
                </InfoContent>
              </InfoBox>
              <InfoBox>
                <InfoIcon>
                  <FaPhone />
                </InfoIcon>
                <InfoContent>
                  <h4>Phone</h4>
                  <a href={`tel:${member.phone}`}>{member.phone}</a>
                </InfoContent>
              </InfoBox>
              <InfoBox>
                <InfoIcon>
                  <FaGlobe />
                </InfoIcon>
                <InfoContent>
                  <h4>Languages</h4>
                  <LanguageTags>
                    {member.languages.map((lang, idx) => (
                      <LanguageTag key={idx}>{lang}</LanguageTag>
                    ))}
                  </LanguageTags>
                </InfoContent>
              </InfoBox>
            </InfoRow>
          </Section>

          <Section>
            <SectionTitle>
              <FaGraduationCap />
              Education & Training
            </SectionTitle>
            <Grid>
              {member.education.map((edu, index) => (
                <Card key={index}>
                  <CardTitle>
                    <FaGraduationCap style={{ marginRight: '8px', color: '#2563eb' }} />
                    {edu}
                  </CardTitle>
                </Card>
              ))}
            </Grid>
          </Section>

          <Section>
            <SectionTitle>
              <FaUsers />
              Connect
            </SectionTitle>
            <SocialSection>
              <SocialButton href={member.linkedin} target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </SocialButton>
            </SocialSection>

            <QRBox>
              <QRPlaceholder>
                <FaQrcode />
              </QRPlaceholder>
              <p style={{ fontSize: '0.9rem', color: '#64748b', margin: 0 }}>
                Scan to connect with {member.fullName}
              </p>
            </QRBox>
          </Section>

          <Section>
            <SectionTitle>
              <FaVideo />
              Message from {member.fullName}
            </SectionTitle>
            <VideoBox>
              {!showVideo ? (
                <VideoPlaceholder onClick={() => setShowVideo(true)}>
                  <FaVideo />
                  <span>Click to play video message</span>
                </VideoPlaceholder>
              ) : (
                <VideoPlaceholder>
                  <span>Video would be embedded here</span>
                </VideoPlaceholder>
              )}
            </VideoBox>
          </Section>
        </Container>
      </ContentArea>
    </PageContainer>
  );
};

export default TeamProfile;

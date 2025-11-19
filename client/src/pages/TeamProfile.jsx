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

  /* G Anand image positioning for mobile */
  &.g-anand-image {
    @media (max-width: 768px) {
      object-position: center 30%;
    }
  }

  /* Vijay Anand Subramanyam image positioning for mobile */
  &.vijay-anand-image {
    @media (max-width: 768px) {
      object-position: center 30%;
    }
  }

  /* Suresh Balakrishnan image positioning for mobile */
  &.suresh-balakrishnan-image {
    @media (max-width: 768px) {
      object-position: center 30%;
    }
  }

  /* Dr. Raveendran image positioning for mobile */
  &.dr-raveendran-image {
    @media (max-width: 768px) {
      object-position: center 30%;
    }
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
    'suresh-balakrishnan': {
      id: 'suresh-balakrishnan',
      fullName: 'Suresh Balakrishnan',
      jobTitle: 'Founder, Mentor',
      department: 'Advisory',
      image: '/images/team/Suresh Balakrishnan.jpeg',
      bio: 'Insurance Consultant and Risk Advisor with over 30 years of insurance industry leadership, implementation expertise, and financial lines knowledge across global markets. Makes significant contributions to cyber and allied verticals while bridging underwriting and technology teams. Achieved the Cyber Security Insurance Specialist Award in 2018.',
      specialization: 'Insurance consulting, risk advisory, financial lines, cyber risk transfer, strategic mentorship',
      skills: [
        {
          category: 'Expertise Highlights',
          items: ['Insurance Consulting', 'Risk Advisory', 'Financial Lines Strategy', 'Cyber Insurance Programs']
        },
        {
          category: 'Key Contributions',
          items: ['Mentoring Cyber & Insurance Teams', 'Designing Risk Transfer Frameworks', 'Board-level Risk Reporting', 'Global Implementation Leadership']
        },
        {
          category: 'Recognition',
          items: ['Cyber Security Insurance Specialist Award (2018)', '30+ Years of Industry Impact']
        }
      ],
      achievements: [
        { number: '30+', text: 'Years in Insurance & Risk Advisory' },
        { number: 'Global', text: 'Financial Lines Implementations' },
        { number: '2018', text: 'Cyber Security Insurance Specialist Award' }
      ],
      workRegion: 'Chennai, India',
      phone: '+91 044 4856 8436',
      linkedin: 'https://linkedin.com/in/suresh-balakrishnan',
      education: [
        'Fellowship in Insurance and Risk Management',
        'Advanced Programs in Financial Lines Insurance',
        'Continuous Professional Development in Cyber Insurance'
      ],
      languages: ['English', 'Tamil']
    },
    'ananth': {
      id: 'ananth',
      fullName: 'G Anand',
      jobTitle: 'EVP Sales & GTM Strategy',
      department: '',
      image: '/insurtech/team/G Anand.jpeg',
      qrImage: '/images/team/g-anand-qr.png',
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
      phone: '+91 89258 34989',
      linkedin: 'https://linkedin.com/in/ananth'
    },
    'coo': {
      id: 'coo',
      fullName: 'Vijay Anand Subramanyam',
      jobTitle: 'Chief Operating Officer',
      department: 'Operations',
      image: '/insurtech/team/coo.webp',
      bio: '27 years of rich cross-functional expertise in Banking Operations, Core Banking technology, Risk Management, Cyber Security, Product Development, and Data Privacy. Leading a Cyber Security & Insurtech firm focused on risk management and building organizational cyber resilience. Pioneering Insurtech & Cybersecurity Solutions: Developed innovative products to address ransomware, catastrophic cyber risks, and their financial impact. Providing visibility to Board of Directors and C-level executives. CYBERCAT™ a globally recognized non-linear model for cyber risk quantification in 2017 and CASUALTYCAT™ for quantifying management level risk has been one of the major contributions in the digital space. Proven track record in building cyber maturity levels and enabling risk transfer across diverse industries. He has also contributed towards large scale cyber assessments of critical infrastructure. Vijay Anand has successfully delivered major IT projects for leading public sector undertakings, foreign banks, and IT giants (Infosys, Oracle Financial services, Scope Inti, Bahraini Saudi Bank, First International Merchant Bank, Bank of India & BOB Mauritius).',
      specialization: 'Banking Operations, Core Banking Technology, Risk Management, Cyber Security, Product Development, Data Privacy',
      skills: [
        { category: 'Technical Skills', items: ['Banking Operations', 'Core Banking Technology', 'Risk Management', 'Cyber Security', 'Product Development', 'Data Privacy'] },
        { category: 'Key Contributions', items: ['CYBERCAT™ Development (2017)', 'CASUALTYCAT™ Development', 'Critical Infrastructure Assessments', 'Board & C-level Visibility'] },
        { category: 'Industry Experience', items: ['Infosys', 'Oracle Financial Services', 'Scope Inti', 'Bahraini Saudi Bank', 'First International Merchant Bank', 'Bank of India', 'BOB Mauritius'] }
      ],
      achievements: [
        { number: '27+', text: 'Years Experience' },
        { number: '2017', text: 'CYBERCAT™ Launch' },
        { number: 'Global', text: 'Recognition' }
      ],
      workRegion: 'Chennai, India',
      phone: '+91 044 4856 8436',
      linkedin: 'https://linkedin.com/in/vijayanand-subramaniam',
      education: [
        'Advanced Banking Operations',
        'Core Banking Technology',
        'Risk Management Certification',
        'Cyber Security Specialization',
        'Data Privacy Compliance'
      ],
      languages: ['English', 'Tamil', 'Hindi']
    },
    'dr-raveendran': {
      id: 'dr-raveendran',
      fullName: 'Dr. Raveendran',
      jobTitle: 'Principal Advisor & Architect - Risk Modeling',
      department: 'Research',
      image: '/insurtech/team/dr-raveendran.jpeg',
      bio: 'Dr. Raveendran, with over three decades of experience spanning various industries, holds a Management Graduate degree from the UK, a Ph.D. in Risk, and certifications in Risk Management and Business Continuity Planning. He has notable expertise in Cyber Risk, having published key works in this area and being among the few to design Scientific Derivations of Risk with a focus on Cyber events\' financial impacts. His research extends to Enterprise Risk, ESG exposures, and non-linear modeling of risk using fractals. Currently, Dr. Raveendran is engaged in advanced research on insurer insured interaction using epistemic game theory and cyber risk modeling, particularly focusing on Cyber Risk posture. He is an independent research associate at the National Insurance Academy and a core member of its Center of Excellence for Cyber Risk. His earlier contributions include designing assessment tools for Micro Insurance interventions and innovative frameworks like CRMS for contract risk management and ReSys for recall systems in insurance.',
      specialization: 'Cyber Risk Research, Enterprise Risk Management, ESG Exposures, Non-linear Risk Modeling, Epistemic Game Theory',
      skills: [
        { category: 'Research Expertise', items: ['Cyber Risk Modeling', 'Scientific Derivations of Risk', 'Non-linear Risk Modeling using Fractals', 'Epistemic Game Theory', 'Insurer-Insured Interaction Research'] },
        { category: 'Key Contributions', items: ['Published Key Works in Cyber Risk', 'Designed Scientific Derivations of Risk', 'CRMS Framework for Contract Risk Management', 'ReSys Framework for Recall Systems', 'Micro Insurance Assessment Tools'] },
        { category: 'Affiliations', items: ['Independent Research Associate - National Insurance Academy', 'Core Member - Center of Excellence for Cyber Risk'] }
      ],
      achievements: [
        { number: '30+', text: 'Years of Experience' },
        { number: 'Ph.D.', text: 'in Risk' },
        { number: 'NIA', text: 'Research Associate' }
      ],
      workRegion: 'Chennai, India',
      phone: '+91 044 4856 8436',
      linkedin: 'https://linkedin.com/in/dr-raveendran',
      education: [
        'Ph.D. in Risk',
        'Management Graduate Degree (UK)',
        'Certifications in Risk Management',
        'Business Continuity Planning Certification'
      ],
      languages: ['English', 'Tamil']
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
            <ProfileImage 
              src={member.image} 
              alt={member.fullName}
              className={
                member.fullName === 'G Anand' ? 'g-anand-image' :
                member.fullName === 'Vijay Anand Subramanyam' ? 'vijay-anand-image' :
                member.fullName === 'Suresh Balakrishnan' ? 'suresh-balakrishnan-image' :
                member.fullName === 'Dr. Raveendran' ? 'dr-raveendran-image' : ''
              }
            />
            <ProfileInfo>
              <Name>{member.fullName}</Name>
              <JobTitle>{member.jobTitle}</JobTitle>
              <ContactButtons>
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
                  <FaPhone />
                </InfoIcon>
                <InfoContent>
                  <h4>Phone</h4>
                  <a href={`tel:${member.phone}`}>{member.phone}</a>
                </InfoContent>
              </InfoBox>
            </InfoRow>
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
            {member.qrImage ? (
              <img
                src={member.qrImage}
                alt={`QR code to connect with ${member.fullName}`}
                style={{ width: '140px', height: '140px', borderRadius: '10px', objectFit: 'cover', border: '2px solid #cbd5e1' }}
              />
            ) : (
              <QRPlaceholder>
                <FaQrcode />
              </QRPlaceholder>
            )}
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

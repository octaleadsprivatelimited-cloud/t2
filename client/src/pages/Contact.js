import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Helmet } from 'react-helmet-async';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaArrowRight, FaShieldAlt, FaLock, FaNetworkWired } from 'react-icons/fa';

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
  background: #ffffff;
  padding: 140px 0 100px;
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

const HeroTitle = styled.h1`
  font-size: 4.5rem;
  font-weight: 400;
  color: #1e3a8a;
  margin-bottom: 32px;
  font-family: 'Helvetica Neue', Arial, sans-serif;
  letter-spacing: -1px;
  line-height: 1.15;

  @media (max-width: 1200px) {
    font-size: 3.8rem;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 24px;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.35rem;
  color: #495057;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.7;
  font-weight: 300;
  font-family: 'Helvetica Neue', Arial, sans-serif;

  @media (max-width: 768px) {
    font-size: 1.15rem;
  }
`;

const ContentSection = styled.section`
  max-width: 1400px;
  margin: 0 auto;
  padding: 80px;

  @media (max-width: 768px) {
    padding: 60px 30px;
  }
`;

const MainContent = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 80px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 60px;
  }
`;

const FormSection = styled.div``;

const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  color: #0f172a;
  margin-bottom: 12px;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const SectionDescription = styled.p`
  font-size: 1rem;
  color: #64748b;
  margin-bottom: 40px;
  line-height: 1.6;
`;

const Form = styled.form`
  display: grid;
  gap: 20px;
  max-width: 600px;
`;

const FormGroup = styled.div`
  display: grid;
  gap: 10px;
`;

const Label = styled.label`
  font-size: 0.95rem;
  font-weight: 600;
  color: #0f172a;
`;

const Input = styled.input`
  padding: 16px 20px;
  border: 2px solid #e2e8f0;
  border-radius: 10px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: #ffffff;

  &:focus {
    outline: none;
    border-color: #1e3a8a;
    box-shadow: 0 0 0 4px rgba(30, 58, 138, 0.1);
  }

  &::placeholder {
    color: #94a3b8;
  }
`;

const TextArea = styled.textarea`
  padding: 16px 20px;
  border: 2px solid #e2e8f0;
  border-radius: 10px;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  font-family: inherit;
  transition: all 0.3s ease;
  background: #ffffff;

  &:focus {
    outline: none;
    border-color: #1e3a8a;
    box-shadow: 0 0 0 4px rgba(30, 58, 138, 0.1);
  }

  &::placeholder {
    color: #94a3b8;
  }
`;

const SubmitButton = styled.button`
  padding: 18px 40px;
  background: #1e3a8a;
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 1.05rem;
  font-weight: 600;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition: all 0.3s ease;
  margin-top: 10px;

  &:hover {
    background: #2563eb;
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(30, 58, 138, 0.3);
  }

  &:disabled {
    background: #94a3b8;
    cursor: not-allowed;
    transform: none;
  }
`;

const InfoSection = styled.div``;

const InfoCard = styled.div`
  background: #f8fafc;
  border-radius: 12px;
  padding: 28px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    padding: 24px;
  }
`;

const InfoTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: #0f172a;
  margin-bottom: 20px;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 14px;
  margin-bottom: 18px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const InfoIcon = styled.div`
  width: 38px;
  height: 38px;
  background: linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.1rem;
  flex-shrink: 0;
`;

const InfoDetails = styled.div`
  flex: 1;
`;

const InfoLabel = styled.div`
  font-size: 0.75rem;
  font-weight: 600;
  color: #64748b;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 6px;
`;

const InfoText = styled.div`
  font-size: 0.95rem;
  color: #0f172a;
  line-height: 1.5;
  font-weight: 500;

  a {
    color: #1e3a8a;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #2563eb;
    }
  }
`;

const MapSection = styled.div`
  margin-top: 80px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);

  iframe {
    width: 100%;
    height: 400px;
    border: none;
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you! We will get back to you soon.');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <PageContainer>
      <Helmet>
        <title>Contact Us - Trans Asia Tech</title>
        <meta name="description" content="Get in touch with Trans Asia Tech for cybersecurity solutions, consulting, and support." />
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
          <HeroTitle>What's on your mind?</HeroTitle>
          <HeroSubtitle>
            We're here to help! Tell us what you're looking for and we'll get you connected to the right people.
          </HeroSubtitle>
        </HeroContent>
      </HeroSection>

      <ContentSection>
        <MainContent>
          <FormSection>
            <SectionTitle>Get in Touch</SectionTitle>
            <SectionDescription>
              Fill out the form below and our team will get back to you within 24 hours.
            </SectionDescription>

            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label htmlFor="name">Name *</Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="email">Email *</Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="message">Message *</Label>
                <TextArea
                  id="message"
                  name="message"
                  placeholder="Tell us how we can help..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </FormGroup>

              <SubmitButton type="submit">
                Send Message <FaArrowRight />
              </SubmitButton>
            </Form>
          </FormSection>

          <InfoSection>
            <InfoCard>
              <InfoTitle>Contact Information</InfoTitle>

              <InfoItem>
                <InfoIcon>
                  <FaMapMarkerAlt />
                </InfoIcon>
                <InfoDetails>
                  <InfoLabel>Office Address</InfoLabel>
                  <InfoText>
                    93, 49 Harrington Road<br />
                    Shenoy Nagar<br />
                    Chennai, Tamil Nadu 600030<br />
                    India
                  </InfoText>
                </InfoDetails>
              </InfoItem>

              <InfoItem>
                <InfoIcon>
                  <FaEnvelope />
                </InfoIcon>
                <InfoDetails>
                  <InfoLabel>Email</InfoLabel>
                  <InfoText>
                    <a href="mailto:info@transasiatec.com">info@transasiatec.com</a>
                  </InfoText>
                </InfoDetails>
              </InfoItem>

              <InfoItem>
                <InfoIcon>
                  <FaPhone />
                </InfoIcon>
                <InfoDetails>
                  <InfoLabel>Phone</InfoLabel>
                  <InfoText>
                    <a href="tel:+919876543210">+91 98765 43210</a>
                  </InfoText>
                </InfoDetails>
              </InfoItem>
            </InfoCard>

            <InfoCard>
              <InfoTitle>Business Hours</InfoTitle>
              <InfoText style={{ color: '#64748b', fontSize: '1rem', lineHeight: '1.8' }}>
                <strong style={{ color: '#0f172a', display: 'block', marginBottom: '10px' }}>Monday - Friday</strong>
                9:00 AM - 6:00 PM IST
                <br /><br />
                <strong style={{ color: '#0f172a', display: 'block', marginBottom: '10px' }}>Saturday - Sunday</strong>
                Closed
              </InfoText>
            </InfoCard>
          </InfoSection>
        </MainContent>

        <MapSection>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.2276453926973!2d80.2278!3d13.0827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDA0JzU3LjciTiA4MMKwMTMnNDAuMSJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Trans Asia Tech Location"
          />
        </MapSection>
      </ContentSection>
    </PageContainer>
  );
};

export default Contact;




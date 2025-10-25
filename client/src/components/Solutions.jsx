import React from 'react';
import styled from 'styled-components';
import ScrollStack from './ui/scroll-stack';


const SolutionsContainer = styled.section`
  padding: 24px 0 24px 0;
  background: #ffffff;
  position: relative;

  @media (max-width: 768px) {
    padding: 15px 0 15px 0;
  }
`;

const Container = styled.div`
  width: 100%;
  margin: 0;
  padding: 0 40px;

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #1e3a8a;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;




const Solutions = () => {
  const solutions = [
    {
      title: "Insurtech",
      subtitle: "Revolutionary insurance technology solutions for the digital age",
      badge: "Step 1",
      backgroundImage: "/insurtech/hero/hero_1.webp"
    },
    {
      title: "Products",
      subtitle: "Advanced cybersecurity products to protect your digital assets",
      badge: "Step 2",
      backgroundImage: "/insurtech/hero/women_cyber.webp"
    },
    {
      title: "Consulting",
      subtitle: "Expert consulting services for comprehensive security strategies",
      badge: "Step 3",
      backgroundImage: "/insurtech/hero/industries_globle.webp"
    },
    {
      title: "Services",
      subtitle: "Professional security services tailored to your business needs",
      badge: "Step 4",
      backgroundImage: "/insurtech/hero/worldmap.webp"
    }
  ];

  return (
    <SolutionsContainer>
      <Container>
        <SectionHeader>
          <Title>
            Our Solutions
          </Title>
        </SectionHeader>

        <ScrollStack cards={solutions} />
      </Container>
    </SolutionsContainer>
  );
};

export default Solutions;

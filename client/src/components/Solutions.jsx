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
      image: "/insurtech/hero/hero_1.webp",
      link: "/insurtech",
      description: "Revolutionary insurance technology solutions for the digital age"
    },
    {
      title: "Products",
      image: "/insurtech/hero/women_cyber.webp",
      link: "/products",
      description: "Advanced cybersecurity products to protect your digital assets"
    },
    {
      title: "Consulting",
      image: "/insurtech/hero/industries_globle.webp",
      link: "/consulting",
      description: "Expert consulting services for comprehensive security strategies"
    },
    {
      title: "Services",
      image: "/insurtech/hero/worldmap.webp",
      link: "/services",
      description: "Professional security services tailored to your business needs"
    }
  ];

  const handleItemClick = (item) => {
    // Navigate to the solution page
    window.location.href = item.link;
  };

  return (
    <SolutionsContainer>
      <Container>
        <SectionHeader>
          <Title>
            Our Solutions
          </Title>
        </SectionHeader>

        <ScrollStack items={solutions} onItemClick={handleItemClick} />
      </Container>
    </SolutionsContainer>
  );
};

export default Solutions;

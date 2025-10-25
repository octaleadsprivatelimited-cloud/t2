import React from 'react';
import styled from 'styled-components';

const ScrollStackContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem 0;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 1.5rem 0;
  }
`;

const Card = styled.div`
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  }
`;

const CardImage = styled.div`
  width: 100%;
  height: 200px;
  background-image: ${props => props.$backgroundImage ? `url(${props.$backgroundImage})` : 'none'};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  
  @media (max-width: 768px) {
    height: 150px;
  }
`;

const CardContent = styled.div`
  padding: 2rem;
  text-align: center;
`;

const CardBadge = styled.span`
  display: inline-block;
  background: linear-gradient(135deg, #3b82f6, #1d4ed8);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 1rem;
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #1e3a8a;
  margin: 0 0 1rem 0;
  
  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const CardSubtitle = styled.p`
  font-size: 1rem;
  color: #64748b;
  margin: 0;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const ScrollStack = ({ cards = [] }) => {
  return (
    <ScrollStackContainer>
      {cards.map((card, index) => (
        <Card key={index}>
          {card.backgroundImage && (
            <CardImage $backgroundImage={card.backgroundImage} />
          )}
          <CardContent>
            {card.badge && <CardBadge>{card.badge}</CardBadge>}
            {card.title && <CardTitle>{card.title}</CardTitle>}
            {card.subtitle && <CardSubtitle>{card.subtitle}</CardSubtitle>}
            {card.content && card.content}
          </CardContent>
        </Card>
      ))}
    </ScrollStackContainer>
  );
};

export default ScrollStack;

import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

const ScrollStackContainer = styled.div`
  position: relative;
  height: ${props => props.$sectionHeightMultiplier ? `${props.$sectionHeightMultiplier * 100}vh` : '400vh'};
  background-color: ${props => props.$backgroundColor || '#ffffff'};
  overflow: hidden;
`;

const StickyContainer = styled.div`
  position: sticky;
  top: 0;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Card = styled.div`
  position: absolute;
  width: 90%;
  max-width: 600px;
  height: ${props => props.$cardHeight || '60vh'};
  background: white;
  border-radius: 20px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem;
  opacity: ${props => props.$isActive ? 1 : 0.3};
  transform: ${props => props.$isActive ? 'scale(1)' : 'scale(0.8)'};
  transition: all ${props => props.$animationDuration || '0.6s'} ease;
  background-image: ${props => props.$backgroundImage ? `url(${props.$backgroundImage})` : 'none'};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  
  @media (max-width: 768px) {
    width: 95%;
    height: ${props => props.$cardHeight || '50vh'};
    padding: 2rem;
  }
`;

const CardContent = styled.div`
  text-align: center;
  z-index: 2;
  position: relative;
  
  ${props => props.$backgroundImage && `
    background: rgba(255, 255, 255, 0.9);
    padding: 2rem;
    border-radius: 16px;
    backdrop-filter: blur(10px);
  `}
`;

const CardTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #1e3a8a;
  margin: 0 0 1rem 0;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const CardSubtitle = styled.p`
  font-size: 1.2rem;
  color: #64748b;
  margin: 0 0 1.5rem 0;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
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
`;

const ScrollStack = ({ 
  cards = [], 
  backgroundColor = '#ffffff',
  cardHeight = '60vh',
  animationDuration = '0.6s',
  sectionHeightMultiplier = 4
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const scrollTop = window.pageYOffset;
      const containerTop = containerRef.current.offsetTop;
      const containerHeight = containerRef.current.offsetHeight;
      const windowHeight = window.innerHeight;
      
      const scrollProgress = (scrollTop - containerTop) / (containerHeight - windowHeight);
      const progress = Math.max(0, Math.min(1, scrollProgress));
      
      const newActiveIndex = Math.floor(progress * cards.length);
      setActiveIndex(Math.min(newActiveIndex, cards.length - 1));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [cards.length]);

  return (
    <ScrollStackContainer 
      ref={containerRef}
      $backgroundColor={backgroundColor}
      $sectionHeightMultiplier={sectionHeightMultiplier}
    >
      <StickyContainer>
        {cards.map((card, index) => (
          <Card
            key={index}
            $isActive={index === activeIndex}
            $cardHeight={cardHeight}
            $animationDuration={animationDuration}
            $backgroundImage={card.backgroundImage}
          >
            <CardContent $backgroundImage={card.backgroundImage}>
              {card.badge && <CardBadge>{card.badge}</CardBadge>}
              {card.title && <CardTitle>{card.title}</CardTitle>}
              {card.subtitle && <CardSubtitle>{card.subtitle}</CardSubtitle>}
              {card.content && card.content}
            </CardContent>
          </Card>
        ))}
      </StickyContainer>
    </ScrollStackContainer>
  );
};

export default ScrollStack;

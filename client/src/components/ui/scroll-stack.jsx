import React from 'react';
import styled from 'styled-components';

const ScrollStackContainer = styled.div`
  display: flex;
  gap: 20px;
  overflow-x: auto;
  padding: 20px 0;
  scroll-behavior: smooth;
  
  /* Hide scrollbar but keep functionality */
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
  
  @media (max-width: 768px) {
    gap: 15px;
    padding: 15px 0;
  }
`;

const ScrollStackItem = styled.div`
  flex: 0 0 auto;
  min-width: 300px;
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  }
  
  @media (max-width: 768px) {
    min-width: 250px;
  }
`;

const ItemImage = styled.div`
  width: 100%;
  height: 200px;
  background-image: url(${props => props.$image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  
  @media (max-width: 768px) {
    height: 150px;
  }
`;

const ItemContent = styled.div`
  padding: 20px;
  
  @media (max-width: 768px) {
    padding: 15px;
  }
`;

const ItemTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #1e3a8a;
  margin: 0 0 10px 0;
  
  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const ItemDescription = styled.p`
  font-size: 1rem;
  color: #64748b;
  margin: 0;
  line-height: 1.5;
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const ScrollStack = ({ items = [], onItemClick }) => {
  return (
    <ScrollStackContainer>
      {items.map((item, index) => (
        <ScrollStackItem 
          key={index}
          onClick={() => onItemClick?.(item)}
        >
          <ItemImage $image={item.image} />
          <ItemContent>
            <ItemTitle>{item.title}</ItemTitle>
            {item.description && (
              <ItemDescription>{item.description}</ItemDescription>
            )}
          </ItemContent>
        </ScrollStackItem>
      ))}
    </ScrollStackContainer>
  );
};

export default ScrollStack;

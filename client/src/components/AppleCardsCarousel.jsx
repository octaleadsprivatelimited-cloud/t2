import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const CarouselWrap = styled.div`
  width: 100%;
  overflow: hidden;
  padding: 20px 0 10px;
  cursor: grab;
  position: relative;
`;

const Row = styled(motion.div)`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: minmax(280px, 1fr);
  gap: 20px;
  width: 100%;

  @media (max-width: 768px) {
    grid-auto-columns: 260px;
  }
`;

const Card = styled(Link)`
  height: 400px;
  border-radius: 20px;
  background: #ffffff;
  border: 1px solid #e5e7eb;
  box-shadow: 0 8px 25px rgba(30, 58, 138, 0.1);
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  text-decoration: none;
  cursor: pointer;

  @media (max-width: 768px) {
    height: 350px;
  }
`;

const CardImage = styled(motion.div)`
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  filter: saturate(1.05);
`;

const CardOverlay = styled.div`
  position: relative;
  z-index: 1;
  padding: 24px;
  background: linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.85) 60%, rgba(255,255,255,1) 100%);

  @media (max-width: 768px) {
    padding: 16px;
  }
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 24px;
  color: #0b0b0b;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const Container = styled.div`
  width: 100%;
  margin: 0;
  padding: 0 20px;
  position: relative;
`;

const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);

  &:hover {
    background: rgba(255, 255, 255, 1);
    transform: translateY(-50%) scale(1.1);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  svg {
    width: 16px;
    height: 16px;
    color: #1e3a8a;
  }
`;

const LeftButton = styled(NavButton)`
  left: 20px;
`;

const RightButton = styled(NavButton)`
  right: 20px;
`;

export default function AppleCardsCarousel({ items = [] }) {
  const x = useMotionValue(0);
  const bgX = useTransform(x, [0, -300, -600], [0, 30, 60]);
  const containerRef = useRef(null);
  const rowRef = useRef(null);
  // eslint-disable-next-line no-unused-vars
  const [containerWidth, setContainerWidth] = useState(1200);
  const [maxScroll, setMaxScroll] = useState(0);

  useEffect(() => {
    const measure = () => {
      if (containerRef.current && rowRef.current) {
        const cWidth = containerRef.current.offsetWidth;
        const rWidth = rowRef.current.scrollWidth;
        setContainerWidth(cWidth);
        setMaxScroll(Math.max(0, rWidth - cWidth));
      }
    };
    measure();
    window.addEventListener('resize', measure);
    const timer = setTimeout(measure, 100);
    return () => {
      window.removeEventListener('resize', measure);
      clearTimeout(timer);
    };
  }, [items]);

  const clamp = (val, min, max) => Math.min(Math.max(val, min), max);

  const handleWheel = (e) => {
    const delta = Math.abs(e.deltaY) > Math.abs(e.deltaX) ? e.deltaY : e.deltaX;
    const current = x.get();
    const next = clamp(current - delta * 0.5, -maxScroll, 0);
    
    // Only prevent default if we're actually scrolling the carousel
    if (Math.abs(delta) > 0 && ((current > -maxScroll && delta > 0) || (current < 0 && delta < 0))) {
      e.preventDefault();
      animate(x, next, {
        type: "spring",
        stiffness: 400,
        damping: 40,
        duration: 0.4
      });
    }
  };

  const handleDragStart = () => {
    document.body.style.userSelect = 'none';
  };

  const handleDragEnd = (event, info) => {
    document.body.style.userSelect = '';
    // Prevent navigation on drag
    const velocity = info.velocity.x;
    const current = x.get();
    const inertia = velocity * 0.2;
    const next = clamp(current + inertia, -maxScroll, 0);
    animate(x, next, {
      type: "spring",
      stiffness: 300,
      damping: 30,
      duration: 0.5
    });
  };

  const scrollLeft = () => {
    const current = x.get();
    const next = clamp(current + 320, -maxScroll, 0);
    animate(x, next, {
      type: "spring",
      stiffness: 300,
      damping: 30,
      duration: 0.6
    });
  };

  const scrollRight = () => {
    const current = x.get();
    const next = clamp(current - 320, -maxScroll, 0);
    animate(x, next, {
      type: "spring",
      stiffness: 300,
      damping: 30,
      duration: 0.6
    });
  };

  return (
    <CarouselWrap onWheel={handleWheel}>
      <Container ref={containerRef}>
        <LeftButton onClick={scrollLeft} disabled={x.get() >= 0}>
          <FaChevronLeft />
        </LeftButton>
        <RightButton onClick={scrollRight} disabled={x.get() <= -maxScroll}>
          <FaChevronRight />
        </RightButton>
        <Row 
          ref={rowRef} 
          drag="x" 
          dragConstraints={{ left: -maxScroll, right: 0 }} 
          dragElastic={0.05}
          dragMomentum={false}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          style={{ x }}
        >
          {items.map((item, idx) => (
            <Card
              key={idx}
              to={item.link}
              as={motion(Link)}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              whileTap={{ 
                scale: 0.995,
                transition: { duration: 0.1 }
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <CardImage
                style={{ backgroundImage: `url(${item.image})`, x: bgX }}
                initial={{ scale: 1.05 }}
                animate={{ scale: 1 }}
                transition={{ 
                  duration: 0.8, 
                  ease: "easeOut",
                  type: "spring",
                  stiffness: 100,
                  damping: 20
                }}
              />
              <CardOverlay>
                <Title>{item.title}</Title>
              </CardOverlay>
            </Card>
          ))}
        </Row>
      </Container>
    </CarouselWrap>
  );
}



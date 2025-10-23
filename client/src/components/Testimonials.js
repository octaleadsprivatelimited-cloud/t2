import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    id: "testimonial-01",
    quote: "Trans Asia Tech's cybersecurity solutions have transformed our risk management approach. Their executive dashboard provides clear insights that justify our cyber spend decisions.",
    author: {
      name: "Rajesh Kumar",
      title: "Chief Information Security Officer, Tata Consultancy Services",
      avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    },
  },
  {
    id: "testimonial-02",
    quote: "The comprehensive risk quantification framework has been a game-changer for our organization. We can now make data-driven decisions about our cybersecurity investments.",
    author: {
      name: "Priya Patel",
      title: "Head of IT Security, Infosys Technologies",
      avatarUrl: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    },
  },
  {
    id: "testimonial-03",
    quote: "Trans Asia Tech's robust risk management framework has saved us thousands of hours in manual risk assessment. Their solutions are both powerful and user-friendly.",
    author: {
      name: "Dr. Amit Singh",
      title: "Director of Cybersecurity, Wipro Limited",
      avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    },
  },
  {
    id: "testimonial-04",
    quote: "The AI-powered threat detection capabilities have significantly enhanced our security posture. We've seen a 40% reduction in false positives.",
    author: {
      name: "Kavitha Reddy",
      title: "VP of Information Security, HCL Technologies",
      avatarUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    },
  },
  {
    id: "testimonial-05",
    quote: "Trans Asia Tech's third-party risk management solution has streamlined our vendor assessment process. Highly recommended for enterprise security.",
    author: {
      name: "Vikram Mehta",
      title: "Chief Risk Officer, Tech Mahindra",
      avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    },
  },
];

const TestimonialsContainer = styled.section`
  background: url('/insurtech/Background/homepage.webp') center/cover no-repeat;
  padding: 30px 0;
  position: relative;
  overflow: hidden;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 25px;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: #1e3a8a;
  margin-bottom: 8px;
  font-family: 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

const SectionSubtitle = styled.p`
  font-size: 0.9rem;
  color: #64748b;
  max-width: 400px;
  margin: 0 auto;
  line-height: 1.4;
`;

const TestimonialWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 20px;
  position: relative;
  max-width: 800px;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
  }
`;

const TestimonialCard = styled.figure`
  max-width: 600px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  text-align: center;
  background: rgba(255, 255, 255, 0.9);
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.06);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  flex: 1;

  @media (max-width: 768px) {
    padding: 18px 16px;
    max-width: 100%;
    margin: 0 10px;
  }
`;

const Quote = styled.blockquote`
  font-size: 1rem;
  font-weight: 500;
  color: #1e293b;
  line-height: 1.4;
  font-style: italic;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
`;

const AuthorInfo = styled.figcaption`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

const AuthorDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

const Avatar = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #e2e8f0;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
`;

const AuthorName = styled.p`
  font-size: 0.9rem;
  font-weight: 600;
  color: #1e3a8a;
  margin: 0;
`;

const AuthorTitle = styled.cite`
  font-size: 0.8rem;
  color: #64748b;
  font-style: normal;
  margin: 0;
`;

const StarRating = styled.div`
  display: flex;
  gap: 4px;
  justify-content: center;
`;

const Star = styled(motion.div)`
  color: #fbbf24;
  font-size: 0.8rem;
`;

const NavigationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 20px;

  @media (max-width: 768px) {
    margin-top: 15px;
  }
`;

const MobileNavigation = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin: 15px 0;
  }
`;

const NavigationButton = styled.button`
  background: rgba(255, 255, 255, 0.9);
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  color: #1e3a8a;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;

  &:hover {
    background: #1e3a8a;
    color: white;
    transform: translateY(-50%) scale(1.1);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: translateY(-50%);
  }

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

const LeftButton = styled(NavigationButton)`
  left: -25px;

  @media (max-width: 768px) {
    position: static;
    transform: none;
    margin-bottom: 10px;
  }
`;

const RightButton = styled(NavigationButton)`
  right: -25px;

  @media (max-width: 768px) {
    position: static;
    transform: none;
    margin-top: 10px;
  }
`;

const PaginationDots = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
`;

const Dot = styled.button`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: none;
  background: ${props => props.active ? '#1e3a8a' : '#cbd5e1'};
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${props => props.active ? '#1e3a8a' : '#94a3b8'};
    transform: scale(1.1);
  }
`;

const Testimonials = () => {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  const transition = {
    type: "spring",
    duration: 0.8,
  };

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonialIndex((prevIndex) => 
        (prevIndex + 1) % testimonials.length
      );
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentTestimonialIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentTestimonialIndex((prevIndex) => 
      (prevIndex + 1) % testimonials.length
    );
  };

  return (
    <TestimonialsContainer>
      <Container>
        <SectionHeader>
          <SectionTitle>What Our Clients Say</SectionTitle>
          <SectionSubtitle>
            Hear from industry leaders who trust Trans Asia Tech for their cybersecurity needs
          </SectionSubtitle>
        </SectionHeader>

        <TestimonialWrapper>
          <LeftButton 
            onClick={goToPrevious}
            aria-label="Previous testimonial"
          >
            <FaChevronLeft />
          </LeftButton>

          <TestimonialCard>
            <AnimatePresence initial={false} mode="popLayout">
              <motion.div
                key={currentTestimonialIndex + "-content"}
                initial={{
                  opacity: 0,
                  scale: 0.98,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                  transition: {
                    ...transition,
                    delay: 0.2,
                  },
                }}
                exit={{
                  opacity: 0,
                  scale: 0.98,
                  y: 20,
                  transition: {
                    ...transition,
                    delay: 0.06,
                  },
                }}
              >
                <Quote>
                  "{testimonials[currentTestimonialIndex].quote}"
                </Quote>
              </motion.div>

              <motion.div
                key={currentTestimonialIndex + "-author"}
                initial={{
                  opacity: 0,
                  scale: 0.98,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                  transition: {
                    ...transition,
                    delay: 0.4,
                  },
                }}
                exit={{
                  opacity: 0,
                  scale: 0.98,
                  y: 20,
                  transition,
                }}
              >
                <AuthorInfo>
                  <AuthorDetails>
                    <Avatar 
                      src={testimonials[currentTestimonialIndex].author.avatarUrl} 
                      alt={testimonials[currentTestimonialIndex].author.name} 
                    />
                    <div>
                      <AuthorName>{testimonials[currentTestimonialIndex].author.name}</AuthorName>
                      <AuthorTitle>{testimonials[currentTestimonialIndex].author.title}</AuthorTitle>
                    </div>
                  </AuthorDetails>
                  
                  <StarRating>
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star
                        key={`${currentTestimonialIndex}-${index}`}
                        initial={{
                          opacity: 0,
                          scale: 0.9,
                          y: 6,
                        }}
                        animate={{
                          opacity: 1,
                          scale: 1,
                          y: 0,
                          transition: {
                            ...transition,
                            delay: 0.5 + index * 0.1,
                          },
                        }}
                        exit={{
                          opacity: 0,
                          scale: 0.9,
                          y: 6,
                          transition: {
                            ...transition,
                            delay: 0,
                          },
                        }}
                      >
                        <FaStar />
                      </Star>
                    ))}
                  </StarRating>
                </AuthorInfo>
              </motion.div>
            </AnimatePresence>
          </TestimonialCard>

          <RightButton 
            onClick={goToNext}
            aria-label="Next testimonial"
          >
            <FaChevronRight />
          </RightButton>
        </TestimonialWrapper>

        <MobileNavigation>
          <NavigationButton 
            onClick={goToPrevious}
            aria-label="Previous testimonial"
          >
            <FaChevronLeft />
          </NavigationButton>
          
          <NavigationButton 
            onClick={goToNext}
            aria-label="Next testimonial"
          >
            <FaChevronRight />
          </NavigationButton>
        </MobileNavigation>

        <NavigationContainer>
          <PaginationDots>
            {testimonials.map((_, index) => (
              <Dot
                key={index}
                active={index === currentTestimonialIndex}
                onClick={() => setCurrentTestimonialIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </PaginationDots>
        </NavigationContainer>
      </Container>
    </TestimonialsContainer>
  );
};

export default Testimonials;
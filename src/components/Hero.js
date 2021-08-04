import React, { useEffect, useState, useRef } from "react";
// import { FaSlideshare } from 'react-icons/fa';
import styled, { css } from "styled-components";
import Slides from "../data/SliderData";
import { Button } from "./Button";
import {
  IoIosArrowRoundForward,
  IoMdArrowBack,
  IoMdArrowForward,
} from "react-icons/io";

// console.log(Slides)

const HeroSection = styled.section`
  height: 100vh;
  max-height: 1100px;
  position: relative;
  overflow: hidden;
`;
const Herowrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
`;

const HeroSlide = styled.div`
  z-index: 1;
  width: 100%;
  height: 100%;
`;
const HeroSlider = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;

  &::before {
    content: "";
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100vh;
    left: 0;
    overflow: hidden;
    opacity: 0.4;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0.2) 50%,
      rgba(0, 0, 0, 0.6) 100%
    );
  }
`;
const Img = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  object-fit: cover;
`;
const HeroContent = styled.div`
  ${"" /* background-color:#20252b; */}
  position:relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  max-width: 1600px;
  transform: translate(10%, 250%);
  ${"" /* width:calc(100% -100px); */}
  color:#fff;
  h1 {
    font-size: clamp(1rem, 8vw, 2rem);
    font-weight: 400;
    text-decoration: none;
    text-shadow: 8px 0px 20px rgba();
  }
`;
const SliderButtons = styled.div`
  position: absolute;
  bottom: 50px;
  right: 50px;
  display: flex;
  z-index: 10;
`;

const arrowButtons = css`
  width: 50px;
  height: 50px;
  color: #fff;
  cursor: pointer;
  background-color: #20252b;
  border-radius: 50px;
  padding: 10px;
  margin-right: 1rem;
  user-select: none;
  transition: all 0.5s ease-in-out;
  font-size: 20px;

  &:hover {
    background: #313842;
    transform: scale(1.05);
  }
`;

const PrevArrow = styled(IoMdArrowBack)`
  ${arrowButtons}
`;
const NextArrow = styled(IoMdArrowForward)`
  ${arrowButtons}
`;

const Hero = () => {
  const [current, setCarrent] = useState(0);
  const length = Slides.length;
  const timeout = useRef(null);

  useEffect(() => {
    const nextSlide = () => {
      setCarrent((current) => (current === length - 1 ? 0 : current + 1));
    };
    timeout.current = setTimeout(nextSlide, 3000);

    return () => {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, [current, length]);

  const nextSlide = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    setCarrent(current === length - 1 ? 0 : current + 1);

    console.log(current);
  };

  const prevSlide = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    setCarrent(current === 0 ? length - 1 : current - 1);
    console.log(current);
  };

  // if (!Array.isArray(slides) || slides.length <= 0) {
  //     return null;
  // }

  return (
    <HeroSection>
      <Herowrapper>
        {Slides.map((Slides, index) => {
          return (
            <HeroSlide key={index}>
              {index === current && (
                <HeroSlider>
                  <Img src={Slides.image} alt={Slides.alt} />
                  <HeroContent>
                    <h1>{Slides.title}</h1>
                    <p>{Slides.price}</p>
                    <Button
                      to={Slides.path}
                      primary="true"
                      css={`
                        max-width: 160px;
                      `}
                    >
                      {Slides.label}
                      <IoIosArrowRoundForward />
                    </Button>
                  </HeroContent>
                </HeroSlider>
              )}
            </HeroSlide>
          );
        })}
        <SliderButtons>
          <PrevArrow onClick={prevSlide} />
          <NextArrow onClick={nextSlide} />
        </SliderButtons>
      </Herowrapper>
    </HeroSection>
  );
};

export default Hero;

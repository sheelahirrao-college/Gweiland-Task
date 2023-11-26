"use client";
import { useState, useEffect } from 'react';
import CarouselComp from './carouselcomponent';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #eaeaea;
  padding-bottom: 100px;
`;
export default function Carousel() {
    const [index, setIndex] = useState(0);
    const [width, setWidth] = useState(0);
    const [xPosition, setXPosition] = useState(0);
    const images = [
    "/carousel1.png", "/carousel2.png", "/carousel3.png", "/carousel4.png", "/carousel5.png"
    ];

    const handleClickPrev = () => { 
    if (index === 0) return;
    setIndex(index - 1);
    setXPosition(xPosition + width);
    };

    const handleClicknext = () => {
        if (index === images.length - 1) {
        setIndex(0);
        setXPosition(0);
        } else {
        setIndex(index + 1);
        setXPosition(xPosition - width);
        }
    };

    useEffect(() => {
        const handleAutoplay = setInterval(handleClicknext, 3000);
        return () => clearInterval(handleAutoplay);
      }, [handleClicknext]);

  return (
    <Wrapper className="App">
      <CarouselComp
        images={images}
        setWidth={setWidth}
        xPosition={xPosition}
        handleClickPrev={handleClickPrev}
        handleClicknext={handleClicknext}
      />
    </Wrapper>
  );
}
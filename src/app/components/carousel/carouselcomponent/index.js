import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import Buttons from '../button';

const Wrapper = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;
const Slide = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  transition: transform 0.6s ease-in-out;
  transform: ${props => `translateX(${props.xPosition}px)`}; // (*)
  img {
      width: 100%;
      height: 100%;
    }
`;
function CarouselComp({
  images,
  setWidth,
  xPosition,
  handleClickPrev,
  handleClicknext,
}) {
  const slideRef = useRef();
useEffect(() => {
    if (slideRef.current) {
      const width = slideRef.current.clientWidth;
      setWidth(width);
    }
  }, [setWidth]);
return (
    <Wrapper>
      <Slide xPosition={xPosition} ref={slideRef}>
        {images.map((img, i) => (
          <img src={img} key={i} />
        ))}
      </Slide>
      <Buttons
        handleClickPrev={handleClickPrev}
        handleClicknext={handleClicknext}
      />
    </Wrapper>
  );
}
export default CarouselComp;
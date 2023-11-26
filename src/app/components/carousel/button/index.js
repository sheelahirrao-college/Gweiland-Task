import React from 'react';
import styled from 'styled-components';

const Button = styled.img`
  position: absolute;
  top: 50%;
  height: 10%;
  width: 10%;
  z-index: 10;
  cursor: pointer;
  transform: translateY(-50%);
  left: ${props => props.side === 'prev' && 10}px;
  right: ${props => props.side === 'next' && 10}px;
`;
function Buttons({ handleClickPrev, handleClicknext }) {
  return (
    <>
      <Button src="/carouselbuttonleft.svg" side="prev" onClick={handleClickPrev} />
      <Button src="/carouselbuttonright.svg" side="next" onClick={handleClicknext} />
    </>
  );
}
export default Buttons;
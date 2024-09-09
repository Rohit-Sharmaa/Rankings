import React from "react";
import styled, { keyframes, css } from "styled-components";
import row1 from "./data";

import "./coursel.css";
export default function coursel() {
  return (
    <AppContainer className="top_container">
      <Wrapper>
        <Marquee>
          <MarqueeGroup>
            {row1.map((el, index) => (
              <ImageGroup key={index}>
                <Image src={el} alt={`row1-${index}`} />
              </ImageGroup>
            ))}
          </MarqueeGroup>
          <MarqueeGroup>
            {row1.map((el, index) => (
              <ImageGroup key={index + row1.length}>
                <Image src={el} alt={`row1-copy-${index}`} />
              </ImageGroup>
            ))}
          </MarqueeGroup>
        </Marquee>
      </Wrapper>
    </AppContainer>
  );
}

const AppContainer = styled.div`
  width: 100%;
 margin-top: 3rem
  color: #000000;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

// const Text = styled.div`
//   font-size: 2rem;
//   font-weight: 600;
//   margin-bottom: 10px;
//   font-family: bold;
//   color: ${(props) => (props.theme === "dark__theme" ? "#fff" : "#02203c")};
// `;

// const Note = styled.div`
//   font-size: 1.3rem;
//   font-weight: 500;
//   margin-bottom: 40px;
//   font-family: monospace;
//   font-family: bold;
//   color: ${(props) => (props.theme === "dark__theme" ? "#fff" : "#02203c")};
// `;

const Marquee = styled.div`
  display: flex;
  width: 950px;
  overflow: hidden;
  user-select: none;
  margin-top: 10rem

  mask-image: linear-gradient(
    to right,
    hsl(0 0% 0% / 0),
    hsl(0 0% 0% / 1) 10%,
    hsl(0 0% 0% / 1) 90%,
    hsl(0 0% 0% / 0)
  );
`;

const scrollX = keyframes`
  from {
    left: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const common = css`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  animation: ${scrollX} 20s linear infinite;
`;

const MarqueeGroup = styled.div`
  ${common}
`;
// const MarqueeGroup2 = styled.div`
//   ${common}
//   animation-direction: reverse;
//   animation-delay: -3s;
// `;

const ImageGroup = styled.div`
  display: grid;
  place-items: center;
  width: clamp(10rem, 1rem + 30vmin, 30rem);
  padding: calc(clamp(10rem, 1rem + 30vmin, 30rem) / 10);
`;

const Image = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
  aspect-ratio: 16/9;
  padding: 5px 20px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

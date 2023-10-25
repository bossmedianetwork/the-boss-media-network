import styled, { keyframes } from "styled-components";

const glowRed = keyframes`
  0% {
    box-shadow: 0 0 5px #d83535, 0 0 10px #d83535, 0 0 15px #d83535, 0 0 20px #d83535;
  }
  100% {
    box-shadow: 0 0 10px #d83535, 0 0 20px #d83535, 0 0 30px #d83535, 0 0 40px #d83535;
  }
`;

const glowGold = keyframes`
  0% {
    box-shadow: 0 0 5px #DAA520, 0 0 10px #DAA520, 0 0 15px #DAA520, 0 0 20px #DAA520;
  }
  100% {
    box-shadow: 0 0 10px #DAA520, 0 0 20px #DAA520, 0 0 30px #DAA520, 0 0 40px #DAA520;
  }
`;

export const StyledButton = styled("button")<any>`
  background: ${(p) => p.color ? `linear-gradient(45deg, #B8860B, #8B6914)` : "radial-gradient(circle farthest-corner at center center, #ff5252 0%, #e63939 5%, #ff2727 90%, #b20000 100%)"};
  color: #FFFFFF;
  font-size: 1rem;
  font-weight: 700;
  width: 100%;
  border: none;
  border-radius: 4px;
  padding: 13px 0;
  cursor: pointer;
  margin-top: 0.625rem;
  max-width: 180px;
  transition: all 0.3s ease-in-out;
  position: relative;
  outline: none;
  box-shadow: 0 0 10px #d83535, 0 0 20px #d83535;
  animation: ${glowRed} 1.5s infinite alternate;

  &:hover,
  &:active,
  &:focus {
    background: radial-gradient(circle farthest-corner at center center, #ffd700 1%, #DAA520 90%, #8B6914 100%);
    box-shadow: 0 0 20px #DAA520, 0 0 30px #DAA520, 0 0 40px #DAA520;
    animation: ${glowGold} 1.5s infinite alternate;
  }
`;

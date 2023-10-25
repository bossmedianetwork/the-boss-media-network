import styled from "styled-components";

export const StyledButton = styled("button")<any>`
  background: ${(p) => p.color ? `linear-gradient(45deg, #B8860B, #8B6914)` : "radial-gradient(circle at center, #fe003e 1%, #d10000 90%, #b20000 100%)"};
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
  box-shadow: 0 0 10px ${(p) => p.color ? "#B8860B" : "#da0000"},
              0 0 20px ${(p) => p.color ? "#B8860B" : "#da0000"};

  &:hover,
  &:active,
  &:focus {
    background: radial-gradient(circle at center, #ffd700 1%, #DAA520 90%, #8B6914 100%);
    box-shadow: 0 0 20px #B8860B;
  }
`;
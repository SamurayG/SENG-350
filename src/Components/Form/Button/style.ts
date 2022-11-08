import styled from "styled-components";

export const ButtonCss = styled.button`
  font-size: 1rem;
  font-family: var(--type-first);
  cursor: pointer;
  border: none;
  border-radius: 0.4rem;
  background: #292929;
  color: #FFFFFF;
  box-sizing: border-box;
  padding: 0.8rem 1.2rem;
  transition: 0.2s;
  min-width: 8rem;

  &:hover,
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px #616161, 0 0 0 4px #292929;
  }

  &:disabled {
    opacity: 0.5;
    cursor: wait;
  }
`;
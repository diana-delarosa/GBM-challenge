import styled from "styled-components";

export const StyledButton = styled.button`
  display: inline-flex;
  justify-content: center;
  padding: 1rem;
  background: ${({ theme }) =>
    `linear-gradient(to right, ${theme.colors.dark}, ${theme.colors.primary})`};
  color: ${({ theme }) => theme.colors.white};
  border: 0 solid;
  border-radius: 2rem;
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }

  svg {
    margin-right: 0.5rem;
  }
`;

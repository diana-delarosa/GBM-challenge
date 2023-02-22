import styled from "styled-components";

export const Title = styled.h1`
  text-align: ${({ align }) => align && align};
  background-image: ${({ theme }) =>
    `linear-gradient(to right, ${theme.colors.dark}, ${theme.colors.light})`};
  background-repeat: repeat;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

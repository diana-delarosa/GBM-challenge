import styled from "styled-components";
import { Container } from "./Container.styled";

export const ErrorContainer = styled(Container)`
  max-width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ErrorTitle = styled.h1`
  color: ${({ theme }) => theme.colors.dark};
  font-size: 2.5rem;
`;

export const ErrorDescription = styled.p`
  font-weight: 700;
  margin: 12px 0;
`;

export const ErrorMessage = styled(ErrorDescription)`
  font-style: italic;
  color: ${({ theme }) => theme.colors.error};
`;

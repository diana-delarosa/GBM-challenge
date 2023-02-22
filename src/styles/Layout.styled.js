import styled from "styled-components";
import { Container } from "./Container.styled";

export const LayoutContainer = styled(Container)`
  width: 100%;
  padding-top: ${({ theme }) => theme.heights.header};
  padding-bottom: 20px;
  position: relative;
  min-height: ${({ theme }) => `calc(100vh - ${theme.heights.footer})`};
  display: ${({ center }) => center && "flex"};
  justify-content: ${({ center }) => center && "center"};
  align-items: ${({ center }) => center && "center"};
`;

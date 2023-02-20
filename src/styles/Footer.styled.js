import styled from "styled-components";

export const FooterContainer = styled.footer`
  height: ${({ theme }) => theme.heights.footer};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.gray};
`;

import styled from "styled-components";

export const Spinner = styled.div`
  border: ${({ theme }) => `12px solid ${theme.colors.light}`};
  border-top: ${({ theme }) => `12px solid ${theme.colors.dark}`};
  border-radius: 50%;
  height: 80px;
  width: 80px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;

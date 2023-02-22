import styled from "styled-components";
import { Container } from "./Container.styled";

export const LoginContainer = styled(Container)`
  width: 100%;
  max-width: 420px;
  padding: 1.3rem; 
  display: flex;
  flex-direction: column;
  position: relative;
  border-radius: 2rem;
  box-shadow: ${({ theme }) => `0 1px 8px ${theme.colors.gray}`};

  .title-iconn {
    height: 100%;
    width: 15%;
    margin: 8px auto;
    color: ${({ theme }) => theme.colors.gray};
  }

  .title-icon {
    display: flex;
    justify-content: center;
    color: ${({ theme }) => theme.colors.gray};

    svg {
      height: 100%;
      width: 15%;
      margin: 8px;
    }
  }

  form {
    margin: 0 auto;
    width: 100%;
    max-width: 414px;
    padding: 16px;
    display: flex;
    flex-direction: column;
    position: relative;
  } 
`;
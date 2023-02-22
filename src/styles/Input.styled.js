import styled from "styled-components";

export const StyledInput = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 10px;

  svg {
    position: absolute;
    top: 1rem;
    min-width: 50px;
    fill: ${({ theme }) => theme.colors.gray};
  }

  input {
    width: 100%;
    padding: 1rem;
    padding-left: 3rem;
    margin-bottom: 0.9rem;
    border-radius: 2rem;
    outline: 0;
    border: 1px solid rgba(245, 245, 245, 0.7);
    font-size: 14px;
    transition: all 0.3s ease-out;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.1), 0 1px 1px rgba(0, 0, 0, 0.1);

    :focus,
    :hover {
      box-shadow: 0 0 3px rgba(0, 0, 0, 0.15), 0 1px 5px rgba(0, 0, 0, 0.1);
    }
  }
`;

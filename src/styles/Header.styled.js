import styled from "styled-components";
import { Container } from "./Container.styled";

export const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
`;

export const Nav = styled.nav`
  display: flex;
  height: ${({ theme }) => theme.heights.header};
  font-weight: 600;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 1px 4px rgb(0 0 0 / 15%);
`;

export const NavContainer = styled(Container)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavLogo = styled.a`
  color: ${({ theme }) => theme.colors.dark};
  text-decoration: none;
`;

export const NavMenu = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;

  li {
    margin-left: 2rem;

    a {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.light};
      cursor: pointer;

      :hover {
        color: ${({ theme }) => theme.colors.primary};
      }
    }

    img {
      border-radius: 50%;
      max-height: 2rem;
      display: flex;
    }
  }
`;

export const DropdownMenu = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 0;
  background-color: ${({ theme }) => theme.colors.white};
  min-width: 150px;
  padding: 1rem;
  box-shadow: ${({ theme }) => `0 1px 8px ${theme.colors.gray}`};
`


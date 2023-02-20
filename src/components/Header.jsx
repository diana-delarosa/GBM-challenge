import {
  Nav,
  NavContainer,
  NavLogo,
  StyledHeader,
} from "../styles/Header.styled";

const Header = () => {
  return (
    <StyledHeader>
      <Nav>
        <NavContainer>
          <NavLogo href="#">Índice de Precios y Cotizaciones</NavLogo>
        </NavContainer>
      </Nav>
    </StyledHeader>
  );
};

export default Header;

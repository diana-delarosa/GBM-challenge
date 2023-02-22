import { googleLogout } from "@react-oauth/google";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import {
  DropdownMenu,
  Nav,
  NavContainer,
  NavLogo,
  NavMenu,
  StyledHeader,
} from "../styles/Header.styled";
import { removeUserDataSession } from "../utils/auth";

const Header = () => {
  const { auth, setAuth, loading } = useAuth();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const dropdownOption = useRef(null);

  const signOut = () => {
    setAuth(null);
    removeUserDataSession();
    navigate("/login");
    googleLogout();
  };

  return (
    <StyledHeader>
      <Nav>
        <NavContainer>
          <NavLogo href="/">Índice de Precios y Cotizaciones</NavLogo>
          <NavMenu>
            {auth && !loading && (
              <li
                ref={dropdownOption}
                onMouseEnter={() => setOpen(true)}
                onMouseLeave={() => setOpen(false)}
              >
                <img src={auth.picture} alt="" />
                {open && (
                  <DropdownMenu>
                    <a onClick={signOut}>Cerrar sesión</a>
                  </DropdownMenu>
                )}
              </li>
            )}
          </NavMenu>
        </NavContainer>
      </Nav>
    </StyledHeader>
  );
};

export default Header;

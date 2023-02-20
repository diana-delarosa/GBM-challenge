import { FooterContainer } from "../styles/Footer.styled";
import { getCurrentDate } from "../utils/utils";

const Footer = () => {
  return (
    <FooterContainer>
      By Diana De la Rosa &copy; {getCurrentDate().getFullYear()}
    </FooterContainer>
  );
};

export default Footer;

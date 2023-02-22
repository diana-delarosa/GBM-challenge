import { LoginContainer } from "../styles/Login.styled";
import { 
  FaUser, 
  FaGoogle, 
  FaLock, 
  FaEnvelope 
} from "react-icons/fa";
import Input from "./shared/Input";
import Button from "./shared/Button";
import { Title } from "../styles/Title.styled";
import { ErrorMessage } from "../styles/Error.styled";
import PropTypes from 'prop-types';

const LoginForm = ({ onGoogleLogin, error }) => {
  const handleSubmit = e => e.preventDefault();

  return (
    <LoginContainer>
      <FaUser className="title-iconn" />
      <Title align="center">Iniciar sesión</Title>
      <form>
        <Input icon={<FaEnvelope />} type="email" placeholder="Correo" />
        <Input icon={<FaLock />} type="password" placeholder="Contraseña" />
        <Button onClick={handleSubmit}>Entrar</Button>
      </form>
      {error && <ErrorMessage align="center">{error}</ErrorMessage>}
      <Button onClick={onGoogleLogin}>        
        <FaGoogle />
        Iniciar sesión con Google
      </Button>
    </LoginContainer>
  );
};

LoginForm.propTypes = {
  onGoogleLogin: PropTypes.func.isRequired,
  error: PropTypes.string
}

export default LoginForm;

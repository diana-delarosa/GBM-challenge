import { useAuth } from "../hooks/useAuth";
import { useGreeting } from "../hooks/useGreeting";
import { Title } from "../styles/Title.styled";

const Greetings = () => {
  const { auth } = useAuth();
  const { greeting } = useGreeting();

  return (
    <Title>
      ¡Hola {auth.given_name}! {greeting}
    </Title>
  );
};

export default Greetings;

import { useGreeting } from "../hooks/useGreeting";

const Greetings = () => {
  const { greeting } = useGreeting();
  
  return <h1>¡{greeting}!</h1>
};

export default Greetings;

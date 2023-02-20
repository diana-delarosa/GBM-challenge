import { useRouteError } from "react-router-dom";
import { 
  ErrorContainer, 
  ErrorDescription, 
  ErrorMessage, 
  ErrorTitle 
} from "../styles/Error.styled";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <ErrorContainer>
      <ErrorTitle>Oops.</ErrorTitle>
      <ErrorDescription>
        Lo sentimos, ha ocurrido un error.
      </ErrorDescription>
      <ErrorMessage>
        {error.statusText || error.message}
      </ErrorMessage>
    </ErrorContainer>
  );
};

export default ErrorPage;

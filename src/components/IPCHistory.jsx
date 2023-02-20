import { ErrorMessage } from "../styles/Error.styled";
import { Spinner } from "../styles/Spinner.styled";
import LineChart from "./LineChart";

const IPCHistory = ({ data, isLoading, error }) => {
  return (
    <>
      {isLoading && <Spinner />}
      {error && <ErrorMessage>{error.message}</ErrorMessage>}
      {!isLoading && !error && <LineChart data={data} />}
    </>
  );
};

export default IPCHistory;

import { ErrorMessage } from "../styles/Error.styled";
import { Spinner } from "../styles/Spinner.styled";
import LineChart from "./LineChart";
import PropTypes from 'prop-types';

const IPCHistory = ({ data, isLoading, error }) => {
  return (
    <>
      {isLoading && <Spinner />}
      {error && <ErrorMessage>{error.message}</ErrorMessage>}
      {!isLoading && !error && <LineChart data={data} />}
    </>
  );
};

IPCHistory.propTypes = {
  data: PropTypes.array,
  isLoading: PropTypes.bool,
  error: PropTypes.object
}

export default IPCHistory;

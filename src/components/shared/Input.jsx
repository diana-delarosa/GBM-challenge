import { StyledInput } from "../../styles/Input.styled";
import PropTypes from 'prop-types';

const Input = ({ icon, type, placeholder }) => {
  return (
    <StyledInput>
      {icon}
      <input type={type} placeholder={placeholder} />
    </StyledInput>
  );
};

Input.propTypes = {
  icon: PropTypes.node,
  type: PropTypes.oneOf([
    'text',
    'email',
    'password'
  ]),
  placeholder: PropTypes.string
}

Input.defaultProps = {
  type: 'text',
  placeholder: ''
}

export default Input;

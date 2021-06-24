import StyledButton from './button.styles';

const Button = ({ children, color, fullWidth }) => {
  return (
    <StyledButton color={color} fullWidth={fullWidth}>
      {children}
    </StyledButton>
  );
};

Button.defaultProps = {
  color: 'primary',
};

export default Button;

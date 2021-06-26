import StyledButton from './button.styles';
import { memo } from 'react';

const Button = memo(({ children, color, fullWidth, onClick }) => {
  return (
    <StyledButton 
      color={color}
      fullWidth={fullWidth}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
});

Button.defaultProps = {
  color: 'primary',
};

export default Button;

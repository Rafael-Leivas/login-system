import React from 'react';
import { ButtonCustomizado } from './styles';

const Button = ({
  type,
  text,
  onClick,
  //disabled,
}) => {
  return (
    <ButtonCustomizado
      type={type}
      text={text}
      onClick={onClick}>
        {text}
      </ButtonCustomizado>
  );
}

export default Button;
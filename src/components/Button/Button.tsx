import React from 'react';

import  './Button.styles.scss'
import { ButtonProps } from './types';



const Button: React.FC<ButtonProps> = ({children, onClick, buttonType='primary', size ='medium'}) => {
  return <button className='primary'  onClick={onClick}>{children}</button>;
}

export default Button;
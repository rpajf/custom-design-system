 type ButtonType = 'primary' | 'inline' | 'filled';
 type ButtonSize = 'small' | 'medium' | 'large';

export interface ButtonProps {
	size?: ButtonSize;
	buttonType?: ButtonType;
	onClick?: (e: React.SyntheticEvent) => void;
  children?: React.ReactNode | string;
}

import React from 'react';
import s from './Button.module.css'

const Button = ({children, ...props}) => {
	return (
		<button {...props} className={s.btn}>
			{children}
		</button>
	);
};

export default Button;
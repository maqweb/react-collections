import React from 'react';
import logo from "../../../logo.svg";
import s from './Loader.module.css'

const Loader = () => {
	return (
		<div className={s.loader}>
			<img src={logo} className={s.loadLogo} alt="logo"/>
		</div>
	);
};

export default Loader;
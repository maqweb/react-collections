import React from 'react';
import s from './Modal.module.css'

const Modal = ({children, visible, setVisible}) => {

	const rootClasses = visible ? `${s.modal} ${s.active}` : s.modal

	return (
		<div className={rootClasses} onClick={() => setVisible(false)}>
			<div className={s.modalContent} onClick={(e) => e.stopPropagation()}>
				{children}
			</div>
		</div>
	);
};

export default Modal;
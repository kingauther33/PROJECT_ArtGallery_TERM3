import React from 'react';
import ReactDOM from 'react-dom';

const Backdrop = (props) => {
	return <div id="bodyClick" onClick={props.onClick}></div>;
};

const Modal = (props) => {
	return (
		<>
			{ReactDOM.createPortal(
				<Backdrop onClick={props.onClick} />,
				document.querySelector('#modalPortal')
			)}
		</>
	);
};

export default Modal;

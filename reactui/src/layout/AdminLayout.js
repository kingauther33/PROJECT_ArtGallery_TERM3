import React from 'react';

const AdminLayout = (props) => {
	return (
		<>
			<div className="x_container x_bg-primary x_border-16">
				<h1 className="x_text-secondary x_font-44 text-center">Test H1</h1>
			</div>
			{props.children}
		</>
	);
};

export default AdminLayout;

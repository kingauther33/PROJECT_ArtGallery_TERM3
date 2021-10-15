import React from 'react';

const AdminLayout = (props) => {
	return (
		<>
			<div className="h2">In AdminLayout</div>
			{props.children}
		</>
	);
};

export default AdminLayout;

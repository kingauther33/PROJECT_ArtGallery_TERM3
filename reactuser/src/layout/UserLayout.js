import React from 'react';

const UserLayout = (props) => {
	return (
		<>
			<h2 className="h2">In UserLayout</h2>
			{/* HEADER */}
			{props.children}
			{/* FOOTER */}
		</>
	);
};

export default UserLayout;

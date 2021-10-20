import React from 'react';

const UserLayout = (props) => {
	return (
		<>
			<h2>In UserLayout</h2>
			{props.children}
		</>
	);
};

export default UserLayout;

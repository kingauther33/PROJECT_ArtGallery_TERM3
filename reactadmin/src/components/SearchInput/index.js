import React from 'react';
import { WidthResponsive } from 'components/UI/WidthResponsive';

const SearchInput = () => {
	return (
		<WidthResponsive>
			<div className="input-group no-border">
				<input type="text" className="form-control" placeholder="Search..." />
				<div className="input-group-append">
					<div className="input-group-text">
						<i className="now-ui-icons ui-1_zoom-bold"></i>
					</div>
				</div>
			</div>
		</WidthResponsive>
	);
};

export default SearchInput;

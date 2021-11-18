import React from 'react';

const ImagePreview = (props) => {
	const { imageURL, name } = props;

	return (
		<>
			<div className="col-md-3 align-self-start">
				<h6
					className="card-title"
					style={{ margin: '10px 0', letterSpacing: '-0.08em' }}
				>
					Preview
				</h6>
			</div>
			<div className="col-md-9">
				<img src={imageURL} style={{ width: '50%' }} alt={name} />
			</div>
			<div className="offset-2 col-md-10 mb-1">&nbsp;</div>
		</>
	);
};

export default ImagePreview;

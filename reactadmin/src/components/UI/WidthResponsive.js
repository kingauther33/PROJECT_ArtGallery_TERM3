import styled from 'styled-components';

export const WidthResponsive = styled.div`
	width: 30%;

	@media screen and (max-width: 1023px) {
		width: 40%;
	}

	@media screen and (max-width: 767px) {
		width: 50%;
	}
`;

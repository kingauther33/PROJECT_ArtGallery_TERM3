import styled from 'styled-components';

export const StyledTable = styled.div`
	.table {
		border: 1px solid #ccc;
		border-collapse: collapse;
		margin: 0;
		padding: 0;
		width: 100%;
		table-layout: auto;
		font-family: 'Poppins', Arial, Helvetica, sans-serif;
	}

	.table caption {
		font-size: 1.5em;
		margin: 0.5em 0 0.75em;
	}

	.table tr {
		background-color: #f8f8f8;
		border: 1px solid #ddd;
		padding: 0.35em;
	}

	.table th,
	.table td {
		padding: 0.625em;
		text-align: center;
	}

	.table th {
		font-size: 1rem;
		letter-spacing: 0.02em;
		text-transform: uppercase;
		font-weight: 500;
		background-color: #f96332;
		color: white;
	}

	.table tr:nth-child(even) {
		background-color: #f2f2f2;
	}

	.table tr:hover {
		background-color: #ddd;
	}

	.table .success,
	.table .success:hover,
	.table .success:nth-child(even) {
		background: lightgreen;
	}

	.table .failed,
	.table .failed:hover,
	.table .failed:nth-child(even) {
		background: indianred;
	}

	.table .processing,
	.table .processing:hover,
	.table .processing:nth-child(even) {
		background: lightyellow;
	}

	.table .disabled,
	.table .disabled:hover,
	.table .disabled:nth-child(even) {
		cursor: not-allowed;
	}

	.table .disabled a,
	.table .disabled a:hover,
	.table .disabled button,
	.table .disabled button:hover {
		pointer-events: none !important;
		opacity: 0.5;
	}

	@media screen and (max-width: 600px) {
		.table {
			border: 0;
		}

		.table caption {
			font-size: 1.3em;
		}

		.table thead {
			display: none;
		}

		.table tr {
			border-bottom: 3px solid #ddd;
			display: block;
			margin-bottom: 0.625em;
		}

		.table td {
			border-bottom: 1px solid #ddd;
			display: block;
			font-size: 0.8em;
			text-align: left;
		}

		.table td:last-child {
			border-bottom: 0;
		}
	}
`;

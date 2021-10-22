import React from 'react';
import { useTable } from 'react-table';
import styled from 'styled-components';

const StyledTable = styled.div`
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

const CustomTable = ({ columns, data }) => {
	const { getTableProps, getTableBodyProps, headerGroups, prepareRow, rows } =
		useTable({
			columns,
			data,
		});

	return (
		<StyledTable>
			<table className="table" {...getTableProps()}>
				<thead>
					{headerGroups.map((headerGroup) => (
						<tr {...headerGroup.getHeaderGroupProps()}>
							{headerGroup.headers.map((column) => (
								<th {...column.getHeaderProps()}>{column.render('Header')}</th>
							))}
						</tr>
					))}
				</thead>

				<tbody {...getTableBodyProps()}>
					{rows.map((row) => {
						prepareRow(row);
						return (
							<tr {...row.getRowProps()}>
								{row.cells.map((cell) => (
									<td {...cell.getCellProps()}>
										<span className="d-inline-block d-lg-none heading-mobile">
											{cell.column.Header}
											{':'}
										</span>{' '}
										{cell.render('Cell')}
									</td>
								))}
							</tr>
						);
					})}
				</tbody>
			</table>
		</StyledTable>
	);
};

export default CustomTable;

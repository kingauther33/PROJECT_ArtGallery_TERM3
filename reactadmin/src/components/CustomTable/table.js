import React, { useEffect, useState } from 'react';
import { useTable, usePagination } from 'react-table';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ReactPaginate from 'react-paginate';

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

const CustomTable = ({ columns, listData }) => {
	const [listRows, setListRows] = useState([]);

	useEffect(() => {
		let dataFetched = [];
		if (listData.length) {
			dataFetched = listData.map((data) => {
				data.action = (
					<>
						<Link to="#">
							<i className="fas fa-trash"></i>
						</Link>
						<Link to="#" style={{ marginLeft: '0.6em' }}>
							<i className="fas fa-edit"></i>
						</Link>
					</>
				);

				return data;
			});
		}

		setListRows(dataFetched);
	}, [listData]);

	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		prepareRow,
		// rows,
		page,
		// nextPage,
		// previousPage,
		// canNextPage,
		// canPreviousPage,
		// pageOptions,
		gotoPage,
		pageCount,
		// setPageSize,
		// state,
	} = useTable(
		{
			columns,
			data: listRows,
		},
		usePagination
	);

	const pageChange = (e) => {
		gotoPage(e.selected);
	};

	// const { pageIndex, pageSize } = state;

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
					{page.map((row) => {
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
			{/* <div className="text-center">
				<button
					className="btn btn-primary"
					disabled={!canPreviousPage}
					onClick={() => previousPage()}
				>
					Previous
				</button>
				<button
					className="btn btn-primary"
					disabled={!canNextPage}
					onClick={() => nextPage()}
				>
					Next
				</button>
			</div> */}
			<ReactPaginate
				previousLabel={'Previous'}
				nextLabel={'Next'}
				breakLabel={'...'}
				breakClassName={'break-me'}
				pageCount={pageCount}
				marginPagesDisplayed={2}
				pageRangeDisplayed={3}
				onPageChange={pageChange}
				containerClassName={'x_pagination'}
				previousLinkClassName={'x_pagination_button'}
				nextLinkClassName={'x_pagination_button'}
				activeClassName={'x_pagination_active'}
				disabledClassName={'x_pagination_disabled'}
			/>
		</StyledTable>
	);
};

export default CustomTable;

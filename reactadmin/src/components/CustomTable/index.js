import React from 'react';
import { useTable, usePagination } from 'react-table';
import ReactPaginate from 'react-paginate';

import { StyledTable } from './StyledTable';

const CustomTable = ({ columns, listData, deleteAPI, editURL, dataFetch }) => {
	/* 	useEffect(() => {
		let dataFetched = [];
		let index = 1;
		if (listData.length) {
			dataFetched = listData.map((data) => {
				const getDeleteId = (data) => {
					setShowDeleteModal(true);
					setDeleteId(data.id);
				};

				data.index = index++;

				data.action = (
					<>
						<Link to="#" onClick={getDeleteId.bind(null, data)}>
							<i className="fas fa-trash"></i>
						</Link>
						<Link to={editURL + data.id} style={{ marginLeft: '0.6em' }}>
							<i className="fas fa-edit"></i>
						</Link>
					</>
				);

				return data;
			});
		}

		setListRows(dataFetched);
	}, [editURL, listData]); */

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
			data: listData,
		},
		usePagination
	);

	const pageChange = (e) => {
		window.scrollTo(0, 0);
		gotoPage(e.selected);
	};

	const getStatusClassName = (row) => {
		// console.log(row);
		let statusClassName;

		if (row.original?.status) {
			switch (row.original.status) {
				case 'Approved':
					statusClassName = 'disabled success';
					break;
				case 'Declined':
					statusClassName = 'disabled failed';
					break;
				case 'In processing':
					statusClassName = '';
					break;
				default:
					statusClassName = '';
					break;
			}

			switch (row.original.status) {
				case 'IN AUNCTION':
					statusClassName = 'inprocess';
					break;
				case 'SOLD':
					statusClassName = 'success';
					break;
				case 'UNAPPROVED':
					statusClassName = 'failed';
					break;
				case 'NEED TO BE HANDLED':
					statusClassName = '';
					break;
				default:
					statusClassName = '';
					break;
			}
		}

		if (row.original.artwork?.status) {
			switch (row.original.artwork.status) {
				case 'Sold':
					statusClassName = 'success';
					break;
				case 'Selling':
					statusClassName = 'processing';
					break;
				case 'Declined':
					statusClassName = 'failed';
					break;
				case 'Standby':
					statusClassName = '';
					break;
				default:
					statusClassName = '';
					break;
			}
		}

		return statusClassName;
	};

	// const { pageIndex, pageSize } = state;

	return (
		<>
			<StyledTable>
				<table className="table" {...getTableProps()}>
					<thead>
						{headerGroups.map((headerGroup) => (
							<tr {...headerGroup.getHeaderGroupProps()}>
								{headerGroup.headers.map((column) => (
									<th {...column.getHeaderProps()}>
										{column.render('Header')}
									</th>
								))}
							</tr>
						))}
					</thead>

					<tbody {...getTableBodyProps()}>
						{page.map((row) => {
							prepareRow(row);
							return (
								<tr {...row.getRowProps()} className={getStatusClassName(row)}>
									{row.cells.map((cell) => (
										<td {...cell.getCellProps()}>
											<span className="d-inline-block d-lg-none heading-mobile">
												{cell.column.Header}
												{':'}
											</span>{' '}
											{console.log(cell)}
											{cell.column.Header === 'Preview' ? (
												<img
													srcSet={cell.value}
													style={{
														height: '125px',
														width: '175px',
														objectFit: 'cover',
													}}
													alt="Preview"
												/>
											) : (
												cell.render('Cell')
											)}
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
		</>
	);
};

export default CustomTable;

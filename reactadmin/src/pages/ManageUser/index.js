import CustomTable from 'components/CustomTable/table';
import SearchInput from 'components/SearchInput';
import { WidthResponsive } from 'components/UI/WidthResponsive';
import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';

const ManageUser = () => {
	const columns = useMemo(
		() => [
			{
				Header: 'ID',
				accessor: 'id',
			},
			{
				Header: 'First Name',
				accessor: 'first_name',
			},
			{
				Header: 'Last Name',
				accessor: 'last_name',
			},
			{
				Header: 'Email',
				accessor: 'email',
			},
			{
				Header: 'Role',
				accessor: 'role',
			},
			{
				Header: 'Deposit',
				accessor: 'deposit',
			},
		],
		[]
	);

	const data = useMemo(
		() => [
			{
				id: 1,
				first_name: 'An',
				last_name: 'Dinh',
				email: 'kingauther@gmail.com',
				role: 'Admin',
				deposit: 100000,
			},
			{
				id: 2,
				first_name: 'An',
				last_name: 'Dinh',
				email: 'kingauther@gmail.com',
				role: 'Admin',
				deposit: 100000,
			},
			{
				id: 3,
				first_name: 'An',
				last_name: 'Dinh',
				email: 'kingauther@gmail.com',
				role: 'Admin',
				deposit: 100000,
			},
		],
		[]
	);

	return (
		<>
			<div className="panel-header panel-header-sm"></div>
			<div className="content">
				<div className="row">
					<div className="col-12">
						<div className="card">
							<div className="card-header">
								<h5 className="title">Users</h5>
								<SearchInput />
							</div>
							<div className="card-body">
								<CustomTable columns={columns} data={data} />
								<WidthResponsive>
									<Link to="#" className="btn btn-primary btn-block">
										<i class="fas fa-plus"></i>Add more User
									</Link>
								</WidthResponsive>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ManageUser;

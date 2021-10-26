import React, { useMemo, useEffect, useState } from 'react';
import CustomTable from 'components/CustomTable/table';
import SearchInput from 'components/SearchInput';
import { WidthResponsive } from 'components/UI/WidthResponsive';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { API } from 'API';

const ManageUser = () => {
	const columns = useMemo(
		() => [
			{
				Header: 'ID',
				accessor: 'id',
			},
			{
				Header: 'First Name',
				accessor: 'firstName',
			},
			{
				Header: 'Last Name',
				accessor: 'lastName',
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
			{
				Header: 'Action',
				accessor: 'action',
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

	const [listData, setListData] = useState([]);

	const fetchUsers = async () => {
		await axios
			.get(API.users.url, API.headers)
			.then((res) => {
				setListData(res.data);
				debugger;
			})
			.catch((err) => console.log(err));
	};

	useEffect(() => {
		fetchUsers();

		return () => {};
	}, []);

	return (
		<>
			<div className="panel-header panel-header-sm"></div>
			<div className="content">
				<div className="row">
					<div className="col-12">
						<div className="card">
							<div className="card-header">
								<h5 className="title">User</h5>
								<SearchInput />
							</div>
							<div className="card-body">
								<CustomTable columns={columns} listData={listData} />
								<WidthResponsive>
									<Link
										to="#"
										className="btn btn-primary btn-block x_font-poppin x_font-w600"
									>
										<i className="fas fa-plus mr-2"></i>Add more User
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

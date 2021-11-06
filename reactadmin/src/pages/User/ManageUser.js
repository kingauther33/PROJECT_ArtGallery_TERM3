import React, { useMemo, useEffect, useState } from 'react';
import CustomTable from 'components/CustomTable';
import SearchInput from 'components/SearchInput';
import { WidthResponsive } from 'components/UI/WidthResponsive';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { API, HeaderOptions } from 'API';
import CustomBackdrop from 'components/CustomBackdrop';
import { Modal, Button } from 'react-bootstrap';
import SnackbarPopup from 'components/SnackbarPopup';

/* const data = useMemo(
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
	); */

const ManageUser = () => {
	const [listData, setListData] = useState([]);
	const [openBackdrop, setOpenBackdrop] = useState(false);
	const [listRows, setListRows] = useState([]);
	const [showDeleteModal, setShowDeleteModal] = useState(false);
	const [deleteId, setDeleteId] = useState(0);
	const [notification, setNotification] = useState({
		message: '',
		isSuccess: true,
		isOpen: false,
	});

	const columns = useMemo(
		() => [
			{
				Header: 'ID',
				accessor: 'index',
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

	const onCloseDeleteModal = () => {
		setShowDeleteModal(false);
	};

	const onDeleteHandler = async () => {
		await axios
			.delete(API.delete_user.url + `${deleteId}`, HeaderOptions)
			.then((res) => {
				console.log(res);
				setNotification({
					message: 'Delete successfully!',
					isOpen: true,
					isSuccess: true,
				});
			})
			.catch((err) => {
				console.log(err);
				setNotification({
					message: 'Failed to delete!',
					isOpen: true,
					isSuccess: false,
				});
			})
			.finally(() => {
				setShowDeleteModal(false);
				fetchUsers();
			});
	};

	const fetchUsers = async () => {
		setOpenBackdrop(true);
		await axios
			.get(API.get_users.url, HeaderOptions)
			.then((res) => {
				setListData(res.data);
			})
			.catch((err) => console.log(err))
			.finally(() => {
				setOpenBackdrop(false);
			});
	};

	useEffect(() => {
		fetchUsers();
	}, []);

	useEffect(() => {
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
						<Link
							to={'/manage-user/edit-user/' + data.id}
							style={{ marginLeft: '0.6em' }}
						>
							<i className="fas fa-edit"></i>
						</Link>
					</>
				);

				return data;
			});
		}

		setListRows(dataFetched);
	}, [listData]);

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
								<CustomTable columns={columns} listData={listRows} />
								<WidthResponsive>
									<Link
										to="/manage-user/add-user"
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
			<CustomBackdrop openBackdrop={openBackdrop} />
			<Modal show={showDeleteModal} onHide={onCloseDeleteModal}>
				<Modal.Header closeButton>
					<Modal.Title>
						Are you sure you want to delete this record?
					</Modal.Title>
				</Modal.Header>
				<Modal.Footer>
					<Button variant="secondary" onClick={onCloseDeleteModal}>
						No
					</Button>
					<Button variant="primary" onClick={onDeleteHandler}>
						Yes
					</Button>
				</Modal.Footer>
			</Modal>
			<SnackbarPopup
				notification={notification}
				setNotification={setNotification}
			/>
		</>
	);
};

export default ManageUser;

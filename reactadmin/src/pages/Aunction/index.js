import React, { useState, useMemo, useEffect, useRef } from 'react';
import CustomBackdrop from 'components/CustomBackdrop';
import { API, HeaderOptions } from 'API';
import axios from 'axios';
import CustomTable from 'components/CustomTable';
import { Link } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import SnackbarPopup from 'components/SnackbarPopup';
import { TextField } from '@mui/material';

const Aunction = () => {
	const [listData, setListData] = useState([]);
	const [openBackdrop, setOpenBackdrop] = useState(false);
	const [listRows, setListRows] = useState([]);
	const [showModalApprove, setShowModalApprove] = useState(false);
	const [showModalDeny, setShowModalDeny] = useState(false);
	const [dataModifying, setDataModifying] = useState({});
	const denyModalRef = useRef();
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
				Header: 'Artwork Name',
				accessor: 'artwork.name',
			},
			{
				Header: 'Status',
				accessor: 'artwork.status',
			},
			{
				Header: 'Highest Bid',
				accessor: 'highestMoneyBid',
			},
			{
				Header: 'Highest Bidder',
				accessor: 'buyer.lastName',
			},
			{
				Header: 'Seller',
				accessor: 'artwork.user.lastName',
			},
		],
		[]
	);

	const onCloseApproveModal = () => {
		setShowModalApprove(false);
	};

	const onApproveHandler = async () => {
		const dataId = dataModifying.id;

		const dataToSent = {
			status: 2,
			response: 'We have upgraded your account to become artist',
		};

		await axios
			.post(API.edit_customer_report.url + dataId, null, {
				params: dataToSent,
				headers: HeaderOptions.headers,
			})
			.then((res) => {
				setNotification({
					message: 'Approve customer successfully!',
					isOpen: true,
					isSuccess: true,
				});
			})
			.catch((err) => {
				console.log(err);
				setNotification({
					message: 'Failed to approve customer!',
					isOpen: true,
					isSuccess: false,
				});
			})
			.finally(() => {
				setShowModalApprove(false);
				fetchUsers();
			});
	};

	const onCloseDenyModal = () => {
		setShowModalDeny(false);
	};

	const onDenyHandler = async () => {
		if (denyModalRef.current.value.length <= 4) {
			setNotification({
				message: 'Reason must be at least 4 characters long!',
				isOpen: true,
				isSuccess: false,
			});
			return;
		}

		const dataId = dataModifying.id;

		const dataToSent = {
			status: 1,
			response: denyModalRef.current.value,
		};

		debugger;
		await axios
			.post(API.edit_customer_report.url + dataId, null, {
				params: dataToSent,
				headers: HeaderOptions.headers,
			})
			.then((res) => {
				setNotification({
					message: 'Approve customer successfully!',
					isOpen: true,
					isSuccess: true,
				});
				denyModalRef.current.value = '';
			})
			.catch((err) => {
				console.log(err);
				setNotification({
					message: 'Failed to approve customer!',
					isOpen: true,
					isSuccess: false,
				});
				denyModalRef.current.value = '';
			})
			.finally(() => {
				setShowModalDeny(false);
				fetchUsers();
			});
	};

	const fetchUsers = async () => {
		setOpenBackdrop(true);

		await axios
			.get(API.get_aunctions.url, HeaderOptions)
			.then((res) => {
				let datas = res.data;
				datas.map((data) => {
					switch (data.artwork.status) {
						case 1:
							data.artwork.status = 'Standby';
							break;
						case 2:
							data.artwork.status = 'Selling';
							break;
						case 3:
							data.artwork.status = 'Sold';
							break;
						case 4:
							data.artwork.status = 'Declined';
							break;
						default:
							data.artwork.status = 'Standby';
					}

					return data;
				});
				setListData(datas);
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
				data.index = index++;

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
								<h5 className="title">All Aunctions</h5>
							</div>
							<div className="card-body">
								<CustomTable columns={columns} listData={listRows} />
							</div>
						</div>
					</div>
				</div>
			</div>
			<CustomBackdrop openBackdrop={openBackdrop} />

			{/* MODAL APPROVE */}
			<Modal show={showModalApprove} onHide={onCloseApproveModal}>
				<Modal.Header closeButton>
					<Modal.Title>
						Are you sure you want to approve this record?
					</Modal.Title>
				</Modal.Header>
				<Modal.Footer>
					<Button variant="secondary" onClick={onCloseApproveModal}>
						No
					</Button>
					<Button variant="primary" onClick={onApproveHandler}>
						Yes
					</Button>
				</Modal.Footer>
			</Modal>

			{/* MODAL DENY */}
			<Modal show={showModalDeny} onHide={onCloseDenyModal}>
				<Modal.Header closeButton>
					<Modal.Title>
						Please fill in the reason for denying request
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<div className="p-3">
						<TextField
							inputRef={denyModalRef}
							variant="standard"
							label="Reason"
							fullWidth
						/>
					</div>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={onCloseDenyModal}>
						No
					</Button>
					<Button variant="primary" onClick={onDenyHandler}>
						Submit
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

export default Aunction;

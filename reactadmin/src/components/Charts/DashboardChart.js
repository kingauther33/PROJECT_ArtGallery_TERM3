import React from 'react';
import { Line } from 'react-chartjs-2';

const DashboardChart = () => {
	const chartColor = '#fff';

	let gradientFill = 'rgba(128,182,244, 0.3)';

	const data = {
		labels: [
			'0:00',
			'3:00',
			'6:00',
			'9:00',
			'12:00',
			'15:00',
			'18:00',
			'21:00',
			'24:00',
			// 'MAR',
			// 'APR',
			// 'MAY',
			// 'JUN',
			// 'JUL',
			// 'AUG',
			// 'SEP',
			// 'OCT',
			// 'NOV',
			// 'DEC',
		],
		datasets: [
			{
				label: 'User Visit',
				borderColor: chartColor,
				pointBorderColor: chartColor,
				pointBackgroundColor: '#1e3d60',
				pointHoverBackgroundColor: '#1e3d60',
				pointHoverBorderColor: chartColor,
				pointBorderWidth: 1,
				pointHoverRadius: 7,
				pointHoverBorderWidth: 2,
				pointRadius: 5,
				fill: true,
				backgroundColor: gradientFill,
				borderWidth: 2,
				data: [50, 150, 100, 190, 130, 90, 150, 160, 120, 140, 190, 95],
			},
		],
	};

	const options = {
		layout: {
			padding: {
				left: 20,
				right: 20,
				top: 0,
				bottom: 0,
			},
		},
		maintainAspectRatio: false,
		tooltips: {
			backgroundColor: '#fff',
			titleFontColor: '#333',
			bodyFontColor: '#666',
			bodySpacing: 4,
			xPadding: 12,
			mode: 'nearest',
			intersect: 0,
			position: 'nearest',
		},
		legend: {
			position: 'bottom',
			fillStyle: '#FFF',
			display: false,
		},
		/* scales: {
			yAxes: [
				{
					ticks: {
						fontColor: 'rgba(255,255,255,0.4)',
						fontStyle: 'bold',
						beginAtZero: true,
						maxTicksLimit: 5,
						padding: 10,
					},
					gridLines: {
						drawTicks: true,
						drawBorder: false,
						display: true,
						color: 'rgba(255,255,255,0.1)',
						zeroLineColor: 'transparent',
					},
				},
			],
			xAxes: [
				{
					gridLines: {
						zeroLineColor: 'transparent',
						display: false,
					},
					ticks: {
						padding: 10,
						fontColor: 'rgba(255,255,255,0.4)',
						fontStyle: 'bold',
					},
				},
			],
		}, */
	};

	return (
		<>
			<Line data={data} options={options}></Line>
		</>
	);
};

export default DashboardChart;

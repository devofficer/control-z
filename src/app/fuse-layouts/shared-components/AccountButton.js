import Button from '@material-ui/core/Button';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import _ from 'lodash';

const useStyles = makeStyles(theme => ({
	selectButton: {
		width: 240,
		margin: 20,
		height: 50,
		backgroundColor: '#FAFAFB',
		color: 'black',
		borderRadius: 10,
		fontSize: 18,
	},
	popover: {
	  borderRadius: 10,
	  width: 240
	},
	selectItem: {
		height: 55,
		backgroundColor: '#FAFAFB',
		color: 'black',
		borderRadius: 0,
		fontSize: 18,
		"&:hover": {
        backgroundColor: "#FAFAFB"
    }
	},
	accountButton: {
		marginTop: 16,
		marginBottom: 16,
		padding: 8,
		color: '#A10081',
		fontWeight: 'bold',
		fontSize: 18,
		width: '100%'
	}
}));

const networkBgColor = {
	f: '#1877F2',
	instagram: '#F00073',
	youtube: '#FF0000',
	twitter: '#1DA1F2',
	tiktok: '#161722',
	google_business: '#4285F4',
	pinterest: '#E60023',
	linkedin: '#2867B2'
}
const accounts = [
	{
		name: "Owl Store", 
		icon: "owl",
		color: "#91C56E",
		networks: [
			"f"
		]
	},
	{
		name: "Owl Store Kids", 
		icon: "owl",
		color: "#8DD8CF",
		networks: [
			"f",
			"instagram",
			"youtube",
			"linkedin",
			"twitter",
			"pinterest"
		]
	},
	{
		name: "Owl Store Joy", 
		icon: "owl",
		color: "#DFA144",
		networks: [
			"f",
			"instagram",
			"youtube"
		]
	}
];

function AccountButton(props) {
	const classes = useStyles();

	const dispatch = useDispatch();

	const [account, setAccount] = useState({
		name: "Owl Store", 
		icon: "owl",
		color: "#91C56E",
		networks: [
			"f"
		]
	});

	const [menu, setMenu] = useState(null);

	const accountMenuClick = event => {
		setMenu(event.currentTarget);
		console.log(menu)
	};

	const accountMenuClose = () => {
		setMenu(null);
	};

	function handleAccountChange(it) {
		accountMenuClose();
		setAccount({
			name: it.name, 
			icon: it.icon,
			color: it.color,
			networks: it.networks
		})
	}

	return (
		<>
			<Button className={classes.selectButton} onClick={accountMenuClick}>
				<img
					src={"assets/images/marketing/" + account.icon + ".png"}
					style={{
						backgroundColor: account.color,
						borderRadius: 10,
						padding: "5px",
						position: "absolute",
						left: 0
					}}
					alt={account.name}
				/>

				<div className="flex flex-col">
					<Typography className="mx-4 font-bold text-12 pt-5">
						{account.name}
					</Typography>
					<div className="flex flex-start pb-5">
						{account.networks.map(it => (
							<img
								src={"assets/images/icons/" + it + ".svg"}
								style={{
									backgroundColor: networkBgColor[it],
									borderRadius: '50%',
									width: 15,
									height: 15,
									padding: 1,
									margin: 1
								}}
								alt={it}
							/>
						))}
						{_.times(8-account.networks.length, () => (
							<div style={{background: '#E1E1E1', width: 15, height: 15, borderRadius: '50%', margin: 1}}></div>
						))}
					</div>
				</div>

				<Icon className="text-24 absolute right-12">expand_more</Icon>
			</Button>

			<Popover
				open={Boolean(menu)}
				anchorEl={menu}
				onClose={accountMenuClose}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'center'
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'center'
				}}
				classes={{paper: classes.popover}}
			>
				{accounts.map(it => (
					<MenuItem 
						key={it.title} 
						onClick={() => handleAccountChange(it)}
						className={classes.selectItem}
					>
						<ListItemIcon className="min-w-40">
							<img 
								className="min-w-20" 
								src={`assets/images/marketing/${it.icon}.png`} 
								style={{
									backgroundColor: it.color, 
									borderRadius: 10,
									padding: "5px"
								}} 
								alt={it.name} 
							/>
						</ListItemIcon>
						<div className="flex flex-col">
							<Typography className="mx-4 font-bold text-12 pt-8">
								{it.name}
							</Typography>
							<div className="flex flex-start">
								{it.networks.map(it => (
									<img
										src={"assets/images/icons/" + it + ".svg"}
										style={{
											backgroundColor: networkBgColor[it],
											borderRadius: '50%',
											width: 15,
											height: 15,
											padding: 1,
											margin: 1
										}}
										alt={it}
									/>
								))}
								{_.times(8-it.networks.length, () => (
									<div style={{background: '#E1E1E1', width: 15, height: 15, borderRadius: '50%', margin: 1}}></div>
								))}
							</div>
						</div>
					</MenuItem>
				))}
				<MenuItem className={classes.selectItem}>
					<Button 
						className={classes.accountButton} 
						disableRipple 
						onClick={accountMenuClose}
					>
						+ Add account
					</Button>
				</MenuItem>
			</Popover>
		</>
	);
}

export default AccountButton;

import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import clsx from 'clsx';
import React from 'react';
import { useSelector } from 'react-redux';
import AccountButton from './AccountButton'
import ThemeButton from './ThemeButton'

const useStyles = makeStyles(theme => ({
	bill: {
		padding: '24px 16px',
		textTransform: 'uppercase',
		fontSize: 14,
		fontWeight: 'bold',
		color: '#92929D',
	},
	networkButton: {
		marginTop: 16,
		marginBottom: 16,
		padding: 8,
		color: '#A10081',
		fontWeight: 'bold',
		fontSize: 18,
		width: '100%'
	}
}));

function UserNavbarHeader(props) {
	const classes = useStyles();

	return (
		<div>
			<ThemeButton />
			<Typography className={classes.bill}>
				Bills
			</Typography>
			<AccountButton className="my-16 p-8"/>
			<Button className={classes.networkButton} disableRipple>
				+ Add networks
			</Button>
		</div>
	);
}

export default UserNavbarHeader;

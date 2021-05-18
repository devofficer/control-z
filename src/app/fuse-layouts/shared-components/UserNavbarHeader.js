import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import clsx from 'clsx';
import React from 'react';
import { useSelector } from 'react-redux';
import AccountButton from './AccountButton'

const useStyles = makeStyles(theme => ({
}));

function UserNavbarHeader(props) {
	const user = useSelector(({ auth }) => auth.user);

	const classes = useStyles();

	return (
		<AppBar
			position="static"
			className="flex flex-col items-center justify-center py-24 z-0 shadow-0"
		>
			<Typography className="uppercase py-24">
				Bills
			</Typography>
			<AccountButton className="my-16 p-8"/>
			<Button className="my-16 p-8">
				+ Add networks
			</Button>
		</AppBar>
	);
}

export default UserNavbarHeader;

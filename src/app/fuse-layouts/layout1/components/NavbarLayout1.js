import FuseScrollbars from '@fuse/core/FuseScrollbars';
import AppBar from '@material-ui/core/AppBar';
import Hidden from '@material-ui/core/Hidden';
import Icon from '@material-ui/core/Icon';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Logo from 'app/fuse-layouts/shared-components/Logo';
import NavbarFoldedToggleButton from 'app/fuse-layouts/shared-components/NavbarFoldedToggleButton';
import NavbarMobileToggleButton from 'app/fuse-layouts/shared-components/NavbarMobileToggleButton';
import Navigation from 'app/fuse-layouts/shared-components/Navigation';
import UserNavbarHeader from 'app/fuse-layouts/shared-components/UserNavbarHeader';
import clsx from 'clsx';
import React from 'react';

const useStyles = makeStyles(theme => ({
	root: {
		'& ::-webkit-scrollbar-thumb': {
			boxShadow: `inset 0 0 0 20px ${
				theme.palette.type === 'light' ? 'rgba(0, 0, 0, 0.24)' : 'rgba(255, 255, 255, 0.24)'
			}`
		},
		'& ::-webkit-scrollbar-thumb:active': {
			boxShadow: `inset 0 0 0 20px ${
				theme.palette.type === 'light' ? 'rgba(0, 0, 0, 0.37)' : 'rgba(255, 255, 255, 0.37)'
			}`
		},
		backgroundColor: 'white'
	},
	content: {
		overflowX: 'hidden',
		overflowY: 'auto',
		'-webkit-overflow-scrolling': 'touch',
		background:
			'linear-gradient(rgba(0, 0, 0, 0) 30%, rgba(0, 0, 0, 0) 30%), linear-gradient(rgba(0, 0, 0, 0.25) 0, rgba(0, 0, 0, 0) 40%)',
		backgroundRepeat: 'no-repeat',
		backgroundSize: '100% 40px, 100% 10px',
		backgroundAttachment: 'local, scroll'
	}
}));

function NavbarLayout1(props) {
	const classes = useStyles();
	const theme = useTheme();

	return (
		<div className={clsx('flex flex-col overflow-hidden h-full', classes.root, props.className)}>
			<FuseScrollbars className={clsx(classes.content)} option={{ suppressScrollX: true }}>
				<UserNavbarHeader />
				<Navigation layout="vertical" />
			</FuseScrollbars>
		</div>
	);
}

export default React.memo(NavbarLayout1);

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

const useStyles = makeStyles(theme => ({
	selectButton: {
		width: '100%',
		height: 60,
		backgroundColor: '#ECF5FF',
		color: '#002C5D',
		borderRadius: 0,
		fontSize: 18,
		"&:hover": {
        backgroundColor: "#ECF5FF"
    }
	},
	selectItem: {
		width: '100%',
		height: 40,
		backgroundColor: '#ECF5FF',
		color: '#002C5D',
		borderRadius: 0,
		fontSize: 18,
		"&:hover": {
        backgroundColor: "#ECF5FF"
    }
	}
}));

const choice = [
	{
		title: 'Marketing',
		url: 'marketing/social/panel'
	},
	{
		title: 'Management',
		url: 'management'
	},
	{
		title: 'Financial',
		icon: 'financial'
	}
];

function ThemeButton(props) {
	const classes = useStyles();

	const [item, setItem] = useState({
		title: 'Marketing',
		url: 'marketing/social/panel'
	});

	const [menu, setMenu] = useState(null);

	const menuClick = event => {
		setMenu(event.currentTarget);
		console.log(menu)
	};

	const menuClose = () => {
		setMenu(null);
	};

	function handleMenuChange(it) {
		menuClose();
		setItem({
			title: it.title,
			url: it.url
		})
	}

	return (
		<>
			<Button className={classes.selectButton} onClick={menuClick} disableRipple>
				{item.title}
				<Icon className="text-24 mr-0">expand_more</Icon>
			</Button>

			<Popover
				open={Boolean(menu)}
				anchorEl={menu}
				onClose={menuClose}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'center'
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'center'
				}}
				classes={{
					paper: 'px-0'
				}}
			>
				{choice.map(it => (
					<MenuItem 
						key={it.title} 
						onClick={() => handleMenuChange(it)} 
						className={classes.selectItem}
					>
						<ListItemText primary={it.title}/>
					</MenuItem>
				))}

			</Popover>
		</>
	);
}

export default ThemeButton;

import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import _ from 'lodash';

const useStyles = makeStyles(theme => ({
}));

const NewButton = withStyles((theme) => ({
  root: {
  	fontSize: 12,
    color: 'white',
    borderRadius: 10,
    backgroundColor: '#A10081',
    '&:hover': {
      backgroundColor: '#B11091',
    },
  },
}))(Button);

const ViewButton = withStyles((theme) => ({
  root: {
    color: '#00FFFF',
    backgroundColor: '#00FFFF',
    '&:hover': {
      backgroundColor: '#00CCCC',
    },
  },
}))(Button);

const TabButton = withStyles((theme) => ({
  root: {
    color: '#A10081',
    '&:hover': {
    },
  },
}))(Button);

const options = ['Create a merge commit', 'Squash and merge', 'Rebase and merge'];


function Publications () {
	const classes = useStyles();

	const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleClick = () => {
    console.info(`You clicked ${options[selectedIndex]}`);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

	return (
		<div className="w-full">
			<div className="flex flex-1 flex-col min-w-0 container sm:p-8">
				<div className="flex justify-between">
					<Typography className="p-40 pb-8 text-36 font-600">
						Publications
					</Typography>
					<div className="flex flex-row">
		        <TabButton disableRipple>Published</TabButton>
		        <TabButton disableRipple>Scheduled</TabButton>
		        <TabButton disableRipple>Drafts</TabButton>
		        <TabButton disableRipple>Waiting</TabButton>
					</div>
		      <NewButton variant="contained">+ New Post</NewButton>
	      </div>

	      <div className="flex flex-row">
	      	<ButtonGroup variant="contained" color="primary" ref={anchorRef} aria-label="split button">
	          <Button onClick={handleClick}>{options[selectedIndex]}</Button>
	          <Button
	            color="primary"
	            size="small"
	            aria-controls={open ? 'split-button-menu' : undefined}
	            aria-expanded={open ? 'true' : undefined}
	            aria-label="select merge strategy"
	            aria-haspopup="menu"
	            onClick={handleToggle}
	          >
	            <ArrowDropDownIcon />
	          </Button>
	        </ButtonGroup>
	        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
	          {({ TransitionProps, placement }) => (
	            <Grow
	              {...TransitionProps}
	              style={{
	                transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
	              }}
	            >
	              <Paper>
	                <ClickAwayListener onClickAway={handleClose}>
	                  <MenuList id="split-button-menu">
	                    {options.map((option, index) => (
	                      <MenuItem
	                        key={option}
	                        disabled={index === 2}
	                        selected={index === selectedIndex}
	                        onClick={(event) => handleMenuItemClick(event, index)}
	                      >
	                        {option}
	                      </MenuItem>
	                    ))}
	                  </MenuList>
	                </ClickAwayListener>
	              </Paper>
	            </Grow>
	          )}
	        </Popper>
	      </div>

	      <div>
					<GridList cellHeight={'auto'} cols={3} spacing={24}>
						{_.times(6, () => (
    					<GridListTile cols={1}>
								<img src="/material-ui-static/images/cards/contemplative-reptile.jpg" alt="pic"/>
								<Typography className="p-16 pb-0">
									Status:
									<span className="text-green">Approved</span>
			          </Typography>
			          <Typography className="p-16 py-8">
			          	Social networks:
			          </Typography>
			          <div className="flex flex-row p-16 py-8">
			          	<Button style={{color: "red", borderRadius: "50%"}}>
			          		Scheduled
			        		</Button>
				          <Typography className="font-600 py-8">
				          	Jan 29, 2020 at 7:30 am
				          </Typography>
			          </div>
		          </GridListTile>
						))}
		      </GridList>
	      </div>
			</div>
		</div>
	)
}

export default Publications;
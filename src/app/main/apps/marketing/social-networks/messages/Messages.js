import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Chat from '../../../chat/ChatApp';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import clsx from 'clsx';
import Icons from 'app/icons/Icons';

const useStyles = makeStyles(theme => ({
  paper: {
  	borderRadius: 10,
  },
}));

const StyledTabs = withStyles({
  indicator: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    '& > span': {
	    backgroundColor: 'transparent',
    },
  },
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

const StyledTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    color: '#000',
    backgroundColor: '#c3c3c3',
    fontWeight: 'bold',
    padding: 10,
    fontSize: theme.typography.pxToRem(15),
    '&:focus': {
      opacity: 1,
    },
    '&$selected': {
    },
  },
  selected: {},
  wrapper: {
    flexDirection: "row",
    alignItems: 'end',
    // justifyContent: "space-evenly"
  },
  labelIcon: {
    minHeight: 30,
  },
}))((props) => <Tab {...props} />);

function Messages () {
	const classes = useStyles();

	const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

	return (
		<div className="w-full">
			<div className="flex flex-1 flex-col min-w-0 container sm:p-8">
				<div className="flex justify-between p-40">
					<Typography className="text-36 font-600">
						Messages
					</Typography>
	      </div>

	      <Paper className="m-16 mx-40">
	      	<Typography className="p-16">
		      	Select the network you want to see comments and messages from
	      	</Typography>

					<StyledTabs value={value} onChange={handleChange} variant="fullWidth" aria-label="styled tabs example">
	          <StyledTab label="Facebook" icon={<Icons value="f"/>} />
	          <StyledTab label="Instagram" icon={<Icons value="instagram"/>} />
	          <StyledTab label="Youtube" icon={<Icons value="youtube"/>} />
	          <StyledTab label="Twitter" icon={<Icons value="twitter"/>} disabled />
	          <StyledTab label="Tiktok" icon={<Icons value="tiktok"/>} disabled />
	          <StyledTab label="Google business" icon={<Icons value="google_business"/>} disabled />
	          <StyledTab label="Pinterest" icon={<Icons value="pinterest"/>} disabled />
	          <StyledTab label="Linkedin" icon={<Icons value="linkedin"/>} disabled />
	        </StyledTabs>
	      </Paper>

	      <Chat />
			</div>
		</div>
	)
}

export default Messages;
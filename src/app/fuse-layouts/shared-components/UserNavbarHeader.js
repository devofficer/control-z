import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
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
	},
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  }
}));

function UserNavbarHeader(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


	return (
		<div>
			<ThemeButton />
			<Typography className={classes.bill}>
				Bills
			</Typography>
			<AccountButton className="my-8 p-8"/>
			<Button className={classes.networkButton} disableRipple onClick={handleOpen}>
				+ Add networks
			</Button>
	    <Modal
	      aria-labelledby="transition-modal-title"
	      aria-describedby="transition-modal-description"
	      className={classes.modal}
	      open={open}
	      onClose={handleClose}
	      closeAfterTransition
	      BackdropComponent={Backdrop}
	      BackdropProps={{
	        timeout: 500,
	      }}
	    >
	      <Fade in={open}>
	        <div className={classes.paper}>
	          <h2 id="transition-modal-title">Add networks modal</h2>
	        </div>
	      </Fade>
	    </Modal>
		</div>
	);
}

export default UserNavbarHeader;

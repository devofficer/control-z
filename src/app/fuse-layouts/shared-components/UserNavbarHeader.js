import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Icon from '@material-ui/core/Icon';
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
    width: 800,
    height: 600,
    border: 0,
    borderRadius: 10,
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
        		<div className="flex flex-row py-8">
							<Button className="min-h-40 min-w-40 rounded-10" onClick={handleClose}>
								<Icon className="text-14">arrow_back_ios</Icon>
								<div className="hidden md:flex flex-col mx-4 items-end">
									<Typography component="span" className="text-14 font-bold pt-4">
										Come back
									</Typography>
								</div>
							</Button>
        		</div>
        		<div className="flex flex-col text-center">
        			<Typography className="text-24 font-bold pb-16">Add networks to account</Typography>
							<Card className="w-full rounded-10 shadow">
								<div className="p-16 flex flex-row flex-wrap items-end">
									networks
								</div>
							</Card>
        		</div>
	        </div>
	      </Fade>
	    </Modal>
		</div>
	);
}

export default UserNavbarHeader;

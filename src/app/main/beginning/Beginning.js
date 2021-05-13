import React from 'react';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { green, purple } from '@material-ui/core/colors';

const BootstrapButton = withStyles({
  root: {
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 14,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    width: 448,
    height: 48,
    borderRadius: 10,
    backgroundColor: '#A10081',
    borderColor: '#A10081',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      backgroundColor: '#C11091',
      borderColor: '#C11091',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#C11091',
      borderColor: '#C11091',
    },
  },
})(Button);

const useStyles = makeStyles((theme) => ({
	root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    margin: 'auto'
	},
  margin: {
    margin: theme.spacing(1),
  },
  footer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 200
  }
}));

const theme = createMuiTheme({
  palette: {
    primary: purple,
  },
});

function Beginning () {
	const classes = useStyles();

	return (
		<>
			<div className={classes.root}>
	      <BootstrapButton variant="contained" color="primary" className={classes.margin}>
	        FLUXO COMPLETO
	      </BootstrapButton>
	      <BootstrapButton variant="contained" color="primary" className={classes.margin}>
	        FLUXO MARKETING
	      </BootstrapButton>
	      <BootstrapButton variant="contained" color="primary" className={classes.margin}>
	        FLUXO GERENCIAMENTO
	      </BootstrapButton>
	      <BootstrapButton variant="contained" color="primary" className={classes.margin}>
	        FLUXO FINANCEIRO
	      </BootstrapButton>
	    </div>
	    <div className={classes.footer}>
	    	<img style={{width: 133}} src="assets/images/logos/logo.png" alt="logo" />
	    </div>
    </>
	);
}

export default Beginning;
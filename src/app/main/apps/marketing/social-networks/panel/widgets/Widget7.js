import React from 'react';
import Card from '@material-ui/core/Card';
import Icon from '@material-ui/core/Icon';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  paper: {
  	height: 120,
  	backgroundColor: '#ffffff',
  	border: '2px solid #E2E2EA',
  	borderRadius: 10,
  	zIndex: 10,
  	marginTop: -10
  },
}));

function Widget7(props) {
  const classes = useStyles();

	return (
		<Card className="w-full h-500 rounded-10 shadow">
			<div className="px-32 py-16">
				<div className="flex justify-between py-16">
					<Typography className="h3 sm:h2 d-flex font-bold">Publications</Typography>
					<Typography className="h3 sm:h2 d-flex">Upcoming publications</Typography>
					<Typography className="h3 sm:h2 d-flex font-bold text-pink underline" color="red">View calendar</Typography>
				</div>
				<div className="w-full sm:w-1/3 rounded-10">
					<img 
						src="/material-ui-static/images/cards/contemplative-reptile.jpg" 
						style={{
							borderRadius: '10px 10px 0 0',
						}}
						alt="pic"
					/>
          <Paper className={classes.paper} variant="outlined">
						<Typography className="p-16 pb-0">
							Status:
							<span className="text-green font-bold pl-10">Approved</span>
	          </Typography>
	          <Typography className="p-16 py-8">
	          	Social networks:
	          </Typography>
	          <div className="flex flex-row p-16 py-8">
	          	<Button style={{color: "red", borderRadius: "50%"}}>
	          		<Icon>schedule</Icon>
	          		Scheduled
	        		</Button>
		          <Typography className="font-bold py-8">
		          	Jan 29, 2020 at 7:30 am
		          </Typography>
	          </div>
          </Paper>
				</div>
			</div>
		</Card>
	);
}

export default Widget7;

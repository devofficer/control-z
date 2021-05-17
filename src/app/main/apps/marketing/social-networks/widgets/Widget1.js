import FuseAnimate from '@fuse/core/FuseAnimate';
import _ from '@lodash';
import { fade } from '@material-ui/core/styles/colorManipulator';
import Button from '@material-ui/core/Button';
import { makeStyles, ThemeProvider, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import { selectContrastMainTheme } from 'app/store/fuse/settingsSlice';

const useStyles = makeStyles(theme => ({
	root: {
		background: `linear-gradient(to left, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`
	}
}));

function Widget1(props) {
	const classes = useStyles(props);
	const theme = useTheme();
	const contrastTheme = useSelector(selectContrastMainTheme(theme.palette.primary.main));

	const [dataset, setDataset] = useState('2017');
	const data = _.merge({}, props.data);

	_.setWith(data, 'options.plugins.xLabelsOnTop.fontColor', fade(theme.palette.primary.contrastText, 0.7));
	_.setWith(data, 'options.plugins.xLabelsOnTop.borderColor', fade(theme.palette.primary.contrastText, 0.6));
	_.setWith(data, 'options.scales.xAxes[0].ticks.fontColor', theme.palette.primary.contrastText);

	return (
		<ThemeProvider theme={contrastTheme}>
			<div className={clsx(classes.root)}>
				<div className="container relative p-16 sm:p-24 flex flex-row justify-between items-center">
					<FuseAnimate delay={100}>
						<div className="flex-col">
							<Typography className="h2" color="textPrimary">
								Network Select Button
							</Typography>
						</div>
					</FuseAnimate>
				</div>
			</div>
		</ThemeProvider>
	);
}

export default React.memo(Widget1);

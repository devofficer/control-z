import Card from '@material-ui/core/Card';
import Icon from '@material-ui/core/Icon';
import { useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { Bar } from 'react-chartjs-2';
import _ from '@lodash';

function Widget9(props) {
	const theme = useTheme();
	const data = _.merge({}, props.data);

	return (
		<Card className="w-full rounded-8 shadow">
			<div className="p-16 flex flex-row flex-wrap items-end">
				<div className="p-8 flex items-center">
					<Icon className="text-red text-48">arrow_downward</Icon>
				</div>

				<div className="flex flex-col">
					<div className="flex flex-row items-center">
						<Typography className="text-28 font-strong min-width:50">325</Typography>
						<Typography className="text-red">-2.5%</Typography>
					</div>
					<Typography className="whitespace-nowrap">They stopped liking</Typography>
				</div>
			</div>
		</Card>
	);
}

export default React.memo(Widget9);

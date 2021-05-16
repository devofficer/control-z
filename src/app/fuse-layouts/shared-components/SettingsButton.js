import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import clsx from 'clsx';
import React from 'react';

function SettingsButton({ className }) {
	return (
		<Button
			rel="noreferrer noopener"
			role="button"
			className={clsx('', className)}
		>
			<Icon className="text-24">settings</Icon>
			<span className="mx-4">Settings</span>
		</Button>
	);
}

export default SettingsButton;

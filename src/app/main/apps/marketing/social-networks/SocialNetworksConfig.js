import React from 'react';

const SocialNetworksConfig = {
	settings: {
		layout: {
			config: {
				rightSidePanel: {
					display: false
				}
			}
		}
	},
	routes: [
		{
			path: '/marketing/social-networks',
			component: React.lazy(() => import('./SocialNetworks'))
		}
	]
};

export default SocialNetworksConfig;

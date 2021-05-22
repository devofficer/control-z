import { authRoles } from 'app/auth';
import i18next from 'i18next';
import DocumentationNavigation from '../main/documentation/DocumentationNavigation';

import en from './navigation-i18n/en';
import pt from './navigation-i18n/pt';

i18next.addResourceBundle('en', 'navigation', en);
i18next.addResourceBundle('pt', 'navigation', pt);

const navigationConfig = [
	{
		type: 'divider',
		id: 'divider-1'
	},
	{
		id: 'social-networks',
		title: 'Social Networks',
		translate: 'SOCIAL NETWORKS',
		type: 'group',
		children: [
			{
				id: 'panel',
				title: 'Panel',
				translate: 'Panel',
				type: 'item',
				icon: 'dashboard',
				url: '/marketing/social/panel'
			},
			{
				id: 'publications',
				title: 'Publications',
				translate: 'Publications',
				type: 'item',
				icon: 'dashboard',
				url: '/marketing/social/publications'
			},
			{
				id: 'calendar',
				title: 'Calendar',
				translate: 'Calendar',
				type: 'item',
				icon: 'today',
				url: '/marketing/social/calendar'
			},
			{
				id: 'messages',
				title: 'Messages',
				translate: 'Messages',
				type: 'item',
				icon: 'chat',
				url: '/marketing/social/messages'
			},
			{
				id: 'feeds',
				title: 'Feeds',
				translate: 'Feeds',
				type: 'item',
				icon: 'mail',
				url: '/marketing/social/feeds'
			},
			{
				id: 'reporting',
				title: 'Reporting',
				translate: 'Reporting',
				type: 'item',
				icon: 'reporting',
				url: '/marketing/social/reporting'
			}
		]
	},
	{
		id: 'e-mail',
		title: 'E-mail MKT',
		translate: 'E-MAIL MARKETING',
		type: 'group',
		children: [
			{
				id: 'campaigns',
				title: 'Campaigns',
				translate: 'Campaigns',
				type: 'item',
				icon: 'chat',
				url: '/marketing/email/campaigns'
			},
			{
				id: 'calendar',
				title: 'Calendar',
				translate: 'Calendar',
				type: 'item',
				icon: 'today',
				url: '/marketing/email/calendar'
			},
			{
				id: 'lists',
				title: 'Lists',
				translate: 'Lists',
				type: 'item',
				icon: 'lists',
				url: '/marketing/email/lists'
			},
			{
				id: 'reporting',
				title: 'Reporting',
				translate: 'Reporting',
				type: 'item',
				icon: 'reporting',
				url: '/marketing/email/reporting'
			}
		]
	},
];

export default navigationConfig;

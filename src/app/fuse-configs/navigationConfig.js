import { authRoles } from 'app/auth';
import i18next from 'i18next';
import DocumentationNavigation from '../main/documentation/DocumentationNavigation';

import ar from './navigation-i18n/ar';
import en from './navigation-i18n/en';
import tr from './navigation-i18n/tr';

i18next.addResourceBundle('en', 'navigation', en);
i18next.addResourceBundle('tr', 'navigation', tr);
i18next.addResourceBundle('ar', 'navigation', ar);

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
				type: 'item',
				icon: 'dashboard',
				url: '/marketing/social/panel'
			},
			{
				id: 'publications',
				title: 'Publications',
				type: 'item',
				icon: 'dashboard',
				url: '/marketing/social/publications'
			},
			{
				id: 'calendar',
				title: 'Calendar',
				type: 'item',
				icon: 'today',
				url: '/marketing/social/calendar'
			},
			{
				id: 'messages',
				title: 'Messages',
				type: 'item',
				icon: 'chat',
				url: '/marketing/social/messages'
			},
			{
				id: 'feeds',
				title: 'Feeds',
				type: 'item',
				icon: 'mail',
				url: '/marketing/social/feeds'
			},
			{
				id: 'reporting',
				title: 'Reporting',
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
				type: 'item',
				icon: 'chat',
				url: '/marketing/email/campaigns'
			},
			{
				id: 'calendar',
				title: 'Calendar',
				type: 'item',
				icon: 'today',
				url: '/marketing/email/calendar'
			},
			{
				id: 'lists',
				title: 'Lists',
				type: 'item',
				icon: 'lists',
				url: '/marketing/email/lists'
			},
			{
				id: 'reporting',
				title: 'Reporting',
				type: 'item',
				icon: 'reporting',
				url: '/marketing/email/reporting'
			}
		]
	},
	{
		type: 'divider',
		id: 'divider-2'
	},
	{
		id: 'management',
		title: 'Management',
		translate: "MANAGEMENT",
		type: 'group',
		children: [
			{
				id: 'teams',
				title: 'Campaigns',
				type: 'item',
				icon: 'chat',
				url: '/management/campaigns'
			},
			{
				id: 'calendar',
				title: 'Calendar',
				type: 'item',
				icon: 'today',
				url: '/management/calendar'
			},
			{
				id: 'lists',
				title: 'Lists',
				type: 'item',
				icon: 'lists',
				url: '/management/lists'
			},
			{
				id: 'reporting',
				title: 'Reporting',
				type: 'item',
				icon: 'reporting',
				url: '/management/reporting'
			}
		]
	},
	{
		type: 'divider',
		id: 'divider-3'
	},
	{
		id: 'financial',
		title: 'Financial',
		type: 'group',
		children: [
			{
				id: 'teams',
				title: 'Campaigns',
				type: 'item',
				icon: 'chat',
				url: '/management/campaigns'
			},
			{
				id: 'calendar',
				title: 'Calendar',
				type: 'item',
				icon: 'today',
				url: '/management/calendar'
			},
			{
				id: 'lists',
				title: 'Lists',
				type: 'item',
				icon: 'lists',
				url: '/management/lists'
			},
			{
				id: 'reporting',
				title: 'Reporting',
				type: 'item',
				icon: 'reporting',
				url: '/management/reporting'
			}
		]
	}
];

export default navigationConfig;

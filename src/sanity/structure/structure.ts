import { CogIcon, EarthGlobeIcon, HomeIcon, MenuIcon } from '@sanity/icons';
import Welcome from '@sanity/components/Welcome';

export const structure = (S: any, context: { currentUser: { name: any } }) => {
	const currentUser = context.currentUser.name;
	return S.list()
		.title('Content')
		.items([
			S.listItem()
				.title('Welcome')
				.icon(HomeIcon)
				.child(S.component(Welcome).title(`Welcome, ${currentUser}`)),
			...S.documentTypeListItems().filter(
				(listItem: { getId: () => string }) =>
					!['siteInfo', 'siteMenu', 'welcome', 'media.tag'].includes(
						listItem.getId()
					)
			),
			S.divider(),
			S.listItem()
				.title('Site Settings')
				.icon(CogIcon)
				.child(
					S.list()
						.title('Site Settings')
						.items([
							S.listItem()
								.title('Site Info')
								.icon(EarthGlobeIcon)
								.child(
									S.document().schemaType('siteInfo').documentId('siteInfo')
								),
							S.listItem()
								.title('Site Menus')
								.icon(MenuIcon)
								.child(
									S.document().schemaType('siteMenu').documentId('siteMenu')
								)
						])
				)
		]);
};

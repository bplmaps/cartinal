module.exports = {
	base: '/',
	title: 'Cartinal',
	head: [
		[
			'link',
			{
				rel: 'icon',
				href: '/logo.png'
			}
		],
		[
			'script',
			{
				async: true,
				src: 'https://www.googletagmanager.com/gtag/js?id=UA-812961-14'
			}
		],
		[
			'script',
			{},
			`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
    
      gtag('config', 'UA-812961-14');
    `
		]
	],
	markdown: {
		extendMarkdown: (md) => {
			md.use(require('markdown-it-task-lists'));
		}
	},
	themeConfig: {
		logo: '/logo.png',
		lastUpdated: 'Last Updated',
		smoothScroll: true,
		topbarUrl: 'https://www.leventhalmap.org',
		topbarText: '↩ LMEC Home',
		oldPageCutoff: 180,
		nav: [ { text: 'Guides and Tutorials', link: '/guides/' }, { text: 'Documentation', link: '/documentation/' } ],
		plugins: [
			[
				'register-components',
				{
					components: [
						{
							name: 'atlas-layer-list',
							path: '@theme/components/AtlasLayerList.vue'
						},
						{
							name: 'Hideable',
							path: '@theme/components/Hideable.vue'
						},
						{
							name: 'Quizlet',
							path: '@theme/components/Quizlet.vue'
						},
						{
							name: 'schema-full',
							path: '@theme/components/SchemaFull.vue'
						}
					]
				}
			]
		],
		sidebar: {
			'/guides/get-started-qgis/': [ 
				'',
				'interface',
				'basics'
			],


			'/guides/web-mapping/': [
				'',
				'part-1',
				'part-2',
				'part-3'
			],

			'/guides/making-sense-maps-data/session-1/': [
				'./',
				'part-1',
				'part-2',
				'part-3',
				'part-4',
				'part-5',
				'part-6',
				'part-7'
			],

			'/guides/making-sense-maps-data/session-2/': [
				'./',
				'part-1',
				'part-2',
				'part-3',
				'part-4',
				'part-5',
				'part-6',
				'part-7',
				'part-8'
			],

			'/guides/making-sense-maps-data/session-3/': [
				'./',
				'part-1',
				'part-2',
				'part-3',
				'part-4',
				'part-5',
				'part-6',
				'part-7'
			]
		}
	}
};

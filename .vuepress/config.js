module.exports = {
	base: '/cartinal/',
	title: 'Cartinal',
	head: [ [ 'link', { rel: 'icon', href: '/logo.png' } ] ],
	themeConfig: {
		logo: '/logo.png',
		lastUpdated: 'Last Updated',
		smoothScroll: true,
		topbarUrl: 'https://www.leventhalmap.org',
		topbarText: '↩ Leventhal Map & Education Center Home',
		oldPageCutoff: 180,
		nav: [
			{ text: 'Guides and Tutorials', link: '/guides/' },
			{ text: 'Documentation', link: '/documentation/' }
		],
    sidebar: {
      "/guides/get-started-qgis/": [
        '',
        'interface',
        'basics'
      ]
    },
    plugins: [
      '@vuepress/google-analytics',
      {
        'ga': 'UA-812961-14'
      }
    ]
  }
  
};

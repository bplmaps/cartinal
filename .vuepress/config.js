module.exports = {
	base: '/cartinal/',
	title: 'Cartinal',
	head: [ 
    [ 
      'link', { 
        rel: 'icon', 
        href: '/logo.png' } 
    ],
    ['script', {
      async: true,
      src: 'https://www.googletagmanager.com/gtag/js?id=UA-812961-14'
    }],
    ['script', {}, `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
    
      gtag('config', 'UA-812961-14');
    `]
  ],
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
    }    
  }
};


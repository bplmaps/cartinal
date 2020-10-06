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
		oldPageCutoff: -1,
		nav: [
			{
				text: 'Tutorials and Guides',
				ariaLabel: 'Tutorials and Guides Menu',
				items: [
					{
						text: "GIS Mapping",
						items: [
							{ text: 'Get Started with QGIS', link: '/guides/get-started-qgis/' },
							{ text: 'Georeference a Map', link: '/guides/georeference.md' },
							{text: 'Clip GIS Data by Geographic Extent', link: '/guides/clip-by-extent.md'},
							{ text: 'Edit Existing GIS Data', link: '/guides/edit-geometry.md' },
							{ text: 'Set up a Mac with GIS Software', link: '/guides/mac-setup.md' },
							{text: 'Set up a PC for Python & GIS Libraries', link: '/guides/windows-anaconda.md'},
							{ text: 'Use Python to Work with GIS Data', link: '/guides/python.md' }
						]
					},
					{
						text: 'Geospatial Data',
						items: [
							{ text: 'Common GIS File Formats', link: '/guides/file-formats.md' },
							{ text: 'Massachusetts Aerial Photography', link: '/guides/aerial.md' },
							{ text: 'Massachusetts Property Boundaries', link: '/guides/mass-parcels.md' },
						]
					},

					{
						text: 'BPL Map Collections',
						items: [
							{ text: 'Create an Annotated Map Story', link: '/guides/create-stories' },
							{ text: 'Bring BPL Atlas Tiles into QGIS', link: '/guides/atlascope-tiles' },
							{ text: 'Use the Atlascope Portal', link: '/guides/atlascope-tool-guide' }
						]
					}
				]
			},
			{
				text: 'Documentation',
				ariaLabel: 'Documentation Menu',
				items: [
					{
						text: 'BPL Map Collections',
						items: [
							{
								text: 'Geotransform Digitized Urban Atlases',
								link: '/documentation/create-urban-atlas-data'
							},
							{
								text: 'Use Digitized Urban Atlases as GIS Data Sources',
								link: '/documentation/access-urban-atlas-data'
							}
						]
					}
				]
			}
    ],
    sidebar: {
      "/guides/get-started-qgis/": [
        '',
        'interface',
        'basics'
      ],
      "/": "auto"
    },
    plugins: [
      '@vuepress/google-analytics',
      {
        'ga': 'UA-812961-14'
      }
    ]
  }
  
};

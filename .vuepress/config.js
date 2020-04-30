module.exports = {
    title: 'Cartwheel',
    description: 'Just playing around',
    base: '/cartwheel/',
    themeConfig: {
        nav: [
          {
            text: 'Workshops',
            ariaLabel: 'Workshops Menu',
            items: [
              { text: 'Map 101', link: '/workshops/map101/' },
              { text: 'Map 201', link: '/workshops/map201/' }
            ]
          },
          { text: 'How-To Guides',
            ariaLabel: 'How-To Guides Menu',
            items: [
                { text: 'Atlascope', items: [
                  { text: 'Geotransforming Digitized Atlases', link: '/guides/atlascope/create-mosaics'},
                  { text: 'Create a Guided  Tour', link: '/guides/atlascope/create-tour' },
                  { text: 'Find Source Atlases in Digital Collections', link: '/guides/atlascope/digital-collections'}
                ] },
                { text: 'Interactives', items: [
                  { text: 'Create an Annotated Map Story', link: '/guides/interactives/create-story'}
                ]},
                { text: 'GIS and Data', items: [
                  { text: 'Setting Up GIS Software', link: '/guides/gis-data/mac-setup.md' },
                  { text: 'Clip Data By Extent', link: '/guides/gis-data/clip-by-extent.md'},
                  { text: 'Get Census Data', link: '/guides/gis-data/census/'}
                ]}
            ]
         },
         { text: 'Documentation',
            ariaLabel: 'Documentation Menu',
            items: [
              { text: 'LMEC Data Sets', items: [
                { text: 'Atlas Imagery and Footprints', link: '/documentation/lmec-data/atlas-imagery'}
              ]},
              { text: 'Atlascope', items: [
                { text: 'Processing Atlas Plates', link: '/documentation/atlascope/processing-atlases'},
                { text: 'User Documentation', link: '/documentation/atlascope/using-atlascope'}
              ]}
            ] }
        ],
        sidebar: {
          '/guides/gis-data/census/': ['','1','2','3','considerations'],
          '/': ['']
        }
      }
  }
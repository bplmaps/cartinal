module.exports = {
    base: '/cartinal/',
    title: "Cartinal", 
    head: [
        ['link', { rel: 'icon', href: '/logo.png' }]
      ],
    themeConfig: {
        logo: '/logo.png',
        lastUpdated: 'Last Updated', 
        nav: [


          { text: 'Tutorials',
          ariaLabel: 'Tutorials Menu',
          items: [
            { text: 'GIS Data and Tools', items: [
              { text: 'Clip GIS Data by Geographic Extent', link: '/resources/tutorials/clip-by-extent.md'},
              { text: 'Set up a PC for Python & GIS Libraries', link: '/resources/tutorials/windows-anaconda.md'}              
            ]},

            { text: 'Map Collections', items: [
              { text: 'Create an Annotated Map Story', link: '/resources/tutorials/create-stories'},
              { text: 'Bring BPL Atlas Tiles into QGIS', link: '/resources/tutorials/atlascope-tiles'},             
            ]}
          ] },



                   
          { text: 'Guides',
          ariaLabel: 'Cartinal Directions Menu',
          items: [
            { text: 'GIS Data and Tools', items: [
              { text: 'Get Started with QGIS', link: '/resources/guides/download-qgis.md' },
              { text: 'Set up a Mac with GIS Software', link: '/resources/guides/mac-setup.md' },
              { text: 'Use Python to Work with GIS Data', link: '/resources/guides/python.md' }
            ]},


              { text: 'Map Collections', items: [
                { text: 'Use the Atlascope Portal', link: '/resources/guides/atlascope-tool-guide'}
              ]}

          ]
       },

           
           { text: 'Documentation',
              ariaLabel: 'Documentation Menu',
              items: [
                { text: 'Map Collections', items: [
                  { text: 'Geotransform Digitized Urban Atlases', link: '/resources/documentation/create-urban-atlas-data'},
                  { text: 'Use Digitized Urban Atlases as GIS Data Sources', link: '/resources/documentation/access-urban-atlas-data'},
                ]}
              ] }


          ]
    }
  }
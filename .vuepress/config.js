module.exports = {
    base: '/cartinal/',
    title: "Cartinal", 
    head: [
        ['link', { rel: 'icon', href: '/logo.png' }]
      ],
    themeConfig: {
        logo: '/logo.png',
        nav: [


          { text: 'Participation',
          ariaLabel: 'Participation Menu',
          items: [
            { text: 'Past Workshops', items: [
              { text: 'Mapmaking 101: Introduction to Mapmaking', link: '/resources/participation/map101/' },
              { text: 'Mapmaking 102: Basic Mapmaking in Python', link: '/resources/participation/map201/' }
            ]}
          ] },



                   
          { text: 'Cartinal Directions',
          ariaLabel: 'Cartinal Directions Menu',
          items: [
            { text: 'GIS Tools and Software', items: [
              { text: 'Set up a Mac with GIS Software', link: '/resources/guides/mac-setup.md' },
              { text: 'Clip Geodata by Extent', link: '/resources/guides/clip-by-extent.md'}
            ]},


              { text: 'Map Collections', items: [
                { text: 'Geotransform Urban Atlas Plates into Mosaics', link: '/resources/guides/create-mosaics'},
                { text: 'Use Atlascope to Find Source BPL Materials', link: '/resources/guides/locate-atlas-plates'},
                { text: 'Create an Annotated Map Story Interactive', link: '/resources/guides/create-stories'}
              ]}

          ]
       },

           
           { text: 'Documentation',
              ariaLabel: 'Documentation Menu',
              items: [
                { text: 'Atlascope', items: [
                  { text: 'Create Urban Atlas Data', link: '/resources/documentation/create-urban-atlas-data'},
                  { text: 'Access Urban Atlas Data', link: '/resources/documentation/access-urban-atlas-data'},
                  { text: 'Use Atlascope', link: '/resources/documentation/use-atlascope'}
                ]}
              ] }


          ]
    }
  }
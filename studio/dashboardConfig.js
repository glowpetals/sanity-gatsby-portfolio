export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fcfb7b68ae34e00fa081b5d',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-e3ou5f34',
                  apiId: '5a16e393-f329-41e8-908d-5f335134c764'
                },
                {
                  buildHookId: '5fcfb7b65f22ca00c86af2a7',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-1vyqr51d',
                  apiId: '452ba40f-3823-484a-9c4c-a9319ffef50f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/glowpetals/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-1vyqr51d.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}

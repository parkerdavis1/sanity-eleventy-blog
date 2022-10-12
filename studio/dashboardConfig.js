export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
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
                  buildHookId: '6347168c22658d1dbf629263',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-vfoob85f',
                  apiId: '9c07306f-da6a-42c6-baae-628353b8da8e'
                },
                {
                  buildHookId: '6347168d13efff1e2bbc52e2',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-zdiu6ws5',
                  apiId: '189a74a6-253a-4099-bada-6e521b614cb9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/parkerdavis1/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-zdiu6ws5.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}

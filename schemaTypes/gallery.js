export default {
  name: 'gallery',
  title: 'Galerie',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Titre',
      type: 'string',
    },
    {
      name: 'collections',
      title: 'Collections',
      description: 'Plusieurs collections de médias (images / vidéos)',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'collection',
          title: 'Collection',
          fields: [
            {
              name: 'title',
              title: 'Nom de la collection',
              type: 'string',
            },
            {
              name: 'media',
              title: 'Médias',
              type: 'array',
              of: [
                { type: 'image' },
                { type: 'file', title: 'Vidéo', options: { accept: 'video/*' } },
              ],
            },
          ],
          preview: {
            select: {
              title: 'title',
              media: 'media',
            },
            prepare({ title, media }) {
              const count = Array.isArray(media) ? media.length : 0
              return {
                title: title || 'Collection sans nom',
                subtitle: `${count} média${count === 1 ? '' : 's'}`,
              }
            },
          },
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
      collections: 'collections',
    },
    prepare({ title, collections }) {
      const count = Array.isArray(collections) ? collections.length : 0
      return {
        title: title || 'Galerie',
        subtitle: `${count} collection${count === 1 ? '' : 's'}`,
      }
    },
  },
}

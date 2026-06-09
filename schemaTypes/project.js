export default {
  name: 'project',
  title: 'Projet',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Titre',
      type: 'string',
    },
    {
      name: 'client',
      title: 'Client',
      type: 'string',
    },
    {
      name: 'year',
      title: 'Année',
      type: 'number',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'media',
      title: 'Médias',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'mediaImage',
          title: 'Image',
          fields: [
            {
              name: 'image',
              title: 'Image',
              type: 'image',
              options: { hotspot: true },
            },
            {
              name: 'wide',
              title: '2 slots (double largeur)',
              type: 'boolean',
              initialValue: false,
            },
          ],
          preview: {
            select: { media: 'image', wide: 'wide' },
            prepare({ media, wide }) {
              return { title: wide ? 'Image — 2 slots' : 'Image', media }
            },
          },
        },
        {
          type: 'object',
          name: 'mediaVideo',
          title: 'Vidéo',
          fields: [
            {
              name: 'video',
              title: 'Vidéo',
              type: 'file',
              options: { accept: 'video/*' },
            },
            {
              name: 'wide',
              title: '2 slots (double largeur)',
              type: 'boolean',
              initialValue: false,
            },
          ],
          preview: {
            select: { wide: 'wide' },
            prepare({ wide }) {
              return { title: wide ? 'Vidéo — 2 slots' : 'Vidéo' }
            },
          },
        },
      ],
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'tag' }] }],
    },
    {
      name: 'link',
      title: 'Lien du projet',
      type: 'url',
    },
  ],
}

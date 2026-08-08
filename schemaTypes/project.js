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
      name: 'subtitle',
      title: 'Sous-titre',
      description:
        "Petit texte affiché à côté du nom du projet dans l'index, au survol (remplace les tags à cet endroit).",
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
      name: 'favorite',
      title: 'Favori',
      description: 'Mettre ce projet en avant : il apparaîtra en premier dans sa catégorie',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'thumbnail',
      title: 'Thumbnail (ring)',
      description: 'Image affichée sur le ring de la page work',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'media',
      title: 'Médias',
      type: 'array',
      of: [
        { type: 'image', options: { hotspot: true } },
        { type: 'file' },
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

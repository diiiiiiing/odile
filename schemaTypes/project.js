import {videoThumb, videoFilePreview} from './mediaPreview'

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
      description: 'Glisser-déposer pour changer l’ordre. Les vidéos se lancent au survol.',
      type: 'array',
      options: { layout: 'grid' },
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'hidden',
              title: 'Masqué',
              description: "Masquer ce média : il n'apparaîtra plus sur le site, sans avoir à le supprimer.",
              type: 'boolean',
              initialValue: false,
            },
          ],
        },
        {
          type: 'file',
          title: 'Vidéo',
          options: { accept: 'video/*' },
          fields: [
            {
              name: 'hidden',
              title: 'Masqué',
              description: "Masquer ce média : il n'apparaîtra plus sur le site, sans avoir à le supprimer.",
              type: 'boolean',
              initialValue: false,
            },
          ],
          preview: videoFilePreview,
        },
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
            {
              name: 'hidden',
              title: 'Masqué',
              description: "Masquer ce média : il n'apparaîtra plus sur le site, sans avoir à le supprimer.",
              type: 'boolean',
              initialValue: false,
            },
          ],
          preview: {
            select: { media: 'image', wide: 'wide', hidden: 'hidden' },
            prepare({ media, wide, hidden }) {
              const bits = [wide ? '2 slots' : null, hidden ? 'masqué' : null].filter(Boolean)
              return { title: bits.length ? `Image — ${bits.join(', ')}` : 'Image', media }
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
            {
              name: 'hidden',
              title: 'Masqué',
              description: "Masquer ce média : il n'apparaîtra plus sur le site, sans avoir à le supprimer.",
              type: 'boolean',
              initialValue: false,
            },
          ],
          preview: {
            select: { wide: 'wide', hidden: 'hidden', url: 'video.asset.url', name: 'video.asset.originalFilename' },
            prepare({ wide, hidden, url, name }) {
              const bits = [wide ? '2 slots' : null, hidden ? 'masqué' : null].filter(Boolean)
              return { title: name || 'Vidéo', subtitle: bits.join(', ') || undefined, media: videoThumb(url) }
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

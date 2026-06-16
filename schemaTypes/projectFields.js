/* shared field set used by both "project" (commercial) and "personal" content */
export default [
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
    name: 'favorite',
    title: 'Mis en avant',
    description: 'Affiche ce projet en priorité dans sa catégorie',
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
    title: 'Vignette (cercle)',
    description: 'Image utilisée comme vignette dans le cercle de la page',
    type: 'image',
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
  {
    name: 'images',
    title: 'Images (ancien champ)',
    type: 'array',
    of: [{ type: 'image' }],
  },
  {
    name: 'videos',
    title: 'Vidéos (ancien champ)',
    type: 'array',
    of: [{ type: 'file', options: { accept: 'video/*' } }],
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
]

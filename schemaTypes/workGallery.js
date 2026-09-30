import {videoFilePreview} from './mediaPreview'

/* the Gallery tab of the work page: one document, just media, no names */
export default {
  name: 'workGallery',
  title: 'Galerie',
  type: 'document',
  fields: [
    {
      name: 'media',
      title: 'Médias',
      description: 'Images et vidéos de l’onglet Gallery, dans cet ordre. Glisser-déposer pour réordonner.',
      type: 'array',
      options: {layout: 'grid'},
      of: [
        {type: 'image', options: {hotspot: true}},
        {type: 'file', title: 'Vidéo', options: {accept: 'video/*'}, preview: videoFilePreview},
      ],
    },
  ],
  preview: {prepare: () => ({title: 'Galerie'})},
}

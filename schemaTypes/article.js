export default {
  name: 'article',
  title: 'Feed',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'video',
      title: 'Vidéo',
      type: 'file',
      options: { accept: 'video/*' },
    },
  ],
}

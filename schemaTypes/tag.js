export default {
  name: 'tag',
  title: 'Tag',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Nom du tag',
      type: 'string',
      validation: Rule => Rule.required(),
    },
  ],
  preview: {
    select: { title: 'title' },
  },
}

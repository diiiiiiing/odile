/* small images / GIFs: one of them pops up wherever the home page is
   clicked in the void */
export default {
  name: 'popups',
  title: 'Pop-up',
  type: 'document',
  fields: [
    {
      name: 'images',
      title: 'Images / GIFs',
      description: 'Une de ces images apparaît au hasard quand on clique dans le vide sur la home.',
      type: 'array',
      options: {layout: 'grid'},
      of: [{type: 'image'}],
    },
  ],
  preview: {prepare: () => ({title: 'Pop-up'})},
}

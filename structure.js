/* the Studio's left-hand tree, trimmed to what the site actually uses;
   older content types are kept, untouched, under "Archives (ancien)" */
export const SINGLETONS = ['workGallery', 'popups']

const singleton = (S, id, title) =>
  S.listItem().title(title).id(id).child(S.document().schemaType(id).documentId(id).title(title))

export const structure = (S) =>
  S.list()
    .title('Content')
    .items([
      S.documentTypeListItem('project').title('Projets'),
      singleton(S, 'workGallery', 'Galerie'),
      S.listItem()
        .title('Assets')
        .id('assets')
        .child(S.list().title('Assets').items([singleton(S, 'popups', 'Pop-up')])),
      S.documentTypeListItem('tag').title('Tags'),
      S.divider(),
      S.listItem()
        .title('Archives (ancien)')
        .id('archives')
        .child(
          S.list()
            .title('Archives (ancien)')
            .items([
              S.documentTypeListItem('gallery').title('Anciennes galeries'),
              S.documentTypeListItem('personal').title('Personnel'),
              S.documentTypeListItem('resource').title('Ressources'),
              S.documentTypeListItem('article').title('Feed'),
            ]),
        ),
    ])

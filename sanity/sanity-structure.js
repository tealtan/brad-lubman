import S from "@sanity/desk-tool/structure-builder";

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('About Section')
        .child(S.editor().schemaType('sectionAbout').documentId('sectionAbout')),
      S.listItem()
        .title('Recordings Section')
        .child(S.editor().schemaType('sectionRecordings').documentId('sectionRecordings')),
      S.listItem()
        .title('Video Section')
        .child(S.editor().schemaType('sectionVideo').documentId('sectionVideo')),
      S.listItem()
        .title('Gallery Section')
        .child(S.editor().schemaType('sectionGallery').documentId('sectionGallery')),
      S.listItem()
        .title('Contact Section')
        .child(S.editor().schemaType('sectionContact').documentId('sectionContact')),

      S.divider(),

      // List out the rest of the document types, but filter out the section types above
      ...S.documentTypeListItems()
        .filter(listItem => ![
          'sectionAbout',
          'sectionRecordings',
          'sectionVideo',
          'sectionGallery',
          'sectionContact',
        ]
        .includes(listItem.getId()))
    ])

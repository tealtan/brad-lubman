import S from "@sanity/desk-tool/structure-builder";

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('About Section')
        .child(
          S.editor()
            .schemaType('sectionAbout')
            .documentId('sectionAbout')
        ),
      // Add a visual divider (optional)
      S.divider(),
      // List out the rest of the document types, but filter out the config type
      ...S.documentTypeListItems()
        .filter(listItem => !['sectionAbout'].includes(listItem.getId()))
    ])

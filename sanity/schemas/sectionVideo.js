export default {
  name: 'sectionVideo',
  title: 'Section: Video',
  type: 'document',
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'embeds',
      title: 'Embeds',
      type: 'text',
      rows: 30,
    },
  ],
  preview: {
    select: {title: 'title'},
  },
}

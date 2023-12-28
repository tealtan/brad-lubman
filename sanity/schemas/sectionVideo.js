export default {
  name: 'sectionVideo',
  title: 'Section: Video',
  type: 'document',
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

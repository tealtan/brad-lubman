export default {
  name: 'sectionAbout',
  title: 'Section: About',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
    {
      name: 'sidebar',
      description: 'Uses HTML. Contact Allen for edits.',
      title: 'Sidebar',
      type: 'text',
    },
  ],
  preview: {
    select: {title: 'title'},
  },
}

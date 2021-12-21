export default {
  name: 'sectionAbout',
  title: 'Section: About',
  type: 'document',
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
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
      title: 'Sidebar',
      type: 'text',
    },
  ],
  preview: {
    select: {title: 'title'},
  },
}

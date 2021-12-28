export default {
  name: 'sectionContact',
  title: 'Section: Contact',
  type: 'document',
  __experimental_actions: ['create', 'update', 'delete', 'publish'],
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'contactHeading',
      title: 'Contact Heading',
      type: 'string',
    },
    {
      name: 'contactBody',
      title: 'Contact Body',
      type: 'blockContent',
    },
    {
      name: 'formHeading',
      title: 'Form Heading',
      type: 'string',
    },
    {
      name: 'formEmbed',
      title: 'Form Embed',
      type: 'text',
    },
  ],
  preview: {
    select: {title: 'title'},
  },
}

export default {
  name: 'navLink',
  title: 'Nav Link',
  type: 'object',
  fields: [
    {
      name: 'linkText',
      title: 'Text',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'linkUrl',
      title: 'URL',
      type: 'string', // Use string instead of URL so that jump links can be used
      validation: Rule => Rule.required()
    },
  ],
  preview: {
    select: {
      title: 'linkText',
      subtitle: 'linkUrl',
    },
  },
}

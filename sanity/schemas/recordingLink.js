export default {
  name: 'recordingLink',
  title: 'Recording Link',
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
      type: 'url',
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

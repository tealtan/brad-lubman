export default {
  name: 'recording',
  title: 'Recording',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'cover',
      title: 'Cover Image',
      type: 'image',
      validation: Rule => Rule.required()
    },
    {
      title: 'Links',
      name: 'links',
      type: 'array',
      of: [{type: 'recordingLink'}],
      options: {
        editModal: 'popover',
      },
    }
  ],
  preview: {
    select: {
      title: 'title',
      media: 'cover',
    },
  },
}

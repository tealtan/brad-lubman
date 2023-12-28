export default {
  name: 'sectionRecordings',
  title: 'Section: Recordings',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'recordings',
      title: 'Recordings',
      type: 'array',
      of: [{type: 'recording'}],
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

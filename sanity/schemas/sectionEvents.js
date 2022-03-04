export default {
  name: 'sectionEvents',
  title: 'Section: Events',
  type: 'document',
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'startDate',
      title: 'Start Date',
      description: 'Events before this date are hidden.',
      type: 'date',
      validation: Rule => Rule.required()
    },
  ],
  preview: {
    select: {title: 'title'},
  },
}

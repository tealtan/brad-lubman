export default {
  name: 'sectionGallery',
  title: 'Section: Gallery',
  type: 'document',
  __experimental_actions: ['create', 'update', 'delete', 'publish'],
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{type: 'image'}],
    },
    {
      name: 'photoCredit',
      title: 'Photo Credit',
      type: 'string',
    },
  ],
  preview: {
    select: {title: 'title'},
  },
}

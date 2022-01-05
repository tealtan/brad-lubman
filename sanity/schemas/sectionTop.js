export default {
  name: 'sectionTop',
  title: 'Section: Top',
  type: 'document',
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
	{
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'image',
    },
	{
      name: 'photoCredit',
      title: 'Photo Credit',
      type: 'string',
    },
	{
      title: 'Links',
      name: 'links',
      type: 'array',
      of: [{type: 'navLink'}],
      options: {
        editModal: 'popover',
      },
    }
  ],
  preview: {
    select: {title: 'title'},
  },
}

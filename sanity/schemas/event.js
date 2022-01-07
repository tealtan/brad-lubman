import {MdLocalPlay as icon} from 'react-icons/md'

export default {
  name: 'event',
  title: 'Event',
  icon,
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Use to uniquely identify events. (Optional)',
      options: {
        maxLength: 100,
      },
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'ensemble',
      title: 'Ensemble',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'date',
      title: 'Date',
      type: 'date',
      validation: Rule => Rule.required()
    },
    {
      name: 'dateString',
      title: 'Multiple Dates',
      type: 'string',
      description: 'Use for multiple dates. (Optional)',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'blockContent',
    },
    {
      name: 'url',
      title: 'Learn More Link',
      type: 'url',
    },
  ],
  orderings: [
    {
      title: 'Date',
      name: 'dateDesc',
      by: [
        {field: 'date', direction: 'desc'}
      ]
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'slug.current',
    },
  },
}

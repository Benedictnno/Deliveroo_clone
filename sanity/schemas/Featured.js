import {defineField, defineType, validation} from 'sanity'

export default defineType({
  name: 'featured',
  title: 'Featured Menu Categories',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Featured Category name ',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'short_description',
      type: 'string',
      title: 'Short description',
      validation: (Rule) => Rule.max(200),
    },
    {
      name: 'resturants',
      title: 'Resturents',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'resturant'}]}],
    },
  ],
})

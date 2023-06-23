import {defineField, defineType, validation} from 'sanity'

export default defineType({
  name: 'resturant',
  title: 'Resturant',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'name of resturant ',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'short_description',
      type: 'string',
      title: 'Short description',
      validation: (Rule) => Rule.max(200),
    },
    {name: 'image', type: 'image', title: 'Image of Resturant '},
    {name: 'lat', type: 'number', title: 'Latitude of the Resturant'},
    {name: 'long', type: 'number', title: 'longitude of the Resturant'},
    {
      name: 'address',
      type: 'string',
      title: 'Resturant address',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'rating',
      type: 'number',
      title: 'Enter a rating from (1-5 Stars)',
      validation: (Rule) => Rule.required().min(1).max(5).error('Please enter a value between 1-5'),
    },
    {
      name: 'type',
      title: 'Category',
      type: 'reference',
      to: [{type: 'category'}],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'dishes',
      title: 'Dishes',
      type: 'array',
      of: [{type: 'reference',to:[{type:'dish'}]}],
    },
  ],
})

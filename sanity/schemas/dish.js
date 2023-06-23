import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'dish',
  title: 'Dish',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name of dish',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'short_description',
      type: 'string',
      title: 'Short description',
      validation: (Rule) => Rule.max(200),
    },
    {name: 'image', type: 'image', title: 'Image of Dish '},
    {name: 'Price', type: 'number', title: 'Price of the dish in GBP'},
    // {name: 'long', type: 'number', title: 'longitude of the Resturant'},
  ],
})

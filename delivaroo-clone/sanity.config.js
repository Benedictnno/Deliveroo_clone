import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Delivaroo-clone',

  projectId: 'epf4rx97',
  dataset: 'sanity',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})

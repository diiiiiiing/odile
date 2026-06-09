import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {mediaPlugin} from 'sanity-plugin-media'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'odile',

  projectId: 'zgrgr7sj',
  dataset: 'production',

  plugins: [structureTool(), visionTool(), mediaPlugin()],

  schema: {
    types: schemaTypes,
  },
})

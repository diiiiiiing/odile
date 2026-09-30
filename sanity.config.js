import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {media} from 'sanity-plugin-media'
import {schemaTypes} from './schemaTypes'
import {structure, SINGLETONS} from './structure'

export default defineConfig({
  name: 'default',
  title: 'odile',

  projectId: 'zgrgr7sj',
  dataset: 'production',

  plugins: [structureTool({structure}), visionTool(), media()],

  schema: {
    types: schemaTypes,
    // single pages (Galerie, Pop-up) are edited in place, never created again
    templates: (prev) => prev.filter((t) => !SINGLETONS.includes(t.schemaType)),
  },

  document: {
    actions: (prev, {schemaType}) =>
      SINGLETONS.includes(schemaType)
        ? prev.filter(({action}) => ['publish', 'discardChanges', 'restore'].includes(action))
        : prev,
  },
})

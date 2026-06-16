import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'zgrgr7sj',
    dataset: 'production'
  },
  deployment: {
    autoUpdates: true,
    studioHost: 'odile',
  }
})

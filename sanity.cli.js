import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'zgrgr7sj',
    dataset: 'production'
  },
  deployment: {
    autoUpdates: true,
    studioHost: 'odile',
    appId: 'oein1lcbiqj86294hml1epq1',
  }
})

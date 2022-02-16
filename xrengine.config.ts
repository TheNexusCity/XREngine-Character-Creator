


import type { ProjectConfigInterface } from '@xrengine/projects/ProjectConfigInterface'

const config: ProjectConfigInterface = {
  onEvent: undefined,
  thumbnail: '/static/xrengine_thumbnail.jpg',
  routes: {
    '/character': { component: () => import('./components/CharacterCreator') },
    '/character/:id': { component: () => import('./components/CharacterCreator') }
  },

  webappInjection: () => import('./components/webappInjection'),
  services: './services/services.ts',
  databaseSeed: undefined
}

export default config

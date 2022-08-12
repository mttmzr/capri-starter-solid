import { RenderFunction, renderToString } from '@capri-js/solid/server'
import { Router } from 'solid-app-router'
import { generateHydrationScript } from 'solid-js/web'

import { App } from './App.jsx'

export const render = async (url) => {
  const html = await renderToString(() => (
    <Router base={import.meta.env.BASE_URL} url={url}>
      <App />
    </Router>
  ))
  return {
    '#app': html,
    body: generateHydrationScript(),
  }
}

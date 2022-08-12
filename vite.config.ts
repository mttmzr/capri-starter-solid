import capri from '@capri-js/solid'
import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'
import mdx from '@mdx-js/rollup'

export default defineConfig({
  ssr: {
    // In order to make solid-app-router work in SSR mode we have to
    // prevent it from being externalized ...
    noExternal: ['solid-app-router'],
  },
  plugins: [
    mdx({
      jsxImportSource: 'solid-jsx'
    }),
    solid({
      ssr: true,
    }),
    capri({
      spa: '/preview',
      prerender: ['/'],
      islandGlobPattern: '/src/islands/**/*',
      lagoonGlobPattern: '/src/lagoons/**/*',
    }),
  ],
})

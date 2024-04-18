import { defineVitestConfig } from '@nuxt/test-utils/config'
import AutoImport from 'unplugin-auto-import/vite'

export default defineVitestConfig({

   plugins: [
      AutoImport({imports:['vue']})
   ],
   test: {
        globals: true,
        environment: 'nuxt',
      //   setupFiles: './tests/setupTests.ts', check back later
     }
})

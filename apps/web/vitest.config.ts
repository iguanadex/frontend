import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import tsconfigPaths from 'vite-tsconfig-paths'
import { defineConfig } from 'vitest/config'

const r = (p: string) => resolve(__dirname, p)

export default defineConfig({
  // @ts-ignore
  plugins: [tsconfigPaths({ projects: ['tsconfig.test.json'] }), react(), vanillaExtractPlugin()],
  resolve: {
    alias: {
      '@iguanadex/wagmi/connectors/blocto': r('../../packages/wagmi/connectors/blocto/index.ts'),
      '@iguanadex/wagmi/connectors/miniProgram': r('../../packages/wagmi/connectors/miniProgram/index.ts'),
      '@iguanadex/wagmi/connectors/trustWallet': r('../../packages/wagmi/connectors/trustWallet/index.ts'),
      '@iguanadex/uikit': r('../../packages/uikit/src'),
      '@iguanadex/localization': r('../../packages/localization/src'),
    },
  },
  test: {
    setupFiles: ['./vitest.setup.js'],
    environment: 'happy-dom',
    globals: true,
    exclude: ['src/config/__tests__', 'node_modules'],
  },
})

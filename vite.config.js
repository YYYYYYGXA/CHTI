import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1]
const isGithubPagesBuild = process.env.GITHUB_ACTIONS === 'true'
const isUserOrOrgSite = repoName?.toLowerCase().endsWith('.github.io')

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  },
  // Project Pages uses /<repo>/ while local runs keep relative asset paths.
  base: isGithubPagesBuild && repoName && !isUserOrOrgSite ? `/${repoName}/` : './'
})

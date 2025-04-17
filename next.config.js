const isGitHubActions = process.env.GITHUB_ACTIONS === 'true'

const repo = isGitHubActions ? '/n8ntestesite' : ''

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: repo,
  assetPrefix: repo + '/',
  trailingSlash: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig

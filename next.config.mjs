/** @type {import('next').NextConfig} */

import createMDX from '@next/mdx'

const nextConfig = {
    pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
};

const withMDX = createMDX({
    // Add markdown plugins here, as desired
  })
export default withMDX(nextConfig)
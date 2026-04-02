import withMDX from '@next/mdx';

const withMDXConfig = withMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  images: {
    domains: [
      '',
      'i.ytimg.com', // YouTube thumbnails
      'youtube.com',  // YouTube links
      'www.youtube.com', // YouTube links
      'raw.githubusercontent.com', // ✅ GitHub raw images
    ],
  },
};

export default withMDXConfig(nextConfig);

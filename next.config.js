/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  images: {
    domains: [
      'www.liverpool.ac.uk', 
      'www.besacare.com',
      'www.piggyvest.com', 
      'storage.googleapis.com',
      'petraonline.com',
    ],
  },
};

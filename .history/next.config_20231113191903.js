/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: f
}

const path = require('path')
 
module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}

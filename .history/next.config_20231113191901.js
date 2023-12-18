/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: d
}

const path = require('path')
 
module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}

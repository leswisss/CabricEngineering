/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false
}

const path = require('path')
 
module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}

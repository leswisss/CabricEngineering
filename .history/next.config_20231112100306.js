/** @type {import('next').NextConfig} */
const nextConfig = {}

const path = require('path')
 
module.exports = {
  react
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}

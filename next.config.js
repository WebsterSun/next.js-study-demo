/** @type {import('next').NextConfig} */
const nextConfig = {
  images:{
    // nextjs 默认不允许引入外部图片，要引入的话，需要配置图片的域名
    remotePatterns:[
      {
        protocol: 'https',
        hostname: "images.pexels.com"
      },
      {
        protocol: 'https',
        hostname: "img2.baidu.com"
      }
    ]
  }
}

module.exports = nextConfig

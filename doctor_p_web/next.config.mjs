/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['media.discordapp.net', 'github.com'],
  },
  reactStrictMode: false,
  // crossOrigin: 'anonymous',
  // async headers() {
  //   return [
  //     {
  //       // 모든 API 경로와 일치
  //       source: '/:path*',
  //       headers: [
  //         { key: 'Access-Control-Allow-Credentials', value: 'true' },
  //         { key: 'Access-Control-Allow-Origin', value: '*' }, // 실제 출처를 이것을 대체합니다.
  //         {
  //           key: 'Access-Control-Allow-Methods',
  //           value: 'GET,DELETE,PATCH,POST,PUT',
  //         },
  //         {
  //           key: 'Access-Control-Allow-Headers',
  //           value:
  //             'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
  //         },
  //       ],
  //     },
  //   ];
  // },
  // async rewrites() {
  //   return [
  //     {
  //       source: '/:path*',
  //       // destination: 'http://158.247.250.204:8080/:path*',
  //       destination: 'http://localhost:3000/:path*',
  //     },
  //   ];
  // },
};

export default nextConfig;

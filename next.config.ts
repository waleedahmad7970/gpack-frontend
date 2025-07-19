import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  	/* config options here */
  	images: {
    	// domains: ["cdn.dummyjson.com", "i.postimg.cc", "127.0.0.1:8000"],
		remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.dummyjson.com',
                pathname: '**', // or more specific like '/**/*.jpg'
            },
            {
                protocol: 'https',
                hostname: 'i.postimg.cc',
                pathname: '**', // or more specific like '/**/*.jpg'
            },
            {
                protocol: 'https',
                hostname: 'policycollective.org',
                pathname: '**', // or more specific like '/**/*.jpg'
            },
            {
                protocol: 'https',
                hostname: 'admin.policycollective.org',
                pathname: '**', // or more specific like '/**/*.jpg'
            },
            {
                protocol: 'http',
                hostname: 'localhost',
				port: '3000',
                pathname: '**', // or more specific like '/**/*.jpg'
            },
			{
                protocol: 'http',
                hostname: '127.0.0.1',
				port: '8000',
                pathname: '/upload/**', // or more specific like '/**/*.jpg'
            },
        ],
  	},
};

export default nextConfig;

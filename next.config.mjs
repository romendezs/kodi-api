/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {protocol: 'https',
            hostname: 'academy.kodigo.org',
            port:'',}
        ]
    }

}

export default nextConfig

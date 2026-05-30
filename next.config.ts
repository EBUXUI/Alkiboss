  import type { NextConfig } from "next";

  const nextConfig: NextConfig = {
    /* config options here */
    reactStrictMode: true,
    turbopack: {},
    webpack: (config, { isServer}) => {
      if(!isServer){
        config.resolve.fallback = {
          fs: false,
          path: false,
          crypto: false,
          stream: false,
          buffer: false,
          util: false,
          os: false,
        };
      }

      //Exclude @Luvura/LuvSQL From Client
      if(Array.isArray(config.externals)) {
        config.externals.push('@luvra/luvsql');
      } else {
        config.externals = ['@luvra/luvsql'];
      }
      
      return config;
    }
  };

  export default nextConfig;

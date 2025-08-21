// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;


import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static exports for Netlify
  output: 'export',
  
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
  
  // Set base path if deploying to a subdirectory (remove if deploying to root)
  // basePath: '/your-repo-name',
  
  // Ensure trailing slashes are handled consistently
  trailingSlash: true,
  
  // Disable server-side features for static export
  poweredByHeader: false,
};

export default nextConfig;
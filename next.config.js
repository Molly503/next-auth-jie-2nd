// This page is added myself.

// module.exports = {
//   images: {
//     domains: ["lh3.googleusercontent.com"],
//   },
// };

//this is 2nd version suggested by copilot
//这个文档可能重复了
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        // Optionally, you can specify a port and pathname to restrict to specific paths.
      },
      // Add more patterns as needed
    ],
  },
  // Other configurations...
};

// This page is added myself.

// module.exports = {
//   images: {
//     domains: ["lh3.googleusercontent.com"],
//   },
// };

//this is 2nd version suggested by copilot
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

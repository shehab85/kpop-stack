/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  serverBuildTarget: "vercel",
  server:
    process.env.VERCEL || process.env.VERCEL_LOCAL
      ? "./server.js"
      : undefined,
  ignoredRouteFiles: ["**/.*"],
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // serverBuildPath: ".netlify/functions-internal/server.js",
  // publicPath: "/build/",
};

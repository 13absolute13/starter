const isProd = process.argv.includes("--production");
const isDev = !isProd;

module.exports = {
   isProd: isProd,
   isDev: isDev,

   webpackStream: {
      mode: isProd ? "production" : "development"
   },

   imageMin: {
      verbose: true
   },

   fonter: {
      formats: ["ttf", "woff", "eot", "svg"]
   },

   tasks: {
      recurse: true
   },
}
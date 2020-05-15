/* craco.config.js */
 
const CracoAlias = require("craco-alias");
 
module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: "options",
        baseUrl: "./",
        aliases: {
          "@components": "./src/components/",
          "@images": "./src/images/",
          "@styles": "./src/styles/",
          "@utils": "./src/utils/",
        }
      }
    }
  ]
};
/* eslint-env node */
'use strict';

module.exports = function(/* environment, appConfig */) {
  // See https://github.com/san650/ember-web-app#documentation for a list of
  // supported properties

  return {
    name: "indieNik",
    short_name: "indieNik",
    description: "Testing Ember App",
    start_url: "/",
    display: "standalone",
    background_color: "#0a6464",
    theme_color: "#0ea9a9",
    icons: [
      {
        src: "images/logo.png",
        sizes: "540x540",
        type: "image/png"
      }
    ],
    ms: {
      tileColor: '#82fab41a'
    }
  };
}

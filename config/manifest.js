/* eslint-env node */
'use strict';

module.exports = function(/* environment, appConfig */) {
  // See https://github.com/san650/ember-web-app#documentation for a list of
  // supported properties

  return {
    name: "TEST",
    short_name: "test",
    description: "Testing Ember App",
    start_url: "/",
    display: "standalone",
    background_color: "rgb(130, 250, 180, 0.100)",
    theme_color: "rgb(10, 100, 100)",
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

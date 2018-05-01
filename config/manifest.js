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
      },
      {
        src: "images/android-icon-36x36.png",
        sizes: "36x36",
        type: "image/png"
       },
       {
        src: "images/android-icon-48x48.png",
        sizes: "48x48",
        type: "image/png"
       },
       {
        src: "images/android-icon-72x72.png",
        sizes: "72x72",
        type: "image/png"
       },
       {
        src: "images/android-icon-96x96.png",
        sizes: "96x96",
        type: "image/png"
       },
       {
        src: "images/android-icon-144x144.png",
        sizes: "144x144",
        type: "image/png"
       },
       {
        src: "images/android-icon-192x192.png",
        sizes: "192x192",
        type: "image/png"
       }
    ],
    ms: {
      tileColor: '#82fab41a'
    }
  };
}

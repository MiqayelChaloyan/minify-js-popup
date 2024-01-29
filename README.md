npm install -g uglify-js --local


package.json

  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build && npm run minify",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "minify": "uglifyjs build/static/js/*.js -o build/static/js/minified.js --compress --mangle"
  },


npm run build

path -> build/static/js
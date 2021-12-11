const rewire = require('rewire');
const defaults = rewire('react-scripts/scripts/build.js');
let config = defaults.__get__('config');

console.log(config);
config.output.filename = 'static/js/[name].js';
config.output.chunkFilename = 'static/js/[name].chunk.js';

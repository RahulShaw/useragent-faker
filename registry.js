const _ = require('lodash');
const ie = require('./ie/ie');
const edge = require('./edge/edge');
const opera = require('./opera/opera');
const safari = require('./safari/safari');
const chrome = require('./chrome/chrome');
const firefox = require('./firefox/firefox');

const registry = {
  availableBrowsers: {
    firefox,
    safari,
    chrome,
    opera,
    edge,
    ie,
  },
  randomize(arg) {
    if (!arg) {
      const browser = _.sample(this.availableBrowsers);
      return browser[_.random(0, browser.length - 1)];
    }
    return this.availableBrowsers[arg][
      _.random(0, this.availableBrowsers[arg].length - 1)
    ];
  },
};

module.exports = registry;

const registry = require('./registry');

const firefox = () => registry.randomize('firefox');
const chrome = () => registry.randomize('chrome');
const safari = () => registry.randomize('safari');
const opera = () => registry.randomize('opera');
const edge = () => registry.randomize('edge');
const ie = () => registry.randomize('ie');
const random = () => registry.randomize();

module.exports = {
  firefox,
  safari,
  random,
  chrome,
  opera,
  edge,
  ie,
};

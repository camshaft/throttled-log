/**
 * Module dependencies
 */
var throttle = require("throttleit");

/**
 * Save a bound copy of console.log
 */
consolelog = console.log.bind(console);

module.exports = function(limit, log) {
  if(typeof limit === "undefined") limit = 1;
  log = log || consolelog;

  var lines = [];

  function print() {
    log(lines.join("\n"));
    lines = [];
  };

  print = throttle(print, limit);

  return function() {
    var line = arguments.length === 1
      ? arguments[0]
      : Array.prototype.join.call(arguments, " ");
    lines.push(line);
    print();
  };
};

'use strict';

// Simple padding method since that's all we need right now
function pad (number) {
  var str = number.toString ();
  if (str.length === 1) {
    str = '0' + str;
  }

  return str;
}

Date.prototype.toREDCapString = function () {
  return `${this.getFullYear ()}-${pad (this.getMonth ())}-${pad (this.getDate ())}`;
}

// If we require this module into a file, we can just use the regular Date object
module.exports = Date;

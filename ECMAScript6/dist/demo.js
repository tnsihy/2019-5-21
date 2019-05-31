"use strict";

var sourceObj = { a: { b: 1 } };
var targetObj = { c: 3 };
Object.assign(targetObj, sourceObj);
targetObj.a.b = 2;
console.log([, 1].find(function (n) {
  return false;
}));

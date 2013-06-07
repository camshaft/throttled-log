throttled-log
=============

Throttled log to STDOUT

If you're writing a lot to STDOUT, throttling writes goes a long way to keeping performance up.

Usage
-----

```js
var log = require("throttled-log")();

// This is much faster
for (var i = 10000 - 1; i >= 0; i--) {
  log("this is a test");
};

// than this
for (var i = 10000 - 1; i >= 0; i--) {
  console.log("this is a test");
};

// unthrottled: 6401 throttled: 268
```

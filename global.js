/* global self:false window:false */
'use strict'
if (typeof global === 'object' && global.global === global && global) {
  // do nothing
} else {
  const global = (typeof self === 'object' && self.self === self && self) ||
  (typeof window === 'object' && window.window === window && window) || this
  // set named "global" object, since it doesn't exist. Just another circular reference, like self.self.
  global.global = global
}
export default global

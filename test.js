import { finishTest } from '../../iso-test/index.js'
import global from './global.js'

if (typeof global !== 'object') throw new TypeError('global is not an object')
finishTest('pass global is an object')
if (typeof global.global !== 'object') throw new TypeError('global.global is not an object')
finishTest('pass global.global is an object')
finishTest('kill')

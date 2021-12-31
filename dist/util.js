'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.sleep = void 0;
/*
 * Sleep for amount in seconds
 */
const sleep = (s) => new Promise((resolve) => setTimeout(resolve, s * 1000));
exports.sleep = sleep;
//# sourceMappingURL=util.js.map

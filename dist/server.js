"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); var _express2 = _interopRequireDefault(_express);

const app = _express2.default.call(void 0, );
console.log('hello word')

app.listen(3000, () => {
 console.log('Server runnnig port 3000');
});
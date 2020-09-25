"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var DayTime = function DayTime(d) {
  var date = String(new window.Date());
  date = date.slice(3, 15);
  console.log(date);
  return date;
};

var _default = DayTime;
exports["default"] = _default;
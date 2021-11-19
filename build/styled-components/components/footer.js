"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Footer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Footer = _styledComponents["default"].footer(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    width: 100%;\n    text-align: center;\n    padding: 24px;\n    background-color: #ffa500bd;\n    color: #8d8d8d;\n    box-sizing: border-box;\n    h3 {\n      margin: 8px 0;\n    }\n"])));

exports.Footer = Footer;
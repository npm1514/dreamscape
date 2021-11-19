"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MenuBars = exports.Menu = exports.Header = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Header = _styledComponents["default"].header(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: calc(100% - 32px);\n  min-height: 100px;\n  color: #000;\n  padding: 16px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 10;\n  svg {\n    #left-leaves {\n      fill: transparent;\n      transition-property: fill;\n      transition-duration: 1s;\n      transition-timing-function: ease;\n      transition-delay: 0;\n    }\n    #mid-leaves {\n      fill: transparent;\n      transition-property: fill;\n      transition-duration: 2s;\n      transition-timing-function: ease;\n      transition-delay: 0;\n    }\n    #right-leaves {\n      fill: transparent;\n      transition-property: fill;\n      transition-duration: 3s;\n      transition-timing-function: ease;\n      transition-delay: 0;\n    }\n    #left-base {\n      fill: #000;\n      transition-property: fill;\n      transition-duration: 1s;\n      transition-timing-function: ease;\n      transition-delay: 0;\n    }\n    #mid-base {\n      fill: #000;\n      transition-property: fill;\n      transition-duration: 2s;\n      transition-timing-function: ease;\n      transition-delay: 0;\n    }\n    #right-base {\n      fill: #000;\n      transition-property: fill;\n      transition-duration: 3s;\n      transition-timing-function: ease;\n      transition-delay: 0;\n    }\n    &#svgfill #left-base, &#svgfill #left-leaves {\n      fill: #ffa500bd;\n    }\n    &#svgfill #mid-base, &#svgfill #mid-leaves {\n      fill: #800080c4;\n    }\n    &#svgfill #right-base, &#svgfill #right-leaves {\n      fill: #ff0000bd;\n    }\n  }\n"])));

exports.Header = Header;

var MenuBars = _styledComponents["default"].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  width: 48px;\n  height: 39px;\n  margin: 28px;\n  &:hover {\n    cursor: pointer;\n    #menu1 {\n      background-color: #ffa500bd;\n    }\n    #menu2 {\n      background-color: #800080c4;\n    }\n    #menu3 {\n      background-color: #ff0000bd;\n    }\n  }\n  .menuBar {\n    opacity: 0;\n    background-color: #fff;\n    width: 48px;\n    height: 5px;\n    fill: transparent;\n    transition-property: opacity, background-color;\n    transition-duration: 2s;\n    transition-timing-function: ease;\n    transition-delay: 0;\n    border-radius: 2px;\n  }\n  .fullOpaque {\n    opacity: 1;\n  }\n  #menu2 {\n    margin: 12px 0;\n  }\n"])));

exports.MenuBars = MenuBars;

var Menu = _styledComponents["default"].div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  height: 100vh;\n  width: 350px;\n  background: #Fff;\n  position: absolute;\n  top: 0;\n  right: -350px;\n  transition-property: right;\n  transition-duration: 1s;\n  transition-timing-function: ease;\n  transition-delay: 0;\n  &.menuOpen {\n    right: 0;\n  }\n"])));

exports.Menu = Menu;
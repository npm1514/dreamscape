"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VideoWrap = exports.TopContent = exports.MiddleContent = exports.BottomContent = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var TopContent = _styledComponents["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  text-align: center;\n  min-height: 100vh;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  h1, h2 {\n    transition-property: color;\n    transition-duration: 2s;\n    transition-timing-function: ease;\n    transition-delay: 0;\n    width: 100%;\n    margin: 0;\n    box-sizing: border-box;\n  }\n  h1 {\n    font-size: 8vw;\n    color: #ffa500bd;\n    padding: 16px;\n  }\n  h2 {\n    font-size: 3vw;\n    color: #ff0000bd;\n    padding: 0;\n  }\n  .whitewash {\n    color: #fff;\n  }\n"])));

exports.TopContent = TopContent;

var MiddleContent = _styledComponents["default"].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  width: 100%;\n  text-align: center;\n  padding: 24px;\n  background-color: #fff;\n  color: #8d8d8d;\n  box-sizing: border-box;\n  h2 {\n    font-size: 4vw;\n    margin: 24px auto;\n  }\n  h3 {\n    font-size: 3vw;\n  }\n  hr {\n    max-width: 500px;\n  }\n  ul, li {\n    max-width: 364px;\n    margin: auto;\n    text-align: left;\n  }\n  ul {\n    margin-bottom: 24px;\n  }\n"])));

exports.MiddleContent = MiddleContent;

var BottomContent = _styledComponents["default"].div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  width: 100%;\n  text-align: center;\n  padding: 24px;\n  background-color: #ffa500bd;\n  color: #8d8d8d;\n  box-sizing: border-box;\n  h2 {\n    font-size: 4vw;\n  }\n"])));

exports.BottomContent = BottomContent;

var VideoWrap = _styledComponents["default"].div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  z-index: -10;\n  top: 0;\n  left: 0;\n  overflow: hidden;\n\n  video {\n    min-height: 100vh;\n    min-width: 100vw;\n    height: 100vh;\n  }\n"])));

exports.VideoWrap = VideoWrap;
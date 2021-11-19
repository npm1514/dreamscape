"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _components = require("../components");

var _home = require("../styled-components/pages/home");

var _global = require("../styled-components/global");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Home = /*#__PURE__*/function (_Component) {
  _inherits(Home, _Component);

  var _super = _createSuper(Home);

  function Home() {
    var _this;

    _classCallCheck(this, Home);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      color: ""
    });

    return _this;
  }

  _createClass(Home, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      setTimeout(function () {
        _this2.setState({
          color: "whitewash"
        });
      }, 500);
    }
  }, {
    key: "render",
    value: function render() {
      var color = this.state.color;
      return /*#__PURE__*/_react["default"].createElement(_global.PageWrapper, null, /*#__PURE__*/_react["default"].createElement(_components.Header, null), /*#__PURE__*/_react["default"].createElement(_global.ContentWrapper, null, /*#__PURE__*/_react["default"].createElement(_home.TopContent, null, /*#__PURE__*/_react["default"].createElement("h1", {
        className: color
      }, "DREAMSCAPE GARDENS"), /*#__PURE__*/_react["default"].createElement("h2", {
        className: color
      }, "Serving Salt Lake City, Utah")), /*#__PURE__*/_react["default"].createElement(_home.MiddleContent, null, /*#__PURE__*/_react["default"].createElement("h2", null, "Services"), /*#__PURE__*/_react["default"].createElement("hr", null), /*#__PURE__*/_react["default"].createElement("h3", null, "Landscape Construction"), /*#__PURE__*/_react["default"].createElement("p", null, "We provide all traiditonal services from new construction to hardscaping and irrigation systems."), /*#__PURE__*/_react["default"].createElement("ul", null, /*#__PURE__*/_react["default"].createElement("li", null, "Excavation/Removal"), /*#__PURE__*/_react["default"].createElement("li", null, "Hardscaping (concrete, patio, decking, fencing, etc.)"), /*#__PURE__*/_react["default"].createElement("li", null, "Irrigiation Systems"), /*#__PURE__*/_react["default"].createElement("li", null, "Lighting"), /*#__PURE__*/_react["default"].createElement("li", null, "Xeriscaping"), /*#__PURE__*/_react["default"].createElement("li", null, "Sod, Gravel, Mulch Cover"), /*#__PURE__*/_react["default"].createElement("li", null, "Planting")), /*#__PURE__*/_react["default"].createElement("hr", null), /*#__PURE__*/_react["default"].createElement("h3", null, "Landscape Maintenance"), /*#__PURE__*/_react["default"].createElement("p", null, "We offer all maintenance services from mowing to snow removal and gardening."), /*#__PURE__*/_react["default"].createElement("ul", null, /*#__PURE__*/_react["default"].createElement("li", null, "Lawn Maintenance (mowing, triming, seeding, leaf removal, aeration)"), /*#__PURE__*/_react["default"].createElement("li", null, "Plant Maintenance (tree/bush trimming, troubleshooting, fertilizer)"), /*#__PURE__*/_react["default"].createElement("li", null, "Garden Maintenance (weeding, soil evaluation)"), /*#__PURE__*/_react["default"].createElement("li", null, "Snow Removal (shoveling, plowing, snow blowing)"), /*#__PURE__*/_react["default"].createElement("li", null, "Irrigation System Repair")))), /*#__PURE__*/_react["default"].createElement(_components.Footer, null), /*#__PURE__*/_react["default"].createElement(_home.VideoWrap, null, /*#__PURE__*/_react["default"].createElement("video", {
        muted: true,
        loop: true,
        autoPlay: true,
        playsInline: true,
        preload: "auto"
      }, /*#__PURE__*/_react["default"].createElement("source", {
        src: "/images/background.mp4",
        type: "video/mp4"
      }))));
    }
  }]);

  return Home;
}(_react.Component);

var _default = Home;
exports["default"] = _default;
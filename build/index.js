"use strict";

var _express = _interopRequireDefault(require("express"));

var _nodeFetch = _interopRequireDefault(require("node-fetch"));

var _react = _interopRequireDefault(require("react"));

var _server = require("react-dom/server");

var _styledComponents = require("styled-components");

var _fs = _interopRequireDefault(require("fs"));

var _compression = _interopRequireDefault(require("compression"));

var _cors = _interopRequireDefault(require("cors"));

var _path = _interopRequireDefault(require("path"));

var _nodeCron = _interopRequireDefault(require("node-cron"));

var _nodemailer = _interopRequireDefault(require("nodemailer"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _cryptr = _interopRequireDefault(require("cryptr"));

var _config = _interopRequireDefault(require("./config"));

var _roots = require("./roots");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var cryptr = new _cryptr["default"](_config["default"].key);
var PORT = process.env.PORT || 3003;
var app = (0, _express["default"])();
app.use((0, _compression["default"])());
app.use((0, _cors["default"])());
app.use(_bodyParser["default"].json());
app.use(_bodyParser["default"].urlencoded());

_nodeCron["default"].schedule('* * 1 * *', function () {
  (0, _nodeFetch["default"])('https://dreamscape.herokuapp.com/').then(function (res) {
    return console.log("requested at " + new Date());
  });
});

var dataObj = {},
    homeBundle = "",
    gardensBundle = "",
    landscapingBundle = "",
    servicesBundle = "",
    contactBundle = "";

_fs["default"].readFile('./dist/js/home.bundle.min.js', "utf8", function (err, data) {
  if (err) console.log("ERR", err);
  homeBundle = data || "";
});

_fs["default"].readFile('./dist/js/gardens.bundle.min.js', "utf8", function (err, data) {
  if (err) console.log("ERR", err);
  gardensBundle = data || "";
});

_fs["default"].readFile('./dist/js/landscaping.bundle.min.js', "utf8", function (err, data) {
  if (err) console.log("ERR", err);
  landscapingBundle = data || "";
});

_fs["default"].readFile('./dist/js/services.bundle.min.js', "utf8", function (err, data) {
  if (err) console.log("ERR", err);
  servicesBundle = data || "";
});

_fs["default"].readFile('./dist/js/contact.bundle.min.js', "utf8", function (err, data) {
  if (err) console.log("ERR", err);
  contactBundle = data || "";
});

app.get('/', function (req, res) {
  var data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, homeBundle, _roots.HomeRoot, "home"));
});
app.get('/gardens', function (req, res) {
  var data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, gardensBundle, _roots.GardensRoot, "gardens"));
});
app.get('/landscaping', function (req, res) {
  var data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, landscapingBundle, _roots.LandscapingRoot, "landscaping"));
});
app.get('/services', function (req, res) {
  var data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, servicesBundle, _roots.ServicesRoot, "services"));
});
app.get('/contact', function (req, res) {
  var data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, contactBundle, _roots.ContactRoot, "contact"));
});
;
app.post('/emailer', function (req, res) {
  var _req$body = req.body,
      email = _req$body.email,
      name = _req$body.name,
      description = _req$body.description,
      phone = _req$body.phone;

  var transporter = _nodemailer["default"].createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
      user: cryptr.decrypt(_config["default"].nodemailerEmail),
      pass: cryptr.decrypt(_config["default"].nodemailerPW)
    }
  });

  transporter.sendMail({
    from: email,
    to: cryptr.decrypt(_config["default"].nodemailerEmail),
    subject: 'Nelson Rozier: Online Inquiry',
    html: "\n      <h3>Hi! The following person has submitted a message.<h3/>\n      <h4>Name: ".concat(name, "</h4>\n      <h4>Email: ").concat(email, "</h4>\n      <h4>Phone: ").concat(phone, "</h4>\n      <h4>Message: ").concat(description, "</h4>\n    ")
  }, function (error, info) {
    if (error) res.send({
      error: error
    });else res.send({
      response: info
    });
  });
});
app.get('/images/:id', function (req, res) {
  res.set('Cache-Control', 'public, max-age=31557600');
  res.sendFile(_path["default"].join(__dirname, '../images/' + req.params.id));
});
app.get('/health', function (req, res) {
  return res.send('OK');
});
app.listen(PORT, function () {
  console.log('Running on http://localhost:' + PORT);
}); // functions!!!!!!!!!!!!!

function getQueries(req, res) {
  var qOb = {};
  var queries = req && req._parsedUrl && req._parsedUrl.query && req._parsedUrl.query.split('&') ? req._parsedUrl.query.split('&') : [];

  if (queries.length) {
    queries.forEach(function (x) {
      var y = x.split('=');
      qOb[y[0]] = y[1];
    });
  }

  return qOb;
}

function fetcher(url) {
  return (0, _nodeFetch["default"])(url).then(function (response) {
    if (response.status !== 200) throw Error(response.statusText);
    return response.json();
  }).then(function (json) {
    return json;
  })["catch"](errHandle);
}

function returnHTML(data, bundle, Page, title) {
  var dataString = JSON.stringify(data);
  var sheet = new _styledComponents.ServerStyleSheet();
  var body = (0, _server.renderToString)(sheet.collectStyles( /*#__PURE__*/_react["default"].createElement(Page, {
    data: data
  })));
  var styles = sheet.getStyleTags();
  return "\n        <html lang=\"en\">\n          <head>\n            <link data-default-icon=\"/images/ico.ico\" data-badged-icon=\"/images/ico.ico\" rel=\"shortcut icon\" href=\"/images/ico.ico\">\n            <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n            <title>".concat(title, "</title>\n            <meta name=\"Description\" content=\"").concat(title, "\">\n            <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\n            <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>\n            <link href=\"https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:wght@300&display=swap\" rel=\"stylesheet\">\n            <style>\n              body { margin: 0; font-family: 'Open Sans Condensed', sans-serif; cursor: url('/images/circle.png'); }\n              a { text-decoration: none; color: #000; }\n            </style>\n            ").concat(styles, "\n          </head>\n          <body>\n            <script>window.os = window.os || {};</script>\n            <script>window.__DATA__=").concat(dataString, "</script>\n            <div id=\"app\" role=\"main\">").concat(body, "</div>\n            <script>").concat(bundle, "</script>\n          </body>\n        </html>\n      ");
}

function errHandle(err) {
  console.log(err);
}
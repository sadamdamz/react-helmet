"use strict";

var _express = _interopRequireDefault(require("express"));

var _react = _interopRequireDefault(require("react"));

var _server = require("react-dom/server");

var _reactRouterDom = require("react-router-dom");

var _path = _interopRequireDefault(require("path"));

var _app = _interopRequireDefault(require("./client/app"));

var _routes = _interopRequireDefault(require("./routes"));

var _reactHelmet = require("react-helmet");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
var port = 3000;

var HTML = function HTML(req, context) {
  // console.log(req)
  var body = (0, _server.renderToString)( /*#__PURE__*/_react["default"].createElement(_reactRouterDom.StaticRouter, {
    location: req.url,
    context: context
  }, /*#__PURE__*/_react["default"].createElement(_app["default"], null))); // ReactDOMServer.renderToString('1');

  var helmet = _reactHelmet.Helmet.renderStatic();

  return "<!doctype html>\n    <html ".concat(helmet.htmlAttributes.toString(), ">\n        <head>\n            ").concat(helmet.title.toString(), "\n            ").concat(helmet.meta.toString(), "\n            ").concat(helmet.link.toString(), "\n        </head>\n        <body ").concat(helmet.bodyAttributes.toString(), ">\n            <div id=\"app\">\n            ").concat(body, "\n            </div>\n        </body>\n    </html>");
};

var context = {};
app.use(_express["default"]["static"]("dist")); // app.get("*", (req, res) => {
//   return res.send(HTML({ url: "/404" }, context));
// });

_routes["default"].forEach(function (route) {
  // console.log(route)
  app.get(route.url, function (req, res) {
    return res.send(HTML(req, context));
  });
});

app.listen(port, function () {
  return console.log("Example app listening on port ".concat(port, "!"));
});
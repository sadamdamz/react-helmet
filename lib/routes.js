"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.MenuLinks = void 0;

var _home = _interopRequireDefault(require("./client/pages/home/home"));

var _about = _interopRequireDefault(require("./client/pages/about/about"));

var _notFound = _interopRequireDefault(require("./client/pages/not-found/not-found"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Routes = [{
  url: "/",
  exact: true,
  component: _home["default"]
}, {
  url: "/about",
  exact: false,
  component: _about["default"]
}, {
  url: "*",
  exact: true,
  component: _notFound["default"]
}];
var MenuLinks = [{
  url: "/",
  menuText: "Home"
}, {
  url: "/about",
  menuText: "About"
}];
exports.MenuLinks = MenuLinks;
var _default = Routes;
exports["default"] = _default;
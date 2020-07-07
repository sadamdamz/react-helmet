import express from "express";
import React from "react";
import { renderToString,ReactDOMServer } from "react-dom/server";
import { StaticRouter as Router } from "react-router-dom";
import path from "path";
import App from "./client/app";
const app = express();
const port = 3000;
import Routes from "./routes";
import { Helmet } from "react-helmet";
const HTML = (req, context) => {
  // console.log(req)
  const body =renderToString(
    <Router location={req.url} context={context}>
      <App />
    </Router>
  );
  // ReactDOMServer.renderToString('1');
  const helmet = Helmet.renderStatic();
  return  (
    `<!doctype html>
    <html ${helmet.htmlAttributes.toString()}>
        <head>
            ${helmet.title.toString()}
            ${helmet.meta.toString()}
            ${helmet.link.toString()}
        </head>
        <body ${helmet.bodyAttributes.toString()}>
            <div id="app">
            ${body}
            </div>
        </body>
    </html>`
);
};

const context = {};

app.use(express.static("dist"));

app.get("*", (req, res) => {
  return res.send(HTML({ url: req.url }, context));
});

Routes.forEach((route) => {
  // console.log(route)
  app.get(route.url, (req, res) => {
    return res.send(HTML(req, context));
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

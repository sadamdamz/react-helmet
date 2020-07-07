import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";
export default class Home extends Component {
  render() {
    return (
      <Fragment>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Home page </title>

          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <p className="padding">this is home </p>
      </Fragment>
    );
  }
}
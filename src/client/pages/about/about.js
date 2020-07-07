import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";
export default class About extends Component {
  render() {
    return (
      <Fragment>
        <Helmet>
          <meta charSet="utf-8" />
          <title>About</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <p>this is About</p>
      </Fragment>
    );
  }
}

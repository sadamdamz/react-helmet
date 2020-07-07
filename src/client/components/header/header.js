import React, { Component, Fragment } from "react";
import { MenuLinks } from "../../../routes";
import { Link } from "react-router-dom";
import {Helmet} from "react-helmet";

export default class Header extends Component {
  render() {
    return (
      <Fragment>
        {MenuLinks.map((menu, index) => (
          <Link to={menu.url}>{menu.menuText}</Link>
        ))}
      </Fragment>
    );
  }
}

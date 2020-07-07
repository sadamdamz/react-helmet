import React, { Component, Fragment } from "react";
import {Helmet} from "react-helmet";

export default class NotFound extends Component {
	render() {
		return (
			<Fragment>
				        <Helmet>
                <meta charSet="utf-8" />
                <title>Not found</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
				<p>this is Not Found</p>
			</Fragment>
		);
	}
}

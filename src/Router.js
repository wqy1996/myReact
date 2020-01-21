
import React from 'react';
import Home from "./components/home/home.js"
import Demo from "./components/demo/demo.jsx"
import Children from "./components/demo/children"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function router() {
	return (
		<Router>
			<div>
				<Switch>
					<Route path="/home" component={Home} />
					<Route path="/demo"
						render={() =>
							<Demo>
								<Route path="/demo/children" component={Children}></Route>
							</Demo>
						} />
				</Switch>
			</div>
		</Router>);
}

export default router
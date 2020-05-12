// 弃用！！！！
import React from 'react';
import Home from "../pages/home/home"
import Demo from "../pages/demo/demo"
import Child from "../pages/demo/child"
import Nav from "./nav"
import Error404 from "../pages/error404.jsx"
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

function router() {
	return (
		<Router>
			<div>

				<Nav />
				<Switch>
					<Route path="/home" component={Home} />
					<Route path="/demo"
						render={() =>
							<Demo>
								<Route path="/demo/child" component={Child}></Route>
							</Demo>
						} />
						<Redirect exact  from="/" to="/home" />
					<Route component={Error404}></Route>
				</Switch>
			</div>
		</Router>);
}

export default router
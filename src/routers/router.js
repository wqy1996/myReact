import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import React from 'react'
import Home from "@/pages/Home"
import Detail from "@/pages/Detail"

let routers = [{
	name: 'home',
	component: Home
},
{
	name: 'detail',
	component: Detail
}]
class RouterConfig extends React.Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route path='/' exact render={() => (
						<Redirect to='/home' />
					)} />
					{routers.map((item, index) => {
						return (<Route path={'/' + item.name} component={item.component} key={index} />)
					})}
				</Switch>
			</Router>
		)
	}
}

export default RouterConfig;
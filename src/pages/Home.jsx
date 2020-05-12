import React, { Component } from "react"
import Header from "../components/header/Header"
class Home extends Component {
	constructor(props) {
		super(props)
		this.state = {
			arr: [1, 2, 3, 4, 5]
		}
	}
	render() {
		return (
			<div >
				<Header />
				<div className="content">

				</div>
			</div>
		)
	}
}

export default Home

import React, { Component } from "react"
import Header from "../components/Header"
class Home extends Component {
	constructor(props){
		super(props)
		this.state = {
			arr: [1,2,3,4,5]
		}
	}
	render() {
		return (
			<div >
				<Header/>
				{/* {this.state.arr.map(item=><p key={item}>{item}</p>)} */}
      </div>
		)
	}
}

export default Home

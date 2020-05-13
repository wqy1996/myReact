import React, { Component } from "react"
import Header from "../components/header/Header"
import style from "./Home.less"
import LeftMenu from "../components/left_menu/LeftMenu"
class Home extends Component {
	constructor(props) {
		super(props)
		this.state = {
			arr: [1, 2, 3, 4, 5]
		}
	}
	render() {
		return (
			<div id={style.app}>
				<Header />
				<div className={style['content-box']}>
					<LeftMenu></LeftMenu>
					<div className={style.content}></div>
				</div>
			</div>
		)
	}
}

export default Home

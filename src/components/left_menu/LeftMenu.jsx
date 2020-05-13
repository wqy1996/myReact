import React, { Component } from 'react';
import style from "./LeftMenu.less"
console.log(style)
class LeftMenu extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		function getArr(length) {
			let arr = []
			for (let i = 1; i <= length; i++) {
				arr.push(<li key={i}>这个就是标题</li>)
			}
			return arr
		}
		return (
			<div className={style.menu}>
				<ul>
					{getArr(5).map(item=>{
						return item
					})}
				</ul>
			</div>
		)
	}
}

export default LeftMenu

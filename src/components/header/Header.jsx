import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Header.less'

class Header extends Component {
	render() {
		return (
			<div className="header">
				<div className="left">
					<Link to="/home" title="这是我的故事">
						雨记
					</Link>
				</div>
				<div className="middle">
					<ul className="clear">
						<li>
							<Link to='/home' >
								技术
							</Link>
						</li>
						<li>
							<Link to='/home' >
								生活
							</Link>
						</li>
						<li>
							<Link to="/home">
								采集
							</Link>
						</li>
					</ul>
					<div className="line"></div>
				</div>
				<div className="right">
					<img src={require('@/assets/imgs/search.png')} alt="" />
					<input type="text" />
					<button type="button">
					搜索
					</button>
				</div>
			</div>
		);
	}
}

export default Header;
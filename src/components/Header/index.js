import React from 'react'
import Link from 'gatsby-link'
import ReactNavbar from './ReactNavbar'

const Header = () => (
  <header className="header">
	<div className="header-wrap">
		<div className="navbar-desktop">	
		<Link to="javascriptP:;" className="logo">
			<img src="/assets/image/homepage@2X/logo.svg"/>
		</Link>
		<div className="nav-menu">
			<ul>
				<li><Link to="javascriptP:;">How It Works</Link></li>
				<li><Link to="javascriptP:;">See Examples</Link></li>
				<li><Link to="javascriptP:;">Features</Link></li>
				<li><Link to="javascriptP:;">Pricing</Link></li>
			</ul>
		</div>
		</div>
		<Link to="javascript:;" className="login move-right"><span>Login</span></Link>
		<div className="clear-fix"></div>
	</div>	
  </header>
)

export default Header

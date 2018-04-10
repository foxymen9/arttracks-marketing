import React from 'react'
import Link from 'gatsby-link'
import FooterMenuItem from './FooterMenuItem'

const Footer = () => {
	const firstList = ['First', 'Second', 'Third', 'Fourth']
	return (
		<footer className="footer">
		  <div className="container f-color">
			<div className="row footer-content">
				<div className="col-md-6">
					<div className="footer-desc">
						<img src="./assets/image/homepage@2X/logo.svg" />
						<p>ArtTracks is the fastest way to generate video content from music audio and sound recordings.</p>
					</div>
				</div>
				<div className="col-md-6">
					<div className="row">
						<div className="col-md-3">
							<FooterMenuItem title="Category" lists={firstList} />
						</div>
						<div className="col-md-3">
							<FooterMenuItem title="Category" lists={firstList} />
						</div>
						<div className="col-md-3">
							<FooterMenuItem title="Category" lists={firstList} />
						</div>
						<div className="col-md-3">
							<FooterMenuItem title="Category" lists={firstList} />
						</div>
					</div>
				</div>
			</div>
			<div className="row footer-bottom">
				<div className="col-md-12">	
					<div className="social-links">
						<ul>
							<li><Link to="/"><img src="./assets/image/homepage/Facebook-color.svg"/></Link></li>
							<li><Link to="/"><img src="./assets/image/homepage/Twitter-color.svg"/></Link></li>
							<li><Link to="/"><img src="./assets/image/homepage/Instagram-color.svg"/></Link></li>
							<li><Link to="/"><img src="./assets/image/homepage/Youtube-color.svg"/></Link></li>
							<li><Link to="/"><img src="./assets/image/homepage/Linkedin-color.svg"/></Link></li>
						</ul>
					</div>
					<div className="copyright move-right">
						<p>&copy;Copyright ArtTracks 2018</p>
					</div>
				</div>	
			</div>
		  </div>
		</footer>
  	)
}

export default Footer

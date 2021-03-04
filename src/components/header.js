import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import headerStyles from './header.module.scss';

const Header = () => {
	const data = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					title
					author
				}
			}
		}
	`)

	return(
		<header>
			<h1>
				<Link to='/'>
					{data.site.siteMetadata.title}
				</Link>
			</h1>
			<nav>
				<ul>
					<li>
						<Link to='/about'>About</Link>
					</li>
					<li>
						<Link to='/blog'>Blog</Link>
					</li>
					<li>
						<Link to='/project'>Project</Link>
					</li>
					<li>
						<Link to='/contact'>Contact</Link>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default Header;
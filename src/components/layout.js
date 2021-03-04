import React from 'react'

import Header from '../components/header'
import Footer from '../components/footer'
import '../styles/index.scss'
// import layoutStyles from './layout.module.scss'
// import layoutStyles from '../styles/layout.scss'

const Layout = (props) => {
	// console.log(layoutStyles)
	return(
		<div>
			<Header />
				{props.children}
			<Footer />
		</div>
	)
}
export default Layout;
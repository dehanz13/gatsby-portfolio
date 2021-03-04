import React from 'react';
import { Link } from 'gatsby'

import Layout from '../components/layout'

const ContactPage = () => {
	return(
		<Layout>
			<h1>Contact</h1>
			<p>Posts will show up here later on...</p>
			<p>Hit me up on Twitter! <Link to='https://www.twitter.com/'>Twitter</Link></p>
			<p>Hit me up on Instagram! <a href='https://www.twitter.com/' target='_blank' rel='noreferrer'>Twitter</a></p>
		</Layout>
	)
}
export default ContactPage;

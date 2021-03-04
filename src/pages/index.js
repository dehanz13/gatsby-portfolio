import React from "react"
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => {
  return(
    <Layout>
      <h1>Hello,</h1>
      <h2>My Name is Danniel, a Full Stack Developer living in Dallas, Texas.</h2>
      <p>Need a developer? <Link to="/contact">Contact Me!</Link></p>
    </Layout>
  )
}
export default IndexPage;
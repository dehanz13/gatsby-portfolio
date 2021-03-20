import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/layout'
import * as blogStyles from './blog.module.scss'

const BlogPage = () => {
	// const data = useStaticQuery(graphql`
	// 	query {
	// 		allMarkdownRemark {
	// 			edges {
	// 				node {
	// 					frontmatter {
	// 						title
	// 						date
	// 					}
	// 					fields {
	// 						slug
	// 					}
	// 					excerpt
	// 				}
	// 			}
	// 		}
	// 	}
	// `)
	const data = useStaticQuery(graphql`
		query {
			allContentfulBlogPost ( sort: {	fields: publishedDate, order: DESC }	)
			{
				edges {
					node {
						title
						slug
						publishedDate( formatString: "MMMM Do, YYYY" )
					}
				}
			}
		}
	`)

	//const array = data.allMarkdownRemark.edges;
	const array2 = data.allContentfulBlogPost.edges;
	return(
		<Layout>
			<h1>Blog</h1>
			<p>Posts will show up here later on...</p>
			<ol className={blogStyles.posts}>
				{array2.map((edge) => {
					return(
						// <li className={blogStyles.post}>
						// 	<Link to={`/blog/${edge.node.fields.slug}`}>
						// 		<h2>{edge.node.frontmatter.title}</h2>
						// 		<p>{edge.node.frontmatter.date}</p>
						// 	</Link>
						// </li>
						<li className={blogStyles.post}>
						<Link to={`/blog/${edge.node.slug}`}>
							<h2>{edge.node.title}</h2>
							<p>{edge.node.publishedDate}</p>
						</Link>
					</li>
					)
				})}
			</ol>
			{/* {test.map((post, i) => (
				<div key={i}>
					{post.frontmatter.title}
					{post.frontmatter.date}
				</div>
			))} */}
		</Layout>
	)
}
export default BlogPage;

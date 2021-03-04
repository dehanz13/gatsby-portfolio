import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/layout'

const BlogPage = () => {
	const data = useStaticQuery(graphql`
		query {
			allMarkdownRemark {
				edges {
					node {
						frontmatter {
							title
							date
						}
						fields {
							slug
						}
						excerpt
					}
				}
			}
		}
	`)
	const array = data.allMarkdownRemark.edges;
	return(
		<Layout>
			<h1>Blog</h1>
			<p>Posts will show up here later on...</p>
			<ol>
				{array.map((edge) => {
					return(
						<li>
							<Link to={`/blog/${edge.node.fields.slug}`}>
								<h2>{edge.node.frontmatter.title}</h2>
								<p>{edge.node.frontmatter.date}</p>
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

import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby';
//import {documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { renderRichText } from 'gatsby-source-contentful/rich-text';

import Layout from '../components/layout'

// export const query = graphql`
// 	query($slug: String!) {
// 		markdownRemark(
// 			fields: { 
// 				slug: { 
// 					eq: $slug 
// 				} 
// 			}
// 		) {
// 			frontmatter {
// 				title
// 				date
// 			}
// 			html
// 		}
// 	}
// `

export const query = graphql`
	query($slug: String!) {
		contentfulBlogPost (slug: {eq: $slug}) {
			title
			publishedDate(formatString: "MMMM Do, YYYY")
		}
	}
`

// export const query = graphql`
// 	query($slug: String!) {
// 		AllContentfulBlogPost {
// 			edges {
// 				node {
// 					bodyRichText {
// 						raw
// 						references {
// 							... on ContentfulAsset {
// 								contentful_id{
// 									fixed(width: 1600 ) {
// 										width
// 										height
// 										src
// 										srcSet
// 									}
// 								}
// 								... on ContentfulBlogPost {(slug: {eq: $slug})} {
// 									title
// 									publishedDate(formatString: "MMMM Do, YYYY")
// 								}
// 							}
// 						}
// 					}
// 				}
// 			}
// 		}
// 	}
// `

const Blog = (props) => {
	// const options = {
	// 	"embedded-asset-block":node => {
	// 		return(
	// 			<>
	// 				<pre>
	// 					<code>
	// 						{JSON.stringify(node, null, 2)}
	// 					</code>
	// 				</pre>
	// 				<img
	// 					src={node.data.target.fixed.src}
	// 					alt={node.data.target.title}
	// 				/>
	// 			</>
	// 		)
	// 	},
	// }

	return(
		<Layout>
			{/* <h1>{props.data.markdownRemark.frontmatter.title}</h1>
			<p>{props.data.markdownRemark.frontmatter.date}</p>
			<div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html}}>
			</div> */}
			<h1>{props.data.contentfulBlogPost.title}</h1>
			<p>{props.data.contentfulBlogPost.publishedDate}</p>
			{/* {body && renderRichText(data.contentfulBlogPost.body, options)} */}
			
		</Layout>
	)
}

export default Blog;

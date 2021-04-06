import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import Projects from "../components/projects"

const ProjectPage = ({ data }) => {
  console.log(JSON.stringify(data.project.edges))

  return (
    <Layout>
      <h1>Project</h1>
      {/* <p>Posts will show up here later on...</p> */}
      <Projects items={data.project} />
    </Layout>
  )
}

export const query = graphql`
  {
    project: allContentfulProjects {
      edges {
        node {
          id
          projectDescription {
            projectDescription
          }
          projectTitle
        }
      }
    }
  }
`
export default ProjectPage

import React, { Component } from "react"

import * as projectStyles from "./projects.module.scss"

export default class Projects extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: props.items.edges,
      // projectItems: props.items.edges
    }
  }
  render() {
    return (
      <div className={projectStyles.container}>
        {this.state.items.map(({ node }) => {
          return (
            <div key={node.id} className={projectStyles.row}>
              {/* project title */}
              <div className={projectStyles.title}>{node.projectTitle}</div>
              <div className={projectStyles.desc}>
                {node.projectDescription.projectDescription}
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}

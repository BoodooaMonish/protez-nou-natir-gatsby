import React from "react"
import Cause from "./cause"

export default function RecentCauses({ data }) {
  return (
    <article className="causes">
      <h2 className="causes__heading">OUR CAUSES</h2>
      <div className="cards">
        {data.allContentfulCause.edges.map(item => {
          return (
            <Cause
              title={item.node.title}
              text={item.node.summary}
              key={item.node.slug}
              slug={item.node.slug}
              image={item.node.thumbnail.file.url}
              raised={item.node.currentValue}
              target={item.node.targetValue}
            />
          )
        })}
      </div>
    </article>
  )
}

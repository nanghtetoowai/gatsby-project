import React from "react"
// highlight-next-line
import { useStaticQuery, Link, graphql } from "gatsby"
import styles from "./layout.module.css"
// highlight-start
export default function Layout({ children }) {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    // highlight-end
    <div className={styles.layout}>
      <div className={styles.appBar}>
        <Link to={`/`}>
          <h3 className={styles.title}>
            {data.site.siteMetadata.title} {/* highlight-line */}
          </h3>
        </Link>
        <Link className={styles.links} to={`/about/`}>
          About
        </Link>
        <Link className={styles.links} to={`/myFiles/`}>
          My File
        </Link>
      </div>
      {children}
    </div>
    // highlight-start
  )
}
// highlight-end

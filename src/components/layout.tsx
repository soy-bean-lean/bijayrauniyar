/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import "bootstrap/dist/css/bootstrap.min.css"
import { Header } from "./header"
import "./layout.scss"

interface LayoutProps {
  children: any
}

function Layout(props: LayoutProps) {
  return (
    <div>
      {/* <Header /> */}
      {/* <div
        style={{
          margin: "0 auto",
          maxWidth: 960,
          padding: "0px 1.0875rem 1.45rem",
          paddingTop: 0,
        }}
      > */}
      {props.children}
      {/* </div> */}
    </div>
  )
}

export default Layout

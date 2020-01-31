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
import { Container, Nav, Badge, Button, Row, Col } from "react-bootstrap"

interface LayoutProps {
  children: any
}

function Layout(props: LayoutProps) {
  return (
    <Container>
      <Header />
      {props.children}
    </Container>
  )
}

export default Layout

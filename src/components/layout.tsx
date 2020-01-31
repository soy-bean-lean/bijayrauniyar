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
import { Container } from "react-bootstrap"
import messages from "./messages"
import { IntlProvider, FormattedMessage } from "react-intl"
interface LayoutProps {
  children: any
}

function Layout(props: LayoutProps) {
  const name: string = "Bijay Rauniyar"
  const unreadCount = 1000
  return (
    <IntlProvider locale="en">
      <Container>
        <p>
          <FormattedMessage
            id="welcome"
            defaultMessage={`Hello {name}, you have {unreadCount, number} {unreadCount, plural,
                      one {message}
                      other {messages}
                    }`}
            values={{ name: <b>{name}</b>, unreadCount }}
          />
        </p>
        <Header />
        {props.children}
      </Container>
    </IntlProvider>
  )
}

export default Layout

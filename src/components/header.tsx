import { Link } from "gatsby"
import * as React from "react"
import { Nav, Row } from "react-bootstrap"
export const Header = () => (
  <div>
    <Row className="justify-content-end pt-3">
      <Nav activeKey="/">
        <Nav.Item>
          <Nav.Link href="/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="pl-0 pr-0" disabled>
            |
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link eventKey="about">About me</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="pl-0 pr-0" disabled>
            |
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link eventKey="blog">My Blog</Nav.Link>
        </Nav.Item>
      </Nav>
    </Row>
  </div>
)

import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { Container, Nav, Badge, Button, Row, Col } from "react-bootstrap"
//import { IntlProvider, FormattedMessage } from "react-intl"

const Intl = () => (
  <p>
    <FormattedMessage
      id="welcome"
      defaultMessage={`Hello {name}, you have {unreadCount, number} {unreadCount, plural,
                      one {message}
                      other {messages}
                    }`}
      values={{ name: <b>bijay</b>, unreadCount: 1000 }}
    />
  </p>
)

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Container>
      {/* <IntlProvider locale="np">
        <Intl></Intl>
      </IntlProvider> */}
      <Row className="pt-5">
        <Col xs={8}>
          <Row style={{ height: "10rem" }}>
            <h1 className="downbg">Bijay Rauniyar</h1>
          </Row>
          <Row style={{ height: "7rem" }}>
            <h4>
              Programmer/ Javascript Developer
              <h4>based in Kathmandu Nepal</h4>
            </h4>
          </Row>
          <Row style={{ height: "2rem" }}>
            <h3>
              <b>Skills</b>
            </h3>
          </Row>
          <Row>
            <div>
              <Badge pill className="skills p-1">
                ExpressJs
              </Badge>
              <Badge pill className="skills p-1">
                LoopBack
              </Badge>
              <Badge pill className="skills p-1">
                FeatherJs
              </Badge>
              <Badge pill className="skills p-1">
                Angular
              </Badge>
              <Badge pill className="skills p-1">
                TypeScript
              </Badge>
              <Badge pill className="skills p-1">
                EmotionJs
              </Badge>
              <Badge pill className="skills p-1">
                Gatsby
              </Badge>
            </div>
          </Row>
        </Col>
        <Col>
          <Nav
            className="justify-content-end"
            activeKey="/"
            onSelect={(selectedKey: string) => alert(`selected ${selectedKey}`)}
          >
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
        </Col>
      </Row>
      <Row className="pt-10">
        <Link to="/page-2/">Go to page 2</Link>
      </Row>
    </Container>
  </Layout>
)

export default IndexPage

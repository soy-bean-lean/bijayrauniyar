import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Nav, Badge, Button, Row, Col } from "react-bootstrap"
import {
  faFacebook,
  faGoogle,
  faGithub,
  faTwitter,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
//import { IntlProvider, FormattedMessage } from "react-intl"

// const Intl = () => (
//   <p>
//     <FormattedMessage
//       id="welcome"
//       defaultMessage={`Hello {name}, you have {unreadCount, number} {unreadCount, plural,
//                       one {message}
//                       other {messages}
//                     }`}
//       values={{ name: <b>bijay</b>, unreadCount: 1000 }}
//     />
//   </p>
// )
// {
//   /* <IntlProvider locale="np">
//   <Intl></Intl>
// </IntlProvider> */
// }

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Row className="pt-5">
      <Col>
        <Row style={{ height: "10rem" }}>
          <h1 className="downbg">
            Bijay <b> Rauniyar </b>
          </h1>
        </Row>
        <Row style={{ height: "7rem" }}>
          <h4>
            Programmer / Javascript Developer
            <h4>based in Kathmandu Nepal</h4>
          </h4>
        </Row>
        <Row style={{ height: "4rem" }}>
          <h3>
            <b>Skills</b>
          </h3>
        </Row>
        <Row>
          <div>
            <Badge pill className="skills p-2">
              ExpressJs
            </Badge>
            <Badge pill className="skills p-2">
              LoopBack
            </Badge>
            <Badge pill className="skills p-2">
              FeatherJs
            </Badge>
            <Badge pill className="skills p-2">
              Angular
            </Badge>
            <Badge pill className="skills p-2">
              TypeScript
            </Badge>
            <Badge pill className="skills p-2">
              EmotionJs
            </Badge>
            <Badge pill className="skills p-2">
              Gatsby
            </Badge>
          </div>
        </Row>
      </Col>
    </Row>
    <footer className="pt-5">
      <p>Fllow me on social media</p>
      <hr></hr>
      <div>
        <Link className="mr-3 ml-2 " to="/socialauth">
          <FontAwesomeIcon icon={faFacebook} />
        </Link>
        <Link className="mr-3 ml-2 " to="/socialauth">
          <FontAwesomeIcon icon={faGoogle} />
        </Link>
        <Link className="mr-3 ml-2 " to="/socialauth">
          <FontAwesomeIcon icon={faGithub} />
        </Link>
        <Link className="mr-3 ml-2 " to="/socialauth">
          <FontAwesomeIcon icon={faLinkedin} />
        </Link>
        <Link className="mr-3 ml-2 " to="/socialauth">
          <FontAwesomeIcon icon={faInstagram} />
        </Link>
        <Link className="mr-3 ml-2 " to="/socialauth">
          <FontAwesomeIcon icon={faTwitter} />
        </Link>
      </div>
    </footer>
  </Layout>
)

export default IndexPage

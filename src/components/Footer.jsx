import { Container, Row, Col } from "react-bootstrap";

import logo from "../assets/img/HenryLogo.webp";
import SocialLinks from "./SocialLinks";

const thisYear = new Date().getFullYear();

export const Footer = () => {
  return (
    <footer className="footer p-5">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <SocialLinks />
            <p>Copyright {thisYear}. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

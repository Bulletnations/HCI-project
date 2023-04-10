import { Container, Row, Col } from "react-bootstrap"
import logo  from "../assets/img/logo.svg"
import { Icon0Square } from "react-bootstrap-icons"

export const Footer = () => {
    return(
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <Col sm={6}>
                        <img src={logo} alt="logo"/>
                    </Col>
                    <Col sm={6} className="text-center text-sm-end" >
                        <div className="social-icons">
                            <a href=""><img src={Icon0Square}/></a>
                            <a href=""><img src={Icon0Square}/></a>
                            <a href=""><img src={Icon0Square}/></a>
                        </div>
                        <p>CopyRight 2023. All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}
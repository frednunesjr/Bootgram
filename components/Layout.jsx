import { Col, Container, Row } from "react-bootstrap";
import Sidebar from "./Sidebar";

export default function Layout({ children }) {
    return (
        <>
            <Container fluid>
                <Row>
                    <Col md={2} className='d-grid vh-100 position-relative'>
                        <Sidebar />
                    </Col>
                    <Col>
                        <main>{children}</main>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
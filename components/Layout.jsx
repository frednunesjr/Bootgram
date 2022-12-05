import { Col, Container, Row } from "react-bootstrap";
import Sidebar from "./Sidebar";

export default function Layout({ children }) {
    return (
        <>
            <Container fluid>
                <Row>
                    <Col md={2} className='d-grid vh-100 position-relative border-end'>
                        <Sidebar />
                    </Col>
                    <Col className='bg-light'>
                        <Container as='main'>
                            {children}
                        </Container>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
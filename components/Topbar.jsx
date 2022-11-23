import { Container, Row, Col, Image, FormControl } from "react-bootstrap";
import Icon from "./Icon";

function Topbar(){
    return(
    //     block topbar
	// 			nav.col-md-2.fs-4.d-flex.gap-3
	// 				a(href=""): i.bi.bi-house-door
	// 				a(href=""): i.bi.bi-messenger
	// 				a(href=""): i.bi.bi-plus-square
	// 				a(href=""): i.bi.bi-compass
	// 				a(href=""): i.bi.bi-heart
					// a(href=""): i.bi.bi-person-circle
        <Container fluid className='border-bottom'>
            <Container>
                <Row md={3} className='py-3 align-items-center justify-content-evenly'>
                    <Col md={2}>
                        <Image fluid className='w-50' src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/800px-Instagram_logo.svg.png'></Image>
                    </Col>
                    <Col md={2} className='mx-5'>
                        <FormControl type='text' placeholder='Pesquisar' />
                    </Col>
                    <Col as='nav' md={2} className='fs-4 d-flex gap-3'>
                        <a href='#'><Icon name='house-door' className='text-dark' /></a>
                        <a href='#'><Icon name='messenger' className='text-dark' /></a>
                        <a href='#'><Icon name='plus-square' className='text-dark' /></a>
                        <a href='#'><Icon name='compass' className='text-dark' /></a>
                        <a href='#'><Icon name='heart' className='text-dark' /></a>
                        <a href='#'><Icon name='person-circle' className='text-dark' /></a>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default Topbar;
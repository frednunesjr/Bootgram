import { Container, Row, Col, Button, Image, Tab, Tabs } from "react-bootstrap";
import Topbar from "../../components/Topbar";
import ProfileStats from "../../components/ProfileStats";
import React, { useState } from 'react';

function Profile() {

    const [tab, setTab] = useState('publicacoes');

    return (
        <>
            <Topbar />
            <Container>
                <Row className='align-items-center justify-content-center py-4'>
                    <Col md={3}>
                        <Image roundedCircle src="/img/fred.jpg" />
                    </Col>
                    <Col md={6} className='d-grid gap-4'>
                        <div className="d-flex gap-4 align-items-center">
                            <h2 className='fs-3 lead d-inline'>fredsonnunesjr</h2>
                            <Button as='a' href='#' size='sm' variant='outline-secondary'>Editar Perfil</Button>
                        </div>
                        <div className='d-flex gap-5'>
                            <ProfileStats label='publicações' data='35' />
                            <ProfileStats label='seguidores' data='35' />
                            <ProfileStats label='seguindo' data='35' />
                        </div>
                        <div>
                            <h1 className='fs-6'>Fredson Trinci Nunes</h1>
                            <div className='text-secondary'></div>
                            <div>
                                ✝️ Jesus
                                <br />
                                💍 Casado com a @gabitrinci e Pai da Alice 👨‍👩‍👧
                                <br />
                                💻 Dev JavaScript Full Stack
                                <br />
                                🎓 Comunicação Social: Rádio e TV
                                <br />
                                🇧🇷 São Paulo / SP
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className='w-50 mx-auto my-5'>
                    {
                        [1, 2, 3, 4, 5].map(_ =>
                            <Col className='highlight'>
                                <Image roundedCircle className='border border-5' src='/img/highlight.jpg' />
                            </Col>
                        )
                    }
                </Row>
                <Row className='justify-content-center'>
                    <Tabs
                        className='justify-content-center'
                        activeKey={tab}
                        onSelect={tab => setTab(tab)}
                    >
                        <Tab eventKey='publicacoes' title='Publicações'>
                            <Row md={3}>
                                {
                                    [1,2,3,4,5,6,7,8,9,10,11,12].map(i => 
                                        <Col>
                                            <Image src='/img/feed.jpeg' alt='' />
                                        </Col>
                                    )
                                }
                            </Row>
                        </Tab>
                        <Tab eventKey='reels' title='Reels'>
                            Meus Reels
                        </Tab>
                        <Tab eventKey='salvos' title='Salvos'>
                            Meus Salvos
                        </Tab>
                        <Tab eventKey='marcados' title='Marcados'>
                            Meus Publicações
                        </Tab>
                    </Tabs>
                </Row>
            </Container>
        </>
    )

}

export default Profile;
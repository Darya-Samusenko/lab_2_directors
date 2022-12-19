import React from "react";
import {Button, Container, Form, Nav, Navbar} from 'react-bootstrap'
import {useTranslation} from "react-i18next";
import i18n from "i18next";

export default function Header(){
    const chooseWriter = (name) => {
        switch(name){
            case t('kolas'):
                window.open('/Kolas', '_self', 'noopener,noreferrer');
                break;
            case t('kupala'):
                window.open('/Kupala', '_self', 'noopener,noreferrer');
                break;
            case t('tank'):
                window.open('/Tank', '_self', 'noopener,noreferrer');
                break;
            case t('korotkevich'):
                window.open('/Korotkevich', '_self', 'noopener,noreferrer');
                break;
            case t('bogdanovich'):
                window.open('/Bagdanovich', '_self', 'noopener,noreferrer');
                break;
            case t('melezh'):
                window.open('/Melez', '_self', 'noopener,noreferrer');
                break;    
        }
    }
    const {t} = useTranslation();
        return(
            <>
                <Navbar bg="light" expand="lg">
                    <Container fluid>
                        <Navbar.Brand href="#">{t('W')}</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Nav.Link href="/">{t('H')}</Nav.Link>
                                <Nav.Link href="/directors">{t('DR')}</Nav.Link>

                            </Nav>
                            <Button onClick={()=>{i18n.changeLanguage('ru');}} variant="outline-success">Ru</Button>

                            <Button onClick={()=>{i18n.changeLanguage('en');}}  variant="outline-success">En</Button>

                            <Form className="d-flex">
                                <Form.Control
                                    type="search"
                                    placeholder={t('search1')}
                                    className="me-1"
                                    aria-label="Search"
                                    list="writersList"
                                    id = "searchBox"
                                />
                                <datalist id = "writersList">
                                    <option>{t('kolas')}</option>
                                    <option>{t('kupala')}</option>
                                    <option>{t('tank')}</option>
                                    <option>{t('korotkevich')}</option>
                                    <option>{t('bogdanovich')}</option>
                                    <option>{t('melezh')}</option>
                                </datalist>
                                <Button onClick = {() => chooseWriter(document.getElementById('searchBox').value)} variant="outline-success">{t('search')}</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        )
    }

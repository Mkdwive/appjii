"use client";

import React, { useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Navbar, Container, Nav, Offcanvas } from 'react-bootstrap';
import { navigationLinks } from '../commonData/headerData';
import { useScrollSpy } from '../hooks/useScrollSpy';

const Header = () => {
    // Gather string routing hashes for tracking
    const sectionSelectors = useMemo(() => 
        navigationLinks.map((link) => link.href), 
        []
    );

    // Consume dynamic scroll spying indicators
    const activeSectionId = useScrollSpy(sectionSelectors);

    return (
        <Navbar
            sticky="top"
            expand="lg"
            className="site-navbar bg-white shadow-sm"
            id="navbar-scrollspy"
        >
            <Container>
                {/* 1. FIXED LOGO: Polymorphic 'as' forces Navbar.Brand to behave as a Next.js Link */}
                <Navbar.Brand as={Link} href="/" className="header-logo-wrapper">
                    <Image
                        src="/images/logo.png"
                        alt="App Jii logo"
                        className="nav-logo-asset"
                        width={150}
                        height={50}
                        priority
                    />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="rightNavbarOffcanvas" />

                <Navbar.Offcanvas
                    id="rightNavbarOffcanvas"
                    aria-labelledby="rightNavbarOffcanvasLabel"
                    placement="end"
                >
                    <Offcanvas.Header closeButton className="border-bottom d-custom-none w-100 justify-content-between align-items-center">
                        <Offcanvas.Title id="rightNavbarOffcanvasLabel" className="header-logo-wrapper">
                            <Image src="/images/logo.png" alt="App Jii logo" width={150} height={50}   style={{ height: 'auto' }} />
                        </Offcanvas.Title>
                    </Offcanvas.Header>

                    <Offcanvas.Body className="nav-body-layout">
                        <Nav className="flex-lg-row ms-auto align-items-center main-nav-links">
                            {navigationLinks.map((link) => {
                                const cleanHref = link.href.replace("#", "");
                                const isCurrentActive = activeSectionId === cleanHref;

                                return (
                                    <Nav.Link
                                        key={link.id}
                                        href={link.href}
                                        active={isCurrentActive} 
                                        className={`fz-18 ${isCurrentActive ? 'is-current' : ''}`}
                                    >
                                        {link.label}
                                    </Nav.Link>
                                );
                            })}
                        </Nav>

                        <div className="nav-cta-wrapper">
                            <Link href="/contact" className="btn btn-contact fw-600 fz-18">
                                Contact Us
                            </Link>
                        </div>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    );
};

export default Header;

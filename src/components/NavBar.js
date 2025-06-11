import React, { useState, useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { CgGitFork } from 'react-icons/cg';
import { MdContactMail } from 'react-icons/md';
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from 'react-icons/ai';

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const [currentTheme, setCurrentTheme] = useState('dark'); // Default to dark

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  const toggleTheme = () => {
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setCurrentTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme); // Save preference
    // Ensure body also gets the attribute if index.css relies on it for body background
    document.body.setAttribute('data-theme', newTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    let initialTheme = 'light'; // Default to light

    if (savedTheme) {
      initialTheme = savedTheme;
    } else if (prefersDark) {
      initialTheme = 'dark';
    }

    document.documentElement.setAttribute('data-theme', initialTheme);
    document.body.setAttribute('data-theme', initialTheme); // Also apply to body
    setCurrentTheme(initialTheme);
  }, []);

  // Removed second useEffect that was redundant, combined into the first one.

  window.addEventListener('scroll', scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? 'sticky' : 'navbar'}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <h1>i-nad</h1>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : 'expanded');
          }}
        >
          <span />
          <span />
          <span />
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: '2px' }} />
                {' '}
                Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser style={{ marginBottom: '2px' }} />
                {' '}
                About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: '2px' }}
                />
                {' '}
                Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/contact"
                onClick={() => updateExpanded(false)}
              >
                <MdContactMail style={{ marginBottom: '2px' }} />
                {' '}
                Contact
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/arnoldnekemiah/arnoldnek"
                target="_blank"
                className="fork-btn-inner"
              >
                <CgGitFork style={{ fontSize: '1.2em' }} />
                {' '}
                <AiFillStar style={{ fontSize: '1.1em' }} />
              </Button>
            </Nav.Item>

            <Nav.Item>
              <button type="button" onClick={toggleTheme} className="theme-toggle-btn">
                {currentTheme === 'dark' ? 'Light Mode' : 'Dark Mode'}
              </button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;

import React, { Fragment, useState } from "react";
import "./style.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faUser, faBars, faBookOpen, faSearch, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { HeaderParent, Container, TopHeader, Phone, Info, Login, Icon, MetHeader, Card, Nav } from "./Styled";
import { Link, NavLink } from "react-router-dom";



function Header() {
    const [modal, setModal] = useState(false);
    const headerMoblie = () => {
        setModal(!modal)
    }
    return (
        <Fragment>
        <HeaderParent className="header">
            <Container>
                <TopHeader className="top-header">
                <Icon
                    onClick={ headerMoblie}>
                        <FontAwesomeIcon icon={faBars} />
                    </Icon>
                    <Phone>
                    <FontAwesomeIcon icon={faPhone} />
                    123-456-789
                    </Phone>
                    <Info>Welcome to online book store</Info>
                    <Login>
                    <FontAwesomeIcon icon={faUser} />
                    Login
                    </Login>
                </TopHeader>
                <hr />
                <MetHeader className="mid-header">
                    <Link className="logo" to='/'>Book <FontAwesomeIcon icon={faBookOpen} /> Store</Link>
                    <form>
                        <input
                            type="search"
                            placeholder="Search In Book Store" />
                        <button 
                            type="submit">
                            <FontAwesomeIcon icon={faSearch} />
                        </button>
                    </form>
                        <Card className="card">
                            <NavLink to="Card">
                                <FontAwesomeIcon icon={faCartShopping} />
                            </NavLink>
                        </Card>
                </MetHeader>
            </Container>
        </HeaderParent>
                <Nav className="nav">
                    <ul>
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/Authors">Authors</NavLink>
                        <NavLink to="/About">About Us</NavLink>
                        <NavLink to="/Contact">Contact Us</NavLink>
                        <NavLink to="/Register">Register</NavLink>
                    </ul>
            </Nav>
            {modal && 
                <div className="header-mobile">
                    <ul>
                        <NavLink
                            to="/"
                            onClick={() => setModal(false)}>
                            Home</NavLink>
                        <NavLink
                            to="/Authors"
                            onClick={() => setModal(false)}>
                            Authors</NavLink>
                        <NavLink
                            to="/About"
                            onClick={() => setModal(false)}>
                            About Us</NavLink>
                        <NavLink
                            to="/Contact"
                            onClick={() => setModal(false)}>
                            Contact Us</NavLink>
                        <NavLink
                            to="/Register"
                            onClick={() => setModal(false)}>
                            Register</NavLink>
                    </ul>
                    <button
                        className="close-button"
                        onClick={() => setModal(false)}>x</button>
            </div>
            }
            </Fragment>
    )
}

export default Header;
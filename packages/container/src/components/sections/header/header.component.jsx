// * Import react
import React from 'react';

// * Import redux
import { connect } from 'react-redux';

// * Import router dom
import { Link } from 'react-router-dom';

// * Import redux stuff
import { AUTH_ACTIONS } from '@redux/auth';

// * Import UI libraries
import { Navbar, Container, Nav, Button } from 'react-bootstrap';

function Header({ authStatus, signOut }) {
    // * Props description ==========================================
    // *
    // 1 - authStatus :: "authStatus" is a boolean that comes from
    //     redux to shows us the user is sign in or not (true/false)

    // 2 - signOut :: "signOut" is a function that
    //     is connected to redux and makes "authStatus" false
    //     that means user is not sign in anymore
    // *
    // ==============================================================

    return (
        <Navbar bg='dark' variant='dark' className='mb-3'>
            <Container>
                <Navbar.Brand>
                    <h1 className='h5 mb-0'>MFE</h1>
                </Navbar.Brand>
                <Nav className='me-auto'>
                    <Nav.Link as={Link} to='/'>
                        Home
                    </Nav.Link>
                    <Nav.Link as={Link} to='/contact-us'>
                        Contact Us
                    </Nav.Link>
                    {authStatus ? (
                        <Nav.Link as={Link} to='/dashboard'>
                            Dashboard
                        </Nav.Link>
                    ) : null}
                </Nav>
                <div>
                    {authStatus ? (
                        <Button onClick={signOut} variant='outline-danger'>
                            SIGN OUT
                        </Button>
                    ) : (
                        <Button
                            as={Link}
                            to='/auth/sign-in'
                            variant='outline-light'
                        >
                            SIGN IN
                        </Button>
                    )}
                </div>
            </Container>
        </Navbar>
    );
}

// * Get "authStatus" from redux
const mapStateToProps = (state) => ({ authStatus: state.auth });

// * Get "SIGN_OUT" action from redux
const mapDispatchToProps = (dispatch) => ({
    signOut: () => dispatch(AUTH_ACTIONS.SIGN_OUT()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);

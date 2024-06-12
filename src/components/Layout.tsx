// import { NavbarCollapseProps } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import styles from './layout.module.css';
type Props = {
    children: string | JSX.Element | JSX.Element[] | string[] | undefined | null | boolean | number | React.ReactElement<any, string | React.JSXElementConstructor<any>>;
}
const Layout = ({ children }: Props) => {
    return (
        <>
            <Navbar expand="lg" >
                <Container className={styles.containerWrapped}>

                    <Navbar.Collapse role="whatever-role" id="basic-navbar-nav">
                        <Nav >
                            <Link to="/" className={styles.linkWrapped} >
                                <Nav.Link href="#features" className={styles.linkWrapped} >Home</Nav.Link>
                            </Link>
                            <Link to="/New Arrival" className={styles.linkWrapped} >
                                <Nav.Link href="#features" className={styles.linkWrapped} >New Arrival</Nav.Link>
                            </Link>
                            <Link to="/Set Pottery" className={styles.linkWrapped} >
                                <Nav.Link href="#features" className={styles.linkWrapped}>Set Pottery</Nav.Link>
                            </Link>
                            <Link to="/Single Pottery" className={styles.linkWrapped} >
                                <Nav.Link href="#features" className={styles.linkWrapped}>Single Pottery</Nav.Link>
                            </Link>
                            <Link to="/Sales" className={styles.linkWrapped} >
                                <Nav.Link href="#features" className={styles.linkWrapped}>Sales</Nav.Link>
                            </Link>
                            <Link to="/colleagueLogin" className={styles.linkWrapped} >
                                <Nav.Link href="#features" className={styles.linkWrapped}>Colleague Login</Nav.Link>
                            </Link>
                            <Link to="/customerLogin" className={styles.linkWrapped} >
                                <Nav.Link href="#features" className={styles.linkWrapped}>Customer Login</Nav.Link>
                            </Link>
                            <Link to="/cart" className={styles.linkWrapped} >
                                <Nav.Link href="#features" className={styles.linkWrapped}>Cart</Nav.Link>
                            </Link>
                            <Link to="/aboutUs" className={styles.linkWrapped}>
                                <Nav.Link href="#features" className={styles.linkWrapped}>About Us</Nav.Link>
                            </Link>
                            <Link to="/insertPottery" className={styles.linkWrapped}>
                                <Nav.Link href="#features" className={styles.linkWrapped}>Insert Pottery</Nav.Link>
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <main>{children}</main>
        </>
    );
}

export default Layout;
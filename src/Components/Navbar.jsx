import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import TabMenu from './TabMenu.jsx';

export default function NavbarPlace() {
    return (
        <>
            <Navbar bg="light">
                <Container>
                    <Navbar.Brand href="#home">
                        logo
                    </Navbar.Brand>
                </Container>
                <TabMenu />
            </Navbar>
        </>
    );
}
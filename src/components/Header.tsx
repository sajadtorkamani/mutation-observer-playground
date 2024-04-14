import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { ROUTES } from '../lib/constants.ts'

const Header: React.FC = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Mutation Observer playground</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href={ROUTES.addDomNode}>Add DOM node</Nav.Link>
            <Nav.Link href={ROUTES.removeDomNode}>Remove DOM node</Nav.Link>
            <Nav.Link href={ROUTES.updateNodeAttribute}>
              Update node attribute
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header

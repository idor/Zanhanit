import {Container, Nav, Navbar} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

import {useState} from "react";
import {Logo} from "./Logo";
import {useUser} from "@auth0/nextjs-auth0";
import Profile from "./Profile";

export const Header = (props) => {

  const [date, setDate] = useState(new Date().toString());
  const {user} = useUser();

  setInterval(() => {
    setDate(new Date().toString())
  }, 1000)

  return (
      <div dir={"rtl"}>
        <Navbar className="color-nav" bg="light" expand="lg" dir={"rtl"}>
          <Container>
            <Logo/>
            <Navbar.Brand href="#home">פאב הצנחנית - להבות חביבה</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/">בית</Nav.Link>
                <Nav.Link href="/tickets">כרטיסים</Nav.Link>
                <Nav.Link href="/pictures">תמונות</Nav.Link>
                <Nav.Link href="/events">אירועים</Nav.Link>
                <Nav.Link href="/barmens">ברמנים/יות</Nav.Link>
                <Nav.Link href="/protocols">נהלים</Nav.Link>
                <Nav.Link href="/admin">Admin</Nav.Link>
              </Nav>
              {user && <Profile/>}
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <p>{date}</p>
        <hr/>
      </div>

  )
}
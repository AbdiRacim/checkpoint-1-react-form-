import Container from 'react-bootstrap/Container';
        import Nav from 'react-bootstrap/Nav';
        import Navbar from 'react-bootstrap/Navbar';
        import NavDropdown from 'react-bootstrap/NavDropdown';
        import Carousel from 'react-bootstrap/Carousel';
        import Figure from 'react-bootstrap/Figure';
    export default function Home(){
            return (
                <>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Checkpoint Formulaire</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                            Another action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">
                            Separated link
                        </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">More deets</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                        Dank memes
                        </Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
                </Navbar>


                <div class="cover-container d-flex h-100 p-3 mx-auto flex-column">
    <main role="main" class="inner cover">
        <h1 class="cover-heading">Cover your page.</h1>
        <p class="lead">Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own.</p>
        <p class="lead">
        <a href="#" class="btn btn-lg btn-secondary">Learn more</a>
        </p>
        

  



    </main>
    </div>
  <Figure className="c1">
      <Figure.Image className="c2"
        width={450}
        height={455}
        alt="171x180"
        src="https://media.istockphoto.com/vectors/flag-ribbon-welcome-old-school-flag-banner-vector-id1223088904?k=20&m=1223088904&s=612x612&w=0&h=b_ilJpFTSQbZeCrZusHRLEskmfiONWH0hFASAJbgz9g="
      />
      <Figure.Caption>
        Nulla vitae elit libero, a pharetra augue mollis interdum.
      </Figure.Caption>
    </Figure>




</>

    )
}
    

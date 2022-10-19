import Form from 'react-bootstrap/Form';
import Stack  from 'react-bootstrap/Form';
import  'bootstrap/dist/css/bootstrap.min.css' 
            import React, { useState, useRef } from 'react';
            import Button from 'react-bootstrap/Button';
            import Overlay from 'react-bootstrap/Overlay';
            import Tooltip from 'react-bootstrap/Tooltip';
export default function SignUp() {
    const [form,setForm]= useState({
        Firstname:"",
        Lastname:"",
        email:"",
        password:"",
    })

    const handleSubmit = (event) => {
        event.preventDefault()/*mayekheliche la page teraferichi */
        console.log(form)
        alert(`${form.Firstname} 
${form.Lastname }
${form.email}
${form.password}
`)
    }
            const [show, setShow] = useState(false);
            const target = useRef(null);
            
            return (
                <>
            <div className="container1">
            <div className="row1">
            <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Firstname:</Form.Label>
                <Form.Control type="text" placeholder="Enter your Firstname"
                value={form.Firstname}
                onChange={(event) => setForm({...form, Firstname: event.target.value})} />
                <Form.Text className="text-muted">
                you c'ant use number to your firstname
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Lastname:</Form.Label>
                <Form.Control type="text" placeholder="Enter your Lastname"
                value={form.Lastname}
                onChange={(event) => setForm({...form, Lastname: event.target.value})}/>
                <Form.Text className="text-muted">
                you c'ant use number to your Lastname
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address:</Form.Label>
                <Form.Control type="email" placeholder="Enter your email"
                value={form.email}
                onChange={(event) => setForm({...form, email: event.target.value})}/>
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>
        
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password:</Form.Label>
                <Form.Control type="password" placeholder="Password"
                value={form.password}
                onChange={(event) => setForm({...form, password: event.target.value})}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
                        <Button ref={target} onClick={() => setShow(!show)} type="submit">
                    Click to Submit !
                    </Button>
                    <Overlay target={target.current} show={show} placement="right">
                        {(props) => (
                        <Tooltip id="overlay-example" {...props}>
                            Sumbtit succeed !
                        </Tooltip>
                        )}
                        </Overlay>
            </Form>
            </div>
            </div>
            </>
        );
}
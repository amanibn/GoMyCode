import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { Container } from "react-bootstrap";
const Forms = () =>{
    return(
        <Container>
        <div className="col-md-6">
      <h4>Mon premier react form</h4>
      <Form>
      <Form.Group>
          <Form.Label>Nom</Form.Label>
          <Form.Control type="text" 
                        placeholder="Nom" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" 
                        placeholder="Email" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Âge</Form.Label>
          <Form.Control type="number" placeholder="Âge" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Mot de passe</Form.Label>
          <Form.Control type="password" placeholder="Mot de passe" />
        </Form.Group>
        <Form.Group>
        <Button className="connexion" variant="primary" type="submit">
           S'inscrire
        </Button>
        </Form.Group>
      </Form>
    </div>
    </Container>
    )
}
export default Forms;
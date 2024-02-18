import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";

const Contact = () => {
  const [description, setDescription] = useState("");

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  return (
    <Container className="pt-5 text-center">
      <h1 className="mb-4">Cuéntanos, ¿en qué te podemos ayudar?</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formCorreo">
          <Form.Label>Correo:</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formDescripcion">
          <Form.Label>Descripción:</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Ingresa la descripción"
            value={description}
            onChange={handleDescriptionChange}
            style={{ resize: "vertical" }}
          />
        </Form.Group>
      </Form>
    </Container>
  );
};

export default Contact;

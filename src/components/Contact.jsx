import React, { useState } from "react";
import { Form } from "react-bootstrap";

const Contact = () => {
  const [description, setDescription] = useState("");

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formCorreo">
        <Form.Label>Correo:</Form.Label>
        <Form.Control type="email" placeholder="Ingresa tu correo" />
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
  );
};

export default Contact;

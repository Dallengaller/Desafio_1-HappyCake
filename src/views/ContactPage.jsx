import { Container } from "react-bootstrap";

import Contact from "../components/Contact.jsx";

const ContactPage = () => {
  return (
    <Container className="pt-5">
      <h1 className="mb-4">Cuéntanos, ¿en qué te podemos ayudar?</h1>
      <Contact />
    </Container>
  );
};
export default ContactPage;

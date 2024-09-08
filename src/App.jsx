import { Card, Container, Row, Col } from "react-bootstrap";
import Name from "./components/Name.jsx";
import Price from "./components/Price.jsx";
import Description from "./components/Description.jsx";
import Image from "./components/Image.jsx";
import "./App.css";

// You can change this to your first name, or leave it empty
const firstName = "";

const App = () => {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card>
            <Card.Body>
              <Image />
              <Name />
              <Price />
              <Description />
            </Card.Body>
          </Card>

          <div className="mt-3 text-center">
            {firstName ? (
              <>
                <p>Hello, {firstName}!</p>
                <img
                  src="https://example.com/your-image.jpg"
                  alt="Your Image"
                  style={{ maxWidth: "200px" }}
                />
              </>
            ) : (
              <p>Hello, there!</p>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default App;

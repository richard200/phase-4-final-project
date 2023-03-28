import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';

const CreateRecipe = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [instructions, setInstructions] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('/api/recipes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, description, instructions })
      });
      if (!response.ok) {
        throw new Error('Failed to create recipe');
      }
      // handle successful recipe creation
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <Container>
      <Row className="justify-content-md-center mt-5">
        <Col xs={12} md={6}>
          <h2 className="text-center mb-4">Create Recipe</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter description"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicInstructions">
              <Form.Label>Instructions</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Enter instructions"
                rows={5}
                value={instructions}
                onChange={(event) => setInstructions(event.target.value)}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Create Recipe
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default CreateRecipe;

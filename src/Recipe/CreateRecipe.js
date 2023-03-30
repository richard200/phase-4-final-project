import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';

const CreateRecipe = () => {
  const [title, setTitle] = useState('');
  const [instructions, setInstructions] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [prepTime, setPrepTime] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('https://api.npoint.io/8b51d1550cf190162b1d/recipes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title,
          instructions,
          ingredients,
          prep_time: prepTime,
         
        })
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
        <Col xs={12} md={8}>
          <h2 className="text-center mb-4">Create a Recipe</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter title"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicInstructions">
              <Form.Label>Instructions</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter instructions"
                value={instructions}
                onChange={(event) => setInstructions(event.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicIngredients">
              <Form.Label>Ingredients</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter ingredients"
                value={ingredients}
                onChange={(event) => setIngredients(event.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPrepTime">
            <br></br>
              <Form.Label>Preparation Time (in minutes)</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter preparation time"
                value={prepTime}
                onChange={(event) => setPrepTime(event.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicCategoryId">
              <br></br>
              <Form.Label>Category</Form.Label>
              <Form.Control
                as="select"
                value={categoryId}
                onChange={(event) => setCategoryId(event.target.value)}
              >
                <option value="">Select a category</option>
                <option value="1">Appetizer</option>
                <option value="2">Main Course</option>
                <option value="3">Dessert</option>
              </Form.Control>
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

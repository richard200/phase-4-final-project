import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

const UpdateRecipe = (props) => {
  const [recipe, setRecipe] = useState({
    id: '',
    name: '',
    description: '',
    instructions: ''
  });

  useEffect(() => {
    const fetchRecipe = async () => {
      const response = await fetch(`/api/recipes/${props.match.params.id}`);
      const data = await response.json();
      setRecipe(data);
    };
    fetchRecipe();
  }, [props.match.params.id]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setRecipe({ ...recipe, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch(`/api/recipes/${recipe.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(recipe)
    });
    const data = await response.json();
    console.log(data);
    props.history.push('/view');
  };

  return (
    <div className="container">
      <h1>Update Recipe</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={recipe.name}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="description"
            value={recipe.description}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="instructions">
          <Form.Label>Instructions</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            name="instructions"
            value={recipe.instructions}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Update Recipe
        </Button>
        <Link to="/view" className="btn btn-link ml-2">Cancel</Link>
      </Form>
    </div>
  );
};

export default UpdateRecipe;

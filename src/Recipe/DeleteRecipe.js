import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';

const DeleteRecipe = (props) => {
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      const response = await fetch(`/api/recipes/${props.match.params.id}`);
      const data = await response.json();
      setRecipe(data);
    };
    fetchRecipe();
  }, [props.match.params.id]);

  const handleDelete = async () => {
    const response = await fetch(`/api/recipes/${recipe.id}`, {
      method: 'DELETE'
    });
    const data = await response.json();
    console.log(data);
    props.history.push('/view');
  };

  return (
    <div className="container mt-3">
      <h1 className="mb-4">Delete Recipe</h1>
      {recipe && (
        <Card>
          <Card.Body>
            <Card.Title>{recipe.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{recipe.description}</Card.Subtitle>
            <Card.Text>{recipe.instructions}</Card.Text>
            <Button variant="danger" onClick={handleDelete}>
              Delete Recipe
            </Button>
            <Link to="/view" className="btn btn-secondary ml-2">Cancel</Link>
          </Card.Body>
        </Card>
      )}
    </div>
  );
};

export default DeleteRecipe;

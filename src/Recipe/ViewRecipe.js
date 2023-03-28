import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const ViewRecipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      const response = await fetch('/api/recipes');
      const data = await response.json();
      setRecipes(data);
    };
    fetchRecipes();
  }, []);

  return (
    <Container>
      <h1>View Recipes</h1>
      <Row>
        {recipes.map(recipe => (
          <Col key={recipe.id} md={4} sm={6}>
            <Card className="mb-3">
              <Card.Img variant="top" src={recipe.image} />
              <Card.Body>
                <Card.Title>{recipe.name}</Card.Title>
                <Card.Text>{recipe.description}</Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">{recipe.date}</small>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ViewRecipes;

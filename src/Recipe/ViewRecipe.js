import React, { useState, useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch('https://api.npoint.io/8b51d1550cf190162b1d/recipes');
        const data = await response.json();
        setRecipes(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchRecipes();
  }, []);

  const handleDelete = async (recipeId) => {
    try {
      const response = await fetch(`https://api.npoint.io/8b51d1550cf190162b1d/recipes${recipeId}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        setRecipes(recipes.filter((recipe) => recipe.id !== recipeId));
      } else {
        throw new Error('Failed to delete recipe');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = (recipeId) => {
    // handle edit functionality
    console.log(`https://api.npoint.io/8b51d1550cf190162b1d/recipes${recipeId}`);
  };

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Instructions</th>
          <th>Ingredients</th>
          <th>Prep Time</th>
          <th>Category</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {recipes.map((recipe, index) => (
          <tr key={recipe.id}>
            <td>{index + 1}</td>
            <td>{recipe.title}</td>
            <td>{recipe.instructions}</td>
            <td>{recipe.ingredients}</td>
            <td>{recipe.prep_time}</td>
            <td>{recipe.category}</td>
            <td>
              <Button
                variant="warning"
                className="me-2"
                onClick={() => handleEdit(recipe.id)}
              >
                Edit
              </Button>
              <Button
                variant="danger"
                onClick={() => handleDelete(recipe.id)}
              >
                Delete
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default RecipeList;

import React, { useState, useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';
import Category from '../components/Category';
function ViewRecipes() {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('/recipes')
          .then(response => response.json())
          .then(data => {
            // Filter the recipes to show only those created by the logged-in user
            const filteredRecipes = data.data.filter(recipe => recipe.user_id === sessionStorage.getItem('userId'));
            setRecipes(filteredRecipes);
          });
    // const fetchRecipes = async () => {
    //   try {
    //     const response = await fetch('/me');
    //     let data = await response.json();
    //     // console.log(recipes);
    //     setRecipes(data.data);
    //     console.log(recipes);
    //     setIsLoading(false)
    //   } catch (error) {
    //     console.log(error);
    //     setIsLoading(false)
    //   }
    // };

    fetch('/categories')
    .then(response => response.json())
    .then(data => setCategories(data.data));
    fetchRecipes();
  }, []);



//   useEffect(() => {
//     // Fetch recipes from the backend API
//     fetch('/recipes')
//       .then(response => response.json())
//       .then(data => {
//         // Filter the recipes to show only those created by the logged-in user
//         const filteredRecipes = data.filter(recipe => recipe.user_id === sessionStorage.getItem('userId'));
//         setRecipes(filteredRecipes);
//       });
//       fetch('/categories')
//       .then(response => response.json())
//       .then(data => setCategories(data.data));
//       fetchRecipes();
//     }, []);
//   }, []);
 
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
      {
      Array.isArray(recipes) && recipes.map((recipe, index) => {
        console.log(recipe, index);
        return (
                  <tr key={recipe.id}>
                  <td>{index + 1}</td>
                  <td>{recipe.title}</td>
                  <td>{recipe.instructions}</td>
                  <td>{recipe.ingredients}</td>
                  <td>{recipe.prep_time}</td>
                  <Category category={categories.find(category => category.id === recipes.category_id)} />

               
                  </tr>
                            )
                          }
                          
                            
                        
                          )}
      
    </tbody>
  </Table>
  )
}
export default ViewRecipes;

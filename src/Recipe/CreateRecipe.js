import React, { useState } from 'react';

const CreateRecipe = () => {
  const [title, setTitle] = useState('');
  const [instructions, setInstructions] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [prepTime, setPrepTime] = useState(0);
  const [userId, setUserId] = useState(0);
  const [categoryId, setCategoryId] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('/recipes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title,
          instructions,
          ingredients,
          prep_time: prepTime,
          user_id: userId,
          category_id: categoryId
        })
      });

      if (response.ok) {
        alert('Recipe created successfully!');
        setTitle('');
        setInstructions('');
        setIngredients('');
        setPrepTime(0);
        setUserId(0);
        setCategoryId('');
      } else {
        throw new Error('Failed to create recipe');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="instructions">Instructions:</label>
        <input
          type="text"
          id="instructions"
          value={instructions}
          onChange={(event) => setInstructions(event.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="ingredients">Ingredients:</label>
        <input
          type="text"
          id="ingredients"
          value={ingredients}
          onChange={(event) => setIngredients(event.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="prepTime">Prep Time:</label>
        <input
          type="number"
          id="prepTime"
          value={prepTime}
          onChange={(event) => setPrepTime(parseInt(event.target.value))}
          required
        />
      </div>
      <div>
        <label htmlFor="userId">User ID:</label>
        <input
          type="number"
          id="userId"
          value={userId}
          onChange={(event) => setUserId(parseInt(event.target.value))}
          required
        />
      </div>
      <div>
        <label htmlFor="categoryId">Category ID:</label>
        <input
          type="text"
          id="categoryId"
          value={categoryId}
          onChange={(event) => setCategoryId(event.target.value)}
          required
        />
      </div>
      <button type="submit">Create Recipe</button>
    </form>
  );
};

export default CreateRecipe;

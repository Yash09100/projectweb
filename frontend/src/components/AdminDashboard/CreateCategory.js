import React, { useState } from 'react';

const CreateCategory = ({ addCategory }) => {
  const [categoryName, setCategoryName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addCategory({ name: categoryName });
    setCategoryName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={categoryName} onChange={(e) => setCategoryName(e.target.value)} placeholder="Category Name" required />
      <button type="submit">Add Category</button>
    </form>
  );
};

export default CreateCategory;

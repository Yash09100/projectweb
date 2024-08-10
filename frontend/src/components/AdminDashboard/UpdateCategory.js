import React, { useState } from 'react';

const UpdateCategory = ({ category, updateCategory }) => {
  const [name, setName] = useState(category.name);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateCategory(category._id, { name });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      <button type="submit">Update Category</button>
    </form>
  );
};

export default UpdateCategory;

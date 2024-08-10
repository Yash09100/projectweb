import React from 'react';

const DeleteCategory = ({ category, deleteCategory }) => {
  const handleDelete = () => {
    deleteCategory(category._id);
  };

  return (
    <div>
      <span>{category.name}</span>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default DeleteCategory;

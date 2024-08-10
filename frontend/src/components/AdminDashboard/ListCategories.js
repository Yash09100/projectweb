import React from 'react';

const ListCategories = ({ categories }) => {
  return (
    <ul>
      {categories.map((category) => (
        <li key={category._id}>{category.name}</li>
      ))}
    </ul>
  );
};

export default ListCategories;

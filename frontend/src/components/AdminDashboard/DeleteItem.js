import React from 'react';

const DeleteItem = ({ item, deleteItem }) => {
  const handleDelete = () => {
    deleteItem(item._id);
  };

  return (
    <div>
      <span>{item.name}</span>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default DeleteItem;

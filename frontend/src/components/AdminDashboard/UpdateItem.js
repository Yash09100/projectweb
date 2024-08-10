import React, { useState } from 'react';

const UpdateItem = ({ item, updateItem, categories }) => {
  const [itemData, setItemData] = useState({
    name: item.name,
    category: item.category._id,
    price: item.price,
    quantity: item.quantity,
  });

  const handleChange = (e) => {
    setItemData({ ...itemData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateItem(item._id, itemData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={itemData.name} onChange={handleChange} required />
      <select name="category" value={itemData.category} onChange={handleChange} required>
        {categories.map((category) => (
          <option key={category._id} value={category._id}>
            {category.name}
          </option>
        ))}
      </select>
      <input type="number" name="price" value={itemData.price} onChange={handleChange} required />
      <input type="number" name="quantity" value={itemData.quantity} onChange={handleChange} required />
      <button type="submit">Update Item</button>
    </form>
  );
};

export default UpdateItem;

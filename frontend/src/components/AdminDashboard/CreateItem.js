import React, { useState } from 'react';

const CreateItem = ({ addItem, categories }) => {
  const [itemData, setItemData] = useState({
    name: '',
    category: '',
    price: '',
    quantity: '',
  });

  const handleChange = (e) => {
    setItemData({ ...itemData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(itemData);
    setItemData({ name: '', category: '', price: '', quantity: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={itemData.name} onChange={handleChange} placeholder="Item Name" required />
      <select name="category" value={itemData.category} onChange={handleChange} required>
        <option value="">Select Category</option>
        {categories.map((category) => (
          <option key={category._id} value={category._id}>
            {category.name}
          </option>
        ))}
      </select>
      <input type="number" name="price" value={itemData.price} onChange={handleChange} placeholder="Price" required />
      <input type="number" name="quantity" value={itemData.quantity} onChange={handleChange} placeholder="Quantity" required />
      <button type="submit">Add Item</button>
    </form>
  );
};

export default CreateItem;

import React from 'react';

const ListItems = ({ items }) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item._id}>
          {item.name} - {item.category.name} - ${item.price} - {item.quantity} in stock
        </li>
      ))}
    </ul>
  );
};

export default ListItems;

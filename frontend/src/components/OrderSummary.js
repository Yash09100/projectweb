import React from 'react';

const OrderSummary = ({ products }) => {
  const totalPrice = products.reduce((total, product) => total + product.price * product.quantity, 0);

  return (
    <div>
      <h2>Order Summary</h2>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            {product.name} x {product.quantity} = ${product.price * product.quantity}
          </li>
        ))}
      </ul>
      <h3>Total: ${totalPrice.toFixed(2)}</h3>
    </div>
  );
};

export default OrderSummary;

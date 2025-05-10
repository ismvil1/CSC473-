import React from 'react';

export default function Cart({ cart, removeFromCart, clearCart }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="position-fixed end-0 top-0 bg-light p-3 border shadow" style={{ width: '300px', zIndex: 999 }}>
      <h5>Your Cart</h5>
      <ul className="list-unstyled">
        {cart.map((item, idx) => (
          <li key={idx} className="d-flex justify-content-between">
            {item.name} x{item.quantity}
            <button className="btn btn-sm btn-danger" onClick={() => removeFromCart(idx)}>✕</button>
          </li>
        ))}
      </ul>
      <p><strong>Total:</strong> ${total.toFixed(2)}</p>
      <button className="btn btn-warning" onClick={clearCart}>Clear Cart</button>
    </div>
  );
}

import React from 'react';

export default function Hero() {
  return (
    <div className="bg-dark text-white text-center py-5" id="home">
      <h1>Fast Food Restaurant</h1>
      <p>Delicious meals made fresh for you</p>
      <a href="#menu" className="btn btn-warning mt-3">Order Now</a>
    </div>
  );
}

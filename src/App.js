import logo from './logo.svg';
import './App.css';
import React from 'react';
import products from './data/product.json';
import Navbar from './components/Navbar/Navbar';
function App() {
  return (
   <div > hello iyeed
      <Navbar /> 
      <div className="flex flex-wrap">
      {products.products.map((product) => ( 
        <div className="border border-red-500 my-5 w-90"> 
          <h3 className="text-red-500">{product.title}</h3>
          <img width="200" src={product.thumbnail} alt=" /" />
            <p className="text-pink-500">{product.description}</p>
            <small className="bg-gray-300">{product.price}$</small>
          
          </div>
      ))}
      </div>
    </div>

  
  );
}

export default App;





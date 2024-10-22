import React from "react";
import { Link } from "react-router-dom";
import catalog from '../data/catalog'; 
import Navigation from "./Navigation";


const TestView = (goBack) => {
    return (
        <div>

<Navigation />
            <h1 style={{ fontFamily: 'Darker Grotesque, sans-serif' }}>Gallery</h1>

            <h2 style={{ fontFamily: 'Darker Grotesque, sans-serif' }}> Product List</h2>

            <div className="product-list">
                {catalog.map(product => (
                  <div key={product.id} className="product-card">
                    <img src={product.imageUrl} alt={product.name} className="product-image" />
                    <div className="product-info">
                      <h2 className="product-name">{product.name}</h2>
                      <p className="product-price">R{product.price.toFixed(2)}</p>
                      <p className="product-description">{product.description}</p>
                    </div>
                    <Link to="/login" className="nav-link">
                        <button className="button" > Contact Artist </button>
                    </Link>
            </div>
  ))}
 
</div>




               
<button className="button"> <Link to="/">Go Home</Link> </button>
    
    
    
    </div>
        
    );
};

export default TestView;

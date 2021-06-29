import React from 'react';
import './App.css';
import WishMessage from "./components/WishMessage";
import GreetingMessage from "./components/GreetingMessage";
import GreetingMessageTwo from "./components/GreetingMessageTwo";
import ProductItem from "./components/ProductItem";

function App() {
  return (
    <div className="App">
        <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
            <a href="/" className='navbar-brand'>React with Events Binding</a>
        </nav>

        {/*<WishMessage/>*/}
       {/* <GreetingMessage/>*/}
       {/* <GreetingMessageTwo/>*/}
       <ProductItem/>
    </div>
  );
}

export default App;

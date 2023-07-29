// import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList.js";
import React, { useState } from "react";
import Footer from "./components/Footer";
import AddItem from "./components/AddItem";
function App() {
  const productList = [
    {
      price: 999999,
      product: "Iphone25",
      quantity: 0,
    },
    {
      price: 9999,
      product: "redmi A2",
      quantity: 0,
    },
    {
      price: 999,
      product: "buds",
      quantity: 0,
    },
  ];
  const [products, setProducts] = useState(productList);
  const [totalAmount, setTotalAmount] = useState(0);

  const incrementQuantity = (index) => {
    let newProducts = [...products];
    let newTotalAmount = totalAmount;
    newProducts[index].quantity++;
    newTotalAmount += newProducts[index].price;
    setProducts(newProducts);
    setTotalAmount(newTotalAmount);
  };
  const decrementQuantity = (index) => {
    let newProducts = [...products];
    let newTotalAmount = [...products];
    if (newProducts[index].quantity !== 0) {
      newProducts[index].quantity--;
      newTotalAmount -= newProducts[index].price;

      setProducts(newProducts);
      setTotalAmount(newTotalAmount);
    }
  };
  const resetQuantity = () => {
    let newProducts = [...products];
    newProducts.map((products) => {
      products.quantity = 0;
    });
    setProducts(newProducts);
    setTotalAmount(0);
  };
  const removeItems = (index) => {
    let newProducts = [...products];
    let newTotalAmount = totalAmount;
    newTotalAmount -= newProducts[index].quantity * newProducts[index].price;
    newProducts.splice(index, 1);
    setProducts(newProducts);
    setTotalAmount(newTotalAmount);
  };
  const addItems = (name, price) => {
    let newProducts = [...products];
    newProducts.push({
      price:price,
      product:name,
      quantity:0,
    });
    setProducts(newProducts)
  }
  return (
    <>
      <Navbar />
      <main className="container mt-5">
        <AddItem addItems={addItems}/>
        <ProductList
          productList={products}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
          removeItems={removeItems}
        />
      </main>
      <Footer
        totalAmount={totalAmount}
        resetQuantity={resetQuantity}
        removeItems={removeItems}
      />
    </>
  );
}

export default App;

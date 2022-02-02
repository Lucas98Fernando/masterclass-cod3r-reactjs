import React from "react";
import products from "../../data/products";

export default function repetition() {
  // Function to get products array and list data
  function getProductListItem() {
    return products.map((product) => {
      return (
        <li key={product.id}>
          <strong>Nome: </strong>
          {product.name} - <strong>Preço: </strong>
          R$ {product.price.toFixed(2)}
        </li>
      );
    });
  }
  // Return template
  return (
    <div>
      <h2>Produtos:</h2>
      <ul>{getProductListItem()}</ul>
    </div>
  );
}

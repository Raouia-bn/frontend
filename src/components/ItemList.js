import React, { useEffect, useState } from "react";
import axios from "axios";

function ItemList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get("/backend/api/items")
      .then((res) => setItems(res.data))
      .catch((err) => console.error(err));
  }, []);

  const deleteItem = (id) => {
    axios.delete(`/backend/api/items/${id}`)
      .then(() => setItems(items.filter((item) => item._id !== id)))
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <h1>Item User</h1>
      <h2>**************</h2>
      <ul>
        {items.map((item) => (
          <li key={item._id}>
            {item.name} - {item.description} 
            <button onClick={() => deleteItem(item._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemList;

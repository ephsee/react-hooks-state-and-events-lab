import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {

  const [selectedCategory, setSelectedCategory] = useState('items')

  function handleChange(e) {
    console.log(e.target.value)
    setSelectedCategory(e.target.value)
  }
  
  console.log('Sel Cat', selectedCategory)

  const filteredState = items.filter(item => selectedCategory === 'items'? true : item.category === selectedCategory)

  console.log(filteredState)

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredState.map((item) => (
          <Item key={item.id} name={item.name} category={item.category}/>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;

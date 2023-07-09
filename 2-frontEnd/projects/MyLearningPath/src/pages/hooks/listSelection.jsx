import React, {useState} from "react";
import {fruits, vegetables} from "../../data/listdata";


// Esto podria ser otro componente
function ItemList({items, onItemClick}) {
    const handleClick = ({target}) => {
        const item = target.value;
        onItemClick(item);
    }
    
    return (
        <>
        {items.map((item, itemIndex) => <button key={itemIndex} value={item} className="btn" onClick={handleClick}>{item}</button>)}
        </>
    )
}

function ListSelection() {
    const [selectedItems, setSelectedItems] = useState([]);
    const addItem = (item) => {
        setSelectedItems([...selectedItems, item]);
    }
    // aqui usamos index en vez de item porque si tenemos mas de un item eliminariamos todos
    const removeItem = (itemIndex) => {
        setSelectedItems(selectedItems.filter((selectedItem, selectedItemIndex) => selectedItemIndex !== itemIndex));
    }

    return (
        <section className='list-selection'>
            <div className='selected-items'>
                <h3>Selected items</h3>
                <ul>
                    {selectedItems.map((item, itemIndex) => <li key={itemIndex} onClick={() => removeItem(itemIndex)}>{item}</li>)}
                </ul>
            </div>
            <div className='items-to-select'>
                <h3>Choose your items</h3>
                <h4>Fruits</h4>
                <ItemList items={fruits} onItemClick={addItem}/>
                <h4>Vegetables</h4>
                <ItemList items={vegetables} onItemClick={addItem}/>
            </div>
        </section>
    )
}

export default ListSelection;
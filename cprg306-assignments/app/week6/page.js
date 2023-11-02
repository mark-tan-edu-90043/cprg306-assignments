'use client';

import ItemList from "./item-list"
import NewItem from "./new-item"
import ItemData from "./items.json"
import { useState } from "react";

export default function Page() {

    const [items, setItems] = useState(ItemData);

    function handleAddItem(item) {
        setItems([...items, item]) //Put item in items.
    }

    return (
        <div>
            <h1>Shopping List</h1>
            <NewItem onAddItem={handleAddItem}/>
            <ItemList items={items}/>
        </div>
    )
}
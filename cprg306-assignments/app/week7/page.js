'use client';

import ItemList from "./item-list"
import NewItem from "./new-item"
import ItemData from "./items.json"
import mealIdeas from "./meal-ideas";
import { useState } from "react";

export default function Page() {

    const [items, setItems] = useState(ItemData);
    const [selectedItemName, setSelectedItemName] = useState();

    const handleItemSelect = (selectedItem) => {
        const itemClean = selectedItem.name.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|�[�-�]|�[�-�]|[\u2011-\u26FF]|�[�-�])/g, '');
        setSelectedItemName(itemClean);
    }

    function handleAddItem(item) {
        setItems([...items, item]) //Put item in items.
    }

    return (
        <div>
            <h1>Shopping List</h1>
            <NewItem onAddItem={handleAddItem}/>
            <ItemList items={items} onItemSelect={handleItemSelect}/>
            <div>
                <mealIdeas ingredient={selectedItemName} />
            </div>
        </div>
    )
}
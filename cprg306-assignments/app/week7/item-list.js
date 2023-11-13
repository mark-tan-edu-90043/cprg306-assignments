'use client'
import { useState } from "react";
import Item from "./item";

export default function ItemList({ items, onItemSelect }) {

    const [sortBy, setSortBy] = useState("name");

    const sorted = [...items] //Contains the list of items.


    function sortByName() {
        setSortBy("name");
    }
    function sortByCategory() {
        setSortBy("category")
    }


    if(sortBy === "name"){
        sorted.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "category") {
        sorted.sort((a, b) => a.category.localeCompare(b.category));
    }

    return ( //Eh, I'll style it some day.
        <main>
            <div>
                <button onClick={sortByName}>
                    Sort By Name
                </button>
            </div>

            <div>
                <button onClick={sortByCategory}>
                    Sort By Category
                </button>
            </div>

            {sorted.map((item) => (<Item key={item.id} name={item.name} category={item.category} quantity={item.quantity} onSelect={() => onItemSelect(item)} />))}
        </main>
    )

}
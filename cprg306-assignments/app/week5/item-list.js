'use client'
import { useState } from "react";
import Item from "./item";
import Items from "./items.json";

export default function ItemList() {

    const [sortBy, setSortBy] = useState("name");

    const sorted = [Items] //Contains the list of items.

    if(sortBy === "name"){
        sorted.sort((a, b) => a.name.localCompare(b.name));
    } else if (sortBy === "category") {
        sorted.sort((a, b) => a.category.localCompare(b.category));
    }

    return (
        <main>
            <div>
                <button onClick={() => setSortBy("name")}>
                    Sort By Name
                </button>
            </div>

            <div>
                <button onClick={() => setSortBy("name")}>
                    Sort By Category
                </button>
            </div>

            {sorted.map((item) => (<Item key={item.id} name={item.name} category={item.category} quantity={item.quantity} />))}
        </main>
    )

}
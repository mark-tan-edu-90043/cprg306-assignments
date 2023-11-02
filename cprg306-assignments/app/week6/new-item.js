"use client";

import { useState } from "react";

export default function NewItem({onAddItem}){

    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState("");
    const [category, setCategory] = useState("Produce");

    const handleSubmit = (event) =>{
        event.preventDefault();
        const newItem = {name, quantity, category}

        console.log(newItem);

        onAddItem(newItem);

        //Reset form
        setName("");
        setQuantity("");
        setCategory("Produce");
    }

    //Setter methods
    const handleNameChange = (event) => {
        setName(event.target.value);
    }
    const handleQuantityChange = (event) => {
        setQuantity(event.target.value);
    }
    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    }

    return(
        <main>
            <div>
                <div>
                    <h1>Create New Item</h1>
                    <form onSubmit={handleSubmit}>
                        <label className="text-black">
                            <span>Item Name: </span>
                            <input type="text" required onChange={handleNameChange} value={name} placeholder="Item Name" />
                        </label><br />
                        <label className="text-black">
                            <span>QTY:</span>
                            <input type="number" required min="1" max="99" value={quantity} onChange={handleQuantityChange} />
                        </label><br />
                        <label className="text-black">
                            <span>Category:</span>
                            <select value={category} onChange={handleCategoryChange}> 
                                <option value="" disabled>category</option>
                                <option value="Produce">Produce</option>
                                <option value="Dairy">Dairy</option>
                                <option value="Bakery">Bakery</option>
                                <option value="Meat">Meat</option>
                                <option value="Frozen Foods">Frozen Foods</option>
                                <option value="Canned Goods">Canned Goods</option>
                                <option value="Dry Goods">Dry Goods</option>
                                <option value="Beverages">Beverages</option>
                                <option value="Snacks">Snacks</option>
                                <option value="Household">Household</option>
                                <option value="Other">Other</option>
                            </select>
                        </label>
                        <br />
                        <button type="submit">
                            Create Item
                        </button>
                    </form>
                </div>
            </div>
        </main>
    )

}
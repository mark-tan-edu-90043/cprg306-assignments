import ItemList from "./item-list"
import NewItem from "./new-item"

export default function Page() {
    return (
        <div>
            <h1>Shopping List</h1>
            <NewItem />
            <ItemList />
        </div>
    )
}
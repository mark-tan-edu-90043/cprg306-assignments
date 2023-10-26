export default function Item(props) { //Copied from week 3
    return (

        <div className="bg-gradient-to-r from-purple-400 to-black w-full max-w-xs text-justify rounded-md transition duration-500 hover:scale-125 hover:translate-x-12">
        <div className="border-l-4 bg-gradient-to-r from-purple-400 to-black w-full max-w-xs m-4 p-2 text-justify">
            <ul>
                <li>Item: {props.name}</li>
                <li>QTY: {props.quantity}</li>
                <li>Category: {props.category}</li>
            </ul>
        </div>
        </div>
    )
}
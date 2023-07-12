import { useEffect, useState } from "react";
import {useParams} from "react-router-dom"
import ItemList from "./ItemList";
import data from "./json/data.json"
//import NavBar from "./NavBar";


const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    useEffect (() => {
        setItems(data)
    },[])
    return (
        <div style={{marginTop: 150}}>
            <h4 className='text-dark fw-bold p-2  ' style={{marginLeft: 65}}>Productos</h4>
            <div className=" text-center mt-2 ms-3">
                <ItemList items={items}/>
            </div>
        </div>
        
    )
}

export default ItemListContainer;
import "./styles/ItemList.css"
import Item from "./Item"

const ItemList = ({items}) => {
    return(
        <div className="row" style={{width:"100%"}} >
            {items.map(item => (
                <div id="colum"  key={item.idItem} >
                    <Item item={item}/>
                </div>
            ))}

        </div>
    )
}

export default ItemList;
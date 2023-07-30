import "./styles/Item.css"
import { NavLink } from "react-router-dom"
import addcart from "./images/addcart.png"

const Item = ({item}) => {
    return(
        <div id="card" className="card mb-3" >
            <div className="row g-0">
                <div className="col-md-4">
                    <NavLink to={`/`}><img src={item.img} className="img-fluid rounded-start mt-3"  alt={item.nombre}/></NavLink> 
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h6 className="mt-4" style={{fontWeight: "bold"}}>${item.precio}</h6>
                        <NavLink to={`/`} className="text-decoration-none"><h6 style={{color: "#838383"}}>{item.nombre}</h6></NavLink>
                        <button type="button" class="btn position-absolute bottom-0 end-0" style={{backgroundColor:"#ea0000", marginBottom:"8%", marginRight:"6%"}}><img src={addcart} style={{width:"25px"}}   alt={"carrito"}/></button>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Item;

/*<div classNameName="card bg-white mb-4">
            <NavLink to={`/`}><img src={item.img} classNameName="card-img-top"  alt={item.nombre}/></NavLink> 
            <section classNameName="card-body">
            <NavLink to={`/`} classNameName="text-decoration-none text-dark"><h5 classNameName="card-title ">{item.nombre}</h5></NavLink>
                <h6>${item.precio}</h6>
            </section>
        </div>*/
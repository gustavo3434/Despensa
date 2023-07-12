//import { useContext } from 'react';
import cart from './images/cart.svg'
//import { CartContext } from './CartContext';
import {Link, NavLink} from 'react-router-dom'

const CardWidget = () => {
    //const {producInCarrito} = useContext(CartContext)
    
    return (
        <Link to={"/"} className='btn' >
            <img className='' src={cart} alt="LOGO CARRITO"  width={26} />
            <span className=' badge rounded-pill' style={{backgroundColor: 'red'}}>0</span>
        </Link>
    )
}

export default CardWidget;
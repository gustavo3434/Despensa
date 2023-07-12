

const Cart = () => {
    let cart = []
    return(
        <div style={{marginTop:150}}>
            {cart > 0 ? " " : <div className="border border border-secondary-subtle ms-5 me-5"><h5 style={{color:" black"}} className="text-center">El carrito de compras está vacío </h5></div>}
        </div>
    )
}

export default Cart
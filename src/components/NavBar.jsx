import "./NavBar.css"
import logo from "./images/estanciaDcentro.png"
import CardWidget  from "./CardWidget"
import {Link, NavLink} from 'react-router-dom'

const NavBar = () => {
    return (
        <div>
            <nav className="navbar fixed-top border-bottom bg-white">
                <div className="container-fluid ">
                    
                    <div className="navbar-toggler" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                        <div className="btnNav">
                            <label for="btn-menu" className="lbl-menu">
                                <span id="spn1"></span>
                                <span id="spn2"></span>
                                <span id="spn3"></span>
                            </label>
                        </div>
                    </div>
                    <div style={{width:"10%", marginRight:"17%"}} >
                        <Link className="navbar-brand" to={"/"} ><img src={logo} width={100} alt="LOGO" height={60} /> </Link>
                    </div>
                    <form className="d-flex me-4" style={{width:"37%"}} role="search">
                        <input style={{width:"100%"}}  className="form-control form-control-lg me-2 " type="search" placeholder="¿Que estas buscando?" aria-label="Search"/>
                        <button className="btn" style={{backgroundColor: "#ea0000", color: "white"}} type="submit">Buscar</button>
                    </form>
                    <div >
                        <CardWidget/>
                    </div>
                    
                    <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3" >
                                <li className="nav-item dropdown" >
                                    <li className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" >
                                    Almacén
                                    </li>
                                    <ul className="dropdown-menu">
                                        <li ><NavLink className="nav-link active ms-3 " to={"/"} >Ver todo en Almacen</NavLink></li>
                                        <li><NavLink className="nav-link active ms-3 " to={"/"}>Aceites y vinagres</NavLink></li>
                                        <li><NavLink className="nav-link active ms-3" to={"/"}>Pastas secas</NavLink></li>
                                        <li><NavLink className="nav-link active ms-3" to={"/"}>Arroz</NavLink></li>
                                        <li><NavLink className="nav-link active ms-3" to={"/"}>Harinas</NavLink></li>
                                        <li><NavLink className="nav-link active ms-3" to={"/"}>Sal,aderezos y saborizantes</NavLink></li>
                                        
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <li  className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Bebidas
                                    </li>
                                    <ul className="dropdown-menu">
                                        <li><NavLink className="nav-link active ms-3 " to={"/"}>Ver todo en Bebidas</NavLink></li>
                                        <li><NavLink className="nav-link active ms-3 " to={"/"}>Aguas</NavLink></li>
                                        <li><NavLink className="nav-link active ms-3" to={"/"}>Jugos</NavLink></li>
                                        <li><NavLink className="nav-link active ms-3" to={"/"}>Gaseosas</NavLink></li>
                                        <li><NavLink className="nav-link active ms-3" to={"/"}>Bebidas blancas</NavLink></li>
                                        
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <li  className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Lacteos
                                    </li>
                                    <ul className="dropdown-menu">
                                        <li><NavLink className="nav-link active ms-3 " to={"/"}>Ver todo en Lacteos</NavLink></li>
                                        <li><NavLink className="nav-link active ms-3 " to={"/"}>Leches</NavLink></li>
                                        <li><NavLink className="nav-link active ms-3" to={"/"}>Yogures</NavLink></li>
                                        <li><NavLink className="nav-link active ms-3" to={"/"}>Quesos</NavLink></li>
                                        <li><NavLink className="nav-link active ms-3" to={"/"}>Fiambres</NavLink></li>
                                        
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <li  className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Congelados
                                    </li>
                                    <ul className="dropdown-menu">
                                        <li><NavLink className="nav-link active ms-3 " to={"/"}>Ver todo en Congelados</NavLink></li>
                                        <li><NavLink className="nav-link active ms-3 " to={"/"}>Hamburguesas</NavLink></li>
                                        <li><NavLink className="nav-link active ms-3" to={"/"}>Helados y postres</NavLink></li>
                                        
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <li className="nav-link dropdown-toggle " role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Panaderia
                                    </li>
                                    <ul className="dropdown-menu">
                                        <li><NavLink className="nav-link active ms-3 " to={"/"}>Ver todo en Panaderia</NavLink></li>
                                        <li><NavLink className="nav-link active ms-3" to={"/"}>Panificados</NavLink></li>
                                        <li><NavLink className="nav-link active ms-3 " to={"/"}>Pizzas y prepizzas</NavLink></li>
                                        <li><NavLink className="nav-link active ms-3" to={"/"}>Pan rallado y rebozadores</NavLink></li>
                                        
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                
            </nav>
        </div>
    )
} 

export default NavBar;
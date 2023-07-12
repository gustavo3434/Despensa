import insta from './images/instagram.svg'
import face from './images/facebook.svg'


const Footer = () => {
    return (
        <div style={{marginTop: 120, backgroundColor: '#e0dfdf',height:250}}>
            <div className="container text-dark">
                <div className="row">
                    <div className="col mt-3">
                        <h5 className="" style={{color: "red"}}>¡Contactanos!</h5>
                        <ul className="list-inline fs-6">
                            <li className="mt-3">Deán Funes 705 Centro (Córdoba)</li>
                            
                        </ul>
                    </div>
                    <div className="col mt-3">
                    <h5 className="" style={{color: "red"}}>
                        Nuestros Horarios</h5>
                        <ul className="list-inline fs-6">
                            <li className="mt-3">Córdoba Capital</li>
                            <li>Lun a Vier. 9:00 AM - 21:00 PM</li>
                            <li>Sab 08:30 AM - 14:30 PM</li>
                
                        </ul>
                    </div>
                    <div className="col mt-3">
                        <h5 style={{color: "red"}}>
                            Seguinos en las Redes</h5>
                        <a href={"/"}> <img className='ms-4 mt-3' src={insta} width={26} alt="" /></a>
                        <a href={"/"} className='text-decoration-none'> <img className='ms-3 mt-3' src={face} width={26} alt="" /></a>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
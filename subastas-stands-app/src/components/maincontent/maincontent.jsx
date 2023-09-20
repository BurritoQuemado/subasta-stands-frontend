import React, { useState, useEffect} from "react";
import LogoGaleria from "../../assets/images/logo-galeria.png";
import { Link } from "react-router-dom";

function MainContent({logged, user_id}) {

    const [logged_status, setLoggedStatus] = useState(false);
    
    useEffect(() => {
        setLoggedStatus(logged);
    }, [logged_status, logged])

    return (
        <>
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <img
                        className="mx-auto h-72 w-auto"
                        src={ LogoGaleria }
                        alt="logo_empresa"
                    />
            </div>
            {
                !logged_status ?
                    <>
                        <div className="bg-white">
                            <div className="px-6 py-12 sm:px-6 sm:py-32 lg:px-8">
                                <div className="mx-auto max-w-2xl text-center">
                                    <p className="mx-auto mt-2 max-w-xl text-lg text-justify leading-8 text-gray-600">
                                        Te damos la bienvenida a esta galería única en el mundo, inspirada en el reconocimiento a la labor de un grupo de <b>imparables</b> héroes anónimos que son la pieza inicial del proceso de sanación para toda la humanidad.
                                    </p>
                                    <p className="mx-auto mt-6 max-w-xl text-lg text-justify leading-8 text-gray-600">
                                        Esta aplicación te servirá para ser envuelto en una dinámica <b>crypto-artística</b>, por lo que te solicitaremos algunos datos únicamente con el fin lúdico de reconocer tu participación.
                                    </p>
                                    <p className="mx-auto mt-6 max-w-xl text-lg text-justify leading-8 text-gray-600">
                                        Si es la primera vez que ingresas, haz click en el botón <b>registrarse</b>, si ya ingresaste anteriormente, haz click en <b>Iniciar sesión</b>
                                    </p>
                                    <div className="mt-10 flex items-center justify-center gap-x-6">
                                        <Link
                                        to="/registro"
                                        className="rounded-md bg-principal px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-principal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-principal"
                                        >
                                            Registrarse
                                        </Link>
                                        
                                        <Link to="login" className="text-sm font-semibold leading-6 text-gray-900">
                                            Iniciar Sesion<span aria-hidden="true">→</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                    : 
                    <>
                        <div className="bg-white">
                            <div className="px-6 py-4 sm:px-6 sm:py-32 lg:px-8">
                                <div className="mx-auto max-w-2xl text-center">
                                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                                        Esta es tu guía de arte interactivo LICON.
                                    </h2>
                                    <p className="mx-auto mt-6 max-w-xl text-lg leading-6 text-gray-600 text-justify">
                                        <b>Galería</b> es un recorrido por las distintas obras que puedes encontrar en nuestra galería.
                                    </p>
                                    <p className="mx-auto mt-6 max-w-xl text-lg leading-6 text-gray-600 text-justify">
                                        <b>Muro del reconocimiento</b> es un recorrido por las distintas explicaciones de los elementos que llegaron a inspirar estas obras y un reconocimiento a los protagonistas de los avances en la inmunohematología universal y mexicana.
                                    </p>
                                    <p className="mx-auto mt-6 max-w-xl text-lg leading-6 text-gray-600 text-justify">
                                        <b>Cartera Cryptolicoins</b> Es una cartera de monedas digitales que podrá adquirir visitando nuestro stand y usarlas para subastar alguna de nuestras obras.
                                    </p>
                                    <div className="mt-10 grid grid-cols-1 items-center justify-center gap-6">
                                        <Link
                                        to={'/galeria-arte'}
                                        className="rounded-md bg-principal px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-principal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-principal"
                                        >
                                            Galería
                                        </Link>
                                        <Link
                                        to={'/galeria'}
                                        className="rounded-md bg-principal px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-principal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-principal"
                                        >
                                            Muro del reconocimiento
                                        </Link>
                                        <Link
                                        to={'/cartera-desc'}
                                        className="rounded-md bg-principal px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-principal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-principal"
                                        >
                                            Cartera Cryptolicoins
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
            }
        </>
    )

}

export default MainContent;
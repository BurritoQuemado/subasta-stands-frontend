import React, { useState, useEffect} from "react";
import { Link } from "react-router-dom";

function MainContent({logged, user_id}) {

    const [logged_status, setLoggedStatus] = useState(false);
    
    useEffect(() => {
        setLoggedStatus(logged);
    }, [logged_status, logged])

    return (
        <>
            {
                !logged_status ?
                    <>
                        <div className="bg-white">
                            <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
                                <div className="mx-auto max-w-2xl text-center">
                                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                                    Bienvenido a la billetera de polarcoins.
                                    <br />
                                    Empieza a usarla hoy mismo.
                                </h2>
                                <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
                                    Inicie sesion o registrese con los enlaces de aquí.
                                </p>
                                <div className="mt-10 flex items-center justify-center gap-x-6">
                                    <Link
                                    to="/registro"
                                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
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
                            <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
                                <div className="mx-auto max-w-2xl text-center">
                                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                                    Bienvenido a la billetera de polarcoins.
                                </h2>
                                <div className="mt-10 flex items-center justify-center gap-x-6">
                                    <Link
                                    to={'/billetera/'+user_id}
                                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        Ver Mi Billetera
                                    </Link>
                                    <Link
                                        to="https://8th.io/hb8db"
                                        target="_blank"
                                        rel="nonreferrer noreferrer"
                                        className="rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                                        >
                                        Experiencia AR
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
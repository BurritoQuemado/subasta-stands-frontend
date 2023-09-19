import React from "react";
import LogoCrypto from "../../assets/images/logo-crypto.png";
import { Link } from "react-router-dom";

function WalletDesc({user_id}) {

    return (
        <>
            <div className="py-4 sm:mx-auto sm:w-full sm:max-w-md">
                <img
                    className="mx-auto h-16 w-auto"
                    src={ LogoCrypto }
                    alt="logo_empresa"
                />
            </div>
            <div className="bg-white">
                <div className="px-6 py-4 sm:px-6 sm:py-32 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            Bienvenido a tu cartera digital de CryptoLICOINS.
                        </h2>
                        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
                        Aquí podrás consultar la cantidad de monedas digitales que irás acumulando a través de visitas a los diferentes espacios de nuestro stand. Sólo por registrarte ya eres tienes <b>1,500</b> cryptolicoins.
                        </p>
                        <p className="mx-auto mt-6 max-w-xl text-m leading-8 text-gray-600">
                            Con estas monedas podrás acceder a la subasta de arte que llevaremos a cabo <b>el ultimo día del evento</b>.
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <Link
                            to={'/billetera/'+user_id}
                            className="rounded-md bg-principal px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-principal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-principal"
                            >
                                Ver mi cartera
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default WalletDesc;
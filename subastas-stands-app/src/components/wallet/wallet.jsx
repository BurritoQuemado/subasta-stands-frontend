import React from 'react';
import { Link } from 'react-router-dom';

import { 
    Transactions,
    Balance,
    QRScanner
} from "../"

function Wallet({ name, balance, history}){
    return (
        <>
            <div className="bg-white py-10 lg:py-24 sm:py-32">
                <Balance name={name} balance={balance} />
                <div className='mt-4 lg:mt-12'>
                    <div className="text-center">
                        <h2 className="text-3xl font-normal tracking-tight text-gray-900 sm:text-4xl"> Historial de transacciones: </h2>                                      
                    </div>
                    <div className="mx-auto mt-2 lg:mt-0 grid max-w-2xl auto-rows-fr grid-cols-1 gap-0 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-1">
                        <Transactions history_list={history} />
                    </div>
                </div>
                <QRScanner />
                <div className="mt-10 grid grid-cols-1 items-center justify-center gap-6 m-16 text-center">
                    <Link
                        to="https://8th.io/hb8db"
                        target="_blank"
                        rel="nonreferrer noreferrer"
                        className="rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                        >
                        Experiencia AR
                    </Link>
                    <Link
                    to={'/billetera-desc'}
                    className="rounded-md bg-principal px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-principal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-principal"
                    >
                        Galería
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Wallet;
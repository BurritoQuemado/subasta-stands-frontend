import React from 'react';
import { Link } from 'react-router-dom';

import { 
    Transactions,
    Balance,
    QRScanner
} from "../"

function Wallet({ name, balance, history, user_id, valid_codes}){
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
                <QRScanner user_id={user_id} valid_codes={valid_codes} transactions={history}/>
                <div className="mt-10 grid grid-cols-1 items-center justify-center gap-6 m-16 text-center">
                    <Link
                    to={'/galeria'}
                    className="rounded-md bg-principal px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-principal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-principal"
                    >
                        Galería
                    </Link>
                    <Link
                    to={'/muro-del-reconocimiento'}
                    className="rounded-md bg-principal px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-principal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-principal"
                    >
                        Muro del reconocimiento
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Wallet;
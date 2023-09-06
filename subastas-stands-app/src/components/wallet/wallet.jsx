import React from 'react';
import { Link } from 'react-router-dom';

import { 
    Transactions,
    Balance
} from "../"

function Wallet({ name, balance, history}){
    return (
        <>
            <div className="bg-white py-24 sm:py-32">
                    <Balance name={name} balance={balance} /> 
                <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-1">
                    <Transactions history_list={history} />
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Link
                        to="/billetera/1"
                        className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Agregar polarcoins
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
        </>
    )
}

export default Wallet;
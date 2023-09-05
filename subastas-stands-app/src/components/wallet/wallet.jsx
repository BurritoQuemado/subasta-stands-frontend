import React from 'react';

import { 
    Transactions,
    Balance
} from "../"

function Wallet({ name, balance, history}){
    return (
        <>
            <div className="bg-white py-24 sm:py-32">
                    <Balance name={name} balance={balance} /> 
                <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    <Transactions history_list={history} />
                </div>
            </div>
        </>
    )
}

export default Wallet;
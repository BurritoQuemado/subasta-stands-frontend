import React from 'react';

function WalletBalance({ name, balance}) {

    return (
        <>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"> { name } tu balance es: </h2>
                    {
                        balance > 0 ? 
                        <p className="mt-2 text-lg leading-8 text-green-500">
                           { balance} 
                        </p> 
                        :   <p className="mt-2 text-lg leading-8 text-red-600">
                                { balance }
                            </p>
                    }
                    
                </div>
            </div>
        </>
    )
}

export default WalletBalance;
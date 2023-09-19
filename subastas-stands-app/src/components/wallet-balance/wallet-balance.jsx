import React from 'react';

function WalletBalance({ name, balance}) {

    return (
        <>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-4xl lg:text-2xl font-normal tracking-tight text-left text-gray-900 sm:text-4xl"> { name } tienes:</h2>                    
                    <h2 className="text-4xl lg:text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl"> { balance } Cryptolicoins</h2>                    
                </div>
            </div>
        </>
    )
}

export default WalletBalance;
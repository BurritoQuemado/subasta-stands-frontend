import React from 'react';  

function TransactionsHistory ({ history_list }) {
    return (
        <>
            <div className="overflow-hidden rounded-md border border-gray-300 bg-white">
                <ul className="divide-y divide-gray-300">
                    { history_list.length !== 0 ? 
                        (history_list.map((transaction) => (
                        <li key={transaction.id} className="flex justify-center lg:justify-between gap-x-3 py-5 px-10">
                            <div className="flex min-w-0 gap-x-4">
                                <div className="min-w-0 flex-auto justify-center">
                                    <p className="text-sm font-semibold  leading-6 text-gray-900">{transaction.title}</p>
                                    {
                                        parseInt(transaction.amount) > 0 ? 
                                            <p className="md:hidden text-lg leading-6 text-center text-green-500">+{transaction.amount}</p>
                                        :   <p className="md:hidden text-lg leading-6 text-center text-red-600">{transaction.amount}</p>
                                    }
                                </div>
                            </div>
                            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                                {
                                    parseInt(transaction.amount) > 0 ? 
                                        <p className="text-lg leading-6 text-green-500">+{transaction.amount}</p>
                                    :   <p className="text-lg leading-6 text-red-600">{transaction.amount}</p>
                                }
                            </div>
                        </li>
                    ))) :
                        <li className="px-6 py-4">
                            <p className="text-sm font-semibold leading-6 text-gray-900">Sin transacciones registradas.</p>
                        </li>
                    }
                </ul>
            </div>
        </>
    );
}

export default TransactionsHistory;
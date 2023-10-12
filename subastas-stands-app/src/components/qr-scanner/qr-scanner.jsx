import React, {useState} from 'react';
import axios from 'axios';
import { QrReader } from 'react-qr-reader';

function Scanner ({ transactions, valid_codes, user_id }) {
    const delay = 100000;
    const [scannedCode, setscannedCode] = useState({});
    const [scanning, setScanning] = useState(false);
    const [unregistered, setUnregistered] = useState(false);
    const [alreadyScanned, setAlreadyScanned] = useState(false);
    const url = 'https://subastas-stand-licon-a5fc970ae98d.herokuapp.com/registerTransaction';

    const resetScanner = () => {
        setAlreadyScanned(false);
        setScanning(true);
        setUnregistered(false);
        setscannedCode({});
    }

    const cancel = () => {
        setScanning(false);
    }  

    const addBalance = async (code_found) => {
        try {
            return axios.request(url,{
                method: 'post',
                url: url,
                headers: { 
                    'Content-Type': 'application/json',
                    "Access-Control-Allow-Origin": "*"
                },
                data: JSON.stringify({
                    "user_id": ""+user_id,
                    "valid_code_id": code_found.id,
                    "title": code_found.description,
                    "amount": code_found.value
                })
            });
        } catch (err) {
            console.error(err)
        }
    }
    
    const searchCode = async (code) => {
        const valid_code_found = valid_codes.find(valid_code => valid_code.code === code);
        if (!valid_code_found || valid_code_found === undefined) {
            setUnregistered(true);
        } else {
            setscannedCode(code);
            const code_already_registered = transactions.find(transaction => transaction.code === code); 
            if (!code_already_registered) {
                const response = await addBalance(valid_code_found);
                setAlreadyScanned(true);
            } else {
                setAlreadyScanned(true);
            }
        }
    }

    const handleError = (err) => {
        alert('error: '+err.message);
    }

    const handleScan = (data) => {
        if(data != null) {
            setScanning(false);
            searchCode(data.text);
            this.scanner.reactivate()   
        }
    } 
    


    return (
        <>  
            { !scanning ? 
                (
                    <div className="mt-10 flex items-center justify-center py-2 space-x-2">
                        <button 
                            type="button" 
                            onClick={() => resetScanner()}
                            className="flex w-42 items-center justify-center rounded-lg border border-transparent bg-resalto px-8 py-2 text-base font-medium text-white md:py-4 md:px-10 md:text-lg"
                        >
                            Agregar Cryptolicoins
                        </button>
                    </div>
                )
                : (
                    <div className="mt-10 flex items-center justify-center py-2 space-x-2">
                        <button 
                            type="button" 
                            onClick={() => cancel()}
                            className="flex w-42 items-center justify-center rounded-lg border border-transparent bg-amber-500 px-8 py-2 text-base font-medium text-white md:py-4 md:px-10 md:text-lg"
                        >
                            Cancelar
                        </button>
                    </div>
                )
            }
             <div className="px-6 py-4 sm:px-6 sm:py-32 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <p className="mx-auto mt-6 max-w-xl text-lg leading-6 text-gray-600 text-justify">
                        Para agregar más cryptolicoins a tu cuenta, escanea el código QR que te presentarán en cada estación/ponencia.
                    </p>
                </div>
            </div>
           { scanning ? (
                <div className='pt-6 pb-6 pr-4 pl-4'>
                { scanning?
                    <QrReader
                    delay={delay}
                    onError={handleError}
                    onResult={handleScan}
                    constraints={
                        {
                            facingMode: 'environment'
                        }
                    }
                    innerRef={node => { this.scanner = node;}}
                    />
                    : null
                    } 
                {
                    !unregistered ?
                        null
                        :   <div className='justify-center mt-6'>
                        <h1 className='text-center text-red-700'>Codigo QR Invalido</h1>
                    </div>
                } 
                {
                    alreadyScanned ?
                        <div className='justify-center mt-6'>
                            <h2 className='text-center text-bold text-red-500'> Este codigo QR ya ha sido registado </h2>  
                            <h1 className='text-center'>QR Escaneado</h1>
                            <h2 className='text-center'>Recompensa por:  {scannedCode.description}</h2>
                            <h2 className='text-center'>Creditos obtenidos: {scannedCode.value} </h2>
                        </div>
                        : null
                }
                </div>
            ): null}  
        </>
    );

}

export default Scanner;
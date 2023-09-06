import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { QrReader } from 'react-qr-reader';

function Scanner ({ transactions, valid_codes, user_id }) {
    const delay = 100000;
    const [scannedCode, setscannedCode] = useState({});
    const [scanning, setScanning] = useState(true);
    const [unregistered, setUnregistered] = useState(false);
    const [alreadyScanned, setAlreadyScanned] = useState(false);
    const url = 'localhost:3000/registerTransaction';

    const searchCode = (code) => {
        const code_found = valid_codes.find(valid_code => valid_code.code === code);
        if (!code_found) {
            setUnregistered(true);
        } else {
            setscannedCode(code_found);
            const code_already_registered = transactions.find(transaction => transaction.code === code_found); 
            if (!code_already_registered) {
                addBalance(code_found);
            } else {
                setAlreadyScanned(true);
                console.log('Codigo ya registrado');
            }
        }
    }

    const resetScanner = () => {
        setAlreadyScanned(false);
        setScanning(true);
        setUnregistered(false);
        setscannedCode({});
    }

    useEffect(() => {
       
    },[scannedCode, alreadyScanned, scanning, unregistered])
    

    const addBalance = (code_found) => {
        console.log('scanned equipment',code_found.id);

        axios.request(url,{
            method: 'post',
            url: url,
            headers: { 
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*"
            },
            data: JSON.stringify({
                "user_id": ""+user_id,
                "valid_code_id": code_found.id,
                "desciption": code_found.description,
                "value": code_found.value
            })
        })
        .then(response => response)
        .then(res => res.data[0])
        .then(resp => console.log(resp))
        .then(window.location.reload(true))
        .catch(err => console.error(err))

        return false;
    }

    const handleError = (err) => {
        alert('error: '+err.message);
    }

    const handleScan = (data) => {
        if(data != null) {
            setScanning(false);
            searchCode(data.text);
            data = null;
        }
    } 
    

    return (
        <>
            <div className='pt-6 pb-6 pr-4 pl-4 bg-gray-200'>
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
                    />
                    : null
                } 
               {
                unregistered?
                    <div className='justify-center mt-6'>
                        <h1 className='text-center'>Codigo QR Invalido</h1>
                    </div>
                    :   null
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
            <div className="mt-10 flex items-center justify-center py-2 space-x-2">
                <button 
                    type="button" 
                    onClick={() => resetScanner()}
                    className="flex w-42 items-center justify-center rounded-lg border border-transparent bg-amber-400 px-8 py-2 text-base font-medium text-white md:py-4 md:px-10 md:text-lg"
                >
                    Escanear otro QR
                </button>
            </div>
        </>
    );

}

export default Scanner;
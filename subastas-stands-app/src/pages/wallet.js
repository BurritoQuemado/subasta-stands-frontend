import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Wallet } from "../components"

function WalletPage() {

    const StoredUserId = window.localStorage.getItem('user_id')
    const [userName, setUserName] = useState("");
    const [userBalance, setUserBalance] = useState(0);
    const [transactions, setTransactions] = useState([])
    const [valid_codes, setValidCodes] = useState([])


    useEffect(() => {

        const config = {
            method: 'get',
            url: "https://subastas-stand-licon-a5fc970ae98d.herokuapp.com/getTransactions/"+StoredUserId,
            headers: { 
              'Content-Type': 'application/json',
              "Access-Control-Allow-Origin": "*"
            },
        };

        axios.request(config)
        .then(res => {
            setTransactions(res.data.transactions)
            setUserName(res.data.name)
            setUserBalance(parseInt(res.data.balance))
            setValidCodes(res.data.valid_codes)
        })

    },[])


    return (
        <Wallet name={userName} balance={userBalance} history={transactions} user_id={StoredUserId} valid_codes={valid_codes} />
    );
}

export default WalletPage;
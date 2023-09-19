import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Wallet } from "../components"
import dummy from "../dummy.json";

function WalletPage() {
    const { user_id } = useParams();
    const [userName, setUserName] = useState("");
    const [userBalance, setUserBalance] = useState(0);
    const [transactions, setTransactions] = useState([])
    const [valid_codes, setValidCodes] = useState([])
    const URL = "http://localhost:3000/getTransactions/"+user_id
    
    const config = {
        method: 'get',
        url: URL,
        headers: { 
          'Content-Type': 'application/json',
          "Access-Control-Allow-Origin": "*"
        },
    };

    useEffect(() => {

        axios.request(config)
        .then(res => {
            setTransactions(res.data.transactions)
            setUserName(res.data.name)
            setUserBalance(parseInt(res.data.balance))
            setValidCodes(res.data.valid_codes)
        })

    },[])


    return (
        <Wallet name={userName} balance={userBalance} history={transactions} user_id={user_id} valid_codes={valid_codes} />
    );
}

export default WalletPage;
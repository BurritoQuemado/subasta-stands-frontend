import React, { useState, useEffect } from "react";
import axios from "axios";
import { json, useParams } from "react-router-dom";
import { Wallet } from "../components"
import dummy from "../dummy.json";

function WalletPage() {
    const { user_id } = useParams();
    const [userID, setUserId] = useState("");
    const [transactions, setTransactions] = useState({})
    const [valid_codes, setValidCodes] = useState({})
    const URL = "http://localhost:3000/getTransactions"
    
    const config = {
        method: 'get',
        url: URL,
        body: JSON.stringify({
            "user_id": user_id
        }),
        headers: { 
          'Content-Type': 'application/json',
          "Access-Control-Allow-Origin": "*"
        },
    };

    console.log('userid', user_id)
    useEffect(() => {

        axios.request(config)
        .then(data => {
            console.log(data)
        })

    },[])
    
    return (
        <Wallet name={"Ana María García"} balance={100000} history={dummy} />
    );
}

export default WalletPage;
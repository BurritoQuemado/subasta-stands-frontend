import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Wallet } from "../components"
import dummy from "../dummy.json";

function WalletPage() {
    const { user_id } = useParams();
    const [userID, setUserId] = useState("");
    const [transactions, setTransactions] = useState({})
    const [valid_codes, setValidCodes] = useState({})
    const URL = "http://localhost:3000/getTransactions"
    

    useEffect(() => {
        setUserId(user_id);
        console.log("user",userID)
        var CONFIG = {
            method: 'get',
                url: URL,
                data: JSON.stringify({
                    "user_id": userID
                }),
                headers: { 
                  'Content-Type': 'application/json',
                  "Access-Control-Allow-Origin": "*"
                },
        }
        axios.request(CONFIG)
        .then(response => console.log(response))
    }, [])
    
    return (
        <Wallet name={"Ana María García"} balance={100000} history={dummy} />
    );
}

export default WalletPage;
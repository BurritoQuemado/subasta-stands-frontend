import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Wallet } from "../components"
import dummy from "../dummy.json";

function WalletPage() {
    const { user_id } = useParams();
    const [transactions, setTransactions] = useState({})
    const [valid_codes, setValidCodes] = useState({})
    
    return (
        <Wallet name={"Ana María García"} balance={100000} history={dummy} />
    );
}

export default WalletPage;
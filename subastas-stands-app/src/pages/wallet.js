import React from "react";
import { useParams } from "react-router-dom";
import { Wallet } from "../components"

function Home() {
    const { user_id } = useParams();
    return (
        <h1>Aqui va el wallet</h1>
    );
}

export default Home;
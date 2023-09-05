import React from "react";
import { useParams } from "react-router-dom";
import { MainContent } from "../components"

function Home() {
    const { logged } = useParams();
    
    return (
        <MainContent logged={logged}/>
    );
}

export default Home;
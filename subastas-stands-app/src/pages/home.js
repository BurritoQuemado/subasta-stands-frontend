import React from "react";
import { MainContent } from "../components"

function Home({logged_in, user_id}) {
    
    return (
        <MainContent logged={logged_in} user_id={user_id}/>
    );
}

export default Home;
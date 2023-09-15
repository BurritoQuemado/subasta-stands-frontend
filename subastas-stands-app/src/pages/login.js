import React from "react";
import { LoginForm } from "../components";
import Logo from "../assets/images/logo.png";
import { useNavigate } from 'react-router-dom';


function LoginPage(props) {
    const navigate = useNavigate();
    const { setLoggedIn } = props;

    const signin = () => {
        navigate('/');
    } 

    return (
        <>
            <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <img
                    className="mx-auto h-32 w-auto"
                    src={ Logo }
                    alt="logo_empresa"
                />
                <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Ingresa a tu Wallet de Polarcoins</h2>
                </div>

                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <LoginForm setLoggedIn={setLoggedIn} signin={signin}/>
                </div>
                </div>
            </div>
        </>
    );

}

export default LoginPage;
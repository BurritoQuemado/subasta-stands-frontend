import React from "react";
import { RegisterForm } from "../components";
import Logo from "../assets/images/logo.png";
import { useNavigate } from 'react-router-dom';

export default function RegisterPage(){
    const navigate = useNavigate();

    const login = () => {
        navigate('/login');
    } 
    return(
        <>
            <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <img
                    className="mx-auto h-32 w-auto"
                    src={ Logo }
                    alt="logo_empresa"
                />
                    <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-morado_abalat">Obten tus Polarcoins:</h2>
                </div>

                <div className="mt-8 mx-auto w-full max-w-md lg:mx-0 lg:w-screen lg:max-w-full">
                    <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                        <RegisterForm login={login}  />
                    </div>
                </div>
            </div>
        </>
    );
}
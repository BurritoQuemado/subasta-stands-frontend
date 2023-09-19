import React from "react";
import { Link } from "react-router-dom";
import ListItem from "./gallery-list-item";


function GalleyList ({ gallery, title }) {


    return (
        <>
            <div className="px-6 py-4 sm:px-6 sm:py-32 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        { title }
                    </h2>
                    <div className="bg-white">
                        <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                            <div className="grid grid-cols-1 gap-4 grid-flow-row  sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                            {
                                gallery.map(item =>{
                                    return (
                                        <ListItem item={ item } />
                                    )

                                } 
                                )
                            } 
                            </div>
                        </div>
                    </div>
                    <div className="mt-10 grid grid-cols-1 items-center justify-center gap-6">
                        <Link
                            to="https://8th.io/hb8db"
                            target="_blank"
                            rel="nonreferrer noreferrer"
                            className="rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                            >
                            Experiencia AR
                        </Link>
                        <Link
                        to={'/muro-del-reconocimiento'}
                        className="rounded-md bg-principal px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-principal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-principal"
                        >
                            El muro del reconocimiento
                        </Link>
                        <Link
                        to={'/billetera-desc'}
                        className="rounded-md bg-principal px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-principal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-principal"
                        >
                            Cartera Cryptolicoins
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GalleyList;
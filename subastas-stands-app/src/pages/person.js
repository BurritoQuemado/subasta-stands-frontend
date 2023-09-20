import React from "react";
import { useParams, Link } from "react-router-dom";
import { PersonDisplay } from "../components";

function PersonPage() {
    const { person_id } = useParams();

    console.log('personid',person_id);
    return (
        <>
            <PersonDisplay person_id={person_id} />
            <div className="mt-4 mx-4 grid grid-cols-1 items-center  text-center justify-center gap-6">
                <Link
                to={'/galeria'}
                className="rounded-md bg-principal px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-principal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-principal"
                >
                    Muro del reconocimiento
                </Link>
            </div>
        </>
    )
}

export default PersonPage;
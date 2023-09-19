import React from 'react';
import { PeopleList } from '../components';
import people_list from '../people_list';

function PeoplePage(){
    return (
        <>
            <PeopleList title="El Muro del Reconocimiento" gallery={people_list} />
        </>
    )
}

export default PeoplePage;
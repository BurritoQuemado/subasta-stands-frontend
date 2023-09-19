import React from 'react';

import people_list from '../../people_list';

function PersonDisplay ({ person_id }) {
    console.log('person_id2', person_id);
    const active_person = people_list.find(person => person.id === parseInt(person_id));
    console.log('active_person', active_person)
    return (
        <div className='p-4 mt-2'>
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
            <img
                src={active_person.img}
                alt={active_person.title}
                className="h-full w-full object-cover object-center group-hover:opacity-75"
            />
            </div>
            <h2 className="mt-4 text-2xl font-semibold  text-gray-700">{active_person.title}</h2>
            <p className="mt-4 text-normal text-gray-700 text-justify">{active_person.desc}</p>
        </div>
    )
}

export default PersonDisplay;
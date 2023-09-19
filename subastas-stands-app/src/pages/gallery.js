import React from 'react';
import { GalleryList } from '../components';
import people_list from '../people_list';

function GalleryPage(){
    return (
        <>
            <GalleryList title="El muro del reconocimiento" gallery={people_list} />
        </>
    )
}

export default GalleryPage;
import React from 'react';
import { GalleryList } from '../components';
import art_list from '../art_list';

function GalleryPage(){
    return (
        <>
            <GalleryList title="Arte Interactivo" gallery={art_list} />
        </>
    )
}

export default GalleryPage;
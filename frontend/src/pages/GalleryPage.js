import React from 'react';

import ImageGallery from 'react-image-gallery';

const images = [
    {
        original:'images/body-weight-tracking-chart.png',
        thumbnail:'images/body-weight-tracking-chart.png',
        description:'Body weight tracking chart.',
        originalHeight:'450px',
    },
    {
        original:'images/CS271-final-snipet.png',
        thumbnail:'images/CS271-final-snipet.png',
        description:'CS271 final project encryption snipet.',
        originalHeight:'450px',
    },
    {
        original:'images/digestive-system-crossword.png',
        thumbnail:'images/digestive-system-crossword.png',
        description:'A digestive system vocabulary crossword puzzle.',
        originalHeight:'450px',
    },
    {
        original:'images/mexico-tres-mujeres-entrance.jpg',
        thumbnail:'images/mexico-tres-mujeres-entrance.jpg',
        description:'Standing in front of Tres Mujeres cellar entrance.',
        originalHeight:'450px',
    },
    {
        original:'images/oahu-abandoned-ww2-bunker.jpg',
        thumbnail:'images/oahu-abandoned-ww2-bunker.jpg',
        description:'Vandalized and abandoned World War 2 bunker.',
        originalHeight:'450px',
    },
    {
        original:'images/safety-checklist-in-lab.png',
        thumbnail:'images/safety-checklist-in-lab.png',
        description:'Safety checklist assignment by me.',
        originalHeight:'450px',
    },
    {
        original:'images/seattle-port-view.JPG',
        thumbnail:'images/seattle-port-view.JPG',
        description:'View of Seattle from the port.',
        originalHeight:'450px',
    },
    {
        original:'images/sitting-on-mountain-river-view.JPG',
        thumbnail:'images/sitting-on-mountain-river-view.JPG',
        description:'Sitting on top of a mountain with a river view.',
        originalHeight:'450px',
    },
    {
        original:'images/spicy-ahi-plate.jpg',
        thumbnail:'images/spicy-ahi-plate.jpg',
        description:'First spicy ahi dish in Hawaii.',
        originalHeight:'450px',
    },
    {
        original:'images/cape-kiwanda-top-of-dune.jpg',
        thumbnail:'images/cape-kiwanda-top-of-dune.jpg',
        description:'Top of the sand dune in Cape Kiwanda.',
        originalHeight:'450px',
    }
];

function GalleryPage() {
    return (
        <>
            <h2>Gallery</h2>
            <p>Page of some projects and places I have experienced over the last couple years.</p>

            <article class="gallery">
                <ImageGallery items={images} />
            </article>
        </>
    );
}

export default GalleryPage;
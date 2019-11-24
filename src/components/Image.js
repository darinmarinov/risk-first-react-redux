import React from 'react';

const Image = ({ image }) => {

    const addDefaultSrc = (ev) => {
        ev.target.src = 'http://lorempixel.com/1200/480/business/'
    }

    let imageTag;

    if (image) {
        imageTag = <img onError={addDefaultSrc} src={image} alt={image} />;
    } else {
        imageTag =  <img onError={addDefaultSrc} src={'https://via.placeholder.com/1000X200'} alt={image} />;
    }
    return (
        <React.Fragment>
            {imageTag}
        </React.Fragment>
    )
};

export default Image;
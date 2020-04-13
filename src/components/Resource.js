import React from  'react';

const Resource = ({resource}) => {
   
    return (
        <div>
            <h2>{resource.title}</h2>
            <p>{resource.author}</p>
            <p>Published on: {resource.datePublished}</p>
        
            { resource.videoLength ? (<p>Length: {resource.videoLength} minutes</p>) : null }
            <p>Comments: {resource.comments.length} </p>
        </div>
        )
}

export default Resource
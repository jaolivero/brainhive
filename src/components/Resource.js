import React from "react";

const Resource = ({ resource }) => {
  return (
    <div className={"box"}>
      <h2>{resource.title}</h2>
      <div className="content">
        <p>{resource.resourceAuthor}</p>
        <p>{resource.summary}</p>
        <p>Estimated time to complete: {resource.timeToComplete} minutes</p>

        {resource.videoLength ? (
          <p>Length: {resource.videoLength} minutes</p>
        ) : null}
        <p>Comments: {resource.comments.length} </p>
      </div>
      <button>Add Comment</button>
    </div>
  );
};

export default Resource;

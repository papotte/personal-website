import React from "react";

function TimelineItem(props) {
  return (
    <div className="timeline-item is-accent">
      <div className="timeline-marker is-image is-32x32">
        <img src="" alt="" />
      </div>
      <div className="timeline-content">
        <p className="heading is-4">{props.date}</p>
        <h1 className="title is-5">{props.company}</h1>
        <p style={{ maxWidth: "25em" }} className="is-size-6">{props.summary}</p>
      </div>
    </div>
  );
}

export default TimelineItem;

import React, { useState, useRef } from "react";
import { Component } from "./styles";

export function Question(props) {
  const [isExpanded, setIsExpanded] = useState(false);
  const detailsRef = useRef(null);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Component ref={detailsRef} id="details" onClick={toggleExpansion}>
      <summary>
        {props.question}
        <span style={{ display: isExpanded ? 'inline-block' : 'none' }} id='expand' className="material-symbols-outlined">
          expand_more
        </span>
        <span style={{ display: isExpanded ? 'none' : 'inline-block' }} id='chevron' className="material-symbols-outlined">
          chevron_right
        </span>
      </summary>
      <p style={{ display: isExpanded ? 'block' : 'none' }}>
        {props.answer}
      </p>
    </Component>
  )
}

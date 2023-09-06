import React from "react";

export default function TagLabel(props) {
  let {tags , selected}  = props;
  
  return (
    <div className="tag-line-container">
      {tags.map((tag,index) => {
        return (
          <>
            <div>{tag}</div> {index!==tags.length-1 && <span> {">"}</span>}
          </>
        );
      })}
    </div>
  );
}

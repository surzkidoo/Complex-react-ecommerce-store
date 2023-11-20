import React from "react";
import { BiArrowFromRight, BiArrowToRight } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";
export default function TagLabel(props) {
  let {tags , selected}  = props;
  
  return (
    <div className="tag-line-container">
      {tags.map((tag,index) => {
        return (
          <>
            <div key={index}>{tag}</div> {index!==tags.length-1 && <span>  <BsArrowRight/></span>}
          </>
        );
      })}
    </div>
  );
}

import React from "react";

const Error = (props) => {
  return <div className="Econtainer"><div className="ml-2">{props.message}</div>
   <span className="closemsg p-2">x</span>
  </div>;
};

const Success = (props) => {
  return <div className="Scontainer"><div className="ml-2">{props.message}</div>
  <span className="closemsg p-2">x</span></div>;
};
 const Message = (props) => {
  const { status, message } = props;
  return (
    <div className="prompt">
        
      {status==="error" ? (
        <Error message={message} />
      ) : (
        <Success message={message} />
      )}
       
    </div> 

   
  );
};

export default Message
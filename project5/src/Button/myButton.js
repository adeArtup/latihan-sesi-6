import React from "react";

let MyButton = (props) => {

    return (
      
        <button className={props.crB} onClick={props.updateNum}>{props.sign}</button>
    );
  }

export default MyButton;

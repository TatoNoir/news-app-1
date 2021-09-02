import React from "react";

export default function MainContainer(props) {
    return (
        <>
        
        <div className="container mainContainer">
          {props.children}
        </div>
        
        </>
    );

}
import React from "react";

// componenet para controlar  se a aba ficará visível ou não

export default props => {
    if(props.test){
        return props.children
    } else {
        return false
    }
}
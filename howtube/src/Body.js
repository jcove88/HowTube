import React from "react";
import {Home} from "./Home";

export function Body(props){
    switch (props.selectedPage){
        case "saved":
            return <p>hello</p>;
        default:
            return <Home/>;
    }

}
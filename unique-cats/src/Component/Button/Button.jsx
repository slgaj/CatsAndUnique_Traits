import React from 'react';
import './Button.css';

export default function  Button(props){
   
    return(
        <div
            className={props.class} 
            value={props.value} 
            style={{
                backgroundImage: `url(${props.imageName})`,
                minWidth: `${props.size}px`        
            }} 
            onClick={props.onClick}
       />
 
    );
}
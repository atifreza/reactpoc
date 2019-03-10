import React from 'react';
import { Button } from 'reactstrap';
import '../assets/styles/widgets/button/button.css';
 const ButtonWidget =(props)=> {
  
    return (
     
        <Button 
        outline 
        className="btn-widget"
        color={props.color}
        disabled={props.disabled}
        size={props.size || 'lg'}
        onClick={props.buttonAction}
        >
        {props.buttonLabel}
        </Button>
        
    );
  };

export default ButtonWidget;
import React from 'react';

const basicDetails=(props)=>{
    return(
        <React.Fragment>
        <img src={props.url} className="img-thumbnail" alt="Cinque Terre" width="500" height="236"/> 
        <span>ID:{props.id}</span>
        <span className="right">Name:{props.name}</span>
        </React.Fragment>
    );

};

export default basicDetails;
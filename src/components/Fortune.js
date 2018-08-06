import React from 'react';
import axios from 'axios'


export default function Fortune(props) {
    console.log(props.id)
    return (

        <p onClick={() => props.onDelete(props.id)}>
            {
                props.fortune
            }
        </p>
    )

}




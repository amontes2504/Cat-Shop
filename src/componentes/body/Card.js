import React from 'react'
import './card.css'
import TodayIcon from '@mui/icons-material/Today';

export default function Card(props){
    return(
        <div className="card2">
            <img src={props.items.imagen} alt='logo'/>
            <div>
                <h5>{props.items.title }</h5>
                <p>{props.items.description}</p>
                <p className ='precio'>{props.items.precio}</p>
                <button type='button'class='btn btn-outline-primary'>COMPRAR</button>
            </div>
        </div>
    )
}
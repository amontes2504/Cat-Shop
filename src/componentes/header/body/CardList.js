import React from "react"
import data from "./data"
import Cards from "./Card"

function CardList(){
    const cards= data.map(items=>{
        return(
            <Cards key={items.id} items={items}/>

        )
    })
    return(
        <div>
            <div className="divCards">
            {cards}
            </div>
        </div>
    )
}

export default CardList
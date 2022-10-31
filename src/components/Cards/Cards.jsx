import React from 'react'
import { cardsData } from '../../Data/Data'
import Card from '../Card/Card'
import './Cards.css'

const Cards = () => {
  return (
    <div className="Cards">
        {cardsData.map((card,index)=>{
            return <div className="parentContainer">
                <Card title={card.title}
                color={card.color}
                barValue={card.barValue}
                png={card.png}/>
            </div>
        })}
    </div>
  )
}

export default Cards
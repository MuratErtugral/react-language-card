

import { useState } from 'react';
import "./Item.css";

// ()=>setShowLogo(!showLogo)
// this.setShowLogo(true)
const Item = ({card}) => {
    const [showLogo,setShowLogo] = useState(true)

    const change = (()=>{
        return(
            setShowLogo(false),
            setTimeout(
                () => (setShowLogo(true)), 
                5000
              ),
            console.log("murat")
        )
    })
  return (
    <div className='card' onClick={change}>
        {showLogo ? (
        <div>
        <img className='card-logo' src={card.img} alt="" />
        <h3 className='card-title'>{card.name}</h3>
        </div>):(
        <ul className="list">
            {
                card.options.map((element,index)=>{
                    return <li key={index}>{element}</li>
                })
            }

        </ul>
        )}
    </div>
  )
}

export default Item
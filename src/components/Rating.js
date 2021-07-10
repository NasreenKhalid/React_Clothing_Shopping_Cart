import React from 'react'
import {v4 as uuid} from 'uuid'

export const Rating = ({value,text,color}) => {
    return (



<div>
    
 {[1,2,3,4,5].map((rate)=> {
return <span key={uuid()}>
<i style={{color:'#FFA41C'}} className="fas fa-star"></i>
</span>
})}       
           <span>  {text && text}</span>
        </div>
    )
}


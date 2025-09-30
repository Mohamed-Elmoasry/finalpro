import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faStar as starSolid, faStarHalfStroke, } from "@fortawesome/free-solid-svg-icons"
import { faStar as starReguler } from "@fortawesome/free-regular-svg-icons"
export default function Rating({rating}) {
    
function getStar(position){
    if(rating >= position){
        return starSolid;
    }else if(rating >= position - 0.5){
return faStarHalfStroke
    }
  else{
    return starReguler
  }
}
    return <>
    <div className="stars text-yellow-400">
{[1,2,3,4,5].map((position)=>{
 return   <FontAwesomeIcon icon={getStar(position)} key={position}/>
})}
</div>
    </>
}
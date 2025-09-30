import { useEffect, useState } from "react"

export function useOfflineScreen(){

const [online,setOnline] = useState(true)

useEffect(()=>{
  function handleOnline(){
setOnline(true)
}
function handleOffline(){
  setOnline(false)
}

window.addEventListener("online",handleOnline)
window.addEventListener("offline",handleOffline)
return function (){
  window.removeEventListener("online",handleOnline)
window.removeEventListener("offline",handleOffline)
}
},[])


return online ;
}
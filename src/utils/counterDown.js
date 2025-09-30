export function calcTimeLeft(targetDate){
if(!targetDate) targetDate = new Date().setHours(23,59,59,999)

const timeLeft = targetDate - new Date().getTime()

const oneHour = 60 * 60 * 1000 
const oneMin =  60 * 1000 
const oneSec =  1000 

if(timeLeft > 0){
    const hour = Math.trunc(timeLeft / oneHour)
    const minute = Math.trunc((timeLeft % oneHour) / oneMin )
    const second = Math.trunc(((timeLeft % oneHour) % oneMin) / oneSec )
        
    return {hour,minute,second}
}
else
    return {hour:0,minute:0,second:0}

}
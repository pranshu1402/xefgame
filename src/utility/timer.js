
const timer = (date) => {
   
    let distance = new Date(date) - new Date();
   
    let hour=getHour(distance);
   
    let remainingMins=distance-hour*60*60*1000;
   
    let min=getMin(remainingMins);
   
    let seconds=Math.floor((remainingMins-min*60*1000)/1000);
   
    return `${hour}:${min}:${seconds}`;
}
const getHour=(distance)=>Math.floor(distance/(1000*60*60));

const getMin=(remainingMins)=>Math.floor(remainingMins/(1000*60));

export default timer;
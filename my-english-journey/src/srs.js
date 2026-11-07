export const INTERVALS=[1,3,7,14,30]
export const DAY=864e5
export function schedule(item,ok){const box=ok?Math.min((item.box||0)+1,INTERVALS.length-1):0
return{...item,box,due:Date.now()+(ok?INTERVALS[box]:0.25)*DAY,state:box>=4?'maitrise':box>=1?'en-cours':'a-apprendre'}}

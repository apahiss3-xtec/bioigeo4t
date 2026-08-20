const sas=["sa1","sa2","sa3","sa4","sa5","sa6","sa7"];
let tot=0;
for(const sa of sas){
  const m=await import(`./${sa}/${sa}-sessions.js`);
  const arr=Object.values(m).find(v=>Array.isArray(v));
  for(const s of arr){
    tot++;
    const steps=s.fitxaGuide?.steps||[];
    const ex=steps.filter(x=>x.phase==="explore").reduce((a,b)=>a+parseInt(b.time),0);
    const ed=parseInt(s.exploreDuration);
    const sum=steps.reduce((a,b)=>a+parseInt(b.time||0),0);
    const flag = (ed!==ex?` ED${ed}≠expl${ex}`:"") + (sum>110?`  TOTAL ${sum} >110`:"");
    console.log(`${sa}/${s.id}\t${sum} min\tapartats ${steps.length}\t${flag}`);
  }
}
console.log("sessions:",tot);

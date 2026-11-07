const S=['lessons','words','expressions','attempts','sessions','settings'];let p
const open=()=>p||(p=new Promise((res,rej)=>{const r=indexedDB.open('my-english-journey',1)
r.onupgradeneeded=()=>{S.forEach(s=>r.result.createObjectStore(s,{keyPath:'id'}))}
r.onsuccess=()=>res(r.result);r.onerror=()=>rej(r.error)}))
const tx=async(s,m,f)=>{const d=await open();return new Promise((res,rej)=>{const t=d.transaction(s,m);const q=f(t.objectStore(s));t.oncomplete=()=>res(q&&q.result);t.onerror=()=>rej(t.error)})}
export const all=s=>tx(s,'readonly',o=>o.getAll())
export const get=(s,id)=>tx(s,'readonly',o=>o.get(id))
export const put=(s,v)=>tx(s,'readwrite',o=>o.put(v))
export const del=(s,id)=>tx(s,'readwrite',o=>o.delete(id))
export const clear=s=>tx(s,'readwrite',o=>o.clear())
export const exportAll=async()=>{const o={app:'my-english-journey',version:1,date:new Date().toISOString()};for(const s of S)o[s]=await all(s);return o}
export const importAll=async j=>{if(j.app!=='my-english-journey')throw new Error('Fichier de sauvegarde invalide');for(const s of S){await clear(s);for(const v of j[s]||[])await put(s,v)}}

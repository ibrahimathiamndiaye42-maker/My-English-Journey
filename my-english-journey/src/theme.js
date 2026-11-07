export const ACC={bleu:'#12356b',vert:'#177a52',violet:'#5b2f9e',rouge:'#a8262e',orange:'#b85a0a'}
export function applyTheme(t){const d=document.documentElement,c=ACC[t.accent]||ACC.bleu
d.dataset.theme=t.theme||'blanc';d.style.setProperty('--b',c)
const m=document.querySelector('meta[name=theme-color]');if(m)m.setAttribute('content',c)}

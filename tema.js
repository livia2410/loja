const FONTES={
 elegante:{serif:"'Fraunces',Georgia,serif",sans:"'DM Sans',system-ui,sans-serif",url:'Fraunces:opsz,wght@9..144,500;9..144,700&family=DM+Sans:wght@400;500;700'},
 classica:{serif:"'Cormorant Garamond',Georgia,serif",sans:"'Jost',system-ui,sans-serif",url:'Cormorant+Garamond:wght@500;700&family=Jost:wght@400;500;700'},
 moderna:{serif:"'Poppins',system-ui,sans-serif",sans:"'Poppins',system-ui,sans-serif",url:'Poppins:wght@400;500;700'},
 divertida:{serif:"'Fredoka',system-ui,sans-serif",sans:"'Nunito',system-ui,sans-serif",url:'Fredoka:wght@500;700&family=Nunito:wght@400;600;700'}
};
function lum(h){const n=parseInt(h.slice(1),16),c=[n>>16&255,n>>8&255,n&255].map(v=>{v/=255;return v<=.03928?v/12.92:Math.pow((v+.055)/1.055,2.4)});return .2126*c[0]+.7152*c[1]+.0722*c[2]}
function applyTema(T){
  T=T||{};const r=document.documentElement.style;
  const cor=T.cor||'#d81b60',fundo=T.fundo||'#fff8fa',texto=T.texto||'#3b1f2b';
  r.setProperty('--accent',cor);r.setProperty('--bg',fundo);r.setProperty('--ink',texto);
  r.setProperty('--card',lum(fundo)>.5?'color-mix(in srgb,'+fundo+' 35%,#fff)':'color-mix(in srgb,'+fundo+' 90%,#fff)');
  r.setProperty('--rose','color-mix(in srgb,'+cor+' 14%,'+fundo+')');
  r.setProperty('--line','color-mix(in srgb,'+texto+' 14%,'+fundo+')');
  r.setProperty('--muted','color-mix(in srgb,'+texto+' 60%,'+fundo+')');
  r.setProperty('--onacc',lum(cor)>.5?'#1a1a1a':'#fff');
  const f=FONTES[T.fonte]||FONTES.elegante;r.setProperty('--serif',f.serif);r.setProperty('--sans',f.sans);
  let l=document.getElementById('fnt');
  if(!l){l=document.createElement('link');l.id='fnt';l.rel='stylesheet';document.head.appendChild(l)}
  l.href='https://fonts.googleapis.com/css2?family='+f.url+'&display=swap';
}

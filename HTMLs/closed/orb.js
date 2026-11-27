/* the orb's glass: draws the lens map for #orb-glass. Inside the 150px ball
   every point samples the layers a little further in, more so toward the
   rim (a lens 28.6px deep — SIRI 3's 75 at this size — refraction .62).
   R and G carry the x/y shift around 0.5; alpha is the ball itself. */
(()=>{
  const R=75, DEPTH=28.6, MAX=.62*DEPTH*.7, SCALE=2*MAX*1.25;
  const N=300, c=document.createElement('canvas');c.width=c.height=N;
  const g=c.getContext('2d'), img=g.createImageData(N,N), k=2*R/N;
  for(let j=0;j<N;j++)for(let i=0;i<N;i++){
    const x=(i+.5)*k-R, y=(j+.5)*k-R, r=Math.hypot(x,y), o=(j*N+i)*4;
    const a=Math.max(0,Math.min(1,(R-r)/k+.5));
    if(!a)continue;
    const t=Math.max(0,R-r), f=t<DEPTH?MAX*Math.pow(1-t/DEPTH,2):0;
    const nx=r?x/r:0, ny=r?y/r:0;
    img.data[o]=Math.round(255*(.5-nx*f/SCALE));
    img.data[o+1]=Math.round(255*(.5-ny*f/SCALE));
    img.data[o+2]=128;img.data[o+3]=Math.round(255*a);
  }
  g.putImageData(img,0,0);
  const url=c.toDataURL();
  document.querySelectorAll('#orb-glass feImage').forEach(el=>{el.setAttribute('href',url);el.setAttributeNS('http://www.w3.org/1999/xlink','href',url);});
  document.querySelectorAll('#orb-glass .orb-disp').forEach(el=>el.setAttribute('scale',(SCALE*+el.dataset.k).toFixed(2)));
})();

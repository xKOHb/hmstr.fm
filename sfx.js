/* HMSTR.FM — синтезированные звуки (без файлов). window.SFX.jingle/applause/horn */
(function(){let A=null;
const ac=()=>{try{A=A||new(window.AudioContext||window.webkitAudioContext)();if(A.state==="suspended")A.resume()}catch(e){}return A};
function tone(f,t,d,ty,g,f2){const a=ac(),T=a.currentTime+t,o=a.createOscillator(),v=a.createGain();o.type=ty;o.frequency.setValueAtTime(f,T);if(f2)o.frequency.exponentialRampToValueAtTime(f2,T+d);
  v.gain.setValueAtTime(0,T);v.gain.linearRampToValueAtTime(g,T+.02);v.gain.setValueAtTime(g,T+d*.7);v.gain.exponentialRampToValueAtTime(.0001,T+d);o.connect(v);v.connect(a.destination);o.start(T);o.stop(T+d+.05)}
function noise(t,d,g,fq){const a=ac(),T=a.currentTime+t,n=Math.floor(a.sampleRate*d),b=a.createBuffer(1,n,a.sampleRate),x=b.getChannelData(0);for(let i=0;i<n;i++)x[i]=Math.random()*2-1;
  const s=a.createBufferSource(),f=a.createBiquadFilter(),v=a.createGain();s.buffer=b;f.type="bandpass";f.frequency.value=fq;v.gain.setValueAtTime(g,T);v.gain.exponentialRampToValueAtTime(.0001,T+d);s.connect(f);f.connect(v);v.connect(a.destination);s.start(T)}
window.SFX={
  jingle(){[523,659,784,1047].forEach((f,i)=>tone(f,i*.09,.28,"triangle",.14))},
  applause(){for(let i=0;i<70;i++)noise(i*.04+Math.random()*.03,.14,.3,1200+Math.random()*3500)},
  horn(){[[0,.28],[.34,.28],[.68,1]].forEach(([t,d])=>[466,554,698,932].forEach(f=>tone(f,t,d,"sawtooth",.07,f*.96)))}
};})();

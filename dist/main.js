(()=>{"use strict";const a=document.querySelector("img");!async function(){console.log("linked")}(),async function(t){let o=52.41368,e=-1.503834,c="",i="",n=0,s=0,r="";try{const a=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${o}&lon=${e}&appid=7ac5deb61b3a4bf48a75d86f3f69909b`,{mode:"cors"}),t=await a.json();console.log(t),c=t.name?t.name:`${o} Lat ${e} Lon`,i=`${t.weather[0].main} - ${t.weather[0].description}`,r=t.weather[0].main;try{s=t.main.temp-273.15,n=1.8*(t.main.temp-273)+32}catch(a){console.log(a)}console.log(`${c}: ${i} (${s.toFixed(1)}C / ${n.toFixed(1)}F)`)}catch(a){console.log("💥 ERROR",a)}!async function(t){try{const o=await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=cMKYPrx6cw6fB9UYB4vjPH4mCT5AgXFo&s=${t.toLowerCase()}`,{mode:"cors"});let e=(await o.json()).data.images.original.url;a.src=e}catch(t){a.src="https://media4.giphy.com/media/xT9IgIc0lryrxvqVGM/giphy.gif?cid=f6fa26a6azn49z0iy7d5pd2wf84hgi348pn9wck0zwbcg6n9&rid=giphy.gif&ct=g",console.log(t)}}(r)}()})();